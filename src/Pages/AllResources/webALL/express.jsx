import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../../components/Footer/Footer";
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

export const Express = () => {
  const [expressTopicsChecked, setExpressTopicsChecked] = useState({
    datamodelling: false,
    crudoperations: false,
    querying: false,
    documents: false,
    collections: false,
    indexes: false,
  });

  const handleCheckboxChange = (topic) => {
    setExpressTopicsChecked({
      ...expressTopicsChecked,
      [topic]: !expressTopicsChecked[topic],
    });
  };

  useEffect(() => {
    localStorage.setItem(
      "expressTopicsChecked",
      JSON.stringify(expressTopicsChecked)
    );
  }, [expressTopicsChecked]);

  useEffect(() => {
    const storedTopicsChecked = localStorage.getItem("expressTopicsChecked");
    if (storedTopicsChecked) {
      setExpressTopicsChecked(JSON.parse(storedTopicsChecked));
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
                src="https://miro.medium.com/v2/resize:fit:1400/1*5ZLTnnDA1pHRtwXvxq_LAg.png"
              />
              <div className="text-center lg:w-full w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  Express
                </h1>
                <p className="mb-8 leading-relaxed text-justify">
                  Express.js, or simply Express, is a back end web application
                  framework for building RESTful APIs with Node.js, released as
                  free and open-source software under the MIT License. It is
                  designed for building web applications and APIs. It has been
                  called the de facto standard server framework for Node.js.
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
                          checked={expressTopicsChecked[front.storage]}
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
      <Footer />
    </>
  );
};

const resources = [
  {
    title: "Express Documentation",
    image:
      "data:image/png;base64,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",
    type: "Documentation",
    link: "https://expressjs.com/en/starter/installing.html",
  },
  {
    title: "MDN Webdocs - ExpressJS Tutorial",
    image:
      "https://pbs.twimg.com/profile_images/1511434207079407618/AwzUxnVf_400x400.png",
    type: "Documentation",
    link: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction",
  },
  {
    title: "GeeksForGeeks - Express.js",
    image:
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230310150145/Express.js-Tutorial.jpg",
    type: "Documentation",
    link: "https://www.geeksforgeeks.org/express-js/",
  },
  {
    title: "Learn Express JS In 35 Minutes",
    image: "https://i.ytimg.com/vi/SccSCuHhOw0/maxresdefault.jpg",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=SccSCuHhOw0",
  },
  {
    title: "Node.js and Express.js - Full Course",
    image: "https://i.ytimg.com/vi/Oe421EPjeBE/maxresdefault.jpg",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=Oe421EPjeBE",
  },
  {
    title: "Express JS Crash Course",
    image: "https://i.ytimg.com/vi/L72fhGm1tfE/maxresdefault.jpg",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=L72fhGm1tfE",
  },
  {
    title: "ExpressJS from Beginner to Advanced",
    image: "https://img-b.udemycdn.com/course/240x135/1353898_1e37_2.jpg",
    type: "Course",
    link: "https://www.udemy.com/course/expressjs-from-beginner-to-advanced/",
  },
  {
    title: "Developing Back-End Apps with Node.js and Express",
    image:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/XDP/XDP~COURSE!~developing-backend-apps-with-nodejs-and-express/XDP~COURSE!~developing-backend-apps-with-nodejs-and-express.jpeg",
    type: "Course",
    link: "https://www.coursera.org/learn/developing-backend-apps-with-nodejs-and-express",
  },
];

const topics = [
  { title: "NodeJS", storage: "nodejs" },
  { title: "Basic Routing", storage: "basicrouting" },
  { title: "Sending Data", storage: "sendingdata" },
  { title: "Rendering HTML", storage: "renderinghtml" },
  { title: "Routers", storage: "routers" },
  { title: "Middleware", storage: "middleware" },
  { title: "Rendering Static Files", storage: "staticfiles" },
  { title: "Parsing Form/JSON Data", storage: "parsingform" },
];
