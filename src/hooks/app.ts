import { createContext, useContext } from "react";

export type AppContextData = {
  isOpenedMenu: boolean;
  isMobile: boolean;
  windowWidth: number;
  handleOpenMenu(): void;
};

const AppContext = createContext<AppContextData>({} as AppContextData);

export function useApp(): AppContextData {
  const context = useContext(AppContext);
  return context;
}

export default AppContext;
