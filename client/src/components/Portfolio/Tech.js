import React from "react";
import styled from "styled-components";

import Wrapper from "../Wrapper";
import VSCodeImage from "../../assets/images/tech/VSCode.png";
import GitImage from "../../assets/images/tech/Git.png";
import BootstrapImage from "../../assets/images/tech/Bootstrap.png";
import CSSImage from "../../assets/images/tech/CSS.png";
import ExpressImage from "../../assets/images/tech/Express.png";
import HTMLImage from "../../assets/images/tech/HTML.png";
import IllustratorImage from "../../assets/images/tech/Illustrator.png";
import JavascriptImage from "../../assets/images/tech/Javascript.png";
import PhotoshopImage from "../../assets/images/tech/Photoshop.png";
import ReactImage from "../../assets/images/tech/React.png";
import SequelizeImage from "../../assets/images/tech/Sequelize.png";
import WordpressImage from "../../assets/images/tech/Wordpress.png";
import MongoDBImage from "../../assets/images/tech/MongoDB.png";
import WooImage from "../../assets/images/tech/Woo.png";
import AWSImage from "../../assets/images/tech/AWS.png";
import NodeImage from "../../assets/images/tech/Node.png";
import jQueryImage from "../../assets/images/tech/jQuery.png";

const StyledTechSection = styled.section`
  .grid {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  p {
    margin-left: 20px;
    font-size: 20px;
  }
  figure {
    text-align: center;
  }

  img {
    height: 100px;
    width: 100px;
    align-items: center;
  }
  figcaption {
    font-family: "librebaskerville-italic", serif;
    font-size: 16px;
    line-height: 24px;
    color: #6e7881;
  }

  @media screen and (max-width: 800px) {
    .grid {
      grid-gap: 0;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media screen and (max-width: 600px) {
    .grid {
      grid-gap: 0;
      grid-template-columns: 1fr 1fr 1fr;
    }
    figure {
      margin: 0;
    }
    img {
      height: 75px;
      width: 75px;
    }
    figcaption {
      visibility: hidden;
    }
  }
`;

function Tech() {
  return (
    <Wrapper>
      <StyledTechSection>
        <div className="row">
          <div className="header-column">
            <h2 className="header">Tech Proficiencies</h2>
          </div>
          <div className="main-column">
            <div className="grid">
              <figure>
                <img src={VSCodeImage} alt="logo" />
                <figcaption>VSCode</figcaption>
              </figure>
              <figure>
                <img src={GitImage} alt="logo" />
                <figcaption>Git</figcaption>
              </figure>
              <figure>
                <img src={BootstrapImage} alt="logo" />
                <figcaption>Bootstrap</figcaption>
              </figure>
              <figure>
                <img src={CSSImage} alt="logo" />
                <figcaption>CSS</figcaption>
              </figure>
              <figure>
                <img src={ExpressImage} alt="logo" />
                <figcaption>Express</figcaption>
              </figure>
              <figure>
                <img src={HTMLImage} alt="logo" />
                <figcaption>HTML</figcaption>
              </figure>
              <figure>
                <img src={IllustratorImage} alt="logo" />
                <figcaption>Illustrator</figcaption>
              </figure>
              <figure>
                <img src={JavascriptImage} alt="logo" />
                <figcaption>Javascript</figcaption>
              </figure>
              <figure>
                <img src={jQueryImage} alt="logo" />
                <figcaption>jQuery</figcaption>
              </figure>
              <figure>
                <img src={MongoDBImage} alt="logo" />
                <figcaption>MongoDB</figcaption>
              </figure>
              <figure>
                <img src={NodeImage} alt="logo" />
                <figcaption>Node.js</figcaption>
              </figure>
              <figure>
                <img src={PhotoshopImage} alt="logo" />
                <figcaption>Photoshop</figcaption>
              </figure>
              <figure>
                <img src={ReactImage} alt="logo" />
                <figcaption>React.js</figcaption>
              </figure>
              <figure>
                <img src={SequelizeImage} alt="logo" />
                <figcaption>Sequelize</figcaption>
              </figure>
              <figure>
                <img src={WordpressImage} alt="logo" />
                <figcaption>Wordpress</figcaption>
              </figure>
              <figure>
                <img src={WooImage} alt="logo" />
                <figcaption>Woo Commerce</figcaption>
              </figure>
              <figure>
                <img src={AWSImage} alt="logo" />
                <figcaption>AWS</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </StyledTechSection>
    </Wrapper>
  );
}
export default Tech;
