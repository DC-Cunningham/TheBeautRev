import React from "react";
import styled from "styled-components";

import images from "../assets/images/tech/tech.js";

const TechImage = styled.img`
  height: 100px;
  width: 100px;
`;

function Tech(props) {
  return (
    <>
      <figure>
        <TechImage src={images.VSCode} />
        <figcaption>VSCode</figcaption>
      </figure>
      <figure>
        <TechImage src={images.Git} />
        <figcaption>VSCode</figcaption>
      </figure>
      <figure>
        <TechImage src={images.Bootstrap} />
        <figcaption>VSCode</figcaption>
      </figure>
      <figure>
        <TechImage src={images.CSS} />
        <figcaption>VSCode</figcaption>
      </figure>
      <figure>
        <TechImage src={images.Express} />
        <figcaption>VSCode</figcaption>
      </figure>
      <figure>
        <TechImage src={images.HTML} />
        <figcaption>VSCode</figcaption>
      </figure>
      <figure>
        <TechImage src={images.Illustrator} />
        <figcaption>VSCode</figcaption>
      </figure>
      <figure>
        <TechImage src={images.Javascript} />
        <figcaption>VSCode</figcaption>
      </figure>
      <figure>
        <TechImage src={images.jQuery} />
        <figcaption>VSCode</figcaption>
      </figure>
      <figure>
        <TechImage src={images.MongoDB} />
        <figcaption>VSCode</figcaption>
      </figure>
      <figure>
        <TechImage src={images.Node} />
        <figcaption>VSCode</figcaption>
      </figure>
      <figure>
        <TechImage src={images.Photoshop} />
        <figcaption>VSCode</figcaption>
      </figure>
      <figure>
        <TechImage src={images.React} />
        <figcaption>VSCode</figcaption>
      </figure>
      <figure>
        <TechImage src={images.Sequelize} />
        <figcaption>VSCode</figcaption>
      </figure>
      <figure>
        <TechImage src={images.Wordpress} />
        <figcaption>VSCode</figcaption>
      </figure>
      <figure>
        <TechImage src={images.MongoDB} />
        <figcaption>VSCode</figcaption>
      </figure>
    </>
  );
}
export default Tech;
