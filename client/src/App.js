import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { theme, GlobalStyle } from "./theme/GlobalStyle";

import Navbar from "./components/Header/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio/Resume";
import Contact from "./components/Contact/Contact";
import Playground from "./components/Playground/Playground";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <>
        <GlobalStyle />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/portfolio" exact element={<Portfolio />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/playground" exact element={<Playground />} />
            <Route element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
