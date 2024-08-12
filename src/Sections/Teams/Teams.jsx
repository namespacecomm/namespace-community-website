import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { members1, members2 } from "../../constants/constants";
import TeamCard from "./TeamCard";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Section = styled.div`
  
  width: 100%;
  background-color: #010116;
  ${
    "" /* background: rgb(9, 9, 121);
  background: linear-gradient(
    262deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(2, 0, 36, 1) 1%
  ); */
  }
  @media only screen and (max-width: 768px) {
    
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 2rem;
  @media only screen and (max-width: 768px) {
    padding: 4rem;
  }
`;

const Carousal = styled.div`
  width: 85vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;
  
  @media only Screen and (max-width: 40em) {
    width: 85vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }

  @media only Screen and (max-width: 1030px) {
    margin-bottom: 40px;
  }
  .slick-slider .slick-arrow:before {
    color: white;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: white;
    margin-top: 20px;
    font-size: 1rem;
    @media only Screen and (max-width: 40em) {
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

function Teams() {
  //used ref to use slick methods
  const sliderRef = useRef(null);
  //used intersection observer api to monitor carousel
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      sliderRef.current.slickPlay(); // Start autoplay when in viewport
    } else {
      sliderRef.current.slickPause(); // Pause autoplay when not in viewport
    }
  }, [inView]);
  const settings = {
    pauseOnHover: true,
    // className: "center",
    dots: true,
    infinite: true,
    autoplay: false,
    focusOnSelect: true,
    autoplaySpeed: 4000,
    speed: 1000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 2,
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
      <Container>
        <div className="px-6 mx-auto">
          <section className="mb-5 text-white text-center">
            <h2 className="text-xl  md:text-4xl lg:text-5xl font-bold mb-16 mt-12">
              Meet the{" "}
              <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
                <a href="/team">Team</a>
              </span>{" "}
            </h2>

            <h4 className="text-xl md:text-2xl font-bold pt-8">
              Senior and Junior Councils for 2024-25
            </h4>
            
            <Carousal ref={ref}>
              <Slider ref={sliderRef} {...settings}>
                {members1.map((member) => {
                  return (
                    <TeamCard
                      key={member.name}
                      image={member.image}
                      name={member.name}
                      position={member.position}
                      linkedin={member.linkedin}
                      github={member.github}
                      instagram={member.instagram}
                      twitter={member.twitter}
                    />
                  );
                })}
              </Slider>
            </Carousal>

            <h4 className="text-xl md:text-2xl font-bold pt-8">
              Founders and Advisors
            </h4>
            <Carousal ref={ref}>
              <Slider ref={sliderRef} {...settings}>
                {members2.map((member) => {
                  return (
                    <TeamCard
                      key={member.name}
                      image={member.image}
                      name={member.name}
                      position={member.position}
                      linkedin={member.linkedin}
                      github={member.github}
                      instagram={member.instagram}
                      twitter={member.twitter}
                    />
                  );
                })}
              </Slider>
            </Carousal>
          </section>
        </div>
      </Container>
    </Section>
  );
}

export default Teams;
