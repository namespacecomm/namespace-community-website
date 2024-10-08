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
    <div className="project-description-card rounded-2xl">
      {/* Changed flex to flex-col for mobile, and md:flex-row for larger screens */}
      <div className="flex flex-col md:flex-row">
        {/* Adjusted image container for responsiveness */}
        <div className="project-image w-full md:max-w-md mb-4 md:mb-0">
          <img
            src={projectImage}
            alt="project outlook"
            className="w-full h-auto"
          />
        </div>
        {/* Adjusted project details for responsiveness */}
        <div className="project-details md:ml-4 flex-grow">
          <h2 className="project-title text-xl md:text-2xl font-bold mb-2">
            {title}
          </h2>
          <p className="project-description mb-2">{description}</p>
          <div className="flex flex-wrap">
            <p className="tech-used mb-2 w-full">Technologies Used:</p>
            <div className="flex flex-wrap">
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
            </div>
          </div>
          <p className="tech-used mb-2">Owner: {ownerName}</p>
          <div className="project-links flex justify-start">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <img
                src="/img/project-images/github-icon.png"
                alt="github-icon"
                className="w-8 h-8"
              />
            </a>
            <a href={deploymentLink} target="_blank" rel="noopener noreferrer">
              <img
                src="/img/project-images/link-icon.png"
                alt="link-icon"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescriptionCard;
