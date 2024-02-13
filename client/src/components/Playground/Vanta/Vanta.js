import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import BIRDS from "vanta/dist/vanta.birds.min";
import HALO from "vanta/dist/vanta.halo.min";
// import TRUNK from "vanta/dist/vanta.trunk.min";
import NET from "vanta/dist/vanta.net.min";
import WAVES from "vanta/dist/vanta.waves.min";
import { ReactFlashlight } from "react-flashlight";

import images from "../../../assets/images/playground/playground";

const StyledVanta = styled.div`
  position: absolute;
  height: 80vh;
  width: 100vw;
  margin: auto;
  top: 0;
  bottom: 0;
  -moz-box-shadow: inset 0 0 90px #000000;
  -webkit-box-shadow: inset 0 0 90px #000000;
  box-shadow: inset 0 0 90px #000000;
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

const MainFrame = styled.div`
  position: absolute;
  height: 80vh;
  width: 100vw;
  margin: auto;
  top: 0;
  bottom: 0;
`;

const ButtonContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding-top: 10vh;
  padding-bottom: 10vh;
  padding-right: 30px;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const HaloButton = styled.button`
  width: 80px;
  height: 80px;
  border: none;
  background-color: transparent;
  background-image: url(${images.Halo});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 999;
`;

const TriangleButton = styled.button`
  width: 80px;
  height: 80px;
  border: none;
  background-color: transparent;
  background-image: url(${images.Halo});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 999;
`;

const MeshButton = styled.button`
  width: 80px;
  height: 80px;
  border: none;
  background-color: transparent;
  background-image: url(${images.Halo});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 999;
`;

const NetButton = styled.button`
  width: 80px;
  height: 80px;
  border: none;
  background-color: transparent;
  background-image: url(${images.Net});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 999;
`;

const TorchButton = styled.button`
  width: 80px;
  height: 80px;
  border: none;
  background-color: transparent;
  background-image: url(${(props) =>
    props.torchIsOn ? images.TorchOn : images.TorchOff});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 999;
`;

const Vanta = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const [isATorch, setIsATorch] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const onClickHalo = () => {
    setVantaEffect(
      HALO({
        el: ref.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        backgroundColor: 0x0,
        backgroundAlpha: 0,
      })
    );
  };

  const onClickTriangle = () => {
    setVantaEffect(
      WAVES({
        el: ref.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        shininess: 105.0,
        waveHeight: 35.0,
        zoom: 0.65,
        color: 0x1137f0,
        backgroundAlpha: 0,
      })
    );
  };

  const onClickMesh = () => {
    setVantaEffect(
      NET({
        el: ref.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x52eff,
        backgroundColor: 0x0,
        backgroundAlpha: 0.5,
      })
    );
  };

  const onClickNet = () => {
    setVantaEffect(
      BIRDS({
        el: ref.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x0,
        color1: 0x1137f0,
        color2: 0x0,
        birdSize: 0.5,
        wingSpan: 26.0,
        speedLimit: 4.0,
        separation: 51.0,
        alignment: 37.0,
        cohesion: 80.0,
        backgroundAlpha: 0.0,
      })
    );
  };

  const onClickTorch = () => {
    setIsATorch(!isATorch);
  };

  return (
    <>
      <ButtonContainer>
        <TorchButton torchIsOn={isATorch} onClick={onClickTorch}></TorchButton>
        <NetButton onClick={onClickNet}></NetButton>
        <HaloButton onClick={onClickHalo}></HaloButton>
        <TriangleButton onClick={onClickTriangle}></TriangleButton>
        <MeshButton onClick={onClickMesh}></MeshButton>
      </ButtonContainer>
      <StyledVanta ref={ref}>
        <ReactFlashlight enabled={isATorch} darkness={1}>
          <MainFrame />
        </ReactFlashlight>
      </StyledVanta>
    </>
  );
};

export default Vanta;
