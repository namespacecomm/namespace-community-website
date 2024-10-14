import { useState } from "react";
import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
  FaYoutube
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styled from "styled-components";

const Section = styled.footer`
  padding: 2rem 1.5rem;
  background-color: #010116;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CenterText = styled.div`
  text-align: center;
  width: 100%;
  margin: 20px 0;

  @media (max-width: 768px) {
    margin: 16px 0;
  }

  p {
    margin-bottom: 0.8rem;
    font-size: 1.1rem;
  }

  a {
    color: pink;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      color: #ff9dfd;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;

  a {
    color: #fff;
    transition: transform 0.3s, color 0.3s;

    &:hover {
      color: #ff9dfd;
      transform: scale(1.2);
    }
  }

  @media (max-width: 768px) {
    gap: 0.8rem;
  }
`;

const TrademarkText = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 0.85rem;
  color: #888;
  line-height: 1.5;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <Section>
      <CenterText>
        Made with ❤️ and 🧠 by{" "}
        <a
          href="https://github.com/namespacecomm/NSCC-BPIT-Website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Team nameSpace
        </a>
      </CenterText>
      <CenterText>
        <p>Reach out to us via</p>
        <SocialIcons>
          <a href="http://instagram.com/namespacecomm" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="http://www.linkedin.com/company/namespacecomm/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.youtube.com/@namespacecomm" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={24} />
          </a>
          <a href="https://github.com/namespacecomm" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://twitter.com/namespacecomm" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={24} />
          </a>
          <a href="https://whatsapp.com/channel/0029VabtgrVKLaHjzSXEL52f" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={24} />
          </a>
          <a href="https://discord.gg/z2fTnXjKMm" target="_blank" rel="noopener noreferrer">
            <FaDiscord size={24} />
          </a>
          <a href="https://t.me/namespacecomm" target="_blank" rel="noopener noreferrer">
            <FaTelegram size={24} />
          </a>
          <a href="mailto:contact@namespacecomm.in" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={24} />
          </a>
        </SocialIcons>
      </CenterText>
      <CenterText>© {year} The nameSpace Community and Organization</CenterText>
      <TrademarkText>
        "HACKHAZARDS", "TechXcelerate", "TechTrek", "AlgoRumble", "TechRumble", "Game of Codes", "nameSpace" and "The nameSpace Community" are the registered trademarks of The nameSpace Community Organization and its affiliates. All rights reserved.
      </TrademarkText>
    </Section>
  );
};

export default Footer;
