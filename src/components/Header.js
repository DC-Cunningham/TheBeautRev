import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import Wrapper from "./Wrapper.js";

const linkItems = [
  { title: "Home", to: "/" },
  { title: "Portfolio", to: "/portfolio" },
  { title: "Contact", to: "/contact" },
];

const StyledHeader = styled.div`
  /* background-color: ${(props) =>
    props.theme.primary.dark};
  padding: 20px 0; */
  font: 20px "opensans-bold", sans-serif;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  margin: 0 auto;
  z-index: 100;
  position: absolute;
  left: 0;
`;

const StyledUL = styled.ul`
  padding: 20px 13px;
  line-height: 32px;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  text-align: right;
  height: 60px;
  margin: 0;
  & > li {
    display: inline-block;
    padding: 10px 15px;
    margin: 0 10px;
  }
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.text.black};
  color: ${(props) => (props.active ? "#2adedd" : "#fff")};
  text-decoration: none;
  text-transform: uppercase;
`;

function Header(props) {
  const location = useLocation();
  console.log(location);
  return (
    <StyledHeader>
      <Wrapper>
        <StyledUL>
          {linkItems.map((linkItem) => (
            <li key={linkItem.title}>
              <StyledLink
                to={linkItem.to}
                active={location.pathname === linkItem.to}
              >
                {linkItem.title}
              </StyledLink>
            </li>
          ))}
        </StyledUL>
      </Wrapper>
    </StyledHeader>
  );
}

export default Header;
