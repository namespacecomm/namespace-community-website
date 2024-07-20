import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import "./hero.css";
import About from "../About/About";
import Teams from "../Teams/Teams";
import Testimonials from "../Testimonials/Testimonials";
import Events from "../Events/Events";
import Contact from "../Contact/Contact";
import SocialMedia from "../SocialMedia/SocialMedia";
import BackToTopButton from "../../components/BackToTop";
// const Section = styled.div`
//   background-repeat: no-repeat;
//   background: no-repeat url("./img/bg.jpg");
//   ${'' /* scroll-snap-align: center;
//   scroll-behavior: smooth; */}
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   @media only screen and (max-width: 768px) {
//     height: 100vh;
//     width: 100%;
//     align-items: center;
//     justify-content: center;
//   }
// `;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: flex;
  ${
    "" /* background-color: rgb(9, 9, 121);
  background-repeat: no-repeat;
  background: linear-gradient(
    262deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(2, 0, 36, 1) 1%
  ); */
  }
  ${
    "" /* background-repeat: no-repeat;
  background: no-repeat url("./img/bg.jpg"); */
  }
  background-color: #010116;
  @media only screen and (max-width: 768px) {
    height: 100vh;
  }
`;

const Container = styled.div`
  height: 90vh;
  scroll-snap-align: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  padding: 9% 14%;
  @media only screen and (max-width: 1030px) {
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
  @media only screen and (max-width: 1030px) {
    flex: 1;
    align-items: center;
  }
  @media only screen and (min-width: 1030px) and (max-width: 1400px) {
    flex: 1;
    width: 50%;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 125px;
  font-weight: 700;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 1030px) {
    font-size: 125px;
  }
  @media only screen and (min-width: 1030px) and (max-width: 1400px) {
    font-size: 125px;
  }
  @media only screen and (max-width: 760px) {
    font-size: 50px;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  @media only screen and (min-width: 1030px) and (max-width: 1400px) {
    font-size: 50px;
  }
`;

const Subtitle = styled.p`
  margin-top: 5px;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  background: repeating-radial-gradient(
    circle farthest-side at center center,
    #3530cf 0%,
    #44cfcf 100%
  ); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  
  @media screen and (max-width: 424px) {
    font-size: 22px;
  }
  @media screen and (min-width: 425px) and (max-width: 768px) {
    font-size: 23px;
  }
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  text-align:center;
  
  @media only screen and (max-width: 1030px) {
    font-size: 17px;
    margin-top:5px;
    align-items: center;
    text-align: center;
  }
  @media only screen and (min-width: 1030px) and (max-width: 1400px) {
    margin-top:10px;
    font-size: 22px;
    align-items: center;
`;
const ShortDesc = styled.p`
  font-size: 32px;
  text-align:center;
  color: lightgray;
  padding-top: 8px;
  margin-top: 4px;

  @media only screen and (max-width: 1030px) {
    font-size: 26px;
  }
  @media only screen and (min-width: 1030px) and (max-width: 1400px) {
    font-size: 28px;
  }
  @media only screen and (max-width: 760px) {
  font-size: 16px;  
  text-align: center;
  }
`;

const Right = styled.div`
  flex: 2;
  justify-content: center;
  position: relative;
  @media only screen and (max-width: 1030px) {
    display: none;
  }
  @media only screen and (min-width: 1030px) and (max-width: 1400px) {
    flex: 1;
    width: 50%;
  }
`;

const Img = styled.iframe`
  width: 600px;
  height: 500px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  ${
    "" /* animation: animate 2s infinite ease alternate; */
  }// @media only screen and (max-width: 768px) {
  //   width: 300px;
  //   height: 300px;
  // }

  // @keyframes animate {
  //   to {
  //     transform: translateY(20px);
  //   }
  // }
`;

const Hero = () => {
  return (
    <>
      <Section>
        <Container>
          <Left>
            <Subtitle>THE</Subtitle>
            <Title>nameSpace</Title>
            <WhatWeDo>
              <Subtitle>COMMUNITY</Subtitle>
            </WhatWeDo>
            <ShortDesc><p><i>Infinite Horizons, One Community</i></p></ShortDesc>
            
            
          </Left>          
          <BackToTopButton />
        </Container>
        
      </Section>
      

      <div className="container">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>

          <Preload all />
        </Canvas>
      </div>
      
      <About />
      <Teams />
      <Events />
      <SocialMedia />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Hero;

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};
