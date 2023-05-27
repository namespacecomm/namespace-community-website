import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styled from "styled-components";

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
  ${
    "" /* background-repeat: no-repeat;
  background: no-repeat url("./img/bg.jpg"); */
  }
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

function Projects() {
  return (
    <Section>
      <Navbar />
      <Container>
        <h1 className="text-2xl font-semibold text-center text-white capitalize lg:text-3xl ">
          Projects we are proud of
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>
        
      </Container>
    </Section>
  );
}

export default Projects;
