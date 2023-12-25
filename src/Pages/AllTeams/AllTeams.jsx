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

function AllTeams() {
  return (
    <>
      <Section>
        <Container>
          <div className=" px-6 py-10 ">
            <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-teal-400 to-yellow-200 sm:text-4xl lg:text-5xl text-center">
              OUR TEAM
            </h2>

            <p className="max-w-2xl mx-auto my-10 text-center text-xl font-bold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-amber-500 to-pink-500 ">
              In the last one year nameSpace has grown on to become a vibrant
              and thriving collection of tech enthusiasts and problem solvers.
              Given below are few of the club members who make the community
              amazing.
            </p>

            <div className="flex items-center justify-center">
              <a
                href="https://drive.google.com/file/d/1zvfboD5gVlyCwf3LVGRGYaqpwe2MtPLC/view"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="text-white mt-1 bg-blue-700 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-0 mb-2"
                >
                  View all the members
                </button>
              </a>
            </div>

            <div className="flex justify-center items-center">
              <div className="my-grid">
                {allmembers.map((member) => {
                  return (
                    <TeamCard
                      key={member.name}
                      image={member.image}
                      name={member.name}
                      position={member.position}
                      instagram={member.instagram}
                      twitter={member.twitter}
                      linkedin={member.linkedin}
                      github={member.github}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default AllTeams;
