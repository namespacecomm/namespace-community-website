import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import "./hero.css";
import CountUp from "react-countup";
import About from "../About/About";
import Teams from "../Teams/Teams";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";
import SocialMedia from "../SocialMedia/SocialMedia";
import BackToTopButton from "../../components/BackToTop";
import Founder from "../Founder/Founder";
import Frame8 from "../../assets/Frame8.png";
import Frame12 from "../../assets/Frame12.png";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: flex;
  ${""}
  ${""}
  background-color: #010116;
`;

const Container = styled.div`
  scroll-snap-align: start;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5%;
  margin-top: 10px;
  padding: 10% 5%;
  @media only screen and (max-width: 768px) {
    padding: 25% 5%;
  }
`;

const UpperContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 5% 5%;
`;

const LowerContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10%;
  padding: 5% 5%;
  gap: 1.5rem;
  align-items: center;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 700;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 1030px) {
    font-size: 60px;
  }
  @media only screen and (min-width: 1030px) and (max-width: 1400px) {
    font-size: 60px;
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
  font-size: 32px;
  font-weight: bold;
  background: repeating-radial-gradient(
    circle farthest-side at center center,
    #3530cf 0%,
    #44cfcf 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 424px) {
    font-size: 24px;
  }
  @media screen and (min-width: 425px) and (max-width: 768px) {
    font-size: 24px;
  }
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  text-align:justify;
  
  @media only screen and (max-width: 1030px) {
    font-size: 17px;
    margin-top:5px;
    align-items: center;
  }
  @media only screen and (min-width: 1030px) and (max-width: 1400px) {
    margin-top:10px;
    font-size: 22px;
    align-items: center;
`;
const ShortDesc = styled.p`
  font-size: 32px;
  text-align: center;
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

const Hero = () => {
  return (
    <>
      <BackToTopButton />
      <Section>
        <Container>
          <UpperContainer>
            <img className="hero-logo" src={Frame12} alt="Frame12" />
          </UpperContainer>
          <LowerContainer>
            <div className="counter-item">
              <CountUp
                start={0}
                end={15000}
                duration={4}
                suffix="+ "
                enableScrollSpy="true"
                className=""
                style={{ fontSize: "2.5vw" }}
              />
              <p className="" style={{ fontSize: "2.5vw" }}>
                Participants Reached Nationally
              </p>
            </div>

            <div className="counters-grid">
              <div className="counter-item">
                <CountUp
                  start={0}
                  end={4}
                  duration={4}
                  suffix=""
                  enableScrollSpy="true"
                  className="counters"
                />
                <p className="counters">Flagship National Events</p>
              </div>
              <div className="counter-item">
                <CountUp
                  start={0}
                  end={100}
                  duration={4}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p className="counters">Major and Minor Events</p>
              </div>
              <div className="counter-item">
                <CountUp
                  start={0}
                  end={250}
                  duration={4}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p className="counters">Institutions Reached</p>
              </div>
              <div className="counter-item">
                <CountUp
                  start={0}
                  end={50}
                  duration={4}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p className="counters">Community Partners</p>
              </div>
              <div className="counter-item">
                <CountUp
                  start={0}
                  end={100}
                  duration={4}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p className="counters">Ambassadors and Evangelists</p>
              </div>
              <div className="counter-item">
                <CountUp
                  start={0}
                  end={25}
                  duration={4}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p className="counters">Indian States and UTs</p>
              </div>
              <div className="counter-item">
                <CountUp
                  start={0}
                  end={10}
                  duration={4}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p className="counters">Countries Reached</p>
              </div>
              <div className="counter-item">
                <CountUp
                  start={0}
                  end={50}
                  duration={4}
                  suffix="+"
                  enableScrollSpy="true"
                  className="counters"
                />
                <p className="counters">Sponsors and Partners</p>
              </div>
            </div>

            <div>
              <Subtitle>Building India's largest tech community</Subtitle>
              <Subtitle>One event at a time</Subtitle>
            </div>

            <Desc>
              We are a community of hackers, developers, designers, and
              innovators who are passionate about technology. We aim to bridge
              the gap between academics and industry and provide a platform for
              students to learn, build, and grow with the help of national-level
              events, workshops, and programs.
            </Desc>
          </LowerContainer>
          <div
            className="who-we-are-container"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              backgroundColor: "#e3f2fd", // Light blue background
              marginTop: "20px",
              width: window.innerWidth >= 1024 ? "80vw" : "90vw",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Enhanced shadow
            }}
          >
            <p
              className="who-we-are-title"
              style={{
                fontSize: window.innerWidth > 1024 ? "26px" : "20px",
                color: "#1e88e5", // Bright blue for title
                fontWeight: "bold",
                marginBottom: "15px",
                textAlign: "center", // Center align title
              }}
            >
              Who We Are?
            </p>

            <p
              style={{
                fontSize: "18px",
                color: "#333",
                lineHeight: "1.6",
                marginTop: "10px",
                textAlign: "justify",
              }}
            >
              The nameSpace Community is an events driven and community focused
              organization of tech enthusiasts, developers, innovators,
              professionals, and students who share a mutual passion for
              technology and are committed to helping each other become better
              at whatever their aspirations are.
              <br />
              <br />
              We focus on conducting large scale technical events including
              hackathons, boot camps, workshops, seminars, webinars, meetups,
              contests, etc., to provide a learning experience to all community
              members.
            </p>
          </div>

          <div
            className="what-we-do-container"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              backgroundColor: "#e3f2fd", // Light blue background
              marginTop: "20px",
              width: window.innerWidth >= 1024 ? "80vw" : "90vw",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Enhanced shadow
            }}
          >
            <p
              className="what-we-do-title"
              style={{
                fontSize: window.innerWidth > 1024 ? "26px" : "20px",
                color: "#1e88e5", // Bright blue for title
                fontWeight: "bold",
                marginBottom: "15px",
                textAlign: "center", // Center align title
              }}
            >
              What We Do?
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  window.innerWidth >= 1024
                    ? "repeat(3, 1fr)"
                    : "repeat(1, 1fr)",
                gap: "20px",
                marginTop: "10px",
              }}
            >
              {[
                "We organize national-level events that are attended by thousands of participants and are open to all members of the community.",
                "We bridge the gap between technical education and industry by promoting learning through various boot-camps, workshops, and initiatives.",
                "We provide tailor-made programs to select members who are students and part of any of our nameSpace chapters.",
              ].map((point, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "#ffffff", // White background for tiles
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                    textAlign: "justify",
                    color: "#000",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transitions
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 10px rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 5px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div
            className="events-container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              background: "linear-gradient(to right, #4dd0e1, #80deea)", // Gradient background
              marginTop: "10%",
              width: window.innerWidth >= 1024 ? "80vw" : "90vw",
              padding: "40px",
              borderRadius: "10px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)", // Deeper shadow for more impact
            }}
          >
            <h2
              style={{
                fontSize: window.innerWidth > 1024 ? "36px" : "30px",
                color: "#004d40", // Dark teal for title
                fontWeight: "bold",
                marginBottom: "30px",
                textAlign: "center",
                textTransform: "uppercase", // Uppercase for emphasis
                letterSpacing: "1px", // Spacing for modern look
              }}
            >
              Our National Flagship Events
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "20px",
                width: "100%",
              }}
            >
              {[
                {
                  title: "Algorena",
                  description:
                    "A multiple round competitive programming contest for all skill levels.",
                  icon: "💻",
                },
                {
                  title: "HACKHAZARDS",
                  description:
                    "One of India's largest and premier student hackathons.",
                  icon: "🚀",
                },
                {
                  title: "Season of Open Source",
                  description:
                    "A celebration of open-source projects and collaboration.",
                  icon: "🌍",
                },
                {
                  title: "TechXcelerate",
                  description:
                    "A 10-day long programme focused on accelerating tech skills for beginners.",
                  icon: "📚",
                },
              ].map((event, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "#004d40", // Unified dark teal background for all tiles
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
                    textAlign: "center",
                    transition:
                      "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 15px rgba(0, 0, 0, 0.2)";
                    e.currentTarget.style.backgroundColor = "#00796b"; // Change to a lighter teal on hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 10px rgba(0, 0, 0, 0.15)";
                    e.currentTarget.style.backgroundColor = "#004d40"; // Revert to original color
                  }}
                >
                  <div style={{ fontSize: "40px", marginBottom: "10px" }}>
                    {event.icon}
                  </div>{" "}
                  {/* Icon */}
                  <h3
                    style={{
                      fontSize: "22px",
                      color: "#fff",
                      marginBottom: "10px",
                    }}
                  >
                    {event.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#fff",
                      lineHeight: "1.4",
                    }}
                  >
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* <div className="container">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
          <Preload all />
        </Canvas>
      </div> */}

      {/* <About />
      <SocialMedia /> */}
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
};

export default Hero;

/* const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  ); */

/* useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  }); */

/* return (
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
*/
