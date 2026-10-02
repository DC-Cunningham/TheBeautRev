import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import Avatar from "../../assets/images/profilepic.jpg";
import Wrapper from "../Wrapper";

const StyledAboutMe = styled.section`
  & .avatar {
    width: 150px;
    height: 150px;
    border-radius: 100%;
    margin-left: auto;
    margin-right: auto;
    display: block;
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
    padding: 10px;
    color: #ccc;
  }

  & .contact-row {
    display: flex;
    @media screen and (max-width: 500px) {
      display: block;
    }
  }

  & .contact-column-1,
  .contact-column-2 {
    width: 300px;
    flex: 1;
  }

  @media screen and (max-width: 500px) {
    .contact-column-2 {
      text-align: center;
    }
  }

  & .icon {
    margin-right: 10px;
  }

  & .button {
    font: 16px/30px "opensans-bold", sans-serif;
    background: #444;
    display: inline-block;
    text-decoration: none;
    letter-spacing: 1px;
    color: #fff;
    padding: 12px 20px;
    margin: 70px;
    border: none;
    cursor: pointer;
    height: auto;
    border-radius: 0;
  }

  @media screen and (max-width: 1100px) {
    .button {
      margin: 30px 0;
    }
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
              Being driven by a life-long passion for bikes I have built a
              career that has seen me become a nationally regarded expert in the
              field. I have been responsible for multiple shops and workshops
              that have all taught me a diverse range of professional skills.
              <br />
              <br />I am now applying that same passion and drive to pursue what
              has also been a continual part of my life, utilising technology to
              create efficiency.
              <br />
              <br />
              Adept at swift problem solving and great time management with a
              focus on achieving strong and financially efficient outcomes for
              business.
            </p>
            <div className="contact-row">
              <div className="contact-column-1">
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
              <div className="contact-column-2">
                <a
                  href="https://www.beautifulrevolution.com.au/resume/DC-Cunningham.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  <FontAwesomeIcon icon={faDownload} className="icon" />
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
