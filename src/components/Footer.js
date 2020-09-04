import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import FooterImage from "../assets/images/Footer.jpg";

const StyledFooter = styled.div`
  height: 180px;
  width: 100%;
  background-image: url(${FooterImage});
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  position: relative;
  margin-top: -180px;

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

  .icon {
    font-size: 40px;
  }

  p {
    padding-bottom: 20px;
  }

  @media screen and (max-width: 1100px) {
    height: 100px;
    margin-top: -140px;
    li {
      padding: 1px 1px;
      margin: 0 10px;
    }
    .icon {
      font-size: 30px;
    }
    p {
      padding-bottom: 0;
      font-size: 12px;
    }
  }
`;

function Footer() {
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
              <FontAwesomeIcon
                icon={faLinkedin}
                className="icon"
                color="white"
              />
            </a>
          </li>
          <li key="github">
            <a
              href="https://github.com/DC-Cunningham"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                className="icon"
                color="white"
              />
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
                className="icon"
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
              <FontAwesomeIcon
                icon={faInstagram}
                className="icon"
                color="white"
              />
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
