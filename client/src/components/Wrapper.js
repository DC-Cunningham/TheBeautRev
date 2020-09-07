import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 1000px) {
  }
`;

function Wrapper(props) {
  return <StyledWrapper {...props} />;
}

export default Wrapper;
