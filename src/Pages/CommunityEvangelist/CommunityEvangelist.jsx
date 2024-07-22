import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #010116;
`;


const Container = styled.div`
  scroll-snap-align: center;
  width: 1440px;
  padding-top: 100px;
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

function CommunityEvangelist() {
  return (
    <>
      <Section>
        <Container>
          <div className="px-6 py-10">
            <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-yellow-200 sm:text-4xl lg:text-5xl text-center p-2">
              Become a Community Evangelist
            </h2>

            <p className="max-w-4xl mx-auto my-10 text-center text-xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500">
            We are excited to introduce the role of Community Evangelists, who will play a vital part in expanding our reach, strengthening our network, promoting engagement, and fostering leadership within the community. As a Community Evangelist, you will have the opportunity to create public groups for nameSpace, market public events and meetups, and lead initiatives that align with our mission.
            </p>

            <h3 className="text-2xl font-bold leading-tight text-center text-white">
              Role and
              <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 m-1">
                Responsibilities
                </span>
            </h3>
            <ul className="max-w-4xl mx-auto my-5 text-left text-lg leading-tight text-white list-disc list-inside">
              <li>Create and Manage Public Groups: Foster a collaborative environment for members.</li>
              <li>Promote Public Events and Meetups: Actively market our events, ensuring high participation.</li>
              <li>Expand Community Reach: Engage students from various colleges to build a diverse network.</li>
              <li>Collaboration Opportunities: Collaborate with other tech communities in upcoming events.</li>
            </ul>

            <h3 className="text-2xl font-bold leading-tight text-center text-white">
              Perks and
              <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 m-1">
              Benefits
              </span>
            </h3>
            <ul className="max-w-4xl mx-auto my-5 text-left text-lg leading-tight text-white list-disc list-inside">
              <li>Selection Letter and Completion Certificate</li>
              <li>Expand your network and exchange ideas within a dynamic community.</li>
              <li>Leadership Experience: Work under the established brand of the nameSpace Community.</li>
              <li>Exclusive Invitations: Attend all public meetups and flagship events.</li>
            </ul>

            <h3 className="text-2xl font-bold leading-tight text-center text-white">
                Why This is a
                <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 m-1">
                    Great Deal for You
                </span>
            </h3>
            <ul className="max-w-4xl mx-auto my-5 text-left text-lg leading-tight text-white list-disc list-inside">
              <li>Career Advancement: Boost your resume with valuable experience.</li>
              <li>Skill Development: Enhance leadership, project management, and marketing skills.</li>
              <li>Mentorship: Receive guidance from experienced professionals.</li>
              <li>Be a Changemaker: Shape the future of one of the largest tech communities in Delhi-NCR.</li>
            </ul>

            <h3 className="text-2xl font-bold leading-tight text-center text-white">
              Eligibility
              <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 m-1">
              Criteria
              </span>
            </h3>
            <ul className="max-w-4xl mx-auto my-5 text-left text-lg leading-tight text-white list-disc list-inside">
              <li>Current Enrollment: 2nd or 3rd-year bachelor’s degree student.</li>
              <li>Community Passion: Genuine interest in building and supporting tech communities.</li>
              <li>Leadership Qualities: Ability to inspire and guide others.</li>
              <li>Technical Proficiency: Strong development skills.</li>
            </ul>

            <div className="w-full flex justify-center">
              <a href="https://forms.gle/nqDJcL73ESYYge6X8" target="_blank" className="">
                <button
                  type="button"
                  className="text-white mt-1 bg-blue-700 hover:bg-blue-500 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-0 mb-2"
                >
                  Register Now
                </button>
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default CommunityEvangelist;
