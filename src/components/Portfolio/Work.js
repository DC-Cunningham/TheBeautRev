import React from "react";
import styled from "styled-components";

const SectionHeader = styled.h3`
  font-family: "opensans-bold", sans-serif;
  font-size: 25px;
  line-height: 25px;
  color: #313131;
`;

function Work(props) {
  return (
    <>
      <SectionHeader>Web Developer</SectionHeader>
      <h3>
        The Beautiful Revolution
        <span>&bull;</span> <em>2019 - Current</em>
      </h3>
      <p>
        Responsible for the design, deployment, hosting and maintenance of
        websites. Creation of websites for clients from framework integrations
        such as Wordpress to bespoke builds. Close collaboration with clients to
        define requirements for development and then execute from visual design
        stages through to final sign off.
      </p>
      <SectionHeader>Owner, Operator & Developer</SectionHeader>
      <h3>
        Revolution Research Laboratories
        <span>&bull;</span> <em>2007 - Current</em>
      </h3>
      <p>
        Operation of a premium bicycle servicing business with a strong focus on
        bespoke technical work. The services provided cater to discerning riders
        who require high quality work with great attention to detail. With my
        extensive knowledge of technical components and their servicing I am
        focused on helping ease the hassle of bike maintenance by having
        streamlined processes.
      </p>
      <SectionHeader>IT Lead, Workshop Manager</SectionHeader>
      <h3>
        The Ride Cycles
        <span>&bull;</span> <em>2015 - 2019</em>
      </h3>
      <p>
        Management of a busy and high turnover workshop with a focus on high
        levels of customer service. Initiated and deployed a new point of sale
        service and integrated a webstore which allowed growth in both workshop
        and sales revenues and margins. Developed and maintained all technology
        and digital media for the business.
      </p>
      <SectionHeader>Owner & Operator</SectionHeader>
      <h3>
        The Fitzroy Revolution
        <span>&bull;</span> <em>2007 - 2015</em>
      </h3>
      <p>
        Creation and operation of a bike store specialising in the technical
        service work that mountain bikes require. The stores expertise centred
        on hydraulic and suspension servicing, as well as race preparation and
        tuning. Built a database management system to control workshop bookings,
        reporting and record keeping when none were available that fit the
        business’ requirements. In doing so created a workshop that was well
        ahead of the industry standards of the time.
      </p>
    </>
  );
}

export default Work;
