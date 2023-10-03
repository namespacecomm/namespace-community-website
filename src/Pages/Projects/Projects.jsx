import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  justify-content: space-between;
  min-height: 100vh; /* Set minimum height to 100% of the viewport height */
  background-color: #010116;
`;

const Container = styled.div`
  scroll-snap-align: center;
  width: 1400px;
  padding-top: 100px;
  flex: 1; /* Use flex to push content to the bottom */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

function Projects() {
  return (
    <>
      <Section>
        <Container>
          <h1 className="text-2xl font-semibold text-center text-white capitalize lg:text-3xl">
            Awesome projects loading super soon.......
          </h1>

          <p className="max-w-2xl mx-auto my-6 text-center "></p>
        </Container>
      </Section>
    </>
  );
}

export default Projects;
