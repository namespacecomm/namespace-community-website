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
import PartnerWithUs from "./PartnerWithUs";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Users,
  Award,
  Briefcase,
  Code,
  MessageSquare,
  Trophy,
  UserPlus,
  Github,
  Coffee,
  Star,
  Laptop,
  Calendar,
  Globe,
  Rocket,
  Target,
  Sparkles,
  Building2,
  UserCheck,
  Network,
  Package,
  Megaphone,
  GraduationCap,
  HeartHandshake,
  ChevronDown,
} from "lucide-react";

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

const benefits = [
  {
    title: "Community Connections",
    description:
      "Build a network with passionate students, tech enthusiasts, and industry experts to foster meaningful collaborations.",
    icon: Users,
    gradient: "from-blue-600 to-blue-800",
  },
  {
    title: "Comprehensive Skill Growth",
    description:
      "Engage in hands-on workshops and programs like TechXcelerate, designed to build real-world tech skills across various domains.",
    icon: BookOpen,
    gradient: "from-blue-700 to-blue-900",
  },
  {
    title: "Exclusive Member Resources",
    description:
      "Access specialized resources, mentorship sessions, and insider guides tailored to support your journey in tech.",
    icon: Award,
    gradient: "from-blue-600 to-blue-800",
  },
  {
    title: "Career-Ready Opportunities",
    description:
      "Step confidently into the tech industry with access to internships, job prep resources, and placement support.",
    icon: Briefcase,
    gradient: "from-blue-700 to-blue-900",
  },
  {
    title: "Collaborative Projects",
    description:
      "Work on exciting team projects that encourage collaboration, creativity, and practical application of skills.",
    icon: Code,
    gradient: "from-blue-600 to-blue-800",
  },
  {
    title: "Industry Insights",
    description:
      "Gain firsthand knowledge from guest speakers and industry professionals through exclusive talks and Q&A sessions.",
    icon: MessageSquare,
    gradient: "from-blue-700 to-blue-900",
  },
  {
    title: "Event Participation",
    description:
      "Take part in hackathons, coding competitions, and community events that challenge your skills and expand your experience.",
    icon: Trophy,
    gradient: "from-blue-600 to-blue-800",
  },
  {
    title: "Mentorship Programs",
    description:
      "Connect with experienced mentors who provide guidance, support, and advice tailored to your career goals.",
    icon: UserPlus,
    gradient: "from-blue-700 to-blue-900",
  },
  {
    title: "Open Source Contributions",
    description:
      "Get involved in open-source projects that enhance your skills while contributing to the global tech community.",
    icon: Github,
    gradient: "from-blue-600 to-blue-800",
  },
  {
    title: "Social Events",
    description:
      "Participate in fun social activities and networking events to build friendships and strengthen community bonds.",
    icon: Coffee,
    gradient: "from-blue-700 to-blue-900",
  },
  {
    title: "Certification Opportunities",
    description:
      "Earn certifications through various programs, showcasing your skills and enhancing your resume.",
    icon: Star, // Changed from Certificate to Star
    gradient: "from-blue-600 to-blue-800",
  },
  {
    title: "Access to Learning Platforms",
    description:
      "Utilize premium learning resources and platforms available exclusively to community members.",
    icon: Laptop,
    gradient: "from-blue-700 to-blue-900",
  },
];

const events = [
  {
    title: "Algorena",
    description:
      "A multiple round competitive programming contest for all skill levels.",
    icon: (
      <Code className="w-12 h-12 mb-4 text-blue-100 group-hover:text-yellow-300 transition-all duration-500" />
    ),
    gradient: "bg-gradient-to-br from-blue-600 via-indigo-700 to-violet-800",
  },
  {
    title: "HACKHAZARDS",
    description: "One of India's largest and premier student hackathons.",
    icon: (
      <Rocket className="w-12 h-12 mb-4 text-purple-100 group-hover:text-yellow-300 transition-all duration-500" />
    ),
    gradient: "bg-gradient-to-br from-purple-600 via-pink-700 to-rose-800",
  },
  {
    title: "Season of Open Source",
    description: "A celebration of open-source projects and collaboration.",
    icon: (
      <Globe className="w-12 h-12 mb-4 text-teal-100 group-hover:text-yellow-300 transition-all duration-500" />
    ),
    gradient: "bg-gradient-to-br from-teal-600 via-cyan-700 to-blue-800",
  },
  {
    title: "TechXcelerate",
    description:
      "A 10-day long programme focused on accelerating tech skills for beginners.",
    icon: (
      <Calendar className="w-12 h-12 mb-4 text-emerald-100 group-hover:text-yellow-300 transition-all duration-500" />
    ),
    gradient: "bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800",
  },
];

const whatWeDoPoints = [
  {
    text: "We organize national-level events that are attended by thousands of participants and are open to all members of the community.",
    icon: (
      <Users className="w-8 h-8 mb-4 text-blue-500 group-hover:text-white transition-all duration-300" />
    ),
    gradient: "bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500",
  },
  {
    text: "We bridge the gap between technical education and industry by promoting learning through various boot-camps, workshops, and initiatives.",
    icon: (
      <Target className="w-8 h-8 mb-4 text-blue-500 group-hover:text-white transition-all duration-300" />
    ),
    gradient: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
  },
  {
    text: "We provide tailor-made programs to select members who are students and part of any of our nameSpace chapters.",
    icon: (
      <Sparkles className="w-8 h-8 mb-4 text-blue-500 group-hover:text-white transition-all duration-300" />
    ),
    gradient: "bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500",
  },
];

const Hero = () => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <>
      <BackToTopButton />
      <Section>
        <Container>
          <UpperContainer>
            <img className="hero-logo" src={Frame12} alt="Frame12" />
          </UpperContainer>
          <LowerContainer>
            <div className="w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto"
              >
                <div className="text-center mb-16">
                  <div className="mb-8">
                    <CountUp
                      start={0}
                      end={15000}
                      duration={4}
                      suffix="+ "
                      enableScrollSpy={true}
                      className="text-5xl md:text-6xl font-bold text-blue-400"
                    />
                    <p className="text-2xl md:text-3xl mt-2 text-gray-300">
                      Participants Reached Nationally
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {[
                      { end: 4, label: "Flagship National Events" },
                      {
                        end: 100,
                        suffix: "+",
                        label: "Major and Minor Events",
                      },
                      { end: 250, suffix: "+", label: "Institutions Reached" },
                      { end: 50, suffix: "+", label: "Community Partners" },
                      {
                        end: 100,
                        suffix: "+",
                        label: "Ambassadors and Evangelists",
                      },
                      { end: 25, suffix: "+", label: "Indian States and UTs" },
                      { end: 10, suffix: "+", label: "Countries Reached" },
                      { end: 50, suffix: "+", label: "Sponsors and Partners" },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                      >
                        <CountUp
                          start={0}
                          end={stat.end}
                          duration={4}
                          suffix={stat.suffix || ""}
                          enableScrollSpy={true}
                          className="text-3xl md:text-4xl font-bold text-blue-400"
                        />
                        <p className="text-sm md:text-base mt-2 text-gray-300">
                          {stat.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                  >
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                      Building India's largest tech community
                    </h2>
                    <h3 className="text-xl md:text-2xl text-gray-400">
                      One event at a time
                    </h3>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-lg text-gray-300 max-w-3xl mx-auto"
                  >
                    We are a community of hackers, developers, designers, and
                    innovators who are passionate about technology. We aim to
                    bridge the gap between academics and industry and provide a
                    platform for students to learn, build, and grow with the
                    help of national-level events, workshops, and programs.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </LowerContainer>
          <div className="w-full max-w-7xl mx-auto p-4 space-y-8">
            {/* Who We Are Section */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-12">
              {/* Background pattern */}
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='1' fill='%23CBD5E1'/%3E%3C/svg%3E")`,
                  backgroundSize: "40px 40px",
                  maskImage: "linear-gradient(0deg,transparent,black)",
                }}
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    "radial-gradient(circle at 100% 100%, #4f46e5 0, transparent 40%), radial-gradient(circle at 0% 0%, #06b6d4 0, transparent 40%)",
                  backgroundBlendMode: "overlay",
                }}
              />

              <div className="relative z-10">
                <h2
                  className="text-3xl md:text-4xl font-bold text-center mb-8"
                  style={{
                    background:
                      "linear-gradient(-45deg, #1e40af, #3b82f6, #06b6d4)",
                    backgroundSize: "200% 200%",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    animation: "6s linear infinite alternate",
                    animationName: "gradient",
                    animationTimingFunction: "ease",
                  }}
                >
                  Who We Are?
                </h2>

                <p
                  className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto"
                  style={{
                    transform: "translateY(20px)",
                    opacity: 0,
                    animation: "0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
                    animationName: "slideUp",
                    animationDelay: "0.3s",
                  }}
                >
                  <span className="font-semibold text-blue-600">
                    The nameSpace Community
                  </span>{" "}
                  is an events driven and community focused organization of tech
                  enthusiasts, developers, innovators, professionals, and
                  students who share a mutual passion for technology and are
                  committed to helping each other become better at whatever
                  their aspirations are.
                </p>

                <p
                  className="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto"
                  style={{
                    transform: "translateY(20px)",
                    opacity: 0,
                    animation: "0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
                    animationName: "slideUp",
                    animationDelay: "0.6s",
                  }}
                >
                  We focus on conducting large scale technical events including
                  hackathons, boot camps, workshops, seminars, webinars,
                  meetups, contests, etc., to provide a learning experience to
                  all community members.
                </p>
              </div>
            </div>

            {/* What We Do Section */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 p-8 md:p-12">
              {/* Background pattern */}
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='1' fill='%23CBD5E1'/%3E%3C/svg%3E")`,
                  backgroundSize: "40px 40px",
                  maskImage: "linear-gradient(0deg,transparent,black)",
                }}
              />

              <div className="relative z-10">
                <h2
                  className="text-3xl md:text-4xl font-bold text-center mb-12"
                  style={{
                    background:
                      "linear-gradient(-45deg, #1e40af, #3b82f6, #06b6d4)",
                    backgroundSize: "200% 200%",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    animation: "6s linear infinite alternate",
                    animationName: "gradient",
                    animationTimingFunction: "ease",
                  }}
                >
                  What We Do?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {whatWeDoPoints.map((point, index) => (
                    <div
                      key={index}
                      className={`group relative overflow-hidden rounded-xl p-6 bg-white ${point.gradient} 
                           hover:bg-opacity-100 bg-opacity-0 transition-all duration-500`}
                      style={{
                        transform: "translateY(20px)",
                        opacity: 0,
                        animation: "0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
                        animationName: "slideUp",
                        animationDelay: `${index * 0.2}s`,
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform =
                          "scale(1.05) rotate(-1deg)";
                        e.currentTarget.style.boxShadow =
                          "0 10px 30px rgba(0, 0, 0, 0.15)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform =
                          "scale(1) rotate(0deg)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 20px rgba(0, 0, 0, 0.1)";
                      }}
                    >
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                        style={{
                          background:
                            "radial-gradient(circle at 50% 0%, white, transparent 70%)",
                        }}
                      />

                      <div className="relative z-10">
                        <div className="flex justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                          {point.icon}
                        </div>
                        <p className="text-slate-700 group-hover:text-white transition-colors duration-300 text-center">
                          {point.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <style jsx>{`
              @keyframes gradient {
                0% {
                  background-position: 0% 50%;
                }
                50% {
                  background-position: 100% 50%;
                }
                100% {
                  background-position: 0% 50%;
                }
              }
              @keyframes slideUp {
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>
          </div>

          <div className="w-full max-w-7xl mx-auto px-4 py-16 bg-slate-900 rounded-3xl relative overflow-hidden">
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at center center, rgb(255, 255, 255, 0.05) 0%, rgb(255, 255, 255, 0.05) 1%, transparent 1%, transparent 100%)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10">
              <div className="text-center mb-16">
                <h2
                  className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(-45deg, #3b82f6, #8b5cf6, #d946ef)",
                    backgroundSize: "200% 200%",
                    animation: "gradient 6s linear infinite",
                  }}
                >
                  Our Flagship National Events
                </h2>
                <p
                  className="text-slate-300 text-lg max-w-2xl mx-auto"
                  style={{
                    animation: "fadeIn 1s forwards",
                    opacity: 0,
                  }}
                >
                  Join us in these transformative experiences that shape the
                  future of technology
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className={`group relative overflow-hidden rounded-2xl p-6 ${event.gradient}
                transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
                    style={{
                      opacity: 0,
                      animation: `fadeIn 0.5s forwards ${index * 0.15}s`,
                      transformOrigin: "center",
                    }}
                  >
                    {/* Glow effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 0%, white, transparent 70%)",
                      }}
                    />

                    <div className="relative z-10 flex flex-col items-center text-center h-full">
                      {/* Icon container with hover animation */}
                      <div className="transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                        {event.icon}
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 transition-colors duration-500 group-hover:text-yellow-300">
                        {event.title}
                      </h3>

                      <p className="text-slate-100 leading-relaxed transition-colors duration-500 group-hover:text-white">
                        {event.description}
                      </p>

                      {/* Animated border bottom */}
                      <div
                        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"
                        style={{
                          transform: "scaleX(0)",
                          transformOrigin: "left",
                          transition: "transform 0.5s ease",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <style jsx>{`
              @keyframes gradient {
                0% {
                  background-position: 0% 50%;
                }
                50% {
                  background-position: 100% 50%;
                }
                100% {
                  background-position: 0% 50%;
                }
              }
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              .group:hover .absolute.bottom-0 {
                transform: scaleX(1);
              }
            `}</style>
          </div>

          <div
            className="join-container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              background: "#F5F5F5", // Light grey background
              marginTop: "10%",
              width: window.innerWidth >= 1024 ? "80vw" : "90vw",
              padding: "40px",
              borderRadius: "10px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)", // Deeper shadow
            }}
          >
            <h2
              style={{
                fontSize: window.innerWidth > 1024 ? "36px" : "30px",
                color: "#0D47A1", // Dark blue
                fontWeight: "bold",
                marginBottom: "30px",
                textAlign: "center",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Why Join Us
            </h2>

            <div className="max-w-7xl mx-auto p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className={`relative group bg-gradient-to-br ${benefit.gradient} 
                         rounded-xl p-6 transform transition-all duration-300 
                         hover:scale-105 hover:shadow-2xl 
                         hover:rotate-1 cursor-pointer overflow-hidden`}
                    >
                      {/* Animated background effect */}
                      <div
                        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 
                            transition-opacity duration-300"
                      ></div>

                      {/* Glowing orb effect */}
                      <div
                        className="absolute -right-8 -top-8 w-24 h-24 bg-yellow-400 
                            rounded-full blur-xl opacity-30 group-hover:opacity-50 
                            transition-all duration-300 group-hover:scale-150"
                      ></div>

                      {/* Icon with animation */}
                      <div
                        className="relative mb-4 transform transition-transform duration-300 
                            group-hover:scale-110 group-hover:rotate-12"
                      >
                        <Icon className="w-10 h-10 text-yellow-400" />
                      </div>

                      {/* Title with glow effect */}
                      <h3
                        className="relative text-xl font-bold text-yellow-400 mb-3 
                           transition-all duration-300 group-hover:text-yellow-300 
                           group-hover:shadow-glow"
                      >
                        {benefit.title}
                      </h3>

                      {/* Description with fade-in effect */}
                      <p
                        className="relative text-gray-100 text-sm leading-relaxed 
                          opacity-90 group-hover:opacity-100 transition-opacity 
                          duration-300"
                      >
                        {benefit.description}
                      </p>

                      {/* Interactive corner accent */}
                      <div
                        className="absolute bottom-0 right-0 w-12 h-12 
                            bg-gradient-to-br from-yellow-400/20 to-transparent 
                            transform rotate-45 translate-x-6 translate-y-6 
                            group-hover:scale-150 transition-transform duration-300"
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <PartnerWithUs />
        </Container>
      </Section>
    </>
  );
};

export default Hero;
