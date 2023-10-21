import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ImageCarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden; 
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const ImageCarouselSlide = styled.img`
  width: 1600px;
  height: 500px;
  object-fit: contain;
`;

const ImageCarouselArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${'' /* display: flex; */}
  width: 50px;
  height: 50px;
  border-radius: 50%;
  
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background-color: rgba(255,255,255, 0.2);

  font-size: 16px;
  font-weight: bolder;

  &:hover {
    transform: translateY(-50%) scale(1.1);
    background-color: rgba(255,255,255, 0.5);
  }

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }
`;

const ImageCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <ImageCarouselContainer>
      {images.map((image, index) => (
        <ImageCarouselSlide
          key={index}
          src={image.src}
          alt={image.alt}
          style={{
            display: index === currentSlide ? 'block' : 'none',
          }}
        />
      ))}
      <ImageCarouselArrow
        className="left"
        onClick={handlePrevSlide}
        aria-label="Previous slide"
      >
        &#8249;
      </ImageCarouselArrow>
      <ImageCarouselArrow
        className="right"
        onClick={handleNextSlide}
        aria-label="Next slide"
      >
        &#8250;
      </ImageCarouselArrow>
    </ImageCarouselContainer>
  );
};

export default ImageCarousel;
