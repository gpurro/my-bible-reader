import { createContext, useContext, useState } from "react";
import { Bible } from "../features/bible/interfaces/bible";
import { Breadcrumb } from "../interfaces/breadcrumb";

interface AppContextType {
  selectedBible: Bible | null;
  breadcrumbs: Breadcrumb[];
  // actions
  setSelectedBible: (bible: Bible) => void;
  setBreadcrumbs: (breadcrumbs: Breadcrumb[]) => void;
}

export const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({ children }: React.PropsWithChildren) => {
  const [appContext, setAppContext] = useState<AppContextType>({
    selectedBible: null,
    breadcrumbs: [],
    // actions
    setSelectedBible: (bible: Bible) => {
      setAppContext((prev) => {
        return { ...prev, selectedBible: bible };
      });
    },
    setBreadcrumbs(breadcrumbs) {
      setAppContext((prev) => {
        return { ...prev, breadcrumbs };
      });
    },
  });

  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
