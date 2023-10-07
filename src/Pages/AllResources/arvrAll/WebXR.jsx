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

export const WebXR = () => {
    const [webxrtopicsChecked, setwebxrTopicsChecked] = useState({
        datamodelling: false,
        crudoperations: false,
        querying: false,
        documents: false,
        collections: false,
        indexes: false,
    });

    const handleCheckboxChange = (topic) => {
        setwebxrTopicsChecked({
            ...webxrtopicsChecked,
            [topic]: !webxrtopicsChecked[topic],
        });
    };

    useEffect(() => {
        localStorage.setItem("webxrtopicsChecked", JSON.stringify(webxrtopicsChecked));
    }, [webxrtopicsChecked]);

    useEffect(() => {
        const storedTopicsChecked = localStorage.getItem("webxrtopicsChecked");
        if (storedTopicsChecked) {
            setwebxrTopicsChecked(JSON.parse(storedTopicsChecked));
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
                                src="https://onetech.vn/wp-content/uploads/2022/12/webxr-la-gi.jpg"
                            />
                            <div className="text-center lg:w-full w-full">
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                                    Web XR
                                </h1>
                                <p className="mb-8 leading-relaxed text-justify tracking-normal">
                                    WebXR Device API is a Web application programming interface (API) that describes support for accessing augmented reality and virtual reality devices, such as the HTC Vive, Oculus Rift, Oculus Quest, Google Cardboard, HoloLens, Magic Leap or Open Source Virtual Reality (OSVR), in a web browser.The WebXR Device API and related APIs are standards defined by W3C groups, the Immersive Web Community Group and Immersive Web Working Group.The WebXR Device API exposes a few new interfaces (such as XRView, XRPose) that allow web applications to present content in virtual reality and augmented reality, by using WebGL with the necessary camera settings and device interactions.
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
                                                    checked={webxrtopicsChecked[front.storage]}
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
        title: "Fundamentals of WebXR",
        image:
            "https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API/Fundamentals/xr-translation-headset.png",
        type: "Documentation",
        link: "https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API/Fundamentals",
    },
    {
        title: "Learn to create WebXR",
        image:
            "https://img-b.udemycdn.com/course/750x422/3228865_ef4b_3.jpg",
        type: "Course",
        link: "https://www.udemy.com/course/learn-webxr/",
    },
    {
        title: "Augmented Reality for Everyone",
        image: "https://i.ytimg.com/vi/WzfDo2Wpxks/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCb8TSuDYDqEVgSQN-ye7VZTCPk2g",
        type: "Youtube video",
        link: "https://www.youtube.com/watch?v=WzfDo2Wpxks",
    },
    {
        title: "Google Developers Web XR",
        image: "https://opengraph.githubassets.com/f0c9ce386d5aea3c340ed9d652f88b6aac4e1da85c9299d06486b1a0c2d5e123/google-ar/codelab-webxr",
        type: "Documentation",
        link: "https://developers.google.com/ar/develop/webxr",
    },
];

const topics = [
    { title: "Three.js", storage: "threejs" },
    { title: "AR?VR", storage: "arvr" },
    { title: "Web XR API", storage: "webxrapi" },
    { title: "Oculus Quest", storage: "oculus" },
    { title: "Computer Vision", storage: "computervision" },
    { title: "UI/UX", storage: "uiux" },
    { title: "Engines", storage: "engines" },
];
