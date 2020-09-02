import React from "react";
import styled from "styled-components";

const StyledAboutMe = styled.section`
  & > h2 {
    font-size: 30px;
    font-family: "opensans-bold", sans-serif;
    line-height: 30px;
    font-size: 22px;
    color: #fff;
  }
  & > a {
    text-decoration: none;
  }
  & > p {
    color: #ccc;
  }
`;

function AboutMe() {
  return (
    <StyledAboutMe>
      <h2>About Me</h2>
      <p>
        By incorporating a solid understanding in web technologies with
        substantial bicycle industry experience I have built multiple workshops
        from the ground up into highly efficient and profitable enterprises.
        Adept at swift problem solving and great time management with a focus on
        achieving strong and financially efficient outcomes for business.
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
    </StyledAboutMe>
  );
}

export default AboutMe;
