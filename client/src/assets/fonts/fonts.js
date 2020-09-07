import { createGlobalStyle } from "styled-components";

import LibreBaskervilleItalic from "./librebaskerville-italic-webfont.woff";
import OpenSansBold from "./OpenSans-Bold-webfont.woff";

export default createGlobalStyle`
    @font-face {
        font-family: 'Libre Baskerville Italic';
        src: local('Font Name'), local('FontName'),
        url(${LibreBaskervilleItalic}) format('woff');
        font-weight: 400;
        font-style: italic;
    }
    @font-face {
        font-family: 'Libre Baskerville Italic';
        src: local('Font Name'), local('FontName'),
        url(${OpenSansBold}) format('woff');
        font-weight: 400;
        font-style: bold;

    }
`;
