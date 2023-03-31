import React, { Suspense } from "react";
import styled from "styled-components";
import ImageCarousel from "../../utils/ImageCrousel";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1.5;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  font-weight: bold;
  background: #3530cf;
  background: repeating-radial-gradient(
    circle farthest-side at center center,
    #3530cf 0%,
    #44cfcf 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  text-align: justify;
  color: lightgray;
`;

const About = () => {
  const images = [
    { src: "./img/2.jpg", alt: "Image 1" },
    { src: "./img/3.jpg", alt: "Image 2" },
    { src: "./img/4.jpg", alt: "Image 3" },
    { src: "./img/5.jpg", alt: "Image 4" },
  ];
  return (
    <Section>
      <Container>
        <Left>
          <ImageCarousel images={images} />
        </Left>
        <Right>
          <Title>About NSCC BPIT</Title>
          {/* <WhatWeDo>
            <Subtitle>Who we Are</Subtitle>
          </WhatWeDo> */}
          <Desc>
            NSCC BPIT is a community of like-minded individuals who share a
            passion for technology and are committed to helping each other
            become the best developers they can be. Whether you're just starting
            out in your coding journey or you're a seasoned pro, our society is
            a place where you can connect with other tech enthusiasts, share
            your knowledge, and grow your skills.
          </Desc>
        </Right>
      </Container>
    </Section>
  );
};

export default About;
