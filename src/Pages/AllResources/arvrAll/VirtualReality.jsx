import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import Navbar from "../../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

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

export const VirtualReality = () => {
  const [virtualrealitytopicsChecked, setvirtualrealityTopicsChecked] = useState({
    datamodelling: false,
    crudoperations: false,
    querying: false,
    documents: false,
    collections: false,
    indexes: false,
  });

  const handleCheckboxChange = (topic) => {
    setvirtualrealityTopicsChecked({
      ...virtualrealitytopicsChecked,
      [topic]: !virtualrealitytopicsChecked[topic],
    });
  };

  useEffect(() => {
    localStorage.setItem("virtualrealitytopicsChecked", JSON.stringify(virtualrealitytopicsChecked));
  }, [virtualrealitytopicsChecked]);

  useEffect(() => {
    const storedTopicsChecked = localStorage.getItem("virtualrealitytopicsChecked");
    if (storedTopicsChecked) {
      setvirtualrealityTopicsChecked(JSON.parse(storedTopicsChecked));
    }
  }, []);

  return (
    <>
      <Section>
        {/* <Navbar /> */}
        <Container>
          <section className="text-white body-font">
            <div className="mx-auto flex px-2 mt-8 mb-4 items-center justify-center flex-col">
              <img
                className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-contain object-center rounded"
                alt="hero"
                src="https://www.analyticsinsight.net/wp-content/uploads/2021/11/Virtual-reality.jpg"
              />
              <div className="text-center lg:w-full w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  Virtual Reality
                </h1>
                <p className="mb-8 leading-relaxed text-justify tracking-normal">
                Virtual Reality (VR) is a computer-generated environment with scenes and objects that appear to be real, making the user feel they are immersed in their surroundings.Virtual reality places the user inside a three-dimensional experience. Instead of viewing a screen in front of them, users are immersed in and interact with 3D worlds.The VR process combines hardware and software to create immersive experiences that “fool” the eye and brain. Hardware supports sensory stimulation and simulation such as sounds, touch, smell or heat intensity, while software creates the rendered virtual environment.
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
                          checked={virtualrealitytopicsChecked[front.storage]}
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
    title: "Unity 3D Tool",
    image:
      "https://i.ytimg.com/vi/gB1F9G0JXOo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5vQM3xZxjNqKtjnZOnc7DYZGQbw",
    type: "Youtube Video",
    link: "https://youtu.be/gB1F9G0JXOo?si=wSIs6j6wNuNoPm0O",
  },
  {
    title: "Unreal Engine",
    image:
      "https://w0.peakpx.com/wallpaper/237/589/HD-wallpaper-unreal-engine-ultra-games-other-games-mountains-logo-videogames-unrealengine.jpg",
    type: "Documentation",
    link: "https://docs.unrealengine.com/5.3/en-US/",
  },
  {
    title: "C# in 100 Seconds",
    image: "https://i.ytimg.com/vi/ravLFzIguCM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQ04aWpFvU2YhhvpLLXz3_AUut3g",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=ravLFzIguCM",
  },
  {
    title: "UI / UX Design Specialization",
    image: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?w=996&t=st=1696617037~exp=1696617637~hmac=f7150ebdc7bfa5976b52d3eaacbfd438399e77e2ef55ad9b94930b6591c01d3b",
    type: "Coursera",
    link: "https://www.coursera.org/specializations/ui-ux-design",
  },
];

const topics = [
  { title: "3D Tools", storage: "3dtools" },
  { title: "Sound Design", storage: "sounddesign" },
  { title: "Extended Reality (XR)", storage: "extendedreality" },
  { title: "Rendering", storage: "rendering" },
  { title: "Computer Vision", storage: "computervision" },
  { title: "UI/UX", storage: "uiux" },
  { title: "C#", storage: "c" },
  { title: "Machine Learning", storage: "machinelearning" },
  
];
