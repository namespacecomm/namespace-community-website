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

export const Javascript = () => {
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
                alt="JavaScript"
                src="https://img.freepik.com/free-vector/javascript-frameworks-concept-illustration_114360-743.jpg?w=1060&t=st=1696096333~exp=1696096933~hmac=edaa5f833257356433e278024ea7c526b8820db7887da3a6e2d602d3c0239294"
         />
                <div className="text-center lg:w-full w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                JavaScript
                </h1>
                <p className="mb-8 text-center mx-4">
                JavaScript (JS) is a lightweight interpreted (or just-in-time
                  compiled) programming language with first-class functions.
                  While it is most well-known as the scripting language for Web
                  pages, many non-browser environments also use it, such as
                  Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a
                  prototype-based, multi-paradigm, single-threaded, dynamic
                  language, supporting object-oriented, imperative, and
                  declarative (e.g. functional programming) styles. JavaScript's
                  dynamic capabilities include runtime object construction,
                  variable parameter lists, function variables, dynamic script
                  creation (via eval), object introspection (via for...in and
                  Object utilities), and source-code recovery (JavaScript
                  functions store their source text and can be retrieved through
                  toString()).    </p>
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
    title: "JavaScript Roadmap",
    image: "https://roadmap.sh/roadmaps/javascript.png",
    type: "Roadmap",
    link: "https://roadmap.sh/javascript",
  },
  {
    title: "MDN Documentation",
    image:
      "https://pbs.twimg.com/profile_images/1511434207079407618/AwzUxnVf_400x400.png",
    type: "Documentation",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "Learn-js Javascript Tutorials",
    image: "https://i.ibb.co/RSPv3KV/download-removebg-preview.jpg",
    type: "Collection Of Tutorials",
    link: "https://www.learn-js.org/",
  },
  {
    title: "W3Schools Javascript Tutorials",
    image:
      "https://yt3.googleusercontent.com/dW6to0x5Crmeh7yi-YPLcQRqVrBtx2BSh8eoKTJbE8NbjloQ0sqlmdszIlxokJU_97-ndOt_=s900-c-k-c0x00ffffff-no-rj",
    type: "Collection Of Tutorials",
    link: "https://www.w3schools.com/js/default.asp",
  },

  {
    title: "JavaScript for Beginners Specialization (Free)",
    image:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/0d/e2553478254970977ae6126a54d7af/GettyImages-172778145_600x600.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50",
    type: "Course",
    link: "https://www.coursera.org/specializations/javascript-beginner",
  },
  {
    title: "Javascript Fundamentals by Microsoft (Free)",
    image:
      "https://learn.microsoft.com/en-us/media/learn/tv/shows/show_image_default.svg?branch=main",
    type: "Course",
    link: "https://learn.microsoft.com/en-us/shows/javascript-fundamentals-development-for-absolute-beginners/",
  },
  {
    title: "W3C JavaScript Introduction by EdX (Free)",
    image:
      "https://prod-discovery.edx-cdn.org/media/course/image/c50943b5-3375-4d50-9f91-911930551603-5703bb2a02c8.png",
    type: "Course",
    link: "https://www.edx.org/learn/javascript/the-world-wide-web-consortium-w3c-javascript-introduction",
  },
  {
    title: "JavaScript Crash Course on Udemy (Free)",
    image: "https://img-b.udemycdn.com/course/240x135/3865140_cf11.jpg",
    type: "Course",
    link: "https://www.udemy.com/course/javascript-crash-course-for-beginners/",
  },

  {
    title: "HTML, CSS and JS by GA Dash (Free)",
    image:
      "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2013/10/Screen-Shot-2013-10-14-at-8.42.35-PM.png",
    type: "Course",
    link: "https://dash.generalassemb.ly/",
  },
  {
    title: "Javascript in 1 shot",
    image:
      "https://i.ytimg.com/vi/2md4HQNRqJA/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDUNbouTmTaBmovUWv0Qd3My_hCLw",
    type: "Youtube Video",
    link: "https://www.youtube.com/watch?v=sscX432bMZo&pp=ygUKamF2YXNjcmlwdA%3D%3D",
  },
  {
    title: "JavaScript in 100 seconds",
    image: "https://i.ytimg.com/vi_webp/DHjqpvDnNGE/maxresdefault.webp",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=DHjqpvDnNGE",
  },
  {
    title: "100+ JavaScript Concepts you Need to Know",
    image: "https://i.ytimg.com/vi/lkIFF4maKMU/maxresdefault.jpg",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=lkIFF4maKMU",
  },
];
const topics = [
  {
    title: "Basic Syntax",
    storage: "syntax",
  },
  {
    title: "Dom Manipulation",
    storage: "dom",
  },
  {
    title: "Fetch Api",
    storage: "fetch",
  },
  {
    title: "Async await",
    storage: "async",
  },
  {
    title: "Event Listeners",
    storage: "event",
  },
  {
    title: "Promises",
    storage: "promises",
  },
  {
    title: "Classes",
    storage: "classes",
  },
  {
    title: "Array Methods",
    storage: "array",
  },
  {
    title: "Hoisting",
    storage: "hoisting",
  },
  {
    title: "Closure",
    storage: "closure",
  },
];

  