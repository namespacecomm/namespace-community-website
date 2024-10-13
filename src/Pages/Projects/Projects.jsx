import React from "react";
import styled from "styled-components";
import ProjectCard from "../../Sections/Projects/Projectcard";
import  {ProjectDetails}  from "../../constants/ProjectDetails.ts";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #010116;
`;

ProjectDetails.map(({k})=>{
  console.log({k});
})

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
          <div className="p-12">
            <h1 className="text-3xl font-bold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-teal-400 to-yellow-200 sm:text-4xl lg:text-5xl text-center">
              Projects
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

              {
                ProjectDetails.map((project,index)=>(
                  
                  <ProjectCard
                  key={index}
                  projectData={{
                    title: project.title,
                    description:project.description,
                    techUsed:project.techUsed,
                    ownerName:project.ownerName,
                    deploymentLink:project.deploymentLink,
                    githubLink:project.githubLink,
                    projectImage:project.projectImage !== "none"?project.projectImage: "/img/default.jpg",
                  }} />
                ))
              }


          </div>

          <p className="max-w-2xl mx-auto my-6 text-center "></p>
        </Container>
      </Section>
    </>
  );
}

export default Projects;
