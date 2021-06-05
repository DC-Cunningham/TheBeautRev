import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/playground" exact component={Playground} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
