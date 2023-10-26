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

export const Github = () => {
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
                src="https://play-lh.googleusercontent.com/kaox1VteLsWAuNxPxhm8t4llaoyFhxzDjo9g4Hdf92bKdT_Sn6Yrdku6rApuc5ktirw"              />
                <div className="text-center lg:w-full w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Github: Cloud based version control service
                </h1>
                <p className="mb-8 text-center mx-4">
                Git is a specific open-source version control system created
                  by Linus Torvalds in 2005. Specifically, Git is a distributed
                  version control system, which means that the entire codebase
                  and history is available on every developer’s computer, which
                  allows for easy branching and merging. According to a Stack
                  Overflow developer survey, over 87% of developers use Git.
                  GitHub essentials are:Repositories, Branches, Commits, Pull
                  Requests, Git (the version control software GitHub is built
                  on).
                  <br />
                  It makes it easy for developers to share code files and
                  collaborate with fellow developers on open-source projects.
                  GitHub also serves as a social networking site where
                  developers can openly network, collaborate, and pitch their
                  work.
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
    title: "MDN Documentation",
    image:
      "https://pbs.twimg.com/profile_images/1511434207079407618/AwzUxnVf_400x400.png",
    type: "Documentation",
    link: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub",
  },
  {
    title: "W3Schools - Git Tutorial",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1088px-W3Schools_logo.svg.png",
    type: "Documentation",
    link: "https://www.w3schools.com/git/",
  },
  {
    title: "Git for Beginners",
    image: "https://i.ytimg.com/vi/vwj89i2FmG0/hq720.jpg",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=vwj89i2FmG0&pp=ygUMZ2l0IHR1dG9yaWFs",
  },
  {
    title: "Complete Git and Github Tutorial",
    image: "https://i.ytimg.com/vi/apGV9Kg7ics/hq720.jpg",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=apGV9Kg7ics&pp=ygUPZ2l0aHViIHR1dG9yaWFs",
  },
  {
    title: "Git Complete: The definitive, step-by-step guide to Git",
    image: "https://img-c.udemycdn.com/course/240x135/221674_1411_4.jpg",
    type: "Course",
    link: "https://www.udemy.com/course/git-complete/",
  },
  {
    title: "Git Going Fast: One Hour Git Crash Course",
    image: "https://img-c.udemycdn.com/course/240x135/221696_d05a_4.jpg",
    type: "Course",
    link: "https://www.udemy.com/course/git-going-fast/",
  },
];

const topics = [
  { title: "Open source", storage: "opensource" },
  { title: "Git", storage: "git" },
  { title: "GitHub", storage: "gitHub" },
  { title: "Git fork", storage: "gitfork" },
  { title: "Git clone", storage: "gitclone" },
  { title: "Remote origin", storage: "remoteorigin" },
  { title: "Git upstream", storage: "gitupstream" },
  { title: "Branches", storage: "branches" },
  { title: "Commit", storage: "commit" },
  { title: "Git push", storage: "gitpush" },
  { title: "Pull requests", storage: "pullrequests" },
  { title: "Resolving conflits", storage: "resolvingconflits" },
];
