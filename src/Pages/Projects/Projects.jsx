import React from "react";
import styled from "styled-components";
import ProjectCard from "../../Sections/Projects/Projectcard";


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
          <div>
          <h1 className="text-2xl font-semibold text-center text-white capitalize lg:text-3xl">
            Projects
          </h1>

          <p className="max-w-2xl mx-auto my-10 text-center flex justify-center items-center">
          Welcome to our project page! Explore our latest work and innovative creations. 
          Dive into a world of creativity and technology as we showcase our passion for
          technology. Discover how we've harnessed our skills to deliver solutions that inspire, captivate, and solve real-world challenges.
          Join us on this exciting journey, and let's make a difference together.
          </p>
          </div>

          <ProjectCard
          projectData={{
          title: "Flutter Fitness App",
          description: "Develop a fitness tracking app using Flutter, providing users with real-time workout tracking, personalized exercise routines, and nutrition tips. It syncs seamlessly with wearable devices to help users achieve their fitness goals.",
          techUsed: "HTML, CSS, React",
          githubLink: "https://github.com/",
          imageUrl: "https://cdn.pixabay.com/photo/2017/02/21/15/51/modern-2086454_1280.png",

          }}
          />

          <ProjectCard
          projectData={{
          title: "React Website for Charity",
          description: "Build a responsive website for a charitable organization using React. The site showcases their mission, projects, and donation options, making it easy for visitors to support meaningful causes..",
          techUsed: "HTML, CSS, React",
          githubLink: "https://github.com/",
          imageUrl: "https://cdn.pixabay.com/photo/2016/12/15/20/21/texture-1909992_1280.jpg",
          }}
          />

          <ProjectCard
          projectData={{
          title: "Blockchain Voting System",
          description: "Implement a blockchain-based voting system to enhance the security and transparency of elections. This project ensures that votes are securely recorded and can be audited, reducing the risk of fraud.",
          techUsed: "HTML, CSS, React",
          githubLink: "https://github.com/",
          imageUrl: "https://cdn.pixabay.com/photo/2017/02/21/15/51/modern-2086454_1280.png",

          }}
          />

          <ProjectCard
          projectData={{
          title: "React Native Travel Planner",
          description: "Craft a travel planning app with React Native, allowing users to plan their trips, book accommodations, and discover local attractions. The app provides travel itineraries and integrates with maps for easy navigation.",
          techUsed: "HTML, CSS, React",
          githubLink: "https://github.com/",
          imageUrl: "https://cdn.pixabay.com/photo/2016/12/15/20/21/texture-1909992_1280.jpg",

          }}
          />

          <ProjectCard
          projectData={{
          title: "Cybersecurity Training Platform",
          description: "Create an interactive cybersecurity training platform that educates users on best practices for online security. It offers modules on password management, phishing detection, and network security, helping users protect their digital assets.",
          techUsed: "HTML, CSS, React",
          githubLink: "https://github.com/",
          imageUrl: "https://cdn.pixabay.com/photo/2017/02/21/15/51/modern-2086454_1280.png",

          }}
          />




          <p className="max-w-2xl mx-auto my-6 text-center "></p>
        </Container>
      </Section>
    </>
  );
}

export default Projects;
