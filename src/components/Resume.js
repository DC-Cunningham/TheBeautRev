import React from "react";
import styled from "styled-components";

import Wrapper from "./Wrapper";
import Work from "./Work";
import Education from "./Education";
import Tech from "./Tech";
import Portfolio from "./Portfolio.js";
import Avatar from "../assets/images/profilepic.jpg";

const Row = styled.div`
  display: flex;
`;
const HeaderColumn = styled.div`
  flex: 150px;
`;
const MainColumn = styled.div`
  width: 100%;
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

const AboutMeSection = styled.section`
  background-color: #000524;
  color: white;
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 100%;
    margin-top: 100px;
  }
  .about-container {
    & > p {
      color: white;
    }
  }
`;

const EducationSection = styled.section`
  background-color: #ffffff;

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

  .work-container {
    & > p {
      color: red;
    }
  }
`;

const TechSection = styled.section`
  background-color: #ffffff;
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
                Here are just a few of the programs, frameworks and systems that
                I use on a regular basis.
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
        </Wrapper>
      </PortfolioSection>
    </>
  );
}

export default Resume;
