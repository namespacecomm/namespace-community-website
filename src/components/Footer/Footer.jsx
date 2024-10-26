import { useState } from "react";
import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
  FaYoutube,
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

const RightText = styled.div`
  text-align: right;
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

const LeftText = styled.div`
  text-align: left;
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

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <Section>
      <CenterText>
        Made with ❤️ by{" "}
        <a
          href="https://github.com/namespacecomm/namespacecomm-community-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Team nameSpace
        </a>
      </CenterText>
      <div
        style={{
          display: "flex",
          flexDirection: window.innerWidth >= 1024 ? "row" : "column",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <LeftText>
          <p>Reach out to us: </p>
          <SocialIcons>
            <a
              href="mailto:namespacecomm.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={24} />
            </a>
            <p>contact@namespacecomm.in</p>
          </SocialIcons>
          <p>Follow us on</p>
          <SocialIcons>
            <a
              href="http://instagram.com/namespacecomm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="http://www.linkedin.com/company/namespacecomm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.youtube.com/@namespacecomm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://github.com/namespacecomm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://twitter.com/namespacecomm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href="https://whatsapp.com/channel/0029VabtgrVKLaHjzSXEL52f"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://discord.gg/z2fTnXjKMm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord size={24} />
            </a>
            <a
              href="https://t.me/namespacecomm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram size={24} />
            </a>
          </SocialIcons>
        </LeftText>
        <RightText
          style={{
            marginTop: window.innerWidth >= 1024 ? "" : "20px", // Remove margin for large screens
            textAlign: window.innerWidth >= 1024 ? "right" : "left",
          }}
        >
          <p>
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "inherit", // Keep the text color unchanged
              }}
            >
              Partner with us
            </a>
          </p>
          <p>
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "inherit", // Keep the text color unchanged
              }}
            >
              Brand Guidelines
            </a>
          </p>
          <p>
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "inherit", // Keep the text color unchanged
              }}
            >
              Code of Conduct
            </a>
          </p>
          <p>
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "inherit", // Keep the text color unchanged
              }}
            >
              Privacy Policy
            </a>
          </p>
        </RightText>
      </div>

      <CenterText>© {year} The nameSpace Community and Organization</CenterText>
    </Section>
  );
};

export default Footer;
