import React from 'react'
import styled from "styled-components";

import backgroundImage from "../../assets/images/BlueBinary.jpg";
import Vanta from './Vanta/Vanta';

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
    display: grid;
    place-items: center;

    & > img {
      width: 80%;
      max-width: 880px;
    }
  }
`;

const Header = styled.div`
width: 100px;

`

function Playground() {

  return (
    <Hero>
      <Overlay>
        <Vanta/>
      </Overlay>
    </Hero>
  );
}

export default Playground;

