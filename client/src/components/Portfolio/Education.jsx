import React from "react";
import styled from "styled-components";

import Wrapper from "../Wrapper";

const StyledEducationSection = styled.section``;

function Education() {
  return (
    <Wrapper>
      <StyledEducationSection>
        <div className="row">
          <div className="header-column">
            <h2 className="header">Education</h2>
          </div>
          <div className="main-column">
            <h2 className="sub-header">
              Full Stack Coding Bootcamp Certificate
            </h2>
            <h3 className="caption">Monash University</h3>
            <p>
              The program’s curriculum covered coding, algorithms and data
              structure plus intensive training in REACT, JavaScript, Node.js,
              HTML, CSS, jQuery and more.
            </p>
            <h2 className="sub-header">
              Bachelor of Science (B.Sc.), Environmental Science
            </h2>
            <h3 className="caption">University of Melbourne</h3>
            <p>
              Combining knowledge in biology, chemistry, statistics and earth
              sciences for a multidisciplinary approach towards statistical
              analysis in Geographic Information Systems
            </p>
            <h2 className="sub-header">
              Certificate IV in Small Business, Business Administration,
              Management and Operations
            </h2>
            <h3 className="caption">Swinburne University of Technology</h3>
            <p>
              The Certificate IV in Business provided skills and knowledge
              needed for administering small business. It developed the
              foundation skills needed for business operations, marketing and
              administration, while also gaining technology skills.
            </p>
          </div>
        </div>
      </StyledEducationSection>
    </Wrapper>
  );
}

export default Education;
