import React from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "./PText";

const FooterStyle = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);

  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  footer__col3,
  footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Hardik Rola</h1>
          <PText>A Full Stack Developer</PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: "Home",
                path: "/",
                type: "Link",
              },
              {
                title: "About",
                path: "/about",
                type: "Link",
              },
              {
                title: "Projects",
                path: "/projects",
                type: "Link",
              },
              {
                title: "Contact",
                path: "/contact",
                type: "Link",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: "+1(727)507-1198",
                path: "Tel: +1(727)507-1198",
              },
              {
                title: "hrsautomation20@gmail.com",
                path: "mailto:hrsautomation20@gmail.com",
              },
              {
                title: "Cary, NC",
                path: "http://google.com/maps",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: "Facebook",
                path: "https://facebook.com",
              },
              {
                title: "Instagram",
                path: "https://facebook.com",
              },
              {
                title: "Github",
                path: "https://facebook.com",
              },
              {
                title: "Twitter",
                path: "https://facebook.com",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2021 - Hardik Rola</PText>
        </div>
      </div>
    </FooterStyle>
  );
}
