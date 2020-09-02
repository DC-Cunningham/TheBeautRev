import React from "react";
import styled from "styled-components";

import images from "../../assets/images/tech/tech.js";

const Figure = styled.figure`
  text-align: center;
`;

const TechImage = styled.img`
  height: 100px;
  width: 100px;
  align-items: center;
`;

const Caption = styled.figcaption`
  font: 16px/24px "librebaskerville-italic", serif;
  color: #6e7881;
`;

function Tech(props) {
  return (
    <>
      <Figure>
        <TechImage src={images.VSCode} />
        <Caption>VSCode</Caption>
      </Figure>
      <Figure>
        <TechImage src={images.Git} />
        <Caption>Git</Caption>
      </Figure>
      <Figure>
        <TechImage src={images.Bootstrap} />
        <Caption>Bootstrap</Caption>
      </Figure>
      <Figure>
        <TechImage src={images.CSS} />
        <Caption>CSS</Caption>
      </Figure>
      <Figure>
        <TechImage src={images.Express} />
        <Caption>Express</Caption>
      </Figure>
      <Figure>
        <TechImage src={images.HTML} />
        <Caption>HTML</Caption>
      </Figure>
      <Figure>
        <TechImage src={images.Illustrator} />
        <Caption>Illustrator</Caption>
      </Figure>
      <Figure>
        <TechImage src={images.Javascript} />
        <Caption>Javascript</Caption>
      </Figure>
      <Figure>
        <TechImage src={images.jQuery} />
        <Caption>jQuery</Caption>
      </Figure>
      <Figure>
        <TechImage src={images.MongoDB} />
        <Caption>MongoDB</Caption>
      </Figure>
      <Figure>
        <TechImage src={images.Node} />
        <Caption>Node.js</Caption>
      </Figure>
      <Figure>
        <TechImage src={images.Photoshop} />
        <Caption>Photoshop</Caption>
      </Figure>
      <Figure>
        <TechImage src={images.React} />
        <Caption>React.js</Caption>
      </Figure>
      <Figure>
        <TechImage src={images.Sequelize} />
        <Caption>Sequelize</Caption>
      </Figure>
      <Figure>
        <TechImage src={images.Wordpress} />
        <Caption>Wordpress</Caption>
      </Figure>
      <Figure>
        <TechImage src={images.MongoDB} />
        <Caption>MongoDB</Caption>
      </Figure>
      <Figure>
        <TechImage src={images.Woo} />
        <Caption>Woo Commerce</Caption>
      </Figure>
      <Figure>
        <TechImage src={images.AWS} />
        <Caption>AWS</Caption>
      </Figure>
    </>
  );
}
export default Tech;
