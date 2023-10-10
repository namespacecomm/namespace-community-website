import React from 'react';
import './ProjectDescriptionCard.css'; // Import your CSS file for styling

const ProjectDescriptionCard = ({ title, description, techUsed, ownerName, deploymentLink, githubLink }) => {
  return (
    <div className="project-description-card rounded-2xl">
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
      <p className="tech-used">Technologies Used: {techUsed}</p>
      <p className="tech-used">Owner: {ownerName}</p>
      <div className="project-links">
        <a className="text-center" href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
        <a className="text-center" href={deploymentLink} target="_blank" rel="noopener noreferrer">
          Deployment Link
        </a>
      </div>

    </div>
  );
};

export default ProjectDescriptionCard;
