import React from 'react';
import styled from 'styled-components';
import ChapterCard from './ChapterCard';
import chaptersData from './chapters.json';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #0f0f1e;
  min-height: 100vh;
`;

const Container = styled.div`
  scroll-snap-align: center;
  width: 100%;
  max-width: 1440px;
  padding: 100px 20px;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: #e94560;
  text-align: center;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const ChaptersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

function Chapters() {
  return (
    <Section>
      <Container>
        <Title style={{ marginTop: "100px" }}>Namespace Chapters</Title>
        <ChaptersGrid>
          {chaptersData.map((chapter) => (
            <ChapterCard key={chapter.id} chapter={chapter} />
          ))}
        </ChaptersGrid>
      </Container>
    </Section>
  );
}

export default Chapters;
