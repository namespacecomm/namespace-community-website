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
            <h1 className="text-3xl font-bold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-teal-400 to-yellow-200 sm:text-4xl lg:text-5xl text-center">
              PROJECTS
            </h1>
            

            <p className="max-w-2xl px-3 mx-auto my-10 text-center flex justify-center items-center text-xl font-bold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-amber-500 to-pink-500">
              Welcome to our project page! Explore our latest work and
              innovative creations. Dive into a world of creativity and
              technology as we showcase our passion for technology. Discover how
              we've harnessed our skills to deliver solutions that inspire,
              captivate, and solve real-world challenges. Join us on this
              exciting journey, and let's make a difference together.
            </p>
          </div>

          <div className="center-block">
            <ProjectCard
              projectData={{
                title: "Flutter Fitness App",
                description:
                  "Develop a fitness tracking app using Flutter, providing users with real-time workout tracking, personalized exercise routines, and nutrition tips. It syncs seamlessly with wearable devices to help users achieve their fitness goals.",
                techUsed: "HTML CSS React",
                ownerName: "NSCC BPIT",
                deploymentLink: "https://www.nsccbpit.tech/",
                githubLink: "https://github.com/",
                imageUrl:
                  "https://images.unsplash.com/photo-1480694313141-fce5e697ee25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                projectImage: "/img/project-images/fitness.jpg",
              }}
            />

            <ProjectCard
              projectData={{
                title: "React Website for Charity",
                description:
                  "Build a responsive website for a charitable organization using React. The site showcases their mission, projects, and donation options, making it easy for visitors to support meaningful causes..",
                techUsed: "HTML CSS React",
                ownerName: "NSCC BPIT",
                deploymentLink: "https://www.nsccbpit.tech/",
                githubLink: "https://github.com/",
                imageUrl:
                  "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                projectImage: "/img/project-images/react-website-charity.jpg",
              }}
            />

            <ProjectCard
              projectData={{
                title: "Blockchain Voting System",
                description:
                  "Implement a blockchain-based voting system to enhance the security and transparency of elections. This project ensures that votes are securely recorded and can be audited, reducing the risk of fraud.",
                techUsed: "HTML CSS React",
                ownerName: "NSCC BPIT",
                deploymentLink: "https://www.nsccbpit.tech/",
                githubLink: "https://github.com/",
                imageUrl:
                  "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
                projectImage:
                  "/img/project-images/blockchain-voting-system.jpeg",
              }}
            />

            <ProjectCard
              projectData={{
                title: "React Native Travel Planner",
                description:
                  "Craft a travel planning app with React Native, allowing users to plan their trips, book accommodations, and discover local attractions. The app provides travel itineraries and integrates with maps for easy navigation.",
                techUsed: "HTML CSS React",
                ownerName: "NSCC BPIT",
                deploymentLink: "https://www.nsccbpit.tech/",
                githubLink: "https://github.com/",
                imageUrl:
                  "https://images.unsplash.com/photo-1456425731181-2152d80d946c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80",
                projectImage: "/img/project-images/travel-planner.jpeg",
              }}
            />

            <ProjectCard
              projectData={{
                title: "Cybersecurity Training Platform",
                description:
                  "Create an interactive cybersecurity training platform that educates users on best practices for online security. It offers modules on password management, phishing detection, and network security, helping users protect their digital assets.",
                techUsed: "HTML CSS React",
                ownerName: "NSCC BPIT",
                deploymentLink: "https://www.nsccbpit.tech/",
                githubLink: "https://github.com/",
                imageUrl:
                  "https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
                projectImage: "/img/project-images/cybersecurity-training.jpeg",
              }}
            />
          </div>

          <p className="max-w-2xl mx-auto my-6 text-center "></p>
        </Container>
      </Section>
    </>
  );
}

export default Projects;
