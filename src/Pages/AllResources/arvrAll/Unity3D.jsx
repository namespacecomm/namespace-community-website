import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.div`
  display: flex;
  flex-direction: justify-center;
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

export const Unity3D = () => {
    const [topicsChecked, setTopicsChecked] = useState({
    unityBasics: false,
    scripting: false,
    gameObjects: false,
    physics: false,
    ui: false,
    animation: false,
    modelingAssets: false,
    lightingShading: false,
    soundMusic: false,
    levelDesign: false,
    ai: false,
    optimization: false,
    physicsParticles: false,
    mobileDevelopment: false,
    multiplayerNetworking: false,
    arVrDevelopment: false,
    publishingDistribution: false,
  });

  const handleCheckboxChange = (topic) => {
    setTopicsChecked({
      ...topicsChecked,
      [topic]: !topicsChecked[topic],
    });
  };

  useEffect(() => {
    localStorage.setItem("topicsChecked", JSON.stringify(topicsChecked));
  }, [topicsChecked]);

  useEffect(() => {
    const storedTopicsChecked = localStorage.getItem("topicsChecked");
    if (storedTopicsChecked) {
        setTopicsChecked(JSON.parse(storedTopicsChecked));
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0lU3Nq0YvUhg2Vgopm8b_AP4ZHGdc_680tp5XpTh1dAl2CLgdvN4CxUiNIE5J80H8S3g&usqp=CAU"
              />
              <div className="text-center lg:w-full w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  Unity 3D
                </h1>
                <p className="mb-8 leading-relaxed text-justify tracking-normal">
                Unity 3D is a versatile game development platform 
                and IDE that allows developers to create interactive
                 2D and 3D content, primarily for video games. 
                 It features cross-platform support, user-friendly 
                 tools, a powerful graphics engine, physics simulation, 
                 scripting with C#, animation, VR/AR development, and a 
                 large supportive community. Unity is used to build games 
                 and interactive experiences across various platforms.
                </p>
              </div>
            </div>
            {/* <-------------------------------Topics Section ----------------------------------------------> */}
            <h2 className="mb-2 text-lg font-semibold text-white">
              Topics you need to cover:
            </h2>
            <ul className="flex flex-wrap m-2">
              {topic.map((front) => {
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
                          checked={topicsChecked[front.storage]}
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
        title: "Unity 3D Roadmap",
        image:
          "https://miro.medium.com/v2/resize:fit:1200/1*DbY1yMnfW536ZWE_eaHLvw.png",
        type: "Roadmap",
        link: "https://medium.com/@amichelidebard/self-taught-learning-path-for-unity-developers-cedbc0e2c73a",
      },
  {
    title: "Getting started with Unity 3D",
    image:
      "data:image/jpeg;base64,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",
    type: "Documentation",
    link: "https://learn.unity.com/",
  },
  {
    title: "Unity Essentials",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgWFQkXGR4bGBgYGSMfHxsiICEnIiomIB4eJyolJB4xJyYdLTotMSk3MzowICIzODMtNygwMTcBCgoKDg0OGhAQGC0dHR4tLS0tLS0tLS0tLS0tLS0tLS0tLTUtLS0tLS0tLSstLSstKy0rKy0rNystLS0rLS0tN//AABEIAKgBLAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcBAgj/xABBEAACAQQBAgQDBAUHDQAAAAAAAQIDBAURBhIhEzFBUQdhcRQigZEVMmKhsTVScnN0grIIFhcjMzQ2QpLB0eHw/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABkRAQEBAAMAAAAAAAAAAAAAAAARAQIhQf/aAAwDAQACEQMRAD8A5mADswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbOKt4XmUsrWq2qc6kIvXnqUknr5gfNhY3eSu4WmPtpVLh+UYrb/wDS+b7Fsyfw9vcNSwn6WuYxr3NzCi4Q+94am9bcvJy+S7fNnaeM47DYaxdthLKNOprum/vTf7U3tv8A7exxv4jcg5VXzdrDN2v2Z0pqdCEUmupPtKM2tTfl8v2UZzasRvLeDZri8pVLuj4ll6VoJuP95ecH9e3s2Vk/R/DMzm73ByuOX2EKK0lGTenUT96T7x/Pv7I5Z8UsZhLatRvcHZ+Epyakl2i+29qH/L+H5DN8IoYLRwThlXmVW/p0b9UvBUG9w6urr6vZrWun95p8Q43Pk+deJpXSpy6ZS6nHq/VaXlte/uVEGCQz+Knhc1e42VXrdKXS5JaT7J71315+5o1qValSjUnRklJbi2mlL6N+ZR8gteR45g53+EsuP5mdatXmoVOqP+y6nFJ6Sjtd36+hocw43V4xmpYydx4rUYy61BxXf01t/wASUQYGnvWu401vsUAWHiGFx2VpZi5y1WrG3t6Lqvwenqen3X3015fQ3bDDcUzlzGww+TuqWQn2pq5jBwnL+bun3i37v977EoqIM9Szuqd9Oxlby+1xk4uCW5bj2aSXn5M+Li3r2tXwrqhKFXz6ZxcX+T0yjGDPTsbyrbSuaVnUlbrzmoScVr3klpfmYfDm6fiqD8PeurXbftvy2B4DJGhWmoOFGTUnqOovu/Ze7PZWtzC3+0ztpq33rrcX078tdWtb+WwMQMte1ubeFOpcW04Ql+q5RaUvo2tP8D6oWN5cUZ1rezqTpLzlGEml9WlpAYAewhOpCU6cG4LW2ltLfZbfzfkZbmzvLaUYV7KpGq/1YyhJOX0TW3+AGEEzyzAVOOZP7JKcp0+mElNw6VuUerXqu31IytaXVvSjVuLWcaT8pSg0n9G1pkGEE1fcerWWCxGVqKfTXdXqj0NeGqc1FNv9pPa2l+Jp5W2toZita4hVZW+0qaqR1UfZecUl33v08tAaIMt1a3NnUVO8tp06nnqcXF6+kkux908ffVXUjSsasnH9bVOT6fXvpdu3uUa4PD0AAAAAAG/x7/iDF/11P/GjQMlrcVLS6o3NHXiQkpR35bT2iDrnxCz9/gHjK+Pmu8p9UZLakko+fr+KZNcZ5pLOYOV59kXiU59Op/e6ZaT3F+bWn8mU/j2DxHK7erdZTMTuMk195b6HS/ow9vnrpfsT3H+PT43ib21lcKcJVeuL1p61Faa9+xjZGsVLMc7yGWzVChRk40/FjFyem2upJpLyiv3/ADR9/En/AHCz/rH/AIT6t+F2NOFxXy1fbe32fTGG/Xfq/r2+RVM5eSlqwpZF17OD3CUl3Xprfqv/AJFyXpHQv8n9r7ZyBb79ND+NQh/gzCX+kKtFxfVClVUl/NfVFd/Z7KrxrkOQ4zk1f4yolPXTKMluMl7Ndv47LpdfGLLTt6kbPF0KdeXnPvL8ddu/1bLuaLnxutClkfiDXlTU6carbi/KXTS7p/Ltohv03ccy+D/ILvNUafj01Pp6I6ScIqcWk29Nb15+X1KFx/mt/hLDLWsKMajudupObfVuSab7evdsxYvlt3jeJ5HjlK2g7ev1dU3vqXVFR7enoSFdZ5TlLjFZ7gs7ZRbqPwZdS392o6SetNd/b+BDfEHml5hviDjbeTirGg4VJa31NTTjPb3prpbaWvNLuUfkPOcjm6mHqyt4U6trJSpuO3trpa2n/RX7zZzvLK/O7nG4/J0qFuvESdZb7b7bl1P9Vb3rf4jMK6lHB22H5vmuX1tKz+zRmn6dWn16/u04/wDWcOqZ69r/AKRlVUXK4k5z2ttOT29P29P4aOkc95JYY/gNnxnH5qFzeOMKc6lNp/dhptvTem9Ja3vTZyQvE1beD/yHzL+xSIHjtGtccixVG2i3Wdan06+Uk9/gk3+Bt8Y5FPj8r3VjTrUq1Pw5wqb01vfoSP8AnzWtYVP0HhLS0ryTTq0qf30n/Nk32/IqLJy69eMteR5bB1em6rX/ANnnVh2lCEKSbjGXpuae2vP8ERvG51OVccvLPP3Epwo3Fr4dWbblFVqvhzh1vvpx7+fZ/RFYwmfrYqnc21W2hXsKuvEpVdtSa7qSae4zXuv/AAZcvyKd7YU8bj7Gna45S6/DpOTcp+SlOcn1Sa9Pb8ESCW5HynOWPMrqNjeVKVGhVdOlRi2qajCXSo+GvutNLvtev0MubnUqcDvKlax8CpLKNulprobt09afde+vmaa5oqtenfX+Atq2XjrVeXUm3HylOEWoyktLv28vQ1rHllxCnf0ctZ07q2r1PFnGptaqeXVGUWnF67fRJLQFp4n/ACXwT+3Vj3jPIspd8wz1G7unO0jSuHGjLvTXhPcNQ/VWte312V2XOLtyxHhY6jCla1XUpQgmorfo++9eu/NttkZjM9cY7KX2QpUYupWhVjJPel4vnr6eggsWDyN/yDiXKKGayE6sF9mnF1Jb6JSquLcd/q9vRdvl3JXl13RxnIp2VlzKVnStlGFOhChWcYJRT+90/dm3vbb356KFjstVsMVlcdTpRdO5jCMm97XRLqWvzJdcwVeFCeYwdvc3lOKjGrU6lJpeXiKLSnr5iC0VcpQsqXOspxybh1QtJJum4dE5zkpOMZpNebknrzltELRzGSu/hzlbm6v6k7m3uKMqNSUm503LafTJ91+ZCV+TX91RzkbzU6t46bqSfZrwpbXSl215L6JGrQy1WjgL7DKlF0K04TlLvtdHlr0EHQM/cZe++JOPtbZKuqdOnVjTrTfhRfhbc5e2vPfvo1sXcRvKXIba85bO+nO0rSlS6KjpJxSfVGVTS7PWumPr59iCfOr77dZZCNhQV9Tj0TqdL3Wh09PTNb1rXtrul9Dyx5hSxlSosXx63p21SMoVYbnJ1IyWtdcpNxj8o6/EQb2XzOUq8I4nGrkKjjUlcKonN/fUK0VFS90l5E/yurUxNfmeax8unIu5o0FUX61ODpQk3F+jk+2/PyKJHkcv0DSxFXHUZQpylKjNp9dLrkpyUXvum16+hsy5lezzmTyNa1pToXOlWoSTdOSikl67Ulrae+22INzGXt1neF8mtcxcyqwt6ca1GdSTlKnPqa0pS29SXbW/clfiFybM2PO50LHITp0aXhajCWk24Rk3JLtJveu++ySKtluR/a8VPE43G0rXHyalONNylKo15dc5ttpeaXuaufzNbOZutlbilGNWXRuMd6+7FRXn39EIJH4jUqdDnebp0YJQ8RPS/ahGT/e2/wASuG/n8rVzmau8pcU1GrVabUfJaio9t/Q0CgACgAAAAA+6Narb1oVreq41V3UovTX0aLpYfEa9jj6ltk7dVauvuzT6W/6S8vxX5epSATcokcvm7/L1N3dX/V+kF2ivw9X82RwAAAFAAADw9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z",
    type: "Documentation",
    link: "https://docs.unity3d.com/Manual/index.html",
  },
  {
    title: "Unity 3D College",
    image:
      "https://unity3d.college/wp-content/uploads/2016/04/robot_logo_color-1-square-384-300x300.png",
    type: "Tutorials",
    link: "https://unity3d.college/",
  },
  {
    title: "Build Your First 3D Game in Unity",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0gud6ARTGDtA0EMoTJZSWfCZjBT2Dz4RsjBVxLAXtzMnBsRUbUINYoBMcqlTmQ85vC5o&usqp=CAU",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=n0GQL5JgJcY&list=PLrnPJCHvNZuB5ATsJZLKX3AW4V9XaIV9b",
  },
  {
    title: "Unity 3D Tools",
    image:
      "https://i.ytimg.com/vi/gB1F9G0JXOo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5vQM3xZxjNqKtjnZOnc7DYZGQbw",
    type: "Youtube Video",
    link: "https://youtu.be/gB1F9G0JXOo?si=wSIs6j6wNuNoPm0O",
  },
];

const topic = [
    { title: "3D Tools", storage: "3dtools" },
    { title: "Sound Design", storage: "sounddesign" },
    { title: "Extended Reality (XR)", storage: "extendedreality"},
    { title: "Rendering", storage: "rendering" },
    { title: "Computer Vision", storage: "computervision" },
    { title: "UI/UX", storage: "uiux" },
    { title: "C#", storage: "c"},
    { title: "Machine Learning", storage: "machinelearning"},
    { title: "Unity Basics", storage: "unitybasics" },
    { title: "Scripting", storage: "scripting" },
    { title: "Game Objects", storage: "gameobjects" },
    { title: "Physics", storage: "physics" },
    { title: "UI", storage: "ui"},
    { title: "Animation", storage: "animation" },
    { title: "Modeling & Assets", storage: "modelingassets" },
    { title: "Lighting & Shading", storage: "lightingshading" },
    { title: "Sound & Music", storage: "soundmusic" },
    { title: "Level Design", storage: "leveldesign" },
    { title: "AI", storage: "ai" },
    { title: "Optimization", storage: "optimization" },
    { title: "Physics & Particles", storage: "physicsparticles" },
    { title: "Mobile Development", storage: "mobiledevelopment" },
    { title: "Multiplayer Networking", storage: "multiplayernetworking" },
    { title: "AR/VR Development", storage: "arvrdevelopment"},
    { title: "Publishing & Distribution", storage: "publishingdistribution" },
  ];
