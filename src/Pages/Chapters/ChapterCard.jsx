import React, { useState } from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1a1a2e;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

const CollegeName = styled.h3`
  text-align: center;
  padding: 1rem;
  background-color: #0f3460;
  color: #e94560;
  margin: 0;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 2px solid #e94560;
`;

const Content = styled.div`
  display: flex;
  padding: 1.5rem;
  align-items: center;
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #e94560;
  box-shadow: 0 0 15px rgba(233, 69, 96, 0.5);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e94560;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Details = styled.div`
  margin-left: 1.5rem;
  color: #ffffff;
  flex-grow: 1;
`;

const Name = styled.h4`
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
  color: #e94560;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: #ffffff;
  font-size: 1.4rem;
  transition: color 0.3s ease, transform 0.3s ease;
  &:hover {
    color: #e94560;
    transform: scale(1.2);
  }
`;

const Role = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #16213e;
  background-color: #e94560;
  padding: 0.3rem 0.6rem;
  border-radius: 15px;
  display: inline-block;
`;

function ChapterCard({ chapter }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Card>
      <CollegeName>{chapter.collegeName}</CollegeName>
      <Content>
        <ImageWrapper>
          {imageError ? (
            <Placeholder>Image Not Found</Placeholder>
          ) : (
            <Image 
              src={chapter.evangelistImage} 
              alt={chapter.evangelistName} 
              onError={handleImageError}
            />
          )}
        </ImageWrapper>
        <Details>
          <Name>{chapter.evangelistName}</Name>
          <Role>Campus Evangelist</Role>
          <SocialLinks>
            {chapter.linkedin && (
              <SocialIcon href={chapter.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialIcon>
            )}
            {chapter.github && (
              <SocialIcon href={chapter.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialIcon>
            )}
            {chapter.twitter && (
              <SocialIcon href={chapter.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialIcon>
            )}
            {chapter.instagram && (
              <SocialIcon href={chapter.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialIcon>
            )}
          </SocialLinks>
        </Details>
      </Content>
    </Card>
  );
}

export default ChapterCard;
