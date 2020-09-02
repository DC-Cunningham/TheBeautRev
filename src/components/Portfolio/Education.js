import React from "react";
import styled from "styled-components";

const StyledEducationSection = styled.section`
  & > h2 {
    font-family: "opensans-bold", sans-serif;
    font-size: 25px;
    line-height: 25px;
    color: #313131;
  }
`;

function Education() {
  return (
    <StyledEducationSection>
      <h2>Full Stack Coding Bootcamp Certificate</h2>
      <h3>Monash University</h3>
      <p>
        The program’s curriculum covered coding, algorithms and data structure
        plus intensive training in REACT, JavaScript, Node.js, HTML, CSS, jQuery
        and more.
      </p>
      <h2>Bachelor of Science (B.Sc.), Environmental Science</h2>
      <h3>University of Melbourne</h3>
      <p>
        Combining knowledge in biology, chemistry, statistics and earth sciences
        for a multidisciplinary approach towards statistical analysis in
        Geographic Information Systems
      </p>
      <h2>
        Certificate IV in Small Business, Business Administration, Management
        and Operations
      </h2>
      <h3>Swinburne University of Technology</h3>
      <p>
        The Certificate IV in Business provided skills and knowledge needed for
        administering small business. It developed the foundation skills needed
        for business operations, marketing and administration, while also
        gaining technology skills.
      </p>
    </StyledEducationSection>
  );
}

export default Education;
