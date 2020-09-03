import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { theme, GlobalStyle } from "./theme/GlobalStyle";

import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
