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
  } = projectData;

  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover" }}
      className="main-project p-3 rounded-2xl"
    >
      <ProjectDescriptionCard
        title={title}
        description={description}
        techUsed={techUsed}
        ownerName={ownerName}
        deploymentLink={deploymentLink}
        githubLink={githubLink}
      />
    </div>
  );
};

export default ProjectCard;
