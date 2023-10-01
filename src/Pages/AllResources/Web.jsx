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

                

<br />
                <div class="flex flex-col text-left w-full mb-10">
                  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                    2. Backend Development
                  </h1>
                  <p class="w-full text-left mx-auto leading-relaxed text-base">
                    Below are the topics that you need to complete to become a
                    rockstar backend developer
                  </p>
                </div>
                <div class="flex flex-wrap -m-2">
                  {back.map((back) => {
                    return (
                      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="team"
                            class="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4"
                            src={back.image}
                          />
                          <div class="flex-grow">
                            <Link to={back.to}>
                              <h2 class="text-white title-font font-bold underline text-xl">
                                {back.title}
                              </h2>
                            </Link>
                            <p class="text-white">{back.des}</p>
                            <input
                              type="checkbox"
                              id={back.title}
                              checked={checkedTopics[back.title]}
                              onChange={() => handleCheckboxChange(back.title)}
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
  {
    title: "Tailwind-CSS",
    image:
      "https://img.freepik.com/free-vector/hand-coding-concept-illustration_114360-8193.jpg?w=740&t=st=1696143700~exp=1696144300~hmac=e30b598983507067bf52afb462064a73e9d146faba6d60c17f3a7c6f28407b8a",
    to: "/tailwindcss",
    des: "Tailwind CSS is a utility-first CSS framework that simplifies web development.",
  },
  {
    title: "React",
    image:
       "https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=740&t=st=1696144399~exp=1696144999~hmac=195c28ce31c3416fef0bf6c03be63223ff723eac2833047ee7d39496578d2155",
    to: "/react",
    des: "A single page focused JavaScript library with a component-based approach.", 
   },
   {
    title: "Github",
    image:"https://img.freepik.com/premium-psd/3d-social-media-github-icon-rendering-front-view_391890-18330.jpg?w=740",
    to: "/git",
    des:"GitHub: Web platform for collaborative code management and version control.",
  },
   {
   title: "Netlify",
   image: "https://img.freepik.com/premium-vector/software-development-programming-coding-vector-concept_123447-266.jpg?w=740",
   to: "/netlify",
   des: "Netlify is a platform for hosting websites and web applications.",
   }
];

 {/* <------------------------------------Backend Development-------------------------------------------------------> */}
 const back = [
  {
    title: "PHP",
    image:
      "https://img.freepik.com/free-vector/new-app-development-desktop_23-2148684987.jpg?w=740&t=st=1696148044~exp=1696148644~hmac=2b1042d454d6cdbd63028a652692402e729bd54defc1d62dea7ee48ab21335a0",
    to: "/php",
    des: "PHP is a versatile server-side scripting language for web development.",
  },
  {
    title: "MySQL",
    image:
    "https://img.freepik.com/free-vector/gradient-website-hosting-illustration_23-2149247164.jpg?w=740&t=st=1696148496~exp=1696149096~hmac=6f53e263b59fc15c3a1a068504ca95ed27e28c1280bbf16e1e5b802a4a2a650c",
    to: "/mysql",
    des: "MySQL: Popular RDBMS for web databases.",
  },
  {
    title: "MongoDB",
    image:
    "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png",
    to: "/mongodb",
    des: "MongoDB: NoSQL database for modern applications.",
  },
  {
    title: "Django",
    image:"https://media.licdn.com/dms/image/D4D12AQE-VEYeJbkang/article-cover_image-shrink_720_1280/0/1685546933475?e=2147483647&v=beta&t=4yE6W6cW91SZtqOR2x-_EH2ztyRctpRiWMJPZdRCQOM",  
    to: "/django",
    des: "Django: High-level Python web framework for rapid, secure site development.",
  },
  {
    title: "Node.js",
    image:"https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
    to: "/nodejs",
    des: "Node.js: JavaScript runtime for building scalable server-side applications.", 
   },
];