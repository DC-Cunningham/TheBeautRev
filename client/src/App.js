import React from "react";
import { ThemeProvider } from "styled-components";
import { HashRouter, Switch, Route } from "react-router-dom";

import { theme, GlobalStyle } from "./theme/GlobalStyle";

import Navbar from "./components/Header/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio/Resume";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <>
        <GlobalStyle />
        <HashRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/contact" exact component={Contact} />
            {/* <Route component={404} /> */}
          </Switch>
          <Footer />
        </HashRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
