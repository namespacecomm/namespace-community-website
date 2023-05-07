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
  ${'' /* background-color: rgb(9, 9, 121);
  background-repeat: no-repeat;
  background: linear-gradient(
    262deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(2, 0, 36, 1) 1%
  ); */}
  background-repeat: no-repeat;
  background: no-repeat url("./img/bg.jpg");
`;

const Container = styled.div`
  scroll-snap-align: center;
  width: 1400px;
  @media only screen and (max-width: 768px) {
    width: 100%;

    flex-direction: column;

    justify-content: space-between;
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
        <div className=" px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-white capitalize lg:text-3xl ">
            our team
          </h1>

          <p className="max-w-2xl mx-auto my-6 text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>

          <div className="flex items-center justify-center">
            <div className="flex items-center p-1 border border-blue-600 dark:border-blue-400 rounded-xl">
            {/* <button
                className={`px-4 py-2 text-sm font-medium capitalize hover:bg-blue-600 md:py-3 rounded-xl md:px-12 ${activeFilter === "" ? 'bg-blue-600 text-white':'' }`}
                onClick={() => handleTeamFilter("")}
              >
                All
              </button> */}
              <button
                className={`px-4 py-2 text-sm font-medium capitalize hover:bg-blue-600 md:py-3 rounded-xl md:px-12 ${activeFilter === "SC" ? 'bg-blue-600 text-white':'' }`}
                onClick={() => handleTeamFilter("SC")}
              >
                Senior Council
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium capitalize hover:bg-blue-600 md:py-3 rounded-xl md:px-12 ${activeFilter === "JC" ? 'bg-blue-600 text-white':'' }`}
                onClick={() => handleTeamFilter("JC")}
              >
                Junior Council
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium capitalize hover:bg-blue-600 md:py-3 rounded-xl md:px-12 ${activeFilter === "JTM" ? 'bg-blue-600 text-white':'' }`}
                onClick={() => handleTeamFilter("JTM")}
              >
                Junior Tech
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium capitalize hover:bg-blue-600 md:py-3 rounded-xl md:px-12 ${activeFilter === "STM" ? 'bg-blue-600 text-white':'' }`}
                onClick={() => handleTeamFilter("STM")}
              >
                Senior Tech
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium capitalize hover:bg-blue-600 md:py-3 rounded-xl md:px-12 ${activeFilter === "FTM" ? 'bg-blue-600 text-white':'' }`}
                onClick={() => handleTeamFilter("FTM")}
              >
                Freshers Tech
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 mt-8 xl:mt-16 md:grid-cols-1 xl:grid-cols-4 xl:gap-20">
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
      </Container>
    </Section>
  );
}

export default AllTeams;
