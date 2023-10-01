import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styled from "styled-components";
import "./Main.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: flex;
  background-color: rgb(9, 9, 121);
  background-repeat: no-repeat;
  background: linear-gradient(
    262deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(2, 0, 36, 1) 1%
  );
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

export const Web = () => {
  const [checkedTopics, setCheckedTopics] = useState({
    HTML: false,
    CSS: false,
    Javascript: false,
  });

  const handleCheckboxChange = (topic) => {
    setCheckedTopics({
      ...checkedTopics,
      [topic]: !checkedTopics[topic],
    });
  };

  useEffect(() => {
    localStorage.setItem("checkedTopics", JSON.stringify(checkedTopics));
  }, [checkedTopics]);

  useEffect(() => {
    const storedCheckedTopics = localStorage.getItem("checkedTopics");
    if (storedCheckedTopics) {
      setCheckedTopics(JSON.parse(storedCheckedTopics));
    }
  }, []);

  return (
    <>
      <Section>
        <Navbar />
        <Container>
          {/* --------------------------------MAIN HEADING------------------------------------------------------ */}
          <div className=" px-0 py-10 ">
            <h1 className="text-3xl text-center font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              WEB DEVELOPMENT
            </h1>
            {/* <************************************MAIN SECTION*******************************************> */}
            <section class="text-gray-600 body-font">
              <div class="px-5 py-24 mx-auto flex flex-wrap">
                <div class="flex flex-wrap w-full">
                  <div class="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6">
                    <div class="flex relative pb-12">
                      <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 inline-flex items-center justify-center text-white relative z-10">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                        </svg>
                      </div>
                      <div class="flex-grow pl-4">
                        <h2 class="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                          Choose a Technology
                        </h2>
                        <p class="leading-relaxed text-white text-justify">
                          A full-stack development comprises front-end,
                          back-end, and database management. Choosing a
                          technology on which you want to work depends on
                          individuals, requirements, and applications. Few
                          technologies on which you can work and are trending :-
                          MERN AND MEAN
                        </p>
                      </div>
                    </div>
                    <div class="flex relative pb-12">
                      <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 inline-flex items-center justify-center text-white relative z-10">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 18v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1m18-2H3a2 2 0 00-2 2v4a2 2 0 002 2h18a2 2 0 002-2v-4a2 2 0 00-2-2zM6 12v-2a2 2 0 012-2h8a2 2 0 012 2v2"></path>
                        </svg>
                      </div>
                      <div class="flex-grow pl-4">
                        <h2 class="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                          Frontend Development
                        </h2>
                        <p class="leading-relaxed text-white text-justify">
                          Front-End is the UI (User Interface), it deals with
                          the website’s overall appearance, on how interactive
                          and dynamic it is. For mastering it, get clear with
                          all the elements of HTML, CSS, and JavaScript.
                        </p>
                      </div>
                    </div>
                    <div class="flex relative pb-12">
                      <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 inline-flex items-center justify-center text-white relative z-10">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
                        </svg>
                      </div>
                      <div class="flex-grow pl-4">
                        <h2 class="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                          Backend Development
                        </h2>
                        <p class="leading-relaxed text-white text-justify">
                          The code that runs on the server, has logic to send
                          the appropriate data from the client and receive it
                          from the server. Also, it includes the database which
                          stores all of the data of the application. It consists
                          of three parts: a server, an application, and a
                          database.
                        </p>
                      </div>
                    </div>

                    <div class="flex relative">
                      <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 inline-flex items-center justify-center text-white relative z-10">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                      </div>
                      <div class="flex-grow pl-4">
                        <h2 class="font-bold title-font text-xl text-white mb-1 tracking-wider">
                          Build Projects
                        </h2>
                        <p class="leading-relaxed text-white text-justify">
                          When you’re all done with the theory part, do build
                          some projects to be well-versed with full-stack
                          development. You implement all the front-end, and
                          back-end sides of a project along with database
                          handling, then you get perfect in web development.
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    class="lg:w-2/5 md:w-1/2 object-contain object-center rounded-lg md:mt-0 mt-12"
                    src="https://static.vecteezy.com/system/resources/previews/019/153/003/original/3d-minimal-programming-icon-coding-screen-web-development-concept-laptop-with-a-coding-screen-and-a-coding-icon-3d-illustration-png.png"
                    alt="step"
                  />
                </div>
              </div>
            </section>
            {/* <-----------------------------------------------END OF MAIN SECTION-------------------------------------------------> */}
            {/* <------------------------------------Frontend Development-------------------------------------------------------> */}
            <section class="text-white body-font">
              <div class="px-5 py-0 mx-auto">
                <div class="flex flex-col text-left w-full mb-10">
                  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                    1. Frontend Development
                  </h1>
                  <p class="w-full text-left mx-auto leading-relaxed text-base">
                    Below are the topics that you need to complete to become a
                    rockstar frontend developer
                  </p>
                </div>
                <div class="flex flex-wrap -m-2">
                  {front.map((front) => {
                    return (
                      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="team"
                            class="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4"
                            src={front.image}
                          />
                          <div class="flex-grow">
                            <Link to={front.to}>
                              <h2 class="text-white title-font font-bold underline text-xl">
                                {front.title}
                              </h2>
                            </Link>
                            <p class="text-white">{front.des}</p>
                            <input
                              type="checkbox"
                              id={front.title}
                              checked={checkedTopics[front.title]}
                              onChange={() => handleCheckboxChange(front.title)}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        </Container>
      </Section>
      <Footer />
    </>
  );
};

const front = [
  {
    title: "HTML",
    image:
      "https://img.freepik.com/free-photo/html-http-web-design-hompage-icon_53876-120700.jpg?w=740&t=st=1696093727~exp=1696094327~hmac=e936282eb24ddee35d111d16f401b909ac384b9d41951250fc14f4c92536de1a",
    to: "/html",
    des: "HTML is the standard markup language for Web pages",
  },
  {
    title: "CSS",
    image:
      "https://img.freepik.com/free-vector/java-developer-smartphone-software-javascript-coding-writing-application-css-programming-html-source-code-tampering-mobile-program-vector-isolated-concept-metaphor-illustration_335657-1994.jpg?w=740&t=st=1696093820~exp=1696094420~hmac=6aba683f215bd2f25d083045363b99880c4e9328faedc25fa920c6d42d45f15b",
    to: "/css",
    des: "CSS is used to style web pages and making your websites look awesome",
  },
  {
    title: "Javascript",
    image:
      "https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept_335657-2412.jpg?w=1060&t=st=1696093913~exp=1696094513~hmac=72afb722e8869c28f844193e8f7ca0dc4d74d7e40d429d4ec7a725bb26164862",
    to: "/js",
    des: "Javascript gives functionality and behaviour to our websites / webapps",
  },
];
