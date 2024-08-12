import React from "react";
import styled from "styled-components";
import ImageCarousel from "../../utils/ImageCrousel";
import { founderImages } from "../../constants/constants";

const Section = styled.div`
  width: 100%;
  margin-top: 2rem;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  ${""}
  ${""}
  background-color: #010116;
  @media only screen and (max-width: 768px) {
    
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
  font-size: 14px;
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
          It is always exciting to witness the growth and vibrancy of our community. What started as a small group of tech enthusiasts has blossomed into a dynamic and supportive network of learners, innovators, and professionals from around the Delhi-NCR region. Our journey began with a simple yet powerful vision: to create a space where budding technologists could explore, learn, and excel in various domains of technology. Today, we continue to build on that vision, driven by our core values of inclusivity, collaboration, and innovation.
          <br />
          <br />
          Our goal is to provide a clear path for those just starting their tech journeys, helping them navigate through the diverse fields of competitive programming, web development, machine learning, and more. I am immensely proud of what we have achieved together. Our community website, our flagship events, various internal programs and all our online events and resources are testaments to our collective efforts and shared passion for technology.
          <br />
          <br />
          Looking ahead, we are excited to continue expanding our reach and impact. We are exploring new initiatives, enhancing our existing programs, and constantly seeking ways to better serve our community members. Your feedback and participation are invaluable to us, and I encourage you to stay engaged, share your ideas, and help us shape the future of the nameSpace Community. Thank you for being an integral part of this journey. Together, we will continue to learn, grow, and make a difference in the tech world.
          <br />
          <br />
          ~ <a href="https://pradeeptosarkar.netlify.app/" target="_blank" without rel="noreferrer"  style={{ color: 'lightblue', textDecoration: 'underline', fontSize: '18px' }}>Pradeepto Sarkar</a>

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
