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
      className={'flex flex-col min-h-screen text-foreground bg-background' + (darkMode.value ? ' dark' : '')}
      style={{
        overflowX: 'hidden',
      }}
    >
      {/* <div className='bg-[#66AAF9] dark:bg-[#004493] flex justify-center items-center font-bold text-sm h-[1.5rem]'>Anuncio o notificacion.</div> */}

      <Menu />

      <Outlet context={{ dark: darkMode.value }} />

      <Footer />

    </div>
  );
}

export default Layout;
