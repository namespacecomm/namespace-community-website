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

export const CSS = () => {
  const [csstopicsChecked, setCssTopicsChecked] = useState({
    boxmodel: false,
    cssselectors: false,
    cascadespeficity: false,
    cssinheritance: false,
    csscolors: false,
    csssizing: false,
    layoutgrid: false,
    flexbox: false,
    psuedoclasseselements: false,
    cssborder: false,
    csszindex: false,
    gradientanimation: false,
  });

  const handleCheckboxChange = (topic) => {
    setCssTopicsChecked({
      ...csstopicsChecked,
      [topic]: !csstopicsChecked[topic],
    });
  };

  useEffect(() => {
    localStorage.setItem("csstopicsChecked", JSON.stringify(csstopicsChecked));
  }, [csstopicsChecked]);

  useEffect(() => {
    const storedTopicsChecked = localStorage.getItem("csstopicsChecked");
    if (storedTopicsChecked) {
      setCssTopicsChecked(JSON.parse(storedTopicsChecked));
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
                alt="css"
                src="https://img.freepik.com/free-vector/css-html-programming-languages-computer-programming-coding-it-female-programmer-cartoon-character-software-website-development_335657-2323.jpg?w=740&t=st=1696318168~exp=1696318768~hmac=a3467593274ad7d563a0303bb9a0c3bc8b660a580f94bbc3498f4677eae72213"
              />
              <div className="text-center lg:w-full w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  CSS: Cascading Style Sheets
                </h1>
                <p className="mb-8 leading-relaxed text-justify">
                  Cascading Style Sheets (CSS) is a stylesheet language used to
                  describe the presentation of a document written in HTML or XML
                  (including XML dialects such as SVG, MathML or XHTML). CSS
                  describes how elements should be rendered on screen, on paper,
                  in speech, or on other media. CSS is among the core languages
                  of the open web and is standardized across Web browsers
                  according to W3C specifications. Previously, the development
                  of various parts of CSS specification was done synchronously,
                  which allowed the versioning of the latest recommendations.
                  You might have heard about CSS1, CSS2.1, or even CSS3. There
                  will never be a CSS3 or a CSS4; rather, everything is now CSS
                  without a version number. After CSS 2.1, the scope of the
                  specification increased significantly and the progress on
                  different CSS modules started to differ so much, that it
                  became more effective to develop and release recommendations
                  separately per module. Instead of versioning the CSS
                  specification, W3C now periodically takes a snapshot of the
                  latest stable state of the CSS specification and individual
                  modules progress. CSS modules now have version numbers, or
                  levels, such as CSS Color Module Level 5.
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
                          checked={csstopicsChecked[front.storage]}
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
    title: "MDN Documentation",
    image:
      "https://pbs.twimg.com/profile_images/1511434207079407618/AwzUxnVf_400x400.png",
    type: "Documentation",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    title: "W3Schools - CSS Introduction",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1088px-W3Schools_logo.svg.png",
    type: "Documentation",
    link: "https://www.w3schools.com/css/css_intro.asp",
  },
  {
    title: "CSS Tutorial for Beginers",
    image:
      "https://i.ytimg.com/vi/I9XRrlOOazo/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBpmdn90a5heB5tKwledvuXdJQp6Q",
    type: "Youtube video",
    link: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9gQeDH6xYhmO-db2mhoTSrT",
  },
  {
    title: "Learn CSS in 20 Minutes",
    image:
      "https://i.ytimg.com/vi/1PnVor36_40/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4tJ7kbGq-1Vv0pz8nIkiwF5xyQg",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=1PnVor36_40",
  },
  {
    title: "CSS in 100 Seconds",
    image:
      "https://i.ytimg.com/vi/OEV8gMkCHXQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAn8dqDCfy2BjSRSrGCmP2AjR_YDg",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=OEV8gMkCHXQ",
  },
  {
    title: "The CSS Handbook",
    image: "https://flaviocopes.com/bootcamp.jpg",
    type: "Documentation",
    link: "https://flaviocopes.com/book/css/",
  },
  {
    title: "Web Development by Doing: HTML/CSS From Scratch",
    image: "https://img-c.udemycdn.com/course/240x135/65330_5f74_10.jpg",
    type: "Course",
    link: "https://www.udemy.com/course/web-development-learn-by-doing-html5-css3-from-scratch-introductory/",
  },
  {
    title: "CSS: Zero to Hero in CSS",
    image: "https://img-c.udemycdn.com/course/480x270/2089476_55a6.jpg",
    type: "Course",
    link: "https://www.udemy.com/course/css-zero-to-hero/",
  },
];

const topics = [
  { title: "Box Model", storage: "boxmodel" },
  { title: "Selectors", storage: "cssselectors" },
  { title: "Cascade & Specificity", storage: "cascadespeficity" },
  { title: "Inheritance", storage: "cssinheritance" },
  { title: "Colors", storage: "csscolors" },
  { title: "Sizing Units", storage: "csssizing" },
  { title: "Layout & Grid", storage: "layoutgrid" },
  { title: "Flex Box", storage: "flexbox" },
  { title: "Psuedo-Classes & Elements", storage: "psuedoclasseselements" },
  { title: "Border", storage: "cssborder" },
  { title: "Z-Index", storage: "csszindex" },
  { title: "Gradients & Animation", storage: "gradientanimation" },
];
