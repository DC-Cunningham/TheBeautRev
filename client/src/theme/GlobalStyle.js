import { createGlobalStyle } from "../../node_modules/styled-components/dist/styled-components.cjs";

import LibreBaskervilleItalic from "../assets/fonts/librebaskerville-italic-webfont.woff";
import LibreBaskervilleRegular from "../assets/fonts/librebaskerville-regular-webfont.woff";
import OpenSansBold from "../assets/fonts/OpenSans-Bold-webfont.woff";
import OpenSansRegular from "../assets/fonts/OpenSans-Regular-webfont.woff";
import OpenSansLight from "../assets/fonts/OpenSans-Light-webfont.woff";
import FontAwesome from "../assets/fonts/fontawesome-webfont.woff";

export const theme = {
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

export const GlobalStyle = createGlobalStyle`
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
          font-family: 'opensans-light';
          src: url(${OpenSansLight}) format('woff');
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
      font-size: 18px;
      line-height: 40px;
      font-weight: 400;
      color: #838c95;
    }

    .row {
      display: flex;
    }

    .header-column {
      flex: 1;
      padding: 10px 30px 20px 20px;
    }

    .main-column {
        flex:5;
    }

    .header {
      font: 18px/24px "opensans-bold", sans-serif;
      text-transform: uppercase;
      letter-spacing: 1px;
      border-bottom: 3px solid #0762f9;
      border-bottom-width: 3px;
      border-bottom-style: solid;
      border-bottom-color: rgb(7, 98, 249);
      padding-bottom: 6px;
    }

    .sub-header {
      font-family: "opensans-bold", sans-serif;
      font-size: 25px;
      line-height: 25px;
      color: #313131;
      margin: 16px auto 20px;
    }

    .caption {
      font-family: "librebaskerville-italic",serif;
      font-size: 20px;
      line-height: 24px;
      color: #6e7881;
      margin-bottom: 18px;
      margin-top: 9px;
    }

    .main-content {
      width: 100%;
    }

    @media screen and (max-width: 1100px) {
      .row {
          flex-direction: column;
      }
      .header-column {
      display: block;
      }
      .main-column {
      display: block;
      padding: 10px 50px;
      }
          p {
      font-family: "opensans-regular",sans-serif;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      color: #838c95;
    }
    }


  `;
