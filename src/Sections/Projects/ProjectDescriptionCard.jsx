import React from 'react';
import './ProjectDescriptionCard.css'; // Import your CSS file for styling

const ProjectDescriptionCard = ({ title, description, techUsed, githubLink, deploymentLink }) => {
  return (
    <div className="project-description-card">
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
      <p className="tech-used">Technologies Used: {techUsed}</p>
      <a href={githubLink} className="github-link" target="_blank" rel="noopener noreferrer">
        GitHub Repository
      </a>

    </div>
  );
};

export default ProjectDescriptionCard;
