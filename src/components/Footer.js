import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  height: 100px;
  background-color: ${(props) => props.theme.primary.light};
  color: ${(props) => props.theme.text.black};
`;

function Footer(props) {
  return <StyledFooter>footer</StyledFooter>;
}

export default Footer;
