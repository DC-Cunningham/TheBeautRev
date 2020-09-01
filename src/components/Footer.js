import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const StyledFooter = styled.div`
  height: 165px;
  width: 100%;
  background: linear-gradient(to top, black, rgba(255, 0, 0, 0));
  text-align: center;
  position: relative;
  margin-top: -180px;
  clear: both;
  opacity: 0.6;
  ul {
    padding: 35px 0 0 0;
    opacity: 0.6;
  }
  li {
    color: white;
    display: inline-block;
    padding: 10px 10px;
    margin: 0 10px;
    opacity: 0.6;
  }
  p {
    /* text-align: center; */
  }
`;

function Footer(props) {
  return (
    <StyledFooter>
      <footer>
        <ul>
          <li key="linkedin">
            <a
              href="https://www.linkedin.com/in/dc-cunningham/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="3x" color="white" />
            </a>
          </li>
          <li key="github">
            <a
              href="https://github.com/DC-Cunningham"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithubSquare} size="3x" color="white" />
            </a>
          </li>
          <li key="facebook">
            <a
              href="https://www.facebook.com/thebeautifulrevolution/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebookSquare}
                size="3x"
                color="white"
              />
            </a>
          </li>
          <li key="instagram">
            <a
              href="http://instagram.com/thebeautifulrevolution"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="3x" color="white" />
            </a>
          </li>
        </ul>
        <p>
          &copy; Copyright {new Date().getFullYear()} The Beautiful Revolution
        </p>
      </footer>
    </StyledFooter>
  );
}

export default Footer;
