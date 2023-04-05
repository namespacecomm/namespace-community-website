import React from "react";
import styled from "styled-components";
import { members } from "../../constants/constants";
import TeamCard from "./TeamCard";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Section = styled.div`
  height: 100vh;
  background: rgb(9, 9, 121);
  background: linear-gradient(
    262deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(2, 0, 36, 1) 1%
  );
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display:flex;
  align-items:center;
  padding: 2rem;
`;

const Carousal = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 100vw;
    .slick-slider .slick-arrow {
      display: none;
    }
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
    font-size: 1rem;
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
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Section>
      <Container>
        <div className="my-10 mb-5 px-6 mx-auto">
          <section className="mb-10 text-white text-center">
            <h2 className="text-5xl font-bold mb-12 italic">
              Meet the{" "}
              <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Team
              </span>
            </h2>
            {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5 lg:gap-xl-10"> */}
            <Carousal>
              <Slider {...settings}>
                {members.map((member) => {
                  return (
                    <TeamCard
                      image={member.image}
                      name={member.name}
                      position={member.position}
                      linkedin={member.linkedin}
                      github={member.github}
                    />
                  );
                })}
              </Slider>
            </Carousal>

            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold mt-10 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              View all the members
            </button>
          </section>
        </div>
      </Container>
    </Section>
  );
}

export default Teams;
