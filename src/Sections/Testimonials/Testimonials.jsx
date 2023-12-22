import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
// import Card from "../../utils/Card";
import { testimonials } from "../../constants/constants";

const Section = styled.div`
  height: 100vh;
  background-color: #010116;
  ${"" /* background: rgb(9, 9, 121);
  background: linear-gradient(
    262deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(2, 0, 36, 1) 1%
  ); */
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 5rem 0;

  @media only Screen and (max-width: 40em) {
    height: 120vh;
    margin: 0 auto;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  margin-top:100px;
  display: inline-block;
  background: repeating-radial-gradient(
    circle farthest-side at center center,
    #3530cf 0%,
    #44cfcf 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-bottom:3px solid white;
  padding: 10px;
  font-size: calc(1rem + 1.5vw);
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--purple);
  }
`;

const Carousal = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 80vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: white;
    font-size: 1.5rem;
  }
  .slick-slider .slick-dots button:before {
    color: white;
    font-size: 1rem;
    @media only Screen and (max-width: 1068px) {
      display: none;
    }
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 844,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Section>
      <Title>Few good words about us!</Title>
      <Carousal>
        <Slider {...settings}>
          {testimonials.map((person) => {
            return (
              <div
                className="px-4 py-10 mx-auto text-center lg:py-16 lg:px-4 h-[38rem]"
                key={person.name}
              >
                <figure className="h-full mx-auto border rounded-lg p-3">
                  <div className="h-[10%]">
                    <svg
                      className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="h-[70%] overflow-auto no-scrollbar">
                    <blockquote>
                      <p className="dark:text-white text-center overflow-auto h-full pr-2">
                        " {person.text} "
                      </p>
                    </blockquote>
                  </div>
                  <div className="h-[20%]">
                    <figcaption className="flex items-center justify-center mt-6 space-x-9">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={person.image}
                        alt={`Testimonial author ${person.name}`}
                      />
                      <div className="m-1">
                        <div className="dark:text-white text-sm">{person.name}</div>
                        <div className="dark:text-gray-400 text-xs">
                          {person.position}
                        </div>
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </div>
            );
          })}
        </Slider>
      </Carousal>
    </Section>
  );
};

export default Testimonials;

// {
//   <Card name={person.name} text={person.text} image={person.image} postion={person.position} />
// }
