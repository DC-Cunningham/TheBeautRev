import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import LibreBaskervilleItalic from "./assets/fonts/librebaskerville-italic-webfont.woff";
import LibreBaskervilleRegular from "./assets/fonts/librebaskerville-regular-webfont.woff";
import OpenSansBold from "./assets/fonts/OpenSans-Bold-webfont.woff";
import OpenSansRegular from "./assets/fonts/OpenSans-Regular-webfont.woff";
import FontAwesome from "./assets/fonts/fontawesome-webfont.woff";

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
  @font-face {
        font-family: 'librebaskerville-italic';
        src: url(${LibreBaskervilleItalic}) format('woff');
        font-weight: 400;
        font-style: italic;
    }
    @font-face {
        font-family: 'librebaskerville-regular';
        src: url(${LibreBaskervilleRegular}) format('woff');
        font-weight: 400;
        font-style: regular;
    }
    @font-face {
        font-family: 'opensans-bold';
        src: url(${OpenSansBold}) format('woff');
        font-weight: 400;
        font-style: bold;
    }
    @font-face {
        font-family: 'opensans-regular';
        src: url(${OpenSansRegular}) format('woff');
        font-weight: 400;
        font-style: regular;
    }
    @font-face {
        font-family: 'fontawesome';
        src: url(${FontAwesome}) format('woff');
        font-weight: 400;
        font-style: regular;
    }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0
  }

  p {
    font-family: "opensans-regular",sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 30px;
    color: #838c95;
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
