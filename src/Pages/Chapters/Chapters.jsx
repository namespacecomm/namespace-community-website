import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: flex;
`;


const Container = styled.div`
  scroll-snap-align: center;
  width: 1440px;
  padding-top: 100px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(to right, #4fd1c5, #f6e05e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 2rem 0;
`;

function Chapters () {
  return (
    <Section>
      <Container>
        <Title>namespace Chapters</Title>
      </Container>
    </Section>
  );
};

export default Chapters;