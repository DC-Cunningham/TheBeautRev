import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import Wrapper from "../Wrapper.js";

const linkItems = [
  { title: "Home", to: "/" },
  { title: "Portfolio", to: "/portfolio" },
  { title: "Contact", to: "/contact" },
];

const StyledHeader = styled.div`
  font-family: "opensans-regular", sans-serif;
  font-size: 18px;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 3px;
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
    padding: 30px 15px;
    margin: 0 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 180px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.text.black};
  color: ${(props) => (props.active ? "#2adedd" : "#fff")};
  text-decoration: none;
  text-transform: uppercase;
`;

const RightNav = ({ open }) => {
  const location = useLocation();

  return (
    <StyledHeader>
      <Wrapper>
        <StyledUL open={open}>
          {linkItems.map((linkItem) => (
            <li key={linkItem.title}>
              <StyledLink
                to={linkItem.to}
                active={location.pathname === linkItem.to ? "true" : undefined}
              >
                {linkItem.title}
              </StyledLink>
            </li>
          ))}
        </StyledUL>
      </Wrapper>
    </StyledHeader>
  );
};

export default RightNav;
