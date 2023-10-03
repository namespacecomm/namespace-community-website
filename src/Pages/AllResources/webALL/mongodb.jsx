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

export const MongoDB = () => {
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
                src="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png"
              />
              <div className="text-center lg:w-full w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  Mongo DB
                </h1>
                <p className="mb-8 leading-relaxed text-justify">
                  MongoDB is a source-available cross-platform document-oriented
                  database program. Classified as a NoSQL database program,
                  MongoDB uses JSON-like documents with optional schemas.
                  MongoDB is developed by MongoDB Inc. and current versions are
                  licensed under the Server Side Public License (SSPL) which is
                  considered non-free by some organizations and distributions.
                  MongoDB is a member of the MACH Alliance.
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
    title: "MongoDB Documentation",
    image:
      "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png",
    type: "Documentation",
    link: "https://www.mongodb.com/docs/",
  },
  {
    title: "W3Schools - MongoDB Tutorial",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1088px-W3Schools_logo.svg.png",
    type: "Documentation",
    link: "https://www.w3schools.com/mongodb/",
  },
  {
    title: "MongoDB in 100 Seconds",
    image: "https://i.ytimg.com/vi/-bt_y4Loofg/sddefault.jpg",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=-bt_y4Loofg",
  },
  {
    title: "MongoDB Crash Course",
    image: "https://i.ytimg.com/vi/ofme2o29ngU/maxresdefault.jpg",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?app=desktop&v=ofme2o29ngU",
  },
  {
    title: "MongoDB Full Tutorial w/ Node.js, Express, & Mongoose",
    image: "https://i.ytimg.com/vi/4yqu8YF29cU/maxresdefault.jpg",
    type: "Youtube video",
    link: "https://youtu.be/4yqu8YF29cU?si=V4wdT9IYHrMCW6-T",
  },
  {
    title: "MongoDB",
    image:
      "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png",
    type: "Documentation",
    link: "https://docs.digitalocean.com/products/databases/mongodb/",
  },
  {
    title: "MongoDB - The Complete Developer's Guide 2023",
    image: "https://img-c.udemycdn.com/course/750x422/1906852_93c6_2.jpg",
    type: "Course",
    link: "https://www.udemy.com/course/mongodb-the-complete-developers-guide/",
  },
  {
    title: "MongoDB Tutorial",
    image: "https://www.tutorialspoint.com/mongodb/images/mongodb.jpg",
    type: "Documentation",
    link: "https://www.tutorialspoint.com/mongodb/",
  },
];

const topics = [
  { title: "Data Modeling", storage: "data-modelling" },
  { title: "CRUD Operations", storage: "crud-operations" },
  { title: "Querying", storage: "querying" },
  { title: "Documents", storage: "documents" },
  { title: "Collections", storage: "collections" },
  { title: "Indexes", storage: "indexes" },
];
