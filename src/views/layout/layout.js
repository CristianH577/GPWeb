// eslint-disable-next-line
import React, { useContext } from 'react';
import { Outlet } from "react-router-dom";
import Menu from './components/menu.js';
import Footer from './components/footer';
import useDarkMode from "use-dark-mode";

function Layout() {
  const darkMode = useDarkMode(false)

  return (
    <div
      className={'flex flex-col min-h-screen text-foreground bg-background'+(darkMode.value ? ' dark' : '')}
      style={{
        overflowX: 'hidden',
      }}
    >
      
      <Menu />

      <Outlet />

      <Footer />

    </div>
  );
}

export default Layout;
