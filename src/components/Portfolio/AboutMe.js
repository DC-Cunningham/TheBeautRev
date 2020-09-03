import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import Avatar from "../../assets/images/profilepic.jpg";
import Wrapper from "../Wrapper";

const StyledAboutMe = styled.section`
  /* background-color: #000524; */
  /* padding-top: 96px;
  padding-bottom: 66px; */
  & .avatar {
    width: 150px;
    height: 150px;
    border-radius: 100%;
    margin-top: 100px;
  }
  & h2 {
    font-size: 30px;
    font-family: "opensans-bold", sans-serif;
    line-height: 30px;
    font-size: 22px;
    color: #fff;
  }
  & a {
    text-decoration: none;
  }
  & p {
    color: #ccc;
  }

  & .column {
    width: 100%;
    margin: 0 auto;
  }

  & .button {
    font: 16px/30px "opensans-bold", sans-serif;
    background: #444;
    display: inline-block;
    text-decoration: none;
    letter-spacing: 0;
    color: #fff;
    padding: 12px 20px;
    margin: 70px;
    border: none;
    cursor: pointer;
    height: auto;
    transition: all 0.2s ease-in-out;
    border-radius: 0;
  }
`;

function AboutMe() {
  return (
    <Wrapper>
      <StyledAboutMe>
        <div className="row">
          <div className="header-column">
            <img className="avatar" src={Avatar} alt="Avatar"></img>
          </div>
          <div className="main-column">
            <h2>About Me</h2>
            <p>
              By incorporating a solid understanding in web technologies with
              substantial bicycle industry experience I have built multiple
              workshops from the ground up into highly efficient and profitable
              enterprises. Adept at swift problem solving and great time
              management with a focus on achieving strong and financially
              efficient outcomes for business.
            </p>
            <div className="row">
              <div className="column">
                <h2>Location</h2>
                <p>
                  Melbourne, Victoria
                  <br /> Australia
                </p>
                <h2>Email</h2>
                <a href="mailto:dc@beautifulrevolution.com.au">
                  <p>dc@beautifulrevolution.com.au</p>
                </a>
              </div>
              <div className="column">
                <a
                  href="https://www.beautifulrevolution.com.au/resume/DC-Cunningham.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="button"
                >
                  <FontAwesomeIcon icon={faDownload} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </StyledAboutMe>
    </Wrapper>
  );
}

export default AboutMe;
