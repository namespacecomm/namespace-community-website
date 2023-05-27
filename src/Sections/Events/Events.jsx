import React from "react";
import styled from "styled-components";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Section = styled.div`
  background: rgb(9, 9, 121);
  width:100%;
  background: linear-gradient(
    262deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(2, 0, 36, 1) 1%
  );
`;

const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem;
`;

function Events() {
  return (
    <Section>
      <Container>
        <div className=" px-6 mx-auto">
          <section className="mb-3 text-center">
            <h2 className="text-5xl font-bold mb-12">
              <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                Our Timeline
              </span>
            </h2>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#1d28f2",
                  color: "#ffffff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #1d28f2",
                }}
                date="04/05/2023"
                iconStyle={{ background: "#1d28f2", color: "#fff" }}
                icon=<svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm97 289c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L79 303c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-31-31 31-31zM257 255c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9l-48-48z" />
                </svg>
              >
                <h3 className="vertical-timeline-element-title font-bold">
                  Project Ideation to Start-up Success by Miss Purva Aggarwal, Founder and CEO, Good Good Piggy
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Bhagwan Parshuram Institute of Technology
                </h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#f96167",
                  color: "#ffffff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #f96167",
                }}
                date="01/05/2023 - 02/05/2023"
                iconStyle={{ background: "#f96167", color: "#ffffff" }}
                icon=<svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm97 289c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L79 303c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-31-31 31-31zM257 255c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9l-48-48z" />
                </svg>
              >
                <h3 className="vertical-timeline-element-title font-bold">
                  Freshers' Placement Talk by Prof. Abhishek Swaroop and Mr. Sanjay Dureja
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Bhagwan Parshuram Institute of Technology
                </h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#1d28f2",
                  color: "#ffffff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #1d28f2",
                }}
                date="14/04/2023 - 23/04/2023"
                iconStyle={{ background: "#1d28f2", color: "#ffffff" }}
                icon=<svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm97 289c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L79 303c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-31-31 31-31zM257 255c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9l-48-48z" />
                </svg>
              >
                <h3 className="vertical-timeline-element-title font-bold">
                  TechXcelerate 2023 - Series of 12 power-packed sessions aimed at fresher students
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Bhagwan Parshuram Institute of Technology
                </h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#f87171",
                  color: "#ffffff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #f87171",
                }}
                date="04/04/2023 - 07/05/2023"
                iconStyle={{ background: "#f87171", color: "#ffffff" }}
                icon=<svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm97 289c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L79 303c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-31-31 31-31zM257 255c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9l-48-48z" />
                </svg>
              >
                <h3 className="vertical-timeline-element-title font-bold">
                  Interview Preparation Bootcamp covering DSA, Web Dev and System Design for third and fourth year students.
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Bhagwan Parshuram Institute of Technology
                </h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#1d28f2",
                  color: "#ffffff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #1d28f2",
                }}
                date="28/01/2023"
                iconStyle={{ background: "#1d28f2", color: "#ffffff" }}
                icon=<svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm97 289c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L79 303c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-31-31 31-31zM257 255c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9l-48-48z" />
                </svg>
              >
                <h3 className="vertical-timeline-element-title font-bold">
                  CodeRush X - National Level Coding Contest
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  NSCC BPIT was among the top 5 NSCC chapters across India
                </h4>
                <h4 className="vertical-timeline-element-subtitle">
                  Bhagwan Parshuram Institute of Technology
                </h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#f87171",
                  color: "#ffffff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #f87171",
                }}
                date="07/01/2023 - 29/01/2023"
                iconStyle={{ background: "#f87171", color: "#ffffff" }}
                icon=<svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm97 289c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L79 303c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-31-31 31-31zM257 255c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9l-48-48z" />
                </svg>
              >
                <h3 className="vertical-timeline-element-title font-bold">
                  Month long Web Development Bootcamp by P K Purushottaman and Adarsha Halder
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Bhagwan Parshuram Institute of Technology
                </h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#1d28f2",
                  color: "#ffffff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #1d28f2",
                }}
                date="03/01/2023 - 31/01/2023"
                iconStyle={{ background: "#1d28f2", color: "#ffffff" }}
                icon=<svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm97 289c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L79 303c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-31-31 31-31zM257 255c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9l-48-48z" />
                </svg>
              >
                <h3 className="vertical-timeline-element-title font-bold">
                  Data Structures and Algorithms Bootcamp January 2023 by Mr. Abhinav Awasthi
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Bhagwan Parshuram Institute of Technology
                </h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#f87171",
                  color: "#ffffff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #f87171",
                }}
                date="28/12/2022"
                iconStyle={{ background: "#f87171", color: "#ffffff" }}
                icon=<svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm97 289c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L79 303c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-31-31 31-31zM257 255c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9l-48-48z" />
                </svg>
              >
                <h3 className="vertical-timeline-element-title font-bold">
                  GeekTalk by Mr. Sandeep Jain, Founder and CEO, Geeks-for-Geeks
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Bhagwan Parshuram Institute of Technology
                </h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#1d28f2",
                  color: "#ffffff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #1d28f2",
                }}
                date="21/09/2022 - 11/12/2022"
                iconStyle={{ background: "#1d28f2", color: "#ffffff" }}
                icon=<svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm97 289c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L79 303c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-31-31 31-31zM257 255c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9l-48-48z" />
                </svg>
              >
                <h3 className="vertical-timeline-element-title font-bold">
                  CodeChef College Program BPIT in collaboration with CodeChef
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Bhagwan Parshuram Institute of Technology
                </h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#f87171",
                  color: "#ffffff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #f87171",
                }}
                date="31/08/2022"
                iconStyle={{ background: "#f87171", color: "#ffffff" }}
                icon=<svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm97 289c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L79 303c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-31-31 31-31zM257 255c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9l-48-48z" />
                </svg>
              >
                <h3 className="vertical-timeline-element-title font-bold">
                  Foundation of Newton School Coding Club and operations started
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Bhagwan Parshuram Institute of Technology
                </h4>
              </VerticalTimelineElement>
            </VerticalTimeline>
            
          </section>
        </div>
      </Container>
    </Section>
  );
}

export default Events;
