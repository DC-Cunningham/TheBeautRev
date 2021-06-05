import React from "react";
import styled from "styled-components";

import Wrapper from "../Wrapper";

const StyledWorkSection = styled.section`
  span {
    margin: 0 5px 0;
  }
`;

function Work() {
  return (
    <Wrapper>
      <StyledWorkSection>
        <div className="row">
          <div className="header-column">
            <h2 className="header">Work</h2>
          </div>
          <div className="main-column">
          <h2 className="sub-header">Developer</h2>
            <h3 className="caption">
              Renti
              <span>&bull;</span> <em>2020 - Current</em>
            </h3>
            <p>
              Responsible for the develpoment, deployment, and maintenance of
              a SAAS platform. An intuitive trust accounting and rental proerty
              listing process for property managers and tenants. Responsible
              for new feature development including the creation of a streamlined
              form process for connection management.
            </p>
            <h2 className="sub-header">Web Developer</h2>
            <h3 className="caption">
              The Beautiful Revolution
              <span>&bull;</span> <em>2019 - Current</em>
            </h3>
            <p>
              Responsible for the design, deployment, hosting and maintenance of
              websites. Creation of websites for clients from framework
              integrations such as Wordpress to bespoke builds. Close
              collaboration with clients to define requirements for development
              and then execute from visual design stages through to final sign
              off.
            </p>
            <h2 className="sub-header">Owner, Operator & Developer</h2>
            <h3 className="caption">
              Revolution Research Laboratories
              <span>&bull;</span> <em>2007 - Current</em>
            </h3>
            <p>
              Operation of a premium bicycle servicing business with a strong
              focus on bespoke technical work. The services provided cater to
              discerning riders who require high quality work with great
              attention to detail. With my extensive knowledge of technical
              components and their servicing I am focused on helping ease the
              hassle of bike maintenance by having streamlined processes.
            </p>
            <h2 className="sub-header">IT Lead, Workshop Manager</h2>
            <h3 className="caption">
              The Ride Cycles
              <span>&bull;</span> <em>2015 - 2019</em>
            </h3>
            <p>
              Management of a busy and high turnover workshop with a focus on
              high levels of customer service. Initiated and deployed a new
              point of sale service and integrated a webstore which allowed
              growth in both workshop and sales revenues and margins. Developed
              and maintained all technology and digital media for the business.
            </p>
            <h2 className="sub-header">Owner & Operator</h2>
            <h3 className="caption">
              The Fitzroy Revolution
              <span>&bull;</span> <em>2007 - 2015</em>
            </h3>
            <p>
              Creation and operation of a bike store specialising in the
              technical service work that mountain bikes require. The stores
              expertise centred on hydraulic and suspension servicing, as well
              as race preparation and tuning. Built a database management system
              to control workshop bookings, reporting and record keeping when
              none were available that fit the business’ requirements. In doing
              so created a workshop that was well ahead of the industry
              standards of the time.
            </p>
          </div>
        </div>
      </StyledWorkSection>
    </Wrapper>
  );
}

export default Work;
