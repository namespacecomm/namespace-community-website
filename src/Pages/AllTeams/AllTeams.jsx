import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styled from "styled-components";
import { allmembers, members } from "../../constants/constants";
import TeamCard from "../../Sections/Teams/TeamCard";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: flex;
  background-color: rgb(9, 9, 121);
  background-repeat: no-repeat;
  background: linear-gradient(
    262deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(2, 0, 36, 1) 1%
  );
  ${'' /* background-repeat: no-repeat;
  background: no-repeat url("./img/bg.jpg"); */}
`;

const Container = styled.div`
  scroll-snap-align: center;
  
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
  const [activeFilter, setActiveFilter] = useState('');
  const [filterTeam, setFilterTeam] = useState(allmembers);

  const handleTeamFilter = (item) => {
    setActiveFilter(item);
    setFilterTeam(allmembers.filter((member) => member.team.includes(item)));
  };

  return (
    <Section>
        <Navbar />
      <Container>
        <div className=" px-0 py-10 ">
          <h1 className="text-2xl font-semibold text-center text-white capitalize lg:text-3xl flex justify-center items-center">
            our team
          </h1>

          <p className="max-w-2xl mx-auto my-6 text-center flex justify-center items-center">
            In the last one year NSCC BPIT has grown on to become a vibrant 
            and thriving collection of tech enthusiasts and problem solvers. 
            Given below are few of the club members who make the community amazing.
          </p>

           <div className="flex items-center justify-center">
           <a href="https://drive.google.com/file/d/1A-VyrV37sfBCl9OJ_0FYSlwMsYM-sBvG/view?usp=sharing">
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
            {filterTeam.map((member) => {
              return (
                <TeamCard
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
  );
}

export default AllTeams;
