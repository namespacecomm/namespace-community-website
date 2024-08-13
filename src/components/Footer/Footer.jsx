import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaYoutube,
  FaWhatsapp,
  FaTelegram,
  FaDiscord
} from "react-icons/fa";

const Section = styled.footer`
  padding: 1.2rem;
  font-size: 1rem;
  background-color: #010116;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 60px;
  @media only Screen and (max-width: 48em) {
    width: 100vw;
    margin-top: 16px;
    font-size: 14px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
  }
`;

const RightText = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-right: 1rem;
  }

  a {
    margin-right: 1rem;
    &:last-child {
      margin-right: 0;
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
  @media only Screen and (max-width: 48em) {
    text-align: center;
  }
`;

const CenterText = styled.div`
  text-align: center;
  align-items: center;
  width: 100%; /* Ensure it spans the full width */
  margin: 20px 0; /* Add margin to separate it from other content */
  @media only Screen and (max-width: 48em) {
    text-align: center;
  }
`;

const TrademarkText = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 0.8rem;
  color: #888;
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
      <CenterText>
        Made with ❤️ and 🧠 by{" "}
        <a
          style={{ color: "pink" }}
          href="https://github.com/namespacecomm/NSCC-BPIT-Website"
        >
          Team nameSpace
        </a>
      </CenterText>
      <CenterText>
        <p className="text-2xl">Reach out to us via </p>
        <div className="flex items-center justify-center space-x-4 mt-2">
        <a href="http://instagram.com/namespacecomm">
          <FaInstagram size={24} />
        </a>
        &nbsp;
        <a href="http://www.linkedin.com/company/namespacecomm/">
          <FaLinkedin size={24} />
        </a>
        &nbsp;
        <a href="https://www.youtube.com/@namespacecomm">
          <FaYoutube size={24} />
        </a>
        &nbsp;
        <a href="https://github.com/namespacecomm">
          <FaGithub size={24} />
        </a>
        &nbsp;
        <a href="https://twitter.com/namespacecomm">
          <FaTwitter size={24} />
        </a>
        <a href="https://whatsapp.com/channel/0029VabtgrVKLaHjzSXEL52f">
          <FaWhatsapp size={24} />
        </a>
        <a href="https://discord.gg/z2fTnXjKMm">
          <FaDiscord size={24} />
        </a>
        &nbsp;
        <a href="https://t.me/namespacecomm">
          <FaTelegram size={24} />
        </a>
        &nbsp;
        <a href="mailto:contact@namespacecomm.in">
          <FaEnvelope size={24} />
        </a>
        &nbsp;
        </div>
        
      </CenterText>
      <CenterText>© {year} The nameSpace Community and Organization</CenterText>
      <TrademarkText>
        "HACKHAZARDS", "TechXcelerate", "TechTrek", "AlgoRumble", "TechRumble",
        "Game of Codes", "nameSpace" and "The nameSpace Community" are the
        registered trademarks of The nameSpace Community Organization and its
        affiliates. All rights reserved.
      </TrademarkText>
    </Section>
  );
};

export default Footer;
