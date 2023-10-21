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

export const HEROKU = () => {
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
        <Container>
          <section className="text-white body-font">
            <div className="mx-auto flex px-2 mt-8 mb-4 items-center justify-center flex-col">
              <img
                className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-contain object-center rounded"
                alt="hero"
                src="https://assets.website-files.com/60da18e0504ac34bc54c5afa/6303be0c04f5534fc2c5c2d6_Big%20heroku_logo%20(1).png"
              />
              <div className="text-center lg:w-full w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  HEROKU
                </h1>
                <p className="mb-8 leading-relaxed text-justify">
                Heroku is a cloud platform as a service (PaaS) that allows developers to build, run, and operate applications entirely in the cloud. It supports several programming languages, including Java, Ruby, Python, PHP, Node.js, Go, and more. Heroku is known for its simplicity and ease of use, making it popular among developers for deploying web applications and managing software development projects.
                </p>
              </div>
            </div>
            {/* <-------------------------------Topics Section ----------------------------------------------> */}
            <h2 className="mb-2 text-lg font-semibold text-white">
              Topics you need to cover:
            </h2>
            <ul className="flex flex-wrap m-2">
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
              <div className=" px-0 py-14 mx-auto">
                <div className="flex flex-col text-left w-full mb-2">
                  <h1 className="text-xl font-bold title-font mb-4 text-white-900 tracking-widest">
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
    title: "Heroku - Docs",
    image: "https://cdn-icons-png.flaticon.com/512/873/873120.png",
    type: "Documentation",
    link: "https://devcenter.heroku.com/categories/reference",
  },
  {
    title: "Getting started - Multiple languages guides on how to get started on heroku",
    image: "https://cdn.icon-icons.com/icons2/2415/PNG/512/heroku_original_wordmark_logo_icon_146482.png",
    type: "Documentation",
    link: "https://www.heroku.com/training-and-education",
  },
  {
    title: "Complete Heroku Course - YouTube",
    image: "https://i.ytimg.com/vi/fMNIX_sRoVc/maxresdefault.jpg",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=fMNIX_sRoVc",
  },
  {
    title: "Several courses of Heroku ",
    image: "https://s.udemycdn.com/meta/default-meta-image-v2.png",
    type: "Course",
    link: "https://www.udemy.com/topic/heroku/",
  }
];

const topics = [
  { title: "Cloud Computing", storage: "cloud-computing" },
  { title: "Heroku CLI", storage: "heroku-cli" },
  { title: "Creating and Managing Apps", storage: "creating-and-managing-apps" },
  { title: "Docker Images", storage: "docker-images" },
  { title: "Deployment", storage: "deployment" },
  { title: "Application Configuration", storage: "application-configuration" },
  { title: "Scaling and Performance", storage: "scaling-and-performance" },
  { title: "Data Management", storage: "data-management" },
  { title: "Add-ons", storage: "add-ons" },
  { title: "Collaboration and Workflow", storage: "collaboration-and-workflow" },
  { title: "Security", storage: "security" },
  { title: "Troubleshooting and Debugging", storage: "troubleshooting-and-debugging" },
];
