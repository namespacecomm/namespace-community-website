import React from "react";
import styled from "styled-components";
import Gallery from "../../components/Gallery/Gallery";
import { Galleryimages } from "../../constants/constants";
import { PastEvents } from "./eventsConstants";
import EventCard from "../../utils/EventCard";
import { useState } from "react";
import css from "./AllEvents.css";
import { images } from "../../constants/constants";
import { hackhazardsImages } from "../../constants/constants";
import Hackgallery from "../../components/Gallery/Hackgallery";

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
  padding-top: 100px;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
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

const getTypeColor = (type) => {
  switch (type) {
    case "HACKATHON":
      return "bg-red-500 text-white";
    case "BOOTCAMP":
      return "bg-blue-500 text-white";
    case "SEMINAR":
      return "bg-green-500 text-white";
    case "WEBINAR":
      return "bg-purple-500 text-white";
    case "WORKSHOP":
      return "bg-yellow-500 text-white";
    case "MEETUP":
      return "bg-pink-500 text-white";
    case "CONTEST":
      return "bg-teal-500 text-white";
    case "LEARNATHON":
      return "bg-indigo-500 text-white";
    case "PARTNERSHIP":
      return "bg-orange-500 text-white";
    case "IDEATHON":
      return "bg-cyan-500 text-white";
    case "HACKTOBERFEST":
      return "bg-purple-600 text-white";
    default:
      return "bg-gray-300 text-black";
  }
};

const getLocationColor = (location) => {
  switch (location) {
    case "VIRTUAL":
      return "bg-green-500 text-white";
    case "IN-PERSON":
      return "bg-blue-500 text-white";
    case "HYBRID":
      return "bg-yellow-500 text-white";
    default:
      return "bg-gray-300 text-black";
  }
};

function AllEvents() {
  const eventTypes = [
    "HACKATHON",
    "BOOTCAMP",
    "SEMINAR",
    "WEBINAR",
    "WORKSHOP",
    "MEETUP",
    "CONTEST",
    "LEARNATHON",
    "PARTNERSHIP",
    "IDEATHON",
    "HACKTOBERFEST",
  ];

  const [selectedType, setSelectedType] = useState("");

  const filteredEvents = selectedType
    ? PastEvents.filter((event) => event.type === selectedType)
    : PastEvents;

  return (
    <>
      <Section>
        <Container>
          <div className=" px-6 py-10 mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-teal-400 to-yellow-200 sm:text-4xl lg:text-5xl text-center">
              OUR EVENTS
            </h2>

            <p className="max-w-2xl mx-auto my-10 text-center text-xl font-bold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-amber-500 to-pink-500 ">
              The nameSpace Community conducts various events and initiatives
              all year round for the betterment and growth of the community.
            </p>

            <div className="flex flex-col w-[80%] gap-3 mx-auto">
              <Hackgallery images={images} />
              <Hackgallery images={Galleryimages} />
              <Hackgallery images={hackhazardsImages} />
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl text-center">
            Past Events
          </h2>

          <div className="filter-buttons-tab">
            <button
              onClick={() => setSelectedType("")} // Button to clear the filter
              className={`mr-2 px-4 py-2 rounded ${
                selectedType === ""
                  ? "bg-blue-500 text-white"
                  : "bg-blue-300 text-white"
              } hover:bg-blue-400`}
            >
              All Events
            </button>

            {eventTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`mr-2 px-4 py-2 rounded ${getTypeColor(type)} ${
                  selectedType === type ? "opacity-100" : "opacity-75"
                } hover:opacity-100`}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="events-container p-4">
            {filteredEvents.map((event, index) => (
              <div
                className="event-card bg-white shadow-md rounded-lg mb-6 p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out w-full md:w-[750px] lg:w-[1000px]"
                key={index}
              >
                {/* Desktop layout */}
                <div className="hidden md:flex items-center">
                  {/* Event Type */}
                  <div
                    className={`text-sm font-bold px-3 py-1 rounded-full ${getTypeColor(
                      event.type
                    )} w-[20%] text-center`}
                  >
                    {event.type}
                  </div>

                  {/* Event Name */}
                  <div className="text-lg mx-4 font-semibold text-black w-[40%] text-left">
                    {event.name}
                  </div>

                  {/* Event Date */}
                  <div className="text-sm text-gray-500 w-[20%] text-left">
                    {event.date}
                  </div>

                  {/* Event Location */}
                  <div
                    className={`text-sm font-bold px-3 py-1 rounded-full ${getLocationColor(
                      event.location
                    )} w-[15%] text-center`}
                  >
                    {event.location}
                  </div>

                  {/* Arrow Icon */}
                  <div className="text-gray-500 text-center w-[5%]">&rarr;</div>
                </div>

                {/* Mobile layout */}
                <div className="md:hidden flex flex-col space-y-2">
                  {/* Event Name */}
                  <h3 className="text-lg font-semibold text-black">
                    {event.name}
                  </h3>

                  {/* Event Date */}
                  <div className="text-sm text-gray-500">{event.date}</div>

                  {/* Event Type and Location */}
                  <div className="flex space-x-2">
                    <div
                      className={`text-sm font-bold px-3 py-1 rounded-full ${getTypeColor(
                        event.type
                      )}`}
                    >
                      {event.type}
                    </div>
                    <div
                      className={`text-sm font-bold px-3 py-1 rounded-full ${getLocationColor(
                        event.location
                      )}`}
                    >
                      {event.location}
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div className="text-gray-500 self-end">&rarr;</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

export default AllEvents;
