import React, { Suspense } from "react";
import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import "./hero.css";
import Navbar from "./Navbar/Navbar.jsx";

const Section = styled.div`
  height: 100vh;
  background-repeat: no-repeat;
  background: no-repeat url("./img/bg.jpg");
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;

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
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 50px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 40px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.p`
  font-size: 84px;
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
    font-size: 64px;
  }
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex:1;
    
  }
`;

const Img = styled.iframe`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  ${"" /* animation: animate 2s infinite ease alternate; */}

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <>
      <Section>
        <Navbar />
        <Container>
          <Left>
            <Title>Newton School</Title>
            <WhatWeDo>
              <Subtitle>Coding Club</Subtitle>
            </WhatWeDo>
            <Desc>Bhagwan Parshuram Institute of Technology,Delhi</Desc>
          </Left>
          <Right>
            {/* <Img src="./img/logo.png" /> */}
            <Img src="https://embed.lottiefiles.com/animation/84832"></Img>
          </Right>
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
