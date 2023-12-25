import { useState, useEffect } from "react";
import styled from "styled-components";
import { Linkedin, Instagram, Github, Twitter, Mail, Youtube } from "lucide-react";

const Section = styled.footer`
  padding: 1.2rem;
  font-size: 1rem;
  ${
    "" /* background: rgb(9, 9, 121);
  background: linear-gradient(
    262deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(2, 0, 36, 1) 1%
  ); */
  }
  background-color: #010116;
  display: flex;
  padding: 30px 60px;
  align-items: center;
  justify-content: space-between;
  @media only Screen and (max-width: 48em) {
    width: 100vw;
    flex-direction: column;
    align-items: center;
    margin-top: 16px;
    font-size: 14px;
    justify-content: center;
    ${
      "" /* div {
      &:first-child {
        margin-bottom: 1rem;
      }
    } */
    }
  }
`;

const RightText = styled.div`
  display: flex;
  align-items: center;
  width: 25rem;

  p {
    margin-right: 1rem; /* Add margin to the right of the paragraph */
  }

  a {
    margin-right: 1rem; /* Add margin between icons */
    &:last-child {
      margin-right: 0; /* Remove margin for the last icon */
    }

    &:hover {
      img {
        transform: scale(1.5);
        filter: invert(50%) sepia(100%) saturate(500%) hue-rotate(216deg)
          brightness(100%) contrast(97%);
      }
    }

    @media only Screen and (max-width: 48em) {
      text-align: center;
      align-self: end;
      justify-self: center;
    }
  }

  img {
    width: 1.5rem;
    height: 1.5rem;
    color: white;
    transition: all 0.2s ease-in-out;
  }
`;

const LeftText = styled.div`
  text-align: left;
  width: 20rem;
  @media only Screen and (max-width: 48em) {
    text-align: center;
  }
`;

const CenterText = styled.div`
  text-align: center;
  align-items: center;
  width: 25 rem;
  @media only Screen and (max-width: 48em) {
    text-align: center;
  }
`;

const Footer = () => {
  const [year, setYear] = useState(2023);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <Section>
      <LeftText>© {year} nameSpace formerly NSCC BPIT</LeftText>

      <CenterText>
        Made with ❤️ and 🧠 by{" "}
        <a
          style={{ color: "pink" }}
          href="https://github.com/NSCC-BPIT/NSCC-BPIT-Website"
        >
          Team nameSpace
        </a>
      </CenterText>

      <RightText>
        <p>Reach out to us via </p>
        <a href="http://instagram.com/namespacecomm">
          <Instagram size={24} />
        </a>
        &nbsp;
        <a href="http://www.linkedin.com/company/namespacecomm/">
          <Linkedin size={24} />
        </a>
        &nbsp;
        <a href="https://www.youtube.com/@namespacecomm">
          <Youtube size={24} />
        </a>
        &nbsp;
        <a href="https://github.com/NSCC-BPIT">
          <Github size={24} />
        </a>
        &nbsp;
        <a href="https://twitter.com/namespacecomm">
          <Twitter size={24} />
        </a>
        &nbsp;
        <a href="mailto:namespace@bpitindia.com">
          <Mail size={24} />
        </a>
      </RightText>
    </Section>
  );
};

export default Footer;
