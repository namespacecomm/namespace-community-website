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

  @media only screen and (max-width: 768px) {
    width: 90vw;
    height: 250px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const SocialMedia = () => {
  return (
    <>
      <h2 className="mt-[100px] text-2xl text-center md:text-4xl lg:text-5xl font-bold">
        Social Media{" "}
        <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
          <a href="https://linktr.ee/nscc_bpit">Pulse</a>
        </span>
      </h2>
      <Section>
        {/* <Title>Social Media Pulse</Title> */}
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center">
          {/* ------------------------------ techaccelarate -------------------------------------- */}
          <YoutubeFrame src="https://www.youtube.com/embed/eWc6eVcaLyw?si=31OyRSxMHwvNhvUE"/>
          <YoutubeFrame src="https://www.youtube.com/embed/yUD27BJf5ag?si=D6mMdihaQc5a4h6d" />
          <YoutubeFrame src="https://www.youtube.com/embed/TrPl1K4UBXI?si=hyQjEEqEAIJE-JxT" />
          
        </div>
      </Section>
    </>
  );
};

export default SocialMedia;


