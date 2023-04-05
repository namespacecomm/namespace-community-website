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
  width: 50px;
  ${'' /* display: flex; */}
  height: 50px;
  border-radius: 50%;
  
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-50%) scale(1.1);
    background-color: rgba(0, 0, 0, 0.5);
  }

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
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
