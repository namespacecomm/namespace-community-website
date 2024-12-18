import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import "./hero.css";
import CountUp from "react-countup";
import BackToTopButton from "../../components/BackToTop";
import Frame44 from "../../assets/Frame44.png";
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
  Newspaper,
  Building2,
  UserCheck,
  Network,
  Package,
  Megaphone,
  GraduationCap,
  HeartHandshake,
  ChevronDown,
} from "lucide-react";
import { BsDiscord } from "react-icons/bs";
import Founder from "../../components/Founder/Founder";

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
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);

  @media only screen and (min-width: 1024px) {
    padding: 2% 5%;
  }

  @media only screen and (max-width: 1024px) {
    margin-top: 10%;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 60vmax;
    height: 60vmax;
    border-radius: 50%;
    background: linear-gradient(
      45deg,
      rgba(65, 88, 208, 0.15) 0%,
      rgba(200, 80, 192, 0.15) 50%,
      rgba(255, 204, 112, 0.15) 100%
    );
    animation: rotate 20s linear infinite;
    z-index: 1;
  }

  &::before {
    top: -30%;
    left: -10%;
  }

  &::after {
    bottom: -30%;
    right: -10%;
    animation-direction: reverse;
  }

  /* Animated gradient orbs */
  .orb {
    position: absolute;
    width: 40vmax;
    height: 40vmax;
    border-radius: 50%;
    background: linear-gradient(
      45deg,
      rgba(76, 136, 255, 0.1) 0%,
      rgba(116, 58, 213, 0.1) 100%
    );
    animation: float 5s ease-in-out infinite;
    z-index: 1;
  }

  .orb:nth-child(1) {
    top: -20%;
    right: -10%;
    animation-delay: -3s;
  }

  .orb:nth-child(2) {
    bottom: -20%;
    left: -10%;
    animation-delay: -0.5s;
  }

  /* Add a subtle grid pattern */
  .grid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.05) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 50px 50px;
    z-index: 1;
  }

  .hero-logo {
    position: relative;
    width: auto;
    max-width: 90%;
    height: auto;
    z-index: 2;
    filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.1));
    animation: fadeInUp 0.8s ease-out;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }

  /* Animations */
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0) scale(1);
    }
    50% {
      transform: translateY(-50px) scale(1.05);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Responsive design */
  @media (max-width: 768px) {
    padding: 3% 3%;

    .hero-logo {
      max-width: 95%;
    }

    &::before,
    &::after {
      width: 80vmax;
      height: 80vmax;
    }
  }
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
    icon: Star,
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
    title: "TechXcelerate",
    description:
      "A 10-day long programme focused on accelerating tech skills for beginners.",
    icon: (
      <Calendar className="w-12 h-12 mb-4 text-emerald-100 group-hover:text-yellow-300 transition-all duration-500" />
    ),
    gradient: "bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800",
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
    title: "Algorena",
    description:
      "A multiple round competitive programming contest for all skill levels.",
    icon: (
      <Code className="w-12 h-12 mb-4 text-blue-100 group-hover:text-yellow-300 transition-all duration-500" />
    ),
    gradient: "bg-gradient-to-br from-blue-600 via-indigo-700 to-violet-800",
  },
  {
    title: "Season of Open Source",
    description: "A celebration of open-source projects and collaboration.",
    icon: (
      <Globe className="w-12 h-12 mb-4 text-teal-100 group-hover:text-yellow-300 transition-all duration-500" />
    ),
    gradient: "bg-gradient-to-br from-teal-600 via-cyan-700 to-blue-800",
  },
];

const getEventSubdomain = (eventTitle) => {
  const subdomains = {
    Algorena: "algorena",
    HACKHAZARDS: "hackhazards",
    "Season of Open Source": "sos",
    TechXcelerate: "techx",
  };
  return subdomains[eventTitle];
};

const whatWeDoPoints = [
  {
    text: "We organize national-level events that are attended by thousands of participants and are open to all members of the community.",
    icon: (
      <Users className="w-8 h-8 mb-4 text-black group-hover:text-white transition-all duration-300" />
    ),
    gradient: "bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500",
  },
  {
    text: "We bridge the gap between technical education and industry by promoting learning through various boot-camps, workshops, and initiatives.",
    icon: (
      <Target className="w-8 h-8 mb-4 text-black group-hover:text-white transition-all duration-300" />
    ),
    gradient: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
  },
  {
    text: "We provide tailor-made programs to select members who are students and part of any of our nameSpace chapters.",
    icon: (
      <Sparkles className="w-8 h-8 mb-4 text-black group-hover:text-white transition-all duration-300" />
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
          <UpperContainer className="rounded-tl-[40px] rounded-br-[40px] overflow-hidden">
            <div className="grid" />
            <div className="orb" />
            <div className="orb" />
            <img className="hero-logo" src={Frame44} alt="Frame44" />
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
                      end={16000}
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-12 relative"
                  >
                    {/* Decorative background element */}
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1 }}
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl -z-10 transform -rotate-1"
                    />

                    {/* Main heading with gradient text */}
                    <motion.h2
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-3xl md:text-5xl md:h-16 font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 tracking-tight"
                    >
                      Building India's largest tech community
                    </motion.h2>

                    {/* Subheading with animated typing effect */}
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-xl md:text-3xl font-medium text-gray-400 relative inline-block"
                    >
                      <span className="relative">
                        One event at a time
                        <motion.span
                          initial={{ width: "100%" }}
                          whileInView={{ width: "0%" }}
                          transition={{ duration: 0.8, delay: 0.8 }}
                          className="absolute inset-0 bg-white"
                        />
                      </span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1.2 }}
                        className="absolute -right-4 top-0 text-blue-500"
                      >
                        _
                      </motion.span>
                    </motion.h3>

                    {/* Optional decorative dots */}
                    <div className="absolute -right-8 -top-8 w-24 h-24 text-gray-200">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="grid grid-cols-3 gap-2"
                      >
                        {[...Array(9)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 rounded-full bg-current"
                          />
                        ))}
                      </motion.div>
                    </div>
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

          {/* Who we are and what we do section */}
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
                  className="text-lg text-justify md:text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto"
                  style={{
                    transform: "translateY(20px)",
                    opacity: 0,
                    animation: "0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
                    animationName: "slideUp",
                    animationDelay: "0.3s",
                  }}
                >
                  <span className="font-semibold text-blue-600">
                    The NAMESPACE Community
                  </span>{" "}
                  is an events driven and community focused organization of tech
                  enthusiasts, developers, innovators, professionals, and
                  students who share a mutual passion for technology and are
                  committed to helping each other become better at whatever
                  their aspirations are.
                </p>

                <p
                  className="mt-6 text-justify text-lg md:text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto"
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
                        <p className="text-slate-950 group-hover:text-white transition-colors duration-300 text-center">
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

          {/* Flagship Events Section */}
          <div className="w-full mx-auto px-4 py-16 bg-slate-900 rounded-3xl">
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
                  className="text-4xl md:text-5xl md:h-16 font-bold mb-4 bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(-45deg, #3b82f6, #8b5cf6, #d946ef)",
                    backgroundSize: "200% 200%",
                    animation: "gradient 6s linear infinite",
                  }}
                >
                  Our Flagship National Events
                </h2>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto">
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

                      <p className="text-slate-100 leading-relaxed transition-colors duration-500 group-hover:text-white mb-6">
                        {event.description}
                      </p>

                      {/* Visit Website Button */}
                      <a
                        href={`https://${getEventSubdomain(
                          event.title
                        )}.namespacecomm.in`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full 
                    transition-all duration-300 backdrop-blur-sm hover:scale-105 
                    border border-white/20 hover:border-white/30"
                      >
                        Visit Website
                      </a>

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

            <div className="relative z-10 mt-16 text-center">
              <a
                href="/events"
                className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white transition-all duration-300 
            bg-gradient-to-r from-transparent via-slate-800 to-transparent hover:via-slate-700
            border border-slate-700 rounded-full hover:border-slate-600 hover:scale-105"
              >
                <span className="relative">
                  <span className="block transition-all duration-300 group-hover:translate-x-1">
                    Explore All Events
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
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

          {/* Why join us section with benefits */}
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

          {/* Discord and Newsletter Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 w-full max-w-7xl mx-auto px-4">
            {/* Discord Section */}
            <div className="w-full">
              <div className="h-full bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl p-8 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                <div className="flex flex-col items-center text-center space-y-8">
                  {/* Icon with pulse animation */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                    <div className="relative bg-white/10 p-4 rounded-full">
                      <BsDiscord className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Join Our Community on Discord
                    </h3>
                    <p className="text-white/90 text-lg max-w-lg mx-auto">
                      Connect with fellow members, get exclusive updates, and be
                      part of our growing community. Join us today and start
                      collaborating!
                    </p>
                  </div>

                  {/* Button */}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://discord.com/invite/z2fTnXjKMm"
                    className="group relative inline-flex items-center justify-center px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-indigo-50"
                  >
                    <span className="flex items-center">
                      <BsDiscord className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                      Join Our Discord
                    </span>
                    <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="w-full">
              <div className="h-full bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-8 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                <div className="flex flex-col items-center text-center space-y-8">
                  {/* Icon with pulse animation */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                    <div className="relative bg-white/10 p-4 rounded-full">
                      <Newspaper className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Subscribe to Our Newsletter
                    </h3>
                    <p className="text-white/90 text-lg max-w-lg mx-auto">
                      Get exclusive insights, latest updates, and expert content
                      delivered straight to your inbox. Join our growing list of
                      readers who stay ahead of the curve!
                    </p>
                  </div>

                  {/* Button */}
                  <a
                    href="https://namespacecomm.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-emerald-50"
                  >
                    <span className="flex items-center">
                      <Newspaper className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                      Subscribe Now
                    </span>
                    <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <PartnerWithUs />
        </Container>
      </Section>
      <Founder />
    </>
  );
};

export default Hero;
