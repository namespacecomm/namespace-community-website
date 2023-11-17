


import React from "react";
import styled from "styled-components";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import eventsJsonData from "../../utils/Event/eventsJsonData.json";
import { reverseEventJsonData } from "../../utils/Event/event";

const Section = styled.div`
  ${"" /* background: rgb(9, 9, 121); */}
  width:100%;
  background-color: #010116;
  ${
    "" /* background: linear-gradient(
    262deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(2, 0, 36, 1) 1%
  ); */
  }
`;

const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem;
`;

const eventsData = reverseEventJsonData(eventsJsonData.events);

function Events() {
  return (
    <Section>
      <Container>
        <div className=" px-6 mx-auto">
          <section className="mb-3 ">
            <h2 className="text-5xl text-center font-bold mb-12">
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                <a href="/events">Our Timeline</a>
              </span>
            </h2>
            <VerticalTimeline>
              {eventsData.map((event, index) => (
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: index % 2 === 0 ? "#1d28f2" : "#f96167",
                    color: "#ffffff",
                  }}
                  contentArrowStyle={{
                    borderRight:
                      index % 2 === 0
                        ? "7px solid #1d28f2"
                        : "7px solid #f96167",
                  }}
                  date={event.date}
                  iconStyle={{
                    background: index % 2 === 0 ? "#1d28f2" : "#f96167",
                    color: index % 2 === 0 ? "#fff" : "#ffffff",
                  }}
                  icon=<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm97 289c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L79 303c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-31-31 31-31zM257 255c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9l-48-48z" />
                  </svg>
                >
                  <h3 className="vertical-timeline-element-title font-bold text-center">
                    {event.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle text-center">
                    {event.extraTitle}
                  </h4>
                  <h4 className="vertical-timeline-element-subtitle text-center">
                    {event.subtitle}
                  </h4>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </section>
        </div>
      </Container>
    </Section>
  );
}

export default Events;
