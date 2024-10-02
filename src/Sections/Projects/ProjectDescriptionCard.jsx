import React from "react";
import "./ProjectDescriptionCard.css"; // Import your CSS file for styling'

const ProjectDescriptionCard = ({
  title,
  description,
  techUsed,
  ownerName,
  deploymentLink,
  githubLink,
  projectImage,
}) => {
  return (
    <>
      <div className="grid grid-cols-3  project-description-card rounded-2xl">
        <div className="project-image max-w-md">
          <img src={projectImage} alt="project oulook" />
        </div>
        <div className="project-details col-span-2">
          <h2 className="project-title">{title}</h2>
          <p className="project-description">{description}</p>
          <p className="tech-used">
            Technologies Used:{" "}
            {techUsed.split(" ").map((word, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  color: "#fff",
                  padding: "0.2em",
                  margin: "0.2em",
                }}
              >
                {word}
              </span>
            ))}
          </p>
          <p className="tech-used">Owner: {ownerName}</p>
          <div className="project-links">
            <a
              className="text-center"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/project-images/github-icon.png"
                alt="github-icon"
              />
            </a>
            <a
              className="text-center"
              href={deploymentLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/img/project-images/link-icon.png" alt="link-icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDescriptionCard;
