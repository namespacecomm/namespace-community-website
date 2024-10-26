import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { socialMediaUrls } from "../../utils/constants";

// Create regular styled components
const SectionWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    to bottom,
    #010116,
    #020236,
    #010116
  );
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 4rem 0;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(66, 153, 225, 0.3),
      transparent
    );
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(66, 153, 225, 0.3),
      transparent
    );
  }
`;

const Orb = styled.div`
  position: absolute;
  width: 40vw;
  height: 40vw;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.15;
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(66, 153, 225, 0.3);
    box-shadow: 0 0 30px rgba(66, 153, 225, 0.1);
  }
`;

const SocialMedia = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SectionWrapper>
        {/* Animated background orbs */}
        <motion.div
          initial={{ opacity: 0.1 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Orb className="bg-blue-500" style={{ top: '10%', left: '5%' }} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0.15 }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Orb className="bg-purple-500" style={{ bottom: '10%', right: '5%' }} />
        </motion.div>

        <Content>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-[100px] text-2xl text-center md:text-4xl lg:text-5xl font-bold"
          >
            Social Media{" "}
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800"
            >
              <a href="https://linktr.ee/namespacecomm" className="hover:opacity-80 transition-opacity">
                Pulse
              </a>
            </motion.span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-16 mt-12"
          >
            {socialMediaUrls.map((social, index) => {
              const Component = social.component;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="grid grid-cols-1 lg:grid-cols-3 justify-items-center mb-8"
                  >
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800">
                      {social.name}
                    </h3>
                  </motion.div>

                  <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20">
                    {social.embedUrls.map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                      >
                        <Card>
                          <Component {...item} width={310} height={250} />
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Content>
      </SectionWrapper>
    </motion.div>
  );
};

export default SocialMedia;