import React from "react";
import styled from "styled-components";

import images from "../../assets/images/portfolio/portfolio";
import Wrapper from "../Wrapper";

const StyledPortfolioSection = styled.section`
  .grid {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
  }
  img {
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    box-shadow: 5px 5px 10px grey;
    height: 250px;
  }
  p {
    margin: 20px 20px 10px;
    line-height: 30px;
    font-size: 20px;
  }

  @media screen and (max-width: 1100px) {
    .grid {
      grid-template-columns: 1fr;
    }
    img {
      height: 100px;
    }
    p {
      line-height: 20px;
      font-size: 14px;
    }
  }
`;

const PortfolioWrapper = styled.div`
  text-align: center;
  background-color: #ffffff;
`;

function Portfolio() {
  return (
    <Wrapper>
      <StyledPortfolioSection>
        <div className="row">
          <div className="header-column">
            <h2 className="header">Portfolio</h2>
          </div>
          <div className="main-column">
            <div className="grid">
              <PortfolioWrapper>
                <h2 className="sub-header">The Bike Compatibility Project</h2>
                <img src={images.TBCP} alt="The Bike Compatibility Project" />
                <p>
                  A React-based application deployed using a Mongo, Express,
                  Node and Material UI build. This project is a proof of concept
                  for an application dealing with the intricate compatibility
                  relationships of bicycle components.
                </p>
              </PortfolioWrapper>
              <PortfolioWrapper>
                <h2 className="sub-header">
                  Victorian MTB Championship Series
                </h2>
                <img
                  src={images.vicChamps}
                  alt="The Bike Compatibility Project"
                />
                <p>
                  A website built on the Wordpress framework. This site provides
                  a landing point for Victorian mountain bikers to learn all the
                  details about the future and past races in their State Series.
                  Responsible for the design, collateral creation and
                  maintenance of the website.
                </p>
              </PortfolioWrapper>
              <PortfolioWrapper>
                <h2 className="sub-header">we curate</h2>
                <img
                  src={images.weCurate}
                  alt="The Bike Compatibility Project"
                />
                <p>
                  A responsive website built using the Bootstrap Framework. This
                  site puts an emphasis on design to help purvey the ethos of
                  the client. Creating unique homes with depth, warmth and
                  character.
                </p>
              </PortfolioWrapper>
              <PortfolioWrapper>
                <h2 className="sub-header">Revolution Research Laboratories</h2>
                <img
                  src={images.revolutionResearch}
                  alt="The Bike Compatibility Project"
                />
                <p>
                  A website built on the Wordpress framework. This site provides
                  a clear and icon driven link to the services provided.
                  Responsible for the design, icon creation, collateral, hosting
                  and maintenance of the website
                </p>
              </PortfolioWrapper>
            </div>
          </div>
        </div>
      </StyledPortfolioSection>
    </Wrapper>
  );
}

export default Portfolio;
