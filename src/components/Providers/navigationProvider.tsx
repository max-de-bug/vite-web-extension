import { createContext, ReactNode, useContext, useState } from "react";

type NavigationView = "home" | "folder";

type NavigationContextType = {
  currentView: NavigationView;
  navigateTo: (view: "home" | "folder") => void;
};

const NavigationContext = createContext<NavigationContextType>({
  currentView: "home",
  navigateTo: () => {},
});

interface NavigationProviderProps {
  children: ReactNode;
}

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const [currentView, setCurrentView] = useState<NavigationView>("home");

  const navigateTo = (view: NavigationView) => {
    setCurrentView(view);
  };

  return (
    <NavigationContext.Provider value={{ currentView, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  return useContext(NavigationContext);
};
