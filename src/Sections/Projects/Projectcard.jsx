import React from "react";
import "./projectCard.css"; // Import your CSS file for styling
import ProjectDescriptionCard from "./ProjectDescriptionCard";

const ProjectCard = ({ projectData }) => {
  const {
    title,
    description,
    techUsed,
    ownerName,
    deploymentLink,
    githubLink,
    imageUrl,
    projectImage,
  } = projectData;

  return (
    <div className="main-project">
      <ProjectDescriptionCard
        title={title}
        description={description}
        techUsed={techUsed}
        ownerName={ownerName}
        deploymentLink={deploymentLink}
        githubLink={githubLink}
        projectImage={projectImage}
      />
    </div>
  );
};

export default ProjectCard;
