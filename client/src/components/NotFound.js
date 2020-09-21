import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import backgroundImage from "../assets/images/BlueBinary.jpg";
import Logo from "../assets/images/TBR_WebHeader_880x218_Dual.png";

const Hero = styled.main`
  height: 100vh;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;

  & > div.content {
    flex: 1;
    min-width: 600px;
    max-width: 880px;
    max-height: 200px;
    background-color: rgba(256, 256, 256, 0.1);
    border-radius: 15px;
    margin-top: 20vh;
    text-align: center;
    margin: auto;
  }

  h2 {
    text-decoration: none;
    font-family: "opensans-bold", sans-serif;
    font-size: 18px;
    line-height: 24px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;
const Content = styled.div`
  flex: 1;
  min-width: 600px;
  max-width: 880px;
  max-height: 200px;
  background-color: rgba(256, 256, 256, 0.2);
  border-radius: 15px;
  margin-top: 20vh;
  text-align: center;
  margin: auto;

  & h2 {
    font-family: "opensans-bold", sans-serif;
    font-size: 20px;
    line-height: 24px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;
    display: block;
    margin-top: 50px;
  }
`;

function NotFound() {
  return (
    <Hero>
      <Overlay>
        <Content>
          <h2>Sorry the requested url is not available.</h2>
          <Link to="/">
            <h2>Return to the homepage</h2>
          </Link>
        </Content>
      </Overlay>
    </Hero>
  );
}

export default NotFound;
