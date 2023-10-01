import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styled from "styled-components";
import Gallery from "../../components/Gallery/Gallery";
import { Galleryimages } from "../../constants/constants";
import { PastEvents } from "../../constants/eventsConstants";
import EventCard from "../../utils/EventCard";
import Footer from "../../components/Footer/Footer";

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
        <Navbar />
        <Container>
          <div className=" px-6 py-10 mx-auto">
            <h1 className="text-4xl font-semibold text-center text-white capitalize lg:text-4xl ">
              Our Events
            </h1>

            <p className="max-w-2xl mx-auto my-10 text-center ">
              NSCC BPIT conducts various events and initiatives all year round
              for the betterment and growth of the community. Given below are
              some of the selected events conducted in the current tenure.
            </p>
            <Gallery images={Galleryimages} />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <h1 className="text-4xl mt-12 font-semibold text-center text-white capitalize lg:text-4xl ">
            Past Events
          </h1>
          <div class="px-5 mx-auto flex flex-wrap">
            <div className="grid grid-cols-1 gap-6 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4 xl:gap-3">
              {PastEvents.map((event) => {
                return (
                  <EventCard
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
      <Footer />
    </>
  );
}

export default AllEvents;
