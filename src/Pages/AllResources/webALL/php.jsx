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

export const PHP = () => {
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
                alt="Adobe"
                src="https://img.freepik.com/premium-photo/browser-window-with-php-programming-language-icon-code-elements-background-3d_327483-939.jpg?size=626&ext=jpg&ga=GA1.1.613098439.1696317950&semt=sph"/>
                <div className="text-center lg:w-full w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                PHP: Hypertext PreProcessor
                </h1>
                <p className="mb-8 text-center mx-4">
                The PHP Hypertext Preprocessor (PHP) is a programming language
                  that allows web developers to create dynamic content that
                  interacts with databases. PHP is basically used for developing
                  web based software applications. This tutorial helps you to
                  build your base with PHP.PHP started out as a small open
                  source project that evolved as more and more people found out
                  how useful it was. Rasmus Lerdorf unleashed the first version
                  of PHP way back in 1994. PHP is a MUST for students and
                  working professionals to become a great Software Engineer
                  specially when they are working in Web Development Domain.
                  Before proceeding with this tutorial you should have at least
                  basic understanding of computer programming, Internet,
                  Database, and MySQL etc is very helpful.
                 </p>
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
    title: "W3Schools - PHP Introduction",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1088px-W3Schools_logo.svg.png",
    type: "Documentation",
    link: "https://www.w3schools.com/php/php_intro.asp",
  },
  {
    title: "CSS Tutorial Full Course",
    image:
      "https://i.ytimg.com/vi/OK_JCtrrv-c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJFYYIVzU6x7-B_W7kDJtxUrUz4Q",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=OK_JCtrrv-c",
  },
  {
    title: "Learn PHP in 100 Seconds",
    image:
      "https://i.ytimg.com/vi/a7_WFUlFS94/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAXSNWkEq-Us989MAC6AeQmk_03UA",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=a7_WFUlFS94",
  },
  {
    title: "PHP Glossary",
    image:
      "https://pbs.twimg.com/profile_images/1511434207079407618/AwzUxnVf_400x400.png",
    type: "Documentation",
    link: "https://developer.mozilla.org/en-US/docs/Glossary/PHP",
  },
  {
    title: "PHP in 15 Minutes",
    image:
      "https://i.ytimg.com/vi/ZdP0KM49IVk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZhwdXuPRa6T4jBRpQEur-cVdJvA",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=ZdP0KM49IVk",
  },
  {
    title: "The PHP Handbook",
    image: "https://flaviocopes.com/bootcamp.jpg",
    type: "Documentation",
    link: "https://flaviocopes.com/book/php/",
  },
  {
    title: "Practical PHP: Master the Basics",
    image: "https://img-b.udemycdn.com/course/240x135/130064_22b3_12.jpg",
    type: "Course",
    link: "https://www.udemy.com/course/code-dynamic-websites/",
  },
  {
    title: "Beginner PHP and MySQL Tutorial",
    image: "https://img-b.udemycdn.com/course/240x135/9711_452b_8.jpg",
    type: "Course",
    link: "https://www.udemy.com/course/php-mysql-tutorial/",
  },
];

const topics = [
  { title: "Variables & Data Types", storage: "variablesdatatypes" },
  { title: "Operators", storage: "phpoperators" },
  { title: "Conditional Statements", storage: "phpconditional" },
  { title: "Loops", storage: "phploops" },
  { title: "Functions", storage: "phpfunctions" },
  { title: "Arrays", storage: "phparrays" },
  { title: "Form Handling", storage: "phpforms" },
  { title: "Include & Require", storage: "includerequire" },
  { title: "Cookies & Sessions", storage: "phpcookiessessions" },
  { title: "File Handling", storage: "phpfilehandling" },
  { title: "OOP", storage: "phpoops" },
  { title: "MySQL Database", storage: "phpmysql" },
  { title: "PHP XMP", storage: "phpxmp" },
  { title: "PHP AJAX", storage: "phpajax" },
];