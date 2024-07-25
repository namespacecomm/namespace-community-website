import React, { useRef } from "react";
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
  width: 82%;
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
    font-size: 32px;
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

const IframeWrapper = styled.div`
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 ratio */
  position: relative;
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  @media only screen and (max-width: 768px) {
    padding-bottom: 150%; /* Further increase the height for smaller screens */
  }
`;

function CampusEvangelist() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section>
      <Container>
        <Title>Become a Campus Evangelist</Title>
        <div style={{ width: "80%" }}>
          <Description>
            We are thrilled to introduce the role of Campus Evangelists as a
            crucial part of our extended core team. As a Campus Evangelist, you
            will play a vital role in expanding our presence on your campus,
            strengthening our network, promoting engagement, and fostering
            leadership within your college community. You will have the
            opportunity to create public groups for nameSpace, market public
            events and meetups, and lead initiatives that align with our
            mission. In return, you'll gain essential technical and
            non-technical skills, paving the way for a successful career in the
            future, network with other like-minded and highly qualified peers,
            and become the face of the fastest growing tech community in the
            country. Join us in making a significant impact on your campus and
            beyond. We are more than excited to welcome you in the inner circle
            of the nameSpace family.!
          </Description>
        </div>

        <div className="w-full flex justify-center mt-8 mb-4">
          <button
            type="button"
            onClick={scrollToForm}
            className="text-white mt-1 bg-blue-700 hover:bg-blue-500 font-medium rounded-lg text-3xl px-8 py-2.5 text-center mr-0 mb-2"
          >
            Register Now
          </button>
        </div>

        <Card>
          <LeftSection>
            <h3>
              Roles and <GradientText>Responsibilities</GradientText>
            </h3>
            <Graphic emoji="👥" />
          </LeftSection>
          <RightSection>
            <ul>
              <li>
                Create and Manage Public Groups: Foster a collaborative
                environment for members.
              </li>
              <li>
                Promote Public Events and Meetups: Actively market our events,
                ensuring high participation.
              </li>
              <li>
                Expand Community Reach: Engage students from various branches to
                build a diverse network.
              </li>
              <li>
                Collaboration Opportunities: Collaborate with other tech
                communities in upcoming events.
              </li>
              <li>
                Active Involvement: Work with the nameSpace core team to
                formulate commmunity policies and initiatives.
              </li>
              <li>
                Lead the pack: Become a leader by guiding your campus community,
                conencting them with the larger nameSpace Community and derive
                mutual benefits.
              </li>
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
              <li>
                Expand your network, interact with other evangelists and
                exchange ideas within a dynamic community.
              </li>
              <li>
                Leadership Experience: Work under the established brand of The
                nameSpace Community and join an exclusive club of hand-picked
                individuals
              </li>
              <li>
                Exclusive Invitations: Attend all public meetups and flagship
                events.
              </li>
              <li>
                Dedicated training on soft skills and guidance from seniors to
                improve your technical and non-technical skills.
              </li>
              <li>
                Access to community resources and member only initiatives such
                as TechTrek, AlgoRumble, TechRumble etc.
              </li>
              <li>
                Become a part of organizing teams of national-level technical
                events such as HACKHAZARDS, TechXcelerate, nameSpace Winter of
                Code, nameSpace ICPC and make an impact on thousands of others.
              </li>
              <li>
                Work on community open source projects and improve your CV
              </li>
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
              <li>
                Career Advancement: Boost your resume with valuable experience.
              </li>
              <li>
                Skill Development: Enhance leadership, project management, and
                marketing skills.
              </li>
              <li>
                Mentorship: Receive guidance from experienced professionals.
              </li>
              <li>
                Be a Changemaker: Shape the future of one of the largest tech
                communities in Delhi-NCR and the fastest growing in India.
              </li>
              <li>
                Open a chapter: Highly performing Campus Evangelists will be
                given high priority and dedicated mentorship to open nameSpace
                chapters on their campus.
              </li>
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
              <li>
                Current Enrollment: 2nd or 3rd-year bachelor’s degree student.
              </li>
              <li>
                Community Passion: Genuine interest in building and supporting
                tech communities.
              </li>
              <li>
                Leadership Qualities: Ability to inspire and guide others.
              </li>
              <li>Technical Proficiency: Strong development skills.</li>
              <li>Enthusiasm to learn and contribute towards the society.</li>
            </ul>
          </RightSection>
        </Card>

        <div className="w-full flex justify-center mt-8">
          <button
            type="button"
            onClick={scrollToForm}
            className="text-white mt-1 bg-blue-700 hover:bg-blue-500 font-medium rounded-lg text-3xl px-8 py-2.5 text-center mr-0 mb-2"
          >
            Register Now
          </button>
        </div>

        <IframeWrapper ref={formRef}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdPV56Mxv10dj2rqYXGmQHUpa9H-8bgoc6AomecRFQVOxdbDg/viewform?embedded=true"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </IframeWrapper>

        <div className="w-full flex justify-center mt-8">
          <button
            type="button"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdPV56Mxv10dj2rqYXGmQHUpa9H-8bgoc6AomecRFQVOxdbDg/viewform",
                "_blank"
              )
            }
            className="text-white mt-1 bg-blue-700 hover:bg-blue-500 font-medium rounded-lg text-3xl px-8 py-2.5 text-center mr-0 mb-2"
          >
            Click here if the embedded form is not working
          </button>
        </div>
      </Container>
    </Section>
  );
}

export default CampusEvangelist;
