import React from "react";
import Button from "../components/Button";
import PText from "../components/PText";
import AboutImg from "../assets/images/mypic1.jpg";
import styled from "styled-components";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about_subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about_subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about_subheading">
              Hi, I am <span>Hardik Rola</span>
            </p>
            <h2 className="about__heading">Full Stack Developer</h2>
            <div className="about__info">
              <PText>
                I'm a multi-talented human with over 10+ years of experiences in wide range of IT Services, Such as Managing Projects, Teams from all over the glob who provides IT hands-feet support to Healthcare, Pharmaceutical, Oil & Gas industries.  <br />
                <br />
                In past few years Automation has been big part of my job where i have created Low-Code no code application for client, using MS PowerPlatform. Also, have worked with MS Botframework, Ansible, SQL, AWS, and Azure services to meet the client needs.
              </PText>
            </div>
            <Button btnText="Download Resume" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="Hardik" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem title="School" items={["Titusville High School"]} />
            <AboutInfoItem title="College" items={["ITT Technical Institute"]} />
            <AboutInfoItem title="Certificate" items={["UNC Chapel Hill Full-Stack"]} />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skill</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={["HTML", "CSS", "JavaScript", "REACT"]}
            />
            <AboutInfoItem title="BackEnd" items={["Node", "Express"]} />
            <AboutInfoItem title="Design" items={["Figma"]} />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experiences</h1>
            <AboutInfoItem title="2021 - " items={["Freelancer Developer"]} />
            <AboutInfoItem title="2021- " items={["Project Manager at Wipro"]} />
            <AboutInfoItem title="2014 - 2021" items={["Automation Architect at HCL"]} />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
