import React from "react";
import styled from "styled-components";
import ImageCarousel from "../../utils/ImageCrousel";
import { images } from "../../constants/constants";

const Section = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  ${
    "" /* background: rgb(9, 9, 121);
  background: linear-gradient(
    262deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(2, 0, 36, 1) 1%
  ); */
  }
  ${"" /* background: no-repeat url("./img/bg.jpg"); */}
  background-color: #010116;
  @media only screen and (max-width: 768px) {
    height: 80vh;
  }
`;

const Container = styled.div`
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

  @media only screen and (max-width: 1030px) {
    display: none;
  }
`;

const Title = styled.h1`
font-size:40px;
  font-weight: bold;
  border-bottom:3px solid #F5F5F5;
  margin: auto 10%;
  background: #3530cf;
  background: repeating-radial-gradient(
    circle farthest-side at center center,
    #3530cf 0%,
    #44cfcf 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 1030px) {
    font-size: 30px;
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

const Desc = styled.p`
  font-size: 22px;
  text-align: justify;
  color: lightgray;
  margin: auto 10%;
`;

const About = () => {
  return (
    <>
      <Section>
        <Container>
          <Left>
            <ImageCarousel images={images} />
          </Left>
          <Right>
            <Title>About NSCC BPIT</Title>
            <Desc>
              NSCC BPIT is a community of like-minded individuals who share a
              passion for technology and are committed to helping each other
              become the best developers they can be. Whether you're just
              starting out in your coding journey or a seasoned pro, our society
              is a place where you can connect with other tech enthusiasts,
              share your knowledge, and grow your skills. Founded in 2022, NSCC
              BPIT has quickly grown to become one of the leading NSCC chapters
              in India.
            </Desc>
          </Right>
        </Container>
      </Section>
    </>
  );
};

export default About;
