import React from "react";
import { YouTubeEmbed } from "react-social-media-embed";
import styled from "styled-components";
import { socialMediaUrls } from "../../utils/constants";

const Section = styled.div`
  height: 100%;
  background-color: #010116;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2rem 0;
`;

const YoutubeFrame = styled(YouTubeEmbed)`
  

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
        <div className="flex flex-col">
          {socialMediaUrls.map(social => {
            const Component = social.component

            return (
              <div className="my-5 flex flex-col gap-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center">
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
                    {social.name}
                  </h3>
                </div>

                <div className="flex justify-center items-center gap-20">
                  {social.embedUrls.map(item => <Component width={350} height={250} {...item} />)}
                </div>
              </div>
            )
          })}
        </div>
      </Section>
    </>
  );
};

export default SocialMedia;
