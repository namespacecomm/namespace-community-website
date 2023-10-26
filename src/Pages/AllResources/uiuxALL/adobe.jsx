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

export const ADOBE = () => {
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
                  ADOBE
                </h1>
                <p className="mb-8 text-center mx-4">
                Adobe XD is widely used in the design industry due to its user-friendly interface and the ability to create high-fidelity prototypes quickly. <br></br>It's part of the Adobe Creative Cloud suite, which makes it easy to integrate with other Adobe software like Photoshop and Illustrator.
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
    title: "View all Adobe XD tutorials",
    image: "https://blog.adobe.com/en/publish/2021/02/22/media_1cc0fcc19cf0e64decbceb3a606707a3ad23f51dd.png?width=2000&format=webply&optimize=medium",
    type: "Documentation",
    link: "https://www.adobe.com/products/xd/learn/view-all-xd-tutorials.html",
  },
  {
    title: "15+ Free Adobe XD Tutorials and Courses",
    image: "https://static.tutsplus.com/packs/media/images/envato-tutsplus-dark-aa1856b6a47377d261b0694dff123926.png",
    type: "Courses",
    link: "https://webdesign.tutsplus.com/free-adobe-xd-tutorials-and-courses--cms-36162a",
  },
  {
    title: "E-Learning App Concept Adobe XD",
    image: "https://s3-alpha.figma.com/hub/file/3308372052/19f934de-f93a-4a57-a3b8-423ec1787cc3-cover.png",
    type: "Courses",
    link: "https://www.figma.com/community/file/1226790927946996610/e-learning-app-concept-adobe-xd",
  },
  {
    title: "Free Adobe XD Tutorial 2023 for Beginners - Your Quick Start Guide ",
    image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/youtube-logo.jpeg",
    type: "Youtube Video",
    link: "https://www.youtube.com/watch?v=HMbj5B_QrYQ"  }
  

];

  const topics = [
    { title: "Design Tools", storage: "design-tools" },
    { title: "Artboards and Layers", storage: "artboards-layers" },
    { title: "Prototyping", storage: "prototyping" },
    { title: "UI Design", storage: "ui-design" },
    { title: "UX Design", storage: "ux-design" },
    { title: "Collaboration and Sharing", storage: "collaboration-sharing" },
    { title: "Plugins and Integration", storage: "plugins-integration" },
    { title: "Animations and Interactions", storage: "animations-interactions" },
    { title: "Responsive Design", storage: "responsive-design" },

  ];
  