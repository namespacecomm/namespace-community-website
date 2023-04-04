import React from "react";
import styled from "styled-components";
import { members } from "../../constants/constants";
import TeamCard from "./TeamCard";

const Section = styled.div`
  background: rgb(9,9,121);
background: linear-gradient(262deg, rgba(9,9,121,1) 0%, rgba(2,0,36,1) 1%);
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`;

function Teams() {
  return (
    <Section>
      <Container>
        <div className="my-24 px-6 mx-auto">
          <section className="mb-32 text-white text-center">
            <h2 className="text-5xl font-bold mb-12 italic">
              Meet the{" "}
              <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Team
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-xl-3">
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
            </div>
            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold mt-5 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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
