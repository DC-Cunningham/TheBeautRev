import React from "react";
import styled from "styled-components";

import images from "../../assets/images/portfolio/portfolio";

const PortfolioWrapper = styled.div`
  text-align: center;
  background-color: #ffffff;
`;

const Heading = styled.h3`
  font: 20px "opensans-bold", sans-serif;
  padding: 15px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
`;

const PortfolioImage = styled.img`
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: 5px 5px 20px grey;
  height: 250px;
`;

function Portfolio(props) {
  return (
    <>
      <PortfolioWrapper>
        <Heading>The Bike Compatibility Project</Heading>
        <PortfolioImage
          src={images.TBCP}
          alt="The Bike Compatibility Project"
        />
        <p>
          A React-based application deployed using a Mongo, Express, Node and
          Material UI build. This project is a proof of concept for an
          application dealing with the intricate compatibility relationships of
          bicycle components.
        </p>
      </PortfolioWrapper>
      <PortfolioWrapper>
        <Heading>Victorian MTB Championship Series</Heading>
        <PortfolioImage
          src={images.vicChamps}
          alt="The Bike Compatibility Project"
        />
        <p>
          A website built on the Wordpress framework. This site provides a
          landing point for Victorian mountain bikers to learn all the details
          about the future and past races in their State Series. Responsible for
          the design, collateral creation and maintenance of the website.
        </p>
      </PortfolioWrapper>
      <PortfolioWrapper>
        <Heading>we curate</Heading>
        <PortfolioImage
          src={images.weCurate}
          alt="The Bike Compatibility Project"
        />
        <p>
          A responsive website built using the Bootstrap Framework. This site
          puts an emphasis on design to help purvey the ethos of the client.
          Creating unique homes with depth, warmth and character.
        </p>
      </PortfolioWrapper>
      <PortfolioWrapper>
        <Heading>Revolution Research Laboratories</Heading>
        <PortfolioImage
          src={images.revolutionResearch}
          alt="The Bike Compatibility Project"
        />
        <p>
          A website built on the Wordpress framework. This site provides a clear
          and icon driven link to the services provided. Responsible for the
          design, icon creation, collateral, hosting and maintenance of the
          website
        </p>
      </PortfolioWrapper>
    </>
  );
}

export default Portfolio;
