import React from "react";
import styled from "styled-components";
import { members } from "../../constants/constants";
import TeamCard from "./TeamCard";

const Section = styled.div`
  background: rgb(2, 0, 36);
  background: url("./img/bg.png") no-repeat; 
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-xl-1">
              {members.map((member) => {
                return <TeamCard
                  image={member.image}
                  name={member.name}
                  position={member.position}
                  linkedin={member.linkedin}
                  github={member.github}
                />
              
              })}
            </div>
          </section>
        </div>
      </Container>
    </Section>
  );
}

export default Teams;
