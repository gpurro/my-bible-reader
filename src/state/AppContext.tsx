import { createContext, useContext, useState } from "react";
import { Bible } from "../features/bible/interfaces/bible";

interface AppContextType {
  selectedBible: Bible | null;
  setSelectedBible: (bible: Bible) => void;
}

export const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({ children }: React.PropsWithChildren) => {
  const [appContext, setAppContext] = useState<AppContextType>({
    selectedBible: null,
    setSelectedBible: (bible: Bible) => {
      setAppContext((prev) => {
        return { ...prev, selectedBible: bible };
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
