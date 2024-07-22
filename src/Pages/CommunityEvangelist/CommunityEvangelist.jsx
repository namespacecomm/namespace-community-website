import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #010116;
  padding: 50px 20px;
`;

const Container = styled.div`
  scroll-snap-align: center;
  max-width: 1440px;
  width: 100%;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Card = styled.div`
  background-color: #1c1c2b;
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  max-width: 800px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  h3 {
    color: white;
    margin-bottom: 15px;
    font-size: 36px;
    text-align: center;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const RightSection = styled.div`
  flex: 1;
  padding: 20px;

  ul {
    list-style: disc;
    padding-left: 20px;
    color: #d1d1e9;

    li {
      margin-bottom: 10px;
    }
  }
`;

const GradientText = styled.span`
  background: linear-gradient(to right, #70a1ff, #3a8dff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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

const Description = styled.p`
  max-width: 4xl;
  margin: 1rem auto 3rem;
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
  background: linear-gradient(to right, #fbbf24, #f472b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Graphic = ({ emoji }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <text x="0" y="20" fontSize="18">
      {emoji}
    </text>
  </svg>
);

function CommunityEvangelist() {
  return (
    <Section>
      <Container>
        <Title>Become a Community Evangelist</Title>
        <Description>
          We are excited to introduce the role of Community Evangelists, who will play a vital part in expanding our reach, strengthening our network, promoting engagement, and fostering leadership within the community. As a Community Evangelist, you will have the opportunity to create public groups for nameSpace, market public events and meetups, and lead initiatives that align with our mission.
        </Description>

        <Card>
          <LeftSection>
            <h3>
              Role and <GradientText>Responsibilities</GradientText>
            </h3>
            <Graphic emoji="👥" />
          </LeftSection>
          <RightSection>
            <ul>
              <li>Create and Manage Public Groups: Foster a collaborative environment for members.</li>
              <li>Promote Public Events and Meetups: Actively market our events, ensuring high participation.</li>
              <li>Expand Community Reach: Engage students from various colleges to build a diverse network.</li>
              <li>Collaboration Opportunities: Collaborate with other tech communities in upcoming events.</li>
            </ul>
          </RightSection>
        </Card>

        <Card>
          <LeftSection>
            <h3>
              Perks and <GradientText>Benefits</GradientText>
            </h3>
            <Graphic emoji="🎁" />
          </LeftSection>
          <RightSection>
            <ul>
              <li>Selection Letter and Completion Certificate</li>
              <li>Expand your network and exchange ideas within a dynamic community.</li>
              <li>Leadership Experience: Work under the established brand of the nameSpace Community.</li>
              <li>Exclusive Invitations: Attend all public meetups and flagship events.</li>
            </ul>
          </RightSection>
        </Card>

        <Card>
          <LeftSection>
            <h3>
              Why This is a <GradientText>Great Deal for You</GradientText>
            </h3>
            <Graphic emoji="🚀" />
          </LeftSection>
          <RightSection>
            <ul>
              <li>Career Advancement: Boost your resume with valuable experience.</li>
              <li>Skill Development: Enhance leadership, project management, and marketing skills.</li>
              <li>Mentorship: Receive guidance from experienced professionals.</li>
              <li>Be a Changemaker: Shape the future of one of the largest tech communities in Delhi-NCR.</li>
            </ul>
          </RightSection>
        </Card>

        <Card>
          <LeftSection>
            <h3>
              Eligibility <GradientText>Criteria</GradientText>
            </h3>
            <Graphic emoji="📋" />
          </LeftSection>
          <RightSection>
            <ul>
              <li>Current Enrollment: 2nd or 3rd-year bachelor’s degree student.</li>
              <li>Community Passion: Genuine interest in building and supporting tech communities.</li>
              <li>Leadership Qualities: Ability to inspire and guide others.</li>
              <li>Technical Proficiency: Strong development skills.</li>
            </ul>
          </RightSection>
        </Card>

        <div className="w-full flex justify-center mt-8">
          <a href="https://forms.gle/nqDJcL73ESYYge6X8" target="_blank" rel="noopener noreferrer">
            <button
              type="button"
              className="text-white mt-1 bg-blue-700 hover:bg-blue-500 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-0 mb-2"
            >
              Register Now
            </button>
          </a>
        </div>
      </Container>
    </Section>
  );
}

export default CommunityEvangelist;
