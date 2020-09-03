import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import Wrapper from "../Wrapper";
import Work from "./Work";
import Education from "./Education";
import Tech from "./Tech";
import Portfolio from "./Portfolio";
import AboutMe from "./AboutMe";

import backgroundImage from "../../assets/images/BlueBinary.jpg";

const ScrollDown = styled.div`
  position: absolute;
  text-align: center;
  bottom: 50px;
  left: 50%;
  height: 48px;
  width: 48px;
  font-size: 48px;
  color: #000;
  border-radius: 100%;
  background-color: #fff;
`;

const ScrollUp = styled.div`
  position: relative;
  text-align: center;
  bottom: -30px;
  left: 50%;
  margin-left: -20px;
  display: block;
  height: 48px;
  width: 48px;
  font-size: 42px;
  color: #fff;
  border-radius: 100%;
  background-color: #525252;
`;

const HeroSection = styled.section`
  height: calc(100vh);
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const HeroContainer = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  width: 700px;
  transform: translate(-50%, -50%);
  text-align: center;

  h1 {
    font: 90px "opensans-bold", sans-serif;
    color: #fff;
    letter-spacing: -2px;
    margin-bottom: 10px;
  }

  h3 {
    font: 24px "librebaskerville-regular", serif;
    color: #cfd0d1;
    line-height: 1.8em;
  }
  hr {
    border-color: hsla(0, 0%, 58.8%, 0.9);
    border-width: 3px 0 0;
  }
`;

const ResumeWrapper = styled.div`
  padding-bottom: 200px;

  & > .about-me-section {
    background-color: #000524;
  }
  .portfolio-section {
    background-color: rgb(235, 238, 238);
  }
  .tech-section {
    background-color: #ffffff;
  }
  .education-section {
    background-color: rgb(235, 238, 238);
  }
  .work-section {
    background-color: #ffffff;
  }
`;

const StyledSection = styled.section`
  padding-top: 96px;
  padding-bottom: 66px;
`;

function Resume(props) {
  const viewportHeight = window.innerHeight;
  return (
    <ResumeWrapper>
      <HeroSection>
        <Wrapper>
          <HeroOverlay>
            <HeroContainer>
              <h1>DC Cunningham</h1>
              <h3>
                Full stack Web Developer leveraging an extensive background in
                the bicycle industry to build user focused experiences on
                multiple platforms.
              </h3>
              <hr />
            </HeroContainer>
            <ScrollDown
              onClick={() =>
                window.scroll({
                  top: viewportHeight,
                  left: 0,
                  behavior: "smooth",
                })
              }
            >
              <FontAwesomeIcon icon={faAngleDown} />
            </ScrollDown>
          </HeroOverlay>
        </Wrapper>
      </HeroSection>
      <StyledSection className="about-me-section">
        <AboutMe />
      </StyledSection>
      <StyledSection className="portfolio-section">
        <Portfolio />
      </StyledSection>
      <StyledSection className="tech-section">
        <Tech />
      </StyledSection>
      <StyledSection className="education-section">
        <Education />
      </StyledSection>
      <StyledSection className="work-section">
        <Work />
        <ScrollUp
          onClick={() =>
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            })
          }
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </ScrollUp>
      </StyledSection>
    </ResumeWrapper>
  );
}

export default Resume;
