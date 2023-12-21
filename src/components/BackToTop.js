import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledBackToTopButton = styled.button`
  position: fixed;
  bottom: 50px;
  right: 20px;
  background-color: #007bff;
  color: #fff;
  width: 50px; /* Set the width and height to make the button circular */
  height: 50px;
  border: none;
  border-radius: 50%; /* Use border-radius to make it circular */
  cursor: pointer;
  display: ${({ show }) => (show ? 'block' : 'none')};
  font-size: 18px; /* Adjust font size as needed */
  outline: none; /* Remove focus outline for better aesthetics */
  z-index: 1000;

  &:hover {
    background-color: #0056b3;
  }
`;

function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledBackToTopButton show={showButton} onClick={scrollToTop}>
      ↑
    </StyledBackToTopButton>
  );
}

export default BackToTopButton;
