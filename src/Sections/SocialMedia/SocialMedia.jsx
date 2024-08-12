import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100%;
  background-color: #010116;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2rem 0;
`;

const YoutubeFrame = styled.iframe`
  

  @media only screen and (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const SocialMedia = () => {
  return (
    <>
      <h2 className="mt-[100px] text-2xl text-center md:text-4xl lg:text-5xl font-bold">
        Social Media{" "}
        <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
          <a href="https://linktr.ee/nscc_bpit">Pulse</a>
        </span>
      </h2>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center">
          <YoutubeFrame src="https://www.youtube.com/embed/eWc6eVcaLyw?si=31OyRSxMHwvNhvUE"/>
          <YoutubeFrame src="https://www.youtube.com/embed/yUD27BJf5ag?si=D6mMdihaQc5a4h6d" />
          <YoutubeFrame src="https://www.youtube.com/embed/TrPl1K4UBXI?si=hyQjEEqEAIJE-JxT" />
        </div>
      </Section>
    </>
  );
};

export default SocialMedia;
