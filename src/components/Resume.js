import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import Wrapper from "./Wrapper";
import Work from "./Work";
import Education from "./Education";
import Tech from "./Tech";
import Portfolio from "./Portfolio.js";
import backgroundImage from "../assets/images/BlueBinary.jpg";
import Avatar from "../assets/images/profilepic.jpg";

const Row = styled.div`
  display: flex;
`;
const HeaderColumn = styled.div`
  flex: 200px;
  padding: 10px 100px 20px 20px;
`;
const MainColumn = styled.div`
  width: 100%;
`;

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

const Header = styled.h2`
  font: 18px/24px "opensans-bold", sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 3px solid #0762f9;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-bottom-color: rgb(7, 98, 249);
  padding-bottom: 6px;
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
    color: #ddd;
  }
  hr {
    border-color: hsla(0, 0%, 58.8%, 0.9);
    border-width: 3px 0 0;
  }
`;

const AboutMeSection = styled.section`
  background-color: #000524;
  padding-top: 96px;
  padding-bottom: 66px;
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 100%;
    margin-top: 100px;
  }
  .about-container {
    a {
      text-decoration: none;
    }
    p {
      color: #ccc;
    }
    h2 {
      font: 22px/30px "opensans-bold", sans-serif;
      line-height: 30px;
      font-size: 22px;
      color: #fff;
    }
  }
`;

const EducationSection = styled.section`
  background-color: #ffffff;
  padding-top: 96px;
  padding-bottom: 66px;
  .education-container {
    display: grid;
    place-items: center;

    & > p {
      color: red;
    }
  }
`;

const WorkSection = styled.section`
  background-color: rgb(235, 238, 238);
  padding-top: 96px;
  padding-bottom: 66px;
  .work-container {
    & > p {
      color: red;
    }
  }
`;

const TechSection = styled.section`
  background-color: #ffffff;
  padding-top: 76px;
  padding-bottom: 56px;
  .tech-container {
    .grid {
      display: grid;
      grid-gap: 20px;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;

const PortfolioSection = styled.section`
  background-color: rgb(235, 238, 238);
  padding-top: 76px;
  padding-bottom: 200px;
  .portfolio-container {
    .grid {
      display: grid;
      grid-gap: 20px;
      grid-template-columns: 1fr 1fr;
    }
  }
`;

function Resume(props) {
  return (
    <>
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
            <ScrollDown>
              <FontAwesomeIcon icon={faAngleDown} />
            </ScrollDown>
          </HeroOverlay>
        </Wrapper>
      </HeroSection>
      <AboutMeSection>
        <Wrapper>
          <div className="about-container">
            <Row>
              <HeaderColumn>
                <img className="avatar" src={Avatar} alt="Avatar"></img>
              </HeaderColumn>
              <MainColumn>
                <h2>About Me</h2>
                <p>
                  By incorporating a solid understanding in web technologies
                  with substantial bicycle industry experience I have built
                  multiple workshops from the ground up into highly efficient
                  and profitable enterprises. Adept at swift problem solving and
                  great time management with a focus on achieving strong and
                  financially efficient outcomes for business.
                </p>
                <h2>Location</h2>
                <p>
                  Melbourne, Victoria
                  <br /> Australia
                </p>
                <h2>Email</h2>
                <a href="mailto:dc@beautifulrevolution.com.au">
                  <p>dc@beautifulrevolution.com.au</p>
                </a>
              </MainColumn>
            </Row>
          </div>
        </Wrapper>
      </AboutMeSection>
      <EducationSection>
        <Wrapper>
          <div className="education-container">
            <Row>
              <HeaderColumn>
                <Header>Education</Header>
              </HeaderColumn>
              <MainColumn>
                <Education />
              </MainColumn>
            </Row>
          </div>
        </Wrapper>
      </EducationSection>
      <WorkSection>
        <Wrapper>
          <div className="work-container">
            <Row>
              <HeaderColumn>
                <Header>Work</Header>
              </HeaderColumn>
              <MainColumn>
                <Work />
              </MainColumn>
            </Row>
          </div>
        </Wrapper>
      </WorkSection>
      <TechSection>
        <Wrapper>
          <div className="tech-container">
            <Row>
              <HeaderColumn>
                <Header>Tech Proficiencies</Header>
              </HeaderColumn>
              <MainColumn>
                <p>
                  Here are just a few of the programs, frameworks and systems
                  that I use on a regular basis.
                </p>
              </MainColumn>
            </Row>
            <div className="grid">
              <Tech />
            </div>
          </div>
        </Wrapper>
      </TechSection>
      <PortfolioSection>
        <Wrapper>
          <div className="portfolio-container">
            <Row>
              <HeaderColumn>
                <Header>Portfolio</Header>
              </HeaderColumn>
              <MainColumn>
                <p>Here are some examples of my work</p>
              </MainColumn>
            </Row>
            <div className="grid">
              <Portfolio />
            </div>
          </div>
          <ScrollUp>
            <FontAwesomeIcon icon={faAngleUp} />
          </ScrollUp>
        </Wrapper>
      </PortfolioSection>
    </>
  );
}

export default Resume;
