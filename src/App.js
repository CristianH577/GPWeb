import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NextUIProvider } from "@nextui-org/react";

import Layout from "./views/layout/layout";
import Home from "./views/home/home";
import NotFound from "./views/notfound/notfound";


function App() {
  return (
    <NextUIProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/inicio" element={<Home />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </NextUIProvider>
  );
}

export default App;
