import { createContext, useContext, useState } from "react";

interface AppContextType {
  selectedBible: string | null;
  setSelectedBible: (bible: string) => void;
}

export const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({ children }: React.PropsWithChildren) => {
  const [appContext, setAppContext] = useState<AppContextType>({
    selectedBible: null,
    setSelectedBible: (bible: string) => {
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
