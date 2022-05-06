import React, { useEffect, useState } from "react";
import Index from "pages";
import { mobileCheck } from "helpers/MobileCheck";
import AppContext, { AppContextData } from "hooks/app";

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(mobileCheck());
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpenedMenu, setIsOpenedMenu] = useState(
    !mobileCheck() && windowWidth > 1280
  );

  const contextValue: AppContextData = {
    isMobile,
    windowWidth,
    isOpenedMenu,
    handleOpenMenu: handleOpenMenu,
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  function handleResize() {
    setIsMobile(mobileCheck());
    setWindowWidth(window.innerWidth);
  }

  function handleOpenMenu() {
    setIsOpenedMenu(!isOpenedMenu);
  }

  return (
    <AppContext.Provider value={contextValue}>
      <Index />
    </AppContext.Provider>
  );
};

export default App;

