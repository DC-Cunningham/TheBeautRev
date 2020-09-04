import React from "react";
import styled from "styled-components";

import Wrapper from "../Wrapper";
import images from "../../assets/images/tech/tech.js";

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
                <img src={images.VSCode} alt="logo" />
                <figcaption>VSCode</figcaption>
              </figure>
              <figure>
                <img src={images.Git} alt="logo" />
                <figcaption>Git</figcaption>
              </figure>
              <figure>
                <img src={images.Bootstrap} alt="logo" />
                <figcaption>Bootstrap</figcaption>
              </figure>
              <figure>
                <img src={images.CSS} alt="logo" />
                <figcaption>CSS</figcaption>
              </figure>
              <figure>
                <img src={images.Express} alt="logo" />
                <figcaption>Express</figcaption>
              </figure>
              <figure>
                <img src={images.HTML} alt="logo" />
                <figcaption>HTML</figcaption>
              </figure>
              <figure>
                <img src={images.Illustrator} alt="logo" />
                <figcaption>Illustrator</figcaption>
              </figure>
              <figure>
                <img src={images.Javascript} alt="logo" />
                <figcaption>Javascript</figcaption>
              </figure>
              <figure>
                <img src={images.jQuery} alt="logo" />
                <figcaption>jQuery</figcaption>
              </figure>
              <figure>
                <img src={images.MongoDB} alt="logo" />
                <figcaption>MongoDB</figcaption>
              </figure>
              <figure>
                <img src={images.Node} alt="logo" />
                <figcaption>Node.js</figcaption>
              </figure>
              <figure>
                <img src={images.Photoshop} alt="logo" />
                <figcaption>Photoshop</figcaption>
              </figure>
              <figure>
                <img src={images.React} alt="logo" />
                <figcaption>React.js</figcaption>
              </figure>
              <figure>
                <img src={images.Sequelize} alt="logo" />
                <figcaption>Sequelize</figcaption>
              </figure>
              <figure>
                <img src={images.Wordpress} alt="logo" />
                <figcaption>Wordpress</figcaption>
              </figure>
              <figure>
                <img src={images.MongoDB} alt="logo" />
                <figcaption>MongoDB</figcaption>
              </figure>
              <figure>
                <img src={images.Woo} alt="logo" />
                <figcaption>Woo Commerce</figcaption>
              </figure>
              <figure>
                <img src={images.AWS} alt="logo" />
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
