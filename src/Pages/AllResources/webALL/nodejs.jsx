import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: flex;
  ${
    "" 
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

export const Nodejs = () => {
    const [nodejsTopicsChecked, setNodejsTopicsChecked] = useState({
      introduction: false,
      asyncprogramming: false,
      npm: false,
      modules: false,
      fileio: false,
      http: false,
      expressjs: false,
      databases: false,
      authentication: false,
      errorhandling: false,
      testing: false,
      deployment: false,
    });
    const handleCheckboxChange = (topic) => {
        setNodejsTopicsChecked({
          ...nodejsTopicsChecked,
          [topic]: !nodejsTopicsChecked[topic],
        });
      };
      useEffect(() => {
        localStorage.setItem(
          "nodejsTopicsChecked",
          JSON.stringify(nodejsTopicsChecked)
        );
      }, [nodejsTopicsChecked]);

      useEffect(() => {
        const storedTopicsChecked = localStorage.getItem("nodejsTopicsChecked");
        if (storedTopicsChecked) {
          setNodejsTopicsChecked(JSON.parse(storedTopicsChecked));
        }
      }, []);

      return (
        <>
          <Section>
            <Container>
              <section className="text-white body-font">
                <div className="mx-auto flex px-2 mt-8 mb-4 items-center justify-center flex-col">
                  <img
                    className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-contain object-center rounded"
                    alt="hero"
                    src="https://img.freepik.com/free-vector/cross-platform-frameworks-abstract-concept-illustration_335657-1825.jpg?t=st=1696356688~exp=1696357288~hmac=cb49131bd2734ce12c1b72339ddeda768d28efef7ac3bb49b7e22f31d3bad154"
                  />
                  <div className="text-center lg:w-full w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                      Node JS
                    </h1>
                    <p className="mb-8 leading-relaxed text-justify">
                    Node.js, often simply referred to as Node, is an open-source server-side 
                    JavaScript runtime environment. It's renowned for its efficiency and scalability, 
                    making it a fundamental technology in modern web development. Node.js allows developers 
                    to execute JavaScript code on the server, a capability that was traditionally 
                    exclusive to the browser.One of Node.js's key strengths lies in its non-blocking, event-driven
                     architecture. It leverages an event loop to efficiently handle asynchronous tasks, 
                     such as reading files, making network requests, or handling concurrent connections. 
                     This non-blocking nature makes Node.js particularly well-suited for applications 
                     requiring real-time data updates, like chat applications or online gaming platforms.
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
                            <label
                              htmlFor={front.storage}
                              className="text-white title-font font-bold text-xl cursor-pointer"
                            >
                              {front.title}
                            </label>
                            <input
                              type="checkbox"
                              id={front.storage}
                              checked={nodejsTopicsChecked[front.storage]}
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
                          <li
                            className="lg:w-full bg-black/20 p-4 rounded-xl hover:scale-[102%] transition-all duration-200 ease-in-out"
                            key={resource.title}
                          >
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
          title: "Node JS Roadmap",
          image: "https://roadmap.sh/roadmaps/nodejs.png",
          type: "Roadmap",
          link: "https://roadmap.sh/nodejs",
        },
        {
          title: "Getting started with Node JS",
          image:
            "https://cdn4.iconfinder.com/data/icons/logos-3/454/nodejs-new-pantone-white-512.png",
          type: "Documentation",
          link: "https://nodejs.dev/en/learn/",
        },
        {
          title: "W3Schools Node JS introduction",
          image:
            "https://yt3.googleusercontent.com/dW6to0x5Crmeh7yi-YPLcQRqVrBtx2BSh8eoKTJbE8NbjloQ0sqlmdszIlxokJU_97-ndOt_=s900-c-k-c0x00ffffff-no-rj",
          type: "Collection Of Tutorials",
          link: "https://www.w3schools.com/nodejs/nodejs_intro.asp",
        },
      
        {
          title: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
          image:
            "https://logos-world.net/wp-content/uploads/2021/11/Udemy-Logo-2017-2021.png",
          type: "Course",
          link: "https://www.udemy.com/course/nodejs-the-complete-guide/",
        },
        {
          title: "Learning Node.js",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/6/6c/Codecademy.svg",
          type: "Course",
          link: "https://www.codecademy.com/learn/learn-node-js",
        },
        {
          title: "How to Get Started with Node JS - a Handbook for Beginners",
          image:
            "data:image/png;base64,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",
          type: "Course",
          link: "https://www.freecodecamp.org/news/get-started-with-nodejs/",
        },
        {
          title: "Node.js Tutorial for Beginners",
          image:
            "data:image/jpeg;base64,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",
          type: "Youtube Video",
          link: "https://www.youtube.com/watch?v=TlB_eWDSMt4",
        },
        {
          title: "Node.js Full Course for Beginners | Complete All-in-One Tutorial ",
          image:
            "https://i.ytimg.com/vi/JZXQ455OT3A/maxresdefault.jpg",
          type: "Youtube Video",
          link: "https://www.youtube.com/watch?v=f2EqECiTBL8",
        },
          
      ];
      
      const topics = [
        {
          title: "Introduction to Nodejs",
          storage: "introduction",
        },
        {
          title: "Asynchronous Programming",
          storage: "async",
        },
        {
          title: "Working with Modules",
          storage: "modules",
        },
        {
          title: "File Input/Output",
          storage: "fileio",
        },
        {
          title: "HTTP/HTTPS",
          storage: "http",
        },
        {
          title: "Using Express.js for Web Applications",
          storage: "express",
        },
        {
          title: "Working with Databases",
          storage: "databases",
        },
        {
          title: "Authentication and Authorization",
          storage: "authentication",
        },
        {
          title: "Error Handling",
          storage: "errorhandling",
        },
        {
          title: "Testing",
          storage: "testing",
        },
        {
          title: "Deployment of Nodejs Applications",
          storage: "deployment",
        },
      ];
      