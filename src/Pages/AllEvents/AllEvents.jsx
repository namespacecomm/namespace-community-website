import React from "react";
import styled from "styled-components";
import Gallery from "../../components/Gallery/Gallery";
import { Galleryimages } from "../../constants/constants";
import { PastEvents } from "../../constants/eventsConstants";
import EventCard from "../../utils/EventCard";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: flex;
  ${
    "" /* background-color: rgb(9, 9, 121);
  background-repeat: no-repeat;
  background: linear-gradient(
    262deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(2, 0, 36, 1) 1%
  );  */
  }
  background-color: #010116;
  ${
    "" /* background-repeat: no-repeat;
  background: no-repeat url("./img/bg.jpg"); */
  }
`;

const Container = styled.div`
  width: 1440px;
  padding-top: 100px;
  scroll-snap-align: center;
  @media only screen and (max-width: 768px) {
    width: 100%;

    flex-direction: column;

    justify-content: space-between;
  }
  @media only screen and (max-width: 1030px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

function AllEvents() {
  return (
    <>
      <Section>
        <Container>
          <div className=" px-6 py-10 mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-teal-400 to-yellow-200 sm:text-4xl lg:text-5xl text-center">
              OUR EVENTS
            </h2>

            <p className="max-w-2xl mx-auto my-10 text-center text-xl font-bold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-amber-500 to-pink-500 ">
              nameSpace conducts various events and initiatives all year round
              for the betterment and growth of the community. Given below are
              some of the selected events conducted in the current tenure.
            </p>

            <div className="flex items-center justify-center pb-12">
              <a
                href="https://drive.google.com/file/d/1CcTMB0-GI-5iLARLcG-HRfxNrxp2m8jC/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="text-white mt-1 bg-blue-700 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-0 mb-2"
                >
                  View all events
                </button>
              </a>
            </div>

            <Gallery images={Galleryimages} />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl text-center">
            Past Events
          </h2>
          <div className="px-5 mx-auto flex flex-wrap">
            <div className="grid grid-cols-1 gap-6 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4 xl:gap-3">
              {PastEvents.map((event) => {
                return (
                  <EventCard
                    key={event.name}
                    name={event.name}
                    date={event.date}
                    img={event.image}
                  />
                );
              })}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default AllEvents;
