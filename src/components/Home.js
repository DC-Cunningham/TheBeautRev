import React from "react";
import styled from "styled-components";

import backgroundImage from "../assets/images/BlueBinary.jpg";
import Logo from "../assets/images/TBR_WebHeader_880x218_Dual.png";

const Hero = styled.main`
  height: calc(100vh);
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
  }
`;

function Home(props) {
  return (
    <Hero>
      <Overlay>
        <div className="content">
          <img src={Logo} alt="Logo" />
        </div>
      </Overlay>
    </Hero>
  );
}

export default Home;
