import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import styled from "styled-components";
import Footer from "../../../components/Footer/Footer";
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
        <Container>
          <section class="text-white body-font">
            <div class="mx-auto flex px-2 mt-8 mb-4 items-center justify-center flex-col">
              <img
                class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-contain object-center rounded"
                alt="hero"
                src="https://img.freepik.com/free-vector/javascript-frameworks-concept-illustration_114360-743.jpg?w=1060&t=st=1696096333~exp=1696096933~hmac=edaa5f833257356433e278024ea7c526b8820db7887da3a6e2d602d3c0239294"
              />
              <div class="text-center lg:w-full w-full">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  JavaScript
                </h1>
                <p class="mb-8 leading-relaxed text-justify">
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
                  toString()).
                </p>
              </div>
            </div>
            {/* <-------------------------------Topics Section ----------------------------------------------> */}
            <h2 class="mb-2 text-lg font-semiboldtext-white">
              Topics you need to cover:
            </h2>
            <div class="flex flex-wrap m-2">
              {topics.map((front) => {
                return (
                  <div class="p-2 lg:w-max md:w-1/2 ">
                    <div class="h-full flex items-center border-gray-200 border rounded-lg">
                      <div class="flex-row flex gap-16">
                        <h2 class="text-white title-font font-bold text-xl">
                          {front.title}
                        </h2>
                        <input
                          type="checkbox"
                          id={front.storage}
                          checked={jstopicsChecked[front.storage]}
                          onChange={() => handleCheckboxChange(front.storage)}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <-----------------------------------------------RESOURCES SECTION---------------------------------------------------> */}
            <section class="text-white body-font">
              <div class=" px-0 py-14 mx-auto">
                <div class="flex flex-col text-left w-full mb-2">
                  <h1 class="text-xl font-bold title-font mb-4 text-white-900 tracking-widest">
                    Resources
                  </h1>
                </div>
                <div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
                  {resources.map((resource) => {
                    return (
                      <div class="lg:w-full bg-black/20 p-4 rounded-xl hover:scale-[102%] transition-all duration-200 ease-in-out">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                          <img
                            alt="team"
                            class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                            src={resource.image}
                          />
                          <div class="text-left flex-grow sm:pl-8">
                            <Link to={resource.link} target={"_blank"}>
                              <h2 class="title-font font-medium text-xl pb-1 text-white underline underline-offset-2">
                                {resource.title}
                              </h2>
                            </Link>

                            <h3 class="text-white mb-3">{resource.type}</h3>
                            <a href={resource.link} class="mb-4">
                              Link
                            </a>
                            <span class="inline-flex"></span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
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
