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
`;

const Container = styled.div`
  scroll-snap-align: center;
  width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Left = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: auto 5%;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto 5%;
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
  
  background: #3530cf;
  background: repeating-radial-gradient(
    circle farthest-side at center center,
    #3530cf 0%,
    #44cfcf 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media only screen and (max-width: 1030px) {
    font-size: 30px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: justify;
  color: lightgray;
  
   @media (max-width: 768px) {
      padding-left: 10px;
      font-size: 16px;
    }
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
            <Title>About nameSpace</Title>
            <Desc>
              The nameSpace Community is an organization of like-minded
              individuals who share a passion for technology and are committed
              to helping each other become the best developers they can be.
              Whether you're just starting out in your coding journey or a
              seasoned pro, our community is a place where you can connect with
              other tech enthusiasts, share your knowledge, and grow your
              skills. Founded in 2022, nameSpace has quickly grown to become one
              of the largest technical communities in Delhi-NCR and is racing towards
              further expansion across India. 
            </Desc>
          </Right>
        </Container>
      </Section>
    </>
  );
};

export default About;
