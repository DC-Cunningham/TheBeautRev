import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const theme = {
  primary: {
    light: "#e2f1f8",
    normal: "#b0bec5",
    dark: "#808e95",
  },
  secondary: {
    light: "#d1d9ff",
    normal: "#9fa8da",
    dark: "#6f79a8",
  },
  text: {
    black: "#000000",
  },
};

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0
  }
`;

function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/portfolio" exact component={Resume} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
