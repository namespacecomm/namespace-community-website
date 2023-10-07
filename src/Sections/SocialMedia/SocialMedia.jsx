import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import TwitterBlockquote from "./Twitter";

const Section = styled.div`
  height: 100%;
  background-color: #010116;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between;
  align-items: center; */
  width: 100%;
  margin: 2rem 0;
`;

const Title = styled.h1`
  color: white;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  font-style: italic;
  margin-top: 1.5rem;
  border-bottom: 3px solid #f5f5f5;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--purple);
  }
`;

const YoutubeFrame = styled.iframe`
  width: 30vw;
  height: 350px;
  margin-right: 50;
`;

const SocialMedia = () => {
  return (
    <>
      <h2 className="text-xl text-center md:text-4xl lg:text-5xl font-bold">
        Social Media{" "}
        <span className="text-xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
          <a href="https://linktr.ee/nscc_bpit">Pulse</a>
        </span>
      </h2>
      <Section>
        {/* <Title>Social Media Pulse</Title> */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {/* ------------------------------ techaccelarate -------------------------------------- */}
          <YoutubeFrame src="https://www.youtube.com/embed/eWc6eVcaLyw?si=31OyRSxMHwvNhvUE" />
          <YoutubeFrame src="https://www.youtube.com/embed/aezbGftYJhA?si=FmWgiuoasWQxyXze" />
          <YoutubeFrame src="https://www.youtube.com/embed/TrPl1K4UBXI?si=hyQjEEqEAIJE-JxT" />
          
        </div>
      </Section>
    </>
  );
};

export default SocialMedia;


