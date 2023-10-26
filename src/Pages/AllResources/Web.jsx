import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./Main.css";
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
  @media only screen and (max-width: 1024px) {
    width: 100vw;
  }
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
        <Container>
          {/* --------------------------------MAIN HEADING------------------------------------------------------ */}
          <div className=" px-0 py-10 ">
            <h1 className="text-3xl text-center font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              WEB DEVELOPMENT
            </h1>
            {/* <************************************MAIN SECTION*******************************************> */}
            <section className="text-gray-600 body-font">
              <div className="px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex flex-wrap w-full">
                  <div className="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6">
                    <div className="flex relative pb-12">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 inline-flex items-center justify-center text-white relative z-10">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                        </svg>
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                          Choose a Technology
                        </h2>
                        <p className="leading-relaxed text-white text-justify">
                          A full-stack development comprises front-end,
                          back-end, and database management. Choosing a
                          technology on which you want to work depends on
                          individuals, requirements, and applications. Few
                          technologies on which you can work and are trending :-
                          MERN AND MEAN
                        </p>
                      </div>
                    </div>
                    <div className="flex relative pb-12">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 inline-flex items-center justify-center text-white relative z-10">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 18v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1m18-2H3a2 2 0 00-2 2v4a2 2 0 002 2h18a2 2 0 002-2v-4a2 2 0 00-2-2zM6 12v-2a2 2 0 012-2h8a2 2 0 012 2v2"></path>
                        </svg>
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                          <Link to="#frontend-development" onClick={() => document.querySelector("#frontend-development").scrollIntoView()} >Frontend Development</Link>
                        </h2>
                        <p className="leading-relaxed text-white text-justify">
                          Front-End is the UI (User Interface), it deals with
                          the website’s overall appearance, on how interactive
                          and dynamic it is. For mastering it, get clear with
                          all the elements of HTML, CSS, and JavaScript.
                        </p>
                      </div>
                    </div>
                    <div className="flex relative pb-12">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 inline-flex items-center justify-center text-white relative z-10">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
                        </svg>
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                          <Link to="#backend-development" onClick={() => document.querySelector("#backend-development").scrollIntoView()}>Backend Development</Link>
                        </h2>
                        <p className="leading-relaxed text-white text-justify">
                          The code that runs on the server, has logic to send
                          the appropriate data from the client and receive it
                          from the server. Also, it includes the database which
                          stores all of the data of the application. It consists
                          of three parts: a server, an application, and a
                          database.
                        </p>
                      </div>
                    </div>

                    <div className="flex relative">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 inline-flex items-center justify-center text-white relative z-10">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-bold title-font text-xl text-white mb-1 tracking-wider">
                          Build Projects
                        </h2>
                        <p className="leading-relaxed text-white text-justify">
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
                    className="lg:w-2/5 md:w-1/2 object-contain object-center rounded-lg md:mt-0 mt-12"
                    src="https://static.vecteezy.com/system/resources/previews/019/153/003/original/3d-minimal-programming-icon-coding-screen-web-development-concept-laptop-with-a-coding-screen-and-a-coding-icon-3d-illustration-png.png"
                    alt="step"
                  />
                </div>
              </div>
            </section>
            {/* <-----------------------------------------------END OF MAIN SECTION-------------------------------------------------> */}
            {/* <------------------------------------Frontend Development-------------------------------------------------------> */}
            <section className="text-white body-font">
              <div className="px-5 py-0 mx-auto">
              <div className="flex flex-col text-left w-full mb-10" id="frontend-development">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                    1. Frontend Development
                  </h1>
                  <p className="w-full text-left mx-auto leading-relaxed text-base">
                    Below are the topics that you need to complete to become a
                    rockstar frontend developer
                  </p>
                </div>
                <div className="flex flex-wrap -m-2">
                  {front.map((front) => {
                    return (
                      <div
                        className="p-2 lg:w-1/3 md:w-1/2 w-full"
                        key={front.title}
                      >
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="team"
                            className="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4"
                            src={front.image}
                          />
                          <div className="flex-grow">
                            <Link to={front.to}>
                              <h2 className="text-white title-font font-bold underline text-xl">
                                {front.title}
                              </h2>
                            </Link>
                            <p className="text-white">{front.des}</p>
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
                <div className="flex flex-col text-left w-full mb-10" id="backend-development">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                    2. Backend Development
                  </h1>
                  <p className="w-full text-left mx-auto leading-relaxed text-base">
                    Below are the topics that you need to complete to become a
                    rockstar backend developer
                  </p>
                </div>
                <div className="flex flex-wrap -m-2">
                  {back.map((back) => {
                    return (
                      <div
                        className="p-2 lg:w-1/3 md:w-1/2 w-full"
                        key={back.title}
                      >
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="team"
                            className="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4"
                            src={back.image}
                          />
                          <div className="flex-grow">
                            <Link to={back.to}>
                              <h2 className="text-white title-font font-bold underline text-xl">
                                {back.title}
                              </h2>
                            </Link>
                            <p className="text-white">{back.des}</p>
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
    title: "CSS Framework",
    image:
      "https://img.freepik.com/free-vector/hand-coding-concept-illustration_114360-8193.jpg?w=740&t=st=1696143700~exp=1696144300~hmac=e30b598983507067bf52afb462064a73e9d146faba6d60c17f3a7c6f28407b8a",
    to: "/css-framework",
    des: "Learn a CSS framework that simplifies web development.",
  },
  {
    title: "FrontEnd Framework",
    image:
      "https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=740&t=st=1696144399~exp=1696144999~hmac=195c28ce31c3416fef0bf6c03be63223ff723eac2833047ee7d39496578d2155",
    to: "/frontend-framework",
    des: "FrontEnd Framework based on JS Industry Level Standards eg:React,Svelte,Angular",
  },
  {
    title: "Github",
    image:
      "https://img.freepik.com/premium-psd/3d-social-media-github-icon-rendering-front-view_391890-18330.jpg?w=740",
    to: "/git",
    des: "GitHub: Web platform for collaborative code management and version control.",
  },
  {
    title: "Netlify",
    image:
      "https://img.freepik.com/premium-vector/software-development-programming-coding-vector-concept_123447-266.jpg?w=740",
    to: "/netlify",
    des: "Netlify is a platform for hosting websites and web applications.",
  },
];

/* <------------------------------------Backend Development-------------------------------------------------------> */

const back = [
  {
    title: "PHP",
    image: "https://www.php.net/images/logos/new-php-logo.svg",
    to: "/php",
    des: "PHP is a versatile server-side scripting language for web development.",
  },
  {
    title: "MySQL",
    image: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
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
    image: "https://static.djangoproject.com/img/logos/django-logo-positive.png",
    to: "/django",
    des: "Django: High-level Python web framework for rapid, secure site development.",
  },
  {
    title: "Node.js",
    image:
      "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
    to: "/nodejs",
    des: "Node.js: JavaScript runtime for building scalable server-side applications.",
  },
  {


    title: "Express",
    image:
      "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
    to: "/expressjs",
    des: "Express.js is a minimalist and flexible Node.js web application framework.",
  },
  {

    title: "Firebase",
    image:
      "https://cdn.icon-icons.com/icons2/691/PNG/512/google_firebase_icon-icons.com_61474.png",
    to: "/firebase",
    des: "Firebase: Google's app development platform with authentication, real-time database, and hosting tools.",
  },
];
