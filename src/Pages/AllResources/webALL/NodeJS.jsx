import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: flex;
  ${"" /* background-color: rgb(9, 9, 121);
  background-repeat: no-repeat;
  background: linear-gradient(
    262deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(2, 0, 36, 1) 1%
  ); */
    }
  background-color: #010116;
  ${"" /* background-repeat: no-repeat;
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

export const NodeJS = () => {
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
                                src="https://tsh.io/wp-content/uploads/2019/05/node-js-injection_.jpg"
                            />
                            <div class="text-center lg:w-full w-full">
                                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                                    Node.js is an open-source, cross-platform JavaScript runtime environment
                                </h1>
                                <p class="mb-8 leading-relaxed text-justify">
                                    Node.js is a powerful and versatile JavaScript runtime environment that allows developers to execute
                                    JavaScript code on the server-side. It's renowned for its non-blocking, event-driven architecture, 
                                    making it exceptionally efficient for building scalable and high-performance applications. Node.js 
                                    has gained immense popularity in web development due to its ability to handle numerous concurrent 
                                    connections, making it well-suited for real-time applications, APIs, and server-side scripting. 
                                    Its extensive package ecosystem through npm (Node Package Manager) further accelerates development 
                                    by providing access to a vast array of pre-built modules and libraries. Node.js has become a go-to 
                                    choice for building web applications, microservices, and other server-side solutions, offering 
                                    developers the flexibility to leverage JavaScript's familiarity and versatility across the entire 
                                    application stack.
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
                                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
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
                                <div class="flex flex-wrap -m-4">
                                    {resources.map((resource) => {
                                        return (
                                            <div class="p-4 lg:w-1/2">
                                                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                                    <img
                                                        alt="team"
                                                        class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                                                        src={resource.image}
                                                    />
                                                    <div class="text-left flex-grow sm:pl-8">
                                                        <h2 class="title-font font-medium text-lg text-white">
                                                            {resource.title}
                                                        </h2>
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
        title: "Node.js Documentation",
        image:
            "https://nodejs.org/static/images/blog/uncategorized/evolving-the-node-js-brand/node.png",
        type: "Documentation",
        link: "https://nodejs.org/en/docs",
    },
    {
        title: "NodeSchool is an open source project run by volunteers",
        image:
            "https://camo.githubusercontent.com/730645ff32f6efe57c3049411016e52dc798503a7de8a7831fb1a3432043a75e/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6261746e30353030302f696d6167652f75706c6f61642f76313539363633323535342f395f68617a66696b2e706e67",
        type: "Documentation",
        link: "https://nodeschool.io/",
    },
    {
        title: "Node.js Design Patterns",
        image:"https://icon-library.com/images/node-js-icon/node-js-icon-15.jpg",
        type: "Documentation",
        link: "https://blog.risingstack.com/fundamental-node-js-design-patterns/",
    },
    {
        title: "Node.js Tutorial",
        image:"https://i.ytimg.com/vi/TNV0_7QRDwY/maxresdefault.jpg",
        type: "Tutorial",
        link: "https://www.tutorialspoint.com/nodejs/index.htm",    
    },
    {
     title: "Node.js Tutorial (w3schools)",
    image:"https://w7.pngwing.com/pngs/934/398/png-transparent-js-node-logos-and-brands-line-filled-icon-thumbnail.png",
    type: "Tutorial",
    link: "https://www.w3schools.com/nodejs/default.asp",
   },
   {
    title: "Node.js Tutorial (javatpoint)",
    image:"https://w7.pngwing.com/pngs/414/85/png-transparent-nodejs-javascript-runtime-backend-node-js-logo-3d-icon.png",
    type: "Tutorial",
    link: "https://www.javatpoint.com/nodejs-tutorial",
   },
   {
    title: "Node.js (FreeCodeCamp)",
    image:"https://cdn.freecodecamp.org/platform/universal/fcc-og-1200-social-green.png",
    type: "Video Tutorial",
    link: "https://www.youtube.com/watch?v=Oe421EPjeBE&ab_channel=freeCodeCamp.org",
   },
   {
    title: "Node.js (1-hour crash course) by Mosh",
    image:"https://img-c.udemycdn.com/course/750x422/1638522_fbdf.jpg",
    type: "Video Tutorial",
    link: "https://www.youtube.com/watch?v=TlB_eWDSMt4&ab_channel=ProgrammingwithMosh",
   }
];

const topics = [
    { title: "Node.js Modules and npm", storage: "nodeJS-npm" },
    { title: "HTTP and Web Servers", storage: "http-webServer" },
    { title: "Database Connectivity", storage: "database-connect" },
    { title: "Authentication", storage: "authenticate" },
    { title: "Authorization", storage: "authorization" },
    { title: "Express.js", storage: "expressjs" },
    { title: "Asynchronous JavaScript", storage: "asynchronous-js" },
    { title: "REST API", storage: "RestAPI" },
];
