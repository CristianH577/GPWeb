import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NextUIProvider } from "@nextui-org/react";

import Layout from "./views/layout/layout";
import Home from "./views/home/home";
import NotFound from "./views/notfound/notfound";
import Contact from "./views/contact/contact";
import Empresa from "./views/nosotros/empresa";
import Servicios from "./views/nosotros/servicios";
import Ubicacion from "./views/sucursales/ubicacion";
import Locales from "./views/sucursales/locales";
import RRHH from "./views/nosotros/rrhh";
import Ofertas from "./views/sucursales/ofertas";


function App() {
  return (
    <NextUIProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/inicio" element={<Home />} />

            <Route path="/contacto" element={<Contact />} />
            <Route path="/empresa" element={<Empresa />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/ubicacion" element={<Ubicacion />} />
            <Route path="/locales" element={<Locales />} />
            <Route path="/rrhh" element={<RRHH />} />
            <Route path="/ofertas" element={<Ofertas />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </NextUIProvider>
  );
}

export default App;
