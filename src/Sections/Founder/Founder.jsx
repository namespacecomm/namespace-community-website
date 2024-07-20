import React from "react";
import styled from "styled-components";
import ImageCarousel from "../../utils/ImageCrousel";
import { founderImages } from "../../constants/constants";

const Section = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  ${""}
  ${""}
  background-color: #010116;
  @media only screen and (max-width: 768px) {
    height: 90vh;
  }
`;

const Container = styled.div`
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


const Left = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1030px) {
    align-items: center;
    text-align: center;
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

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  border-bottom: 3px solid #f5f5f5;
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

const Desc = styled.p`
  font-size: 18px;
  text-align: justify;
  color: lightgray;
  margin: auto 10%;
`;

const Founder = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Title>Founder's Note</Title>
          <Desc>
            
          </Desc>
        </Left>
        <Right>
          <ImageCarousel images={founderImages} />
        </Right>
      </Container>
    </Section>
  );
};

export default Founder;
