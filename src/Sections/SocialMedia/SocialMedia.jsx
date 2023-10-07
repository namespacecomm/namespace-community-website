import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Section = styled.div`
  height: 100vh;
  background-color: #010116;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 5rem 0;

  @media only Screen and (max-width: 40em) {
    height: 120vh;
    margin: 0 auto;
  }
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

const SocialMedia = () => {

    return (
        <Section>
          {/* <Title>Social Media Pulse</Title> */}
          <h2 className="text-xl  md:text-4xl lg:text-5xl font-bold">
              Social Media{" "}
              <span className="text-xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
                <a href="https://linktr.ee/nscc_bpit">Pulse</a>
              </span>
            </h2>
        </Section>
      );
};

export default SocialMedia;
