import React from "react";
import styled from "styled-components";
import { allmembers } from "../../constants/constants";
import TeamCard from "../../Sections/Teams/TeamCard";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: flex;
  ${
    "" /* background-color: rgb(9, 9, 121);
  background-repeat: no-repeat;
  background: linear-gradient(
    262deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(2, 0, 36, 1) 1%
  ); */
  }
  background-color: #010116;
  ${
    "" /* background-repeat: no-repeat;
  background: no-repeat url("./img/bg.jpg"); */
  }
`;

const Section2 = styled.div`
  height: 100%;
  background-color: #010116;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2rem 0;
`;

const YoutubeFrame = styled.iframe`
  width: 30vw;
  height: 350px;

  @media only screen and (max-width: 768px) {
    width: 90vw;
    height: 250px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const Container = styled.div`
  scroll-snap-align: center;
  width: 1440px;
  padding-top: 100px;
  @media only screen and (max-width: 738px) {
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 1030px) {
    width: 100vw;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 1030px) {
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
`;

function Hackhazards() {
  return (
    <>
      <Section>
        <Container>
          <div className=" px-6 py-10 ">
            <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-teal-400 to-yellow-200 sm:text-4xl lg:text-5xl text-center">
              HACKHAZARDS
            </h2>

            <p className="max-w-4xl mx-auto my-10 text-center text-xl font-bold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-amber-500 to-pink-500 ">
            HACKHAZARDS, where innovation knows no bounds and challenges are met head-on with creative solutions. Step into a whirlwind of creativity and rapid problem-solving in this intense 24-hour hackathon experience. Unlike any other event of its kind, HACKHAZARDS combines the thrill of a hackathon with the opportunity to make a meaningful impact on the world's most pressing issues.At HACKHAZARDS, we believe that true innovation doesn't just happen it's nurtured through collaboration, exploration, and thinking beyond boundaries. With a diverse array of domains to choose from, participants are invited to delve into fields spanning technology, healthcare, environment, and more. Unleash your imagination and join forces with like-minded individuals from various disciplines to create interdisciplinary solutions.
            </p>

            <div className="w-full flex justify-center">
                <a href="https://hackhazards.tech" target="_blank" className="mr-6">
                    <button
                    type="button"
                    className="text-white mt-1 bg-blue-700 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-0 mb-2"
                    >
                            Visit Our Website
                    </button>
                </a>    
            </div>    

            
            <>
              <h2 className="mt-[100px] text-2xl text-center md:text-4xl lg:text-5xl font-bold">
                Official{" "}
                <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
                  <a href="https://linktr.ee/nscc_bpit">Stats</a>
                </span>
              </h2>

              

              
              
            </>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Hackhazards;
