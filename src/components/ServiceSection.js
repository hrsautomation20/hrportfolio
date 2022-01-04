import React from "react";
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from "react-icons/md";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem";

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }

  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="What i will do for you" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Website Design"
            desc="I create ui/ux design for the website that helps website to get unique look."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title=" Web Dev"
            desc="I create high performance website with blazing fast speed."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="No-Code/Low-Code"
            desc="I develop web applications with no code low code with PowerPlatform."
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
