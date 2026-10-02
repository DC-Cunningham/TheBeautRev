import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import Wrapper from "../Wrapper";

const Nav = styled.nav`
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

const Navbar = () => {
  return (
    <Wrapper>
      <Nav>
        <Burger />
      </Nav>
    </Wrapper>
  );
};

export default Navbar;
