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

export const SKETCH = () => {
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
                alt="Sketch"
                src="https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg"/>
                <div className="text-center lg:w-full w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  SKETCH
                </h1>
                <p className="mb-8 text-center mx-4">
                Sketch is a powerful and flexible UX and UI design platform built for collaborative design. <br/>It has long been considered an industry-standard tool, ideal for both beginner and advanced designers.
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
    title: "10+ Best Sketch Tutorials for Beginners — Learn Sketch Online",
    image: "https://miro.medium.com/v2/format:webp/1*8LZO5BfDELOfsK0NarlIuA@2x.png",
    type: "Documentation",
    link: "https://medium.com/quick-code/top-tutorials-to-learn-sketch-for-ui-and-ux-design-ddb0cd7e8a9b",
  },
  {
    title: "UI / UX - The Complete Sketch Course",
    image: "https://img-b.udemycdn.com/course/750x422/1215804_736d.jpg",
    type: "Courses",
    link: "https://www.udemy.com/course/complete-sketch-course/",
  },
  {
    title: "Learn Sketch - YouTube",
    image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/youtube-logo.jpeg",
    type: "Youtube Video",
    link: "https://www.google.com/search?q=learn+sketch+ui+ux&source=lmns&tbm=vid&bih=689&biw=1366&rlz=1C1CHBF_enIN1057IN1057&hl=en-GB&sa=X&ved=2ahUKEwj3hMW9v4-CAxUn3DgGHRmNBv4Q_AUoAnoECAEQAg#"  
  }
  

];

  const topics = [
    { title: "Vector Graphics", storage: "vector-graphics" },
    { title: "UI/UX Design", storage: "ui-ux-design" },
    { title: "Artboards", storage: "artboards" },
    { title: "Symbols and Libraries", storage: "symbols-libraries" },
    { title: "Prototyping", storage: "prototyping" },
    { title: "Layer Styles", storage: "layer-styles" },
    { title: "Plugins and Extensions", storage: "plugins-extensions" },
    { title: "Exporting Assets", storage: "exporting-assets" },
    { title: "Collaboration", storage: "collaboration" },
    { title: "Tips and Tricks", storage: "tips-and-tricks" },
  ];
  
  