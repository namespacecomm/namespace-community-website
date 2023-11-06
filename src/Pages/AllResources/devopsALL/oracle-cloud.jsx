import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

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
  ); */
  }
  background-color: #010116;
  ${
    "" /* background-repeat: no-repeat;
    background: no-repeat url("./img/bg.jpg"); */
  }
`;

const Container = styled.div`
  scroll-snap-align: center;
  width: 1400px;
  padding-top: 100px;
  @media only screen and (max-width: 768px) {
    width: 90vw;
    overflow-y: scroll;
    flex-direction: column;

    justify-content: space-between;
  }
`;

export const ORACLECLOUD = () => {
  const [jstopicsChecked, setJsTopicsChecked] = useState({
    syntax: false,
    dom: false,
    fetch: false,
    async: false,
    event: false,
    promises: false,
    classes: false,
    array: false,
    hoisting: false,
    closure: false,
  });

  const handleCheckboxChange = (topic) => {
    setJsTopicsChecked({
      ...jstopicsChecked,
      [topic]: !jstopicsChecked[topic],
    });
  };

  useEffect(() => {
    localStorage.setItem("jstopicsChecked", JSON.stringify(jstopicsChecked));
  }, [jstopicsChecked]);

  useEffect(() => {
    const storedTopicsChecked = localStorage.getItem("jstopicsChecked");
    if (storedTopicsChecked) {
      setJsTopicsChecked(JSON.parse(storedTopicsChecked));
    }
  }, []);

  return (
    <>
      <Section>
        <Navbar />
        <Container className="w-screen">
          <section className="text-white body-font">
            <div className="mx-auto flex px-2 mt-8 mb-4 items-center justify-center flex-col">
              <img
                className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-contain object-center rounded"
                alt="Sketch"
                src="https://cd.foundation/wp-content/uploads/sites/78/2021/05/oraclecloud.png"/>
                <div className="text-center lg:w-full w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Oracle Cloud
                </h1>
                <p className="mb-8 text-center mx-4">
                Oracle Cloud is a cloud computing platform and infrastructure service offered by Oracle Corporation.<br/>
                It provides a wide range of cloud services, including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS) for various business needs. Oracle Cloud is designed to help organizations deploy, manage, and scale applications and services in a cloud environment.
               </p>
              </div>
            </div>
            {/* <-------------------------------Topics Section ----------------------------------------------> */}
            <h2 className="mb-2 mx-4 text-center text-lg font-semibold text-white">
              Topics you need to cover:
            </h2>
            <ul className="flex flex-wrap m-4">
              {topics.map((front) => {
                return (
                  <li className="p-2 lg:w-max md:w-1/2" key={front.title}>
                    <div className="h-full flex items-center border-gray-200 border px-4 py-2 rounded-lg hover:scale-105 transition-all">
                      <div className="flex items-center gap-3">
                        <label htmlFor={front.storage} className="text-white title-font font-bold text-xl cursor-pointer">{front.title}</label>
                        <input
                          type="checkbox"
                          id={front.storage}
                          checked={jstopicsChecked[front.storage]}
                          onChange={() => handleCheckboxChange(front.storage)}
                          className="w-4 h-4"
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            {/* <-----------------------------------------------RESOURCES SECTION---------------------------------------------------> */}
            <section className="text-white body-font">
              <div className=" px-4 py-14 mx-auto">
                <div className="flex flex-col text-left w-full mb-2">
                  <h1 className="text-xl font-bold text-center title-font mb-4 text-white-900 tracking-widest">
                    Resources:
                  </h1>
                </div>
                <ul className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                  {resources.map((resource) => {
                    return (
                      <li className="lg:w-full bg-black/20 p-4 rounded-xl hover:scale-[102%] transition-all duration-200 ease-in-out" key={resource.title}>
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                          <img
                            alt="team"
                            className="flex-shrink-0 rounded-lg w-48 h-48 object-contain sm:mb-0 mb-4"
                            src={resource.image}
                          />
                          <div className="text-left flex-grow sm:pl-8">
                            <Link to={resource.link} target={"_blank"}>
                              <h2 className="title-font font-medium text-xl pb-1 text-white underline underline-offset-2">
                                {resource.title}
                              </h2>
                            </Link>

                            <h3 className="text-white mb-3">{resource.type}</h3>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
          </section>
        </Container>
      </Section>
    </>
  );
};

const resources = [
  {
    title: "Free Training & Accreditation",
    image: "https://www.techfunnel.com/wp-content/uploads/2018/03/Oracle-Cloud-Benefits-that-Businesses-Can-Take-Advantage-Of.jpg",
    type: "Documentation",
    link: "https://education.oracle.com/learning-explorer",
  },
  {
    title: "A Way To Learn Oracle Integration Cloud",
    image: "https://play-lh.googleusercontent.com/F10OOHNkeNbOf5x9DYpoihAIkLRlSMxCsPHyCErXgm0oM2gZtJwVymJIZoN59v4JJWBZ=w240-h480-rw",
    type: "Courses",
    link: "https://www.tutorialspoint.com/a-way-to-learn-oracle-integration-cloud/index.asp",
  },
  {
    title: "Learn Oracle Cloud Infrastructure Fundamentals ",
    image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/youtube-logo.jpeg",
    type: "Youtube Video",
    link: "https://www.youtube.com/watch?v=LZSgONosVao"  
  }
  

];

const topics = [
  { title: "Compute Instances", storage: "compute-instances" },
  { title: "Database Services", storage: "database-services" },
  { title: "Storage Solutions", storage: "storage-solutions" },
  { title: "Identity and Access Management", storage: "identity-access-management" },
  { title: "Serverless Computing", storage: "serverless-computing" },
  { title: "Developer Tools", storage: "developer-tools" },
  { title: "Container Services", storage: "container-services" },
  { title: "Analytics and Data Services", storage: "analytics-data-services" },
  { title: "Networking", storage: "networking" },
  { title: "Security and Compliance", storage: "security-compliance" },
];

  
  