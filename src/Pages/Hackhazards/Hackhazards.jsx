import React from "react";
import styled from "styled-components";
import CounterUp from "../../components/CounterUp";
import Hackgallery from "../../components/Gallery/Hackgallery";
import { hackhazardsImages } from "../../constants/constants";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: flex;
  background-color: #010116;
`;

const Section2 = styled.div`
  height: 100%;
  background-color: #010116;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  scroll-snap-align: center;
  width: 1440px;
  padding-top: 100px;
  @media only screen and (max-width: 738px) {
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 1030px) {
    wi} center;
    align-items: center;
  }

  @media only screen and (max-width: 1030px) {
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
`;

const Container2 = styled.div`
  scroll-snap-align: center;
  width: 1440px;
  padding-top: 20px;
  @media only screen and (max-width: 738px) {
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 1030px) {
    width: 100vw;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 1030px) {
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
`;

const SponsorImage = styled.img`
  width: 200px;
  height: auto;
  margin: 20px;
`;

const SponsorsSection = styled.div`
  width: 100%;
  text-align: center;
  margin: 50px 0;
`;

const SponsorHeading = styled.h2`
  font-size: 2xl;
  font-weight: bold;
  margin-top: 50px;
`;

function Hackhazards() {
  return (
    <>
      <Section>
        <Container>
          <div className="px-6 py-10">
            <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-yellow-200 sm:text-4xl lg:text-5xl text-center">
              HACKHAZARDS
            </h2>

            <p className="max-w-4xl mx-auto my-10 text-center text-xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500">
              HACKHAZARDS, where innovation knows no bounds and challenges are met head-on with creative solutions. Step into a whirlwind of creativity and rapid problem-solving in this intense 24-hour hackathon experience. Unlike any other event of its kind, HACKHAZARDS combines the thrill of a hackathon with the opportunity to make a meaningful impact on the world's most pressing issues. At HACKHAZARDS, we believe that true innovation doesn't just happen it's nurtured through collaboration, exploration, and thinking beyond boundaries. With a diverse array of domains to choose from, participants are invited to delve into fields spanning technology, healthcare, environment, and more. Unleash your imagination and join forces with like-minded individuals from various disciplines to create interdisciplinary solutions.
            </p>

            <div className="w-full flex justify-center">

                <a href="https://s24.hackhazards.namespacecomm.in" target="_blank" className="">
                    <button
                    type="button"
                    className="text-white mt-1 bg-blue-700 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-0 mb-2"
                    >
                            Visit Our Website
                    </button>
                </a>    
            </div>

            <>
              <h2 className="mt-[80px] text-2xl text-center md:text-4xl lg:text-5xl font-bold">
                Official{" "}
                <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
                  <a href="https://linktr.ee/namespacecomm">Stats</a>
                </span>
              </h2>

              <CounterUp />
            </>
          </div>
          <h2 className="pb-[130px] text-2xl text-center md:text-4xl lg:text-5xl font-bold">
            Capturing{" "}
            <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
              Innovation
            </span>
          </h2>
          <div>
            <Hackgallery images={hackhazardsImages} />
          </div>
        </Container>
      </Section>

      <Section2>
        <SponsorsSection>
        <SponsorHeading className="pb-[130px] text-2xl text-center md:text-4xl lg:text-5xl font-bold">
  Our{" "}
  <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
    Sponsors
  </span>
</SponsorHeading>

<div className="flex flex-col items-center pb-[130px]">
  <SponsorHeading className="text-2xl text-center md:text-4xl lg:text-5xl font-bold">
    TITLE{" "}
    <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
      PARTNER
    </span>
  </SponsorHeading>
  <a href="https://orkes.io" target="_blank" rel="noopener noreferrer">
    <SponsorImage
      src="sponsors-images/orkes.png"
      alt="Title Partner"
      className="mt-4 w-full h-auto max-w-[1000px] md:max-w-[1200px] lg:max-w-[1400px] rounded-lg"
    />
  </a>
</div>

<div className="flex flex-col items-center pb-[130px]"> 
  <SponsorHeading className="pb-[130px] text-2xl text-center md:text-4xl lg:text-5xl font-bold">
    POWER{" "}
    <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
      PARTNER
    </span>
  </SponsorHeading>
  <a href="https://xxnetwork.io" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/xxnetwork.png" alt="Power Partner" className="mt-4 w-full h-auto max-w-[1000px] md:max-w-[1200px] lg:max-w-[1400px] rounded-lg"/>
  </a>
</div>

<div className="flex flex-wrap justify-center">
  <div className="flex flex-col items-center pb-[130px] mr-[140px] -ml-[60px]">
    <div className="w-1/2">
      <SponsorHeading className="pb-[130px] text-2xl text-center md:text-4xl lg:text-5xl font-bold whitespace-nowrap">
        Platform{" "}
        <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
          Partner
        </span>
      </SponsorHeading>
      <a href="https://devfolio.co" target="_blank" rel="noopener noreferrer">
        <SponsorImage src="sponsors-images/devfolio.png" alt="Platform Partner" className="mt-4 w-full h-auto max-w-[1000px] md:max-w-[1200px] lg:max-w-[1400px] rounded-lg" />
      </a>
    </div>
  </div>
  <div className="flex flex-col items-center pb-[130px] ml-[40px]"> 
    <div className="w-1/2">
      <SponsorHeading className="pb-[130px] text-2xl text-center md:text-4xl lg:text-5xl font-bold whitespace-nowrap">
        Innovation{" "}
        <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
          Partner
        </span>
      </SponsorHeading>
      <a href="https://whereuelevate.com" target="_blank" rel="noopener noreferrer">
        <SponsorImage src="sponsors-images/whereuelevate.png" alt="Innovation Partner" className="mt-4 w-full h-auto max-w-[1000px] md:max-w-[1200px] lg:max-w-[1400px] rounded-lg"/>
      </a>
    </div>
  </div>
</div>

<SponsorHeading className="pb-[130px] text-2xl text-center md:text-4xl lg:text-5xl font-bold">
  Associate{" "}
  <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
    Partners
  </span>
</SponsorHeading>
<div className="flex flex-wrap justify-center">
  <a href="https://polygon.technology" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/polygon.png" alt="Associate Partner 1" className="rounded-lg" />
  </a>
  <a href="https://t3.network" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/t3.png" alt="Associate Partner 2" className="rounded-lg" />
  </a>
  <a href="https://quilladults.com" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/quilladults.png" alt="Associate Partner 3" className="rounded-lg" />
  </a>
  <a href="https://push.org" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/push.png" alt="Associate Partner 4" className="rounded-lg" />
  </a>
  <a href="https://s.com" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/s.png" alt="Associate Partner 5" className="rounded-lg" />
  </a>
  <a href="https://routerprotocol.com" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/router.png" alt="Associate Partner 6" className="rounded-lg" />
  </a>
</div>

<SponsorHeading className="pb-[130px] text-2xl text-center md:text-4xl lg:text-5xl font-bold">
  Swag{" "}
  <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
    Partners
  </span>
</SponsorHeading>
<div className="flex flex-wrap justify-center">
  <a href="https://commudle.com" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/commudle.png" alt="Swag Partner 1" className="rounded-lg" />
  </a>
  <a href="https://reskill.com" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/reskill.png" alt="Swag Partner 2" className="rounded-lg" />
  </a>
  <a href="https://x.com" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/x.png" alt="Swag Partner 3" className="rounded-lg" />
  </a>
  <a href="https://bobble.ai" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/bobble.png" alt="Swag Partner 4" className="rounded-lg" />
  </a>
</div>

<SponsorHeading className="pb-[130px] text-2xl text-center md:text-4xl lg:text-5xl font-bold">
  General{" "}
  <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
    Partners
  </span>
</SponsorHeading>
<div className="flex flex-wrap justify-center">
  <a href="https://replit.com" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/replit.png" alt="General Partner 1" className="rounded-lg" />
  </a>
  <a href="https://rosenfeldmedia.com" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/rosenfeld.png" alt="General Partner 2" className="rounded-lg" />
  </a>
  <a href="https://xyz.com" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/xyz.png" alt="General Partner 3" className="rounded-lg" />
  </a>
  <a href="https://axure.com" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/axure.png" alt="General Partner 4" className="rounded-lg" />
  </a>
  <a href="https://slido.com" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/slido.png" alt="General Partner 5" className="rounded-lg" />
  </a>
  <a href="https://beeceptor.com" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/beeceptor.png" alt="General Partner 6" className="rounded-lg" />
  </a>
  <a href="https://taskade.com" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/taskade.png" alt="General Partner 7" className="rounded-lg" />
  </a>
  <a href="https://interviewbuddy.com" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/interviewbuddy.png" alt="General Partner 8" className="rounded-lg" />
  </a>
  <a href="https://interviewcake.com" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/interviewcake.png" alt="General Partner 9" className="rounded-lg" />
  </a>
  <a href="https://password.com" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/password.png" alt="General Partner 10" className="rounded-lg" />
  </a>
  <a href="https://verbwire.com" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/verbwire.png" alt="General Partner 11" className="rounded-lg" />
  </a>
  <a href="https://oreilly.com" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/oreilly.png" alt="General Partner 12" className="rounded-lg" />
  </a>
  <a href="https://echo3d.com" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/echo3d.png" alt="General Partner 13" className="rounded-lg" />
  </a>
  <a href="https://ss.com" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/ss.png" alt="General Partner 14" className="rounded-lg" />
  </a>
  <a href="https://streamyard.com" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/streamyard.png" alt="General Partner 15" className="rounded-lg" />
  </a>
  <a href="https://quicknode.com" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/quicknode.png" alt="General Partner 16" className="rounded-lg" />
  </a>
  <a href="https://cybrancee.com" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/cybrancee.png" alt="General Partner 17" className="rounded-lg" />
  </a>
  <a href="https://wolframalpha.com" target="_blank" rel="noopener noreferrer">
    <SponsorImage src="sponsors-images/wolframalpha.png" alt="General Partner 18" className="rounded-lg" />
  </a>
</div>

<h2 className="text-2xl text-center md:text-4xl lg:text-5xl font-bold mt-10">
  Interested in sponsoring HACKHAZARDS?
</h2>
<div className="w-full flex justify-center mt-4">
  <a href="mailto:contact@namespacecomm.in" target="_blank" rel="noopener noreferrer">
    <button
      type="button"
      className="text-white mt-1 bg-blue-700 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-0 mb-2"
    >
      Contact Us
    </button>
  </a>
</div>


        </SponsorsSection>
      </Section2>

    </>
  );
}

export default Hackhazards;