import React, { useEffect, useState } from "react";
import styled from "styled-components";
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

export const DOCKER = () => {
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
        <Container>
          <section className="text-white body-font">
            <div className="mx-auto flex px-2 mt-8 mb-4 items-center justify-center flex-col">
              <img
                className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-contain object-center rounded"
                alt="hero"
                src="https://img.freepik.com/free-vector/port-concept-illustration_114360-7335.jpg?w=1480&t=st=1696258059~exp=1696258659~hmac=449086836074036e755fbc9c803c7e04d489da420cab2125f416cc76e1ffbc9f"
              />
              <div className="text-center lg:w-full w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  DOCKER
                </h1>
                <p className="mb-8 leading-relaxed text-justify">
                  Docker is a platform that utilizes containers, lightweight and
                  self-contained packages, to develop, package, and run
                  applications consistently across different environments. It
                  comprises components like Docker containers (isolated runtime
                  instances), Docker images (snapshots of containers), a Docker
                  Engine (core management tool), Dockerfiles (instructions for
                  building images), Docker registries (storage and sharing), and
                  Docker Compose (multi-container app management). Docker
                  simplifies deployment, making it popular in DevOps for its
                  consistent, portable, and efficient application management
                  capabilities, although it's worth noting that alternative
                  containerization technologies like Kubernetes and containerd
                  also exist and can be used in conjunction with or instead of
                  Docker, depending on specific needs. Docker's popularity has
                  led to a vast ecosystem of pre-built images and tools that
                  extend its functionality, making it easier to integrate Docker
                  into various development and deployment workflows. It has
                  become a standard tool for many software development and IT
                  operations teams and is widely used in industries ranging from
                  web development to data science.
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
    title: "DOCKER - Docs",
    image:
      "https://hsf-training.github.io/hsf-training-docker/fig/Docker_logo.png",
    type: "Documentation",
    link: "https://docs.docker.com/",
  },
  {
    title: "DockerLabs - Getting Started with Docker",
    image:
      "https://raw.githubusercontent.com/collabnix/dockerlabs/master/images/dockerlabs.jpeg",
    type: "Documentation",
    link: "https://dockerlabs.collabnix.com/",
  },
  {
    title: "DOCKER in 100 seconds",
    image: "https://i.ytimg.com/vi/Gjnup-PuquQ/maxresdefault.jpg",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=Gjnup-PuquQ",
  },
  {
    title: "Docker Tutorial for Beginners",
    image: "https://i.ytimg.com/vi/pTFZFxd4hOI/maxresdefault.jpg",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=pTFZFxd4hOI",
  },
  {
    title: "DOCKER - Cheat Sheet",
    image:
      "https://user-images.githubusercontent.com/313480/210130087-62a755f7-499c-4f5a-a91c-9151ac82417e.png",
    type: "Cheat Sheet",
    link: "https://dockerlabs.collabnix.com/docker/cheatsheet/",
  },
  {
    title: "The DOCKER Handbook",
    image:
      "https://www.freecodecamp.org/news/content/images/2020/07/docker-handbook-preview.png",
    type: "Documentation",
    link: "https://www.freecodecamp.org/news/the-docker-handbook/",
  },
  {
    title: "Introduction to Docker",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--sA57fKnT--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/a0gvmzph343m9wvjys6h.png",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=3c-iBn73dDE",
  },
  {
    title: "Docker for the Absolute Beginner - Hands On - DevOps",
    image: "https://img-c.udemycdn.com/course/750x422/3490000_d298_2.jpg",
    type: "Course",
    link: "https://www.udemy.com/course/learn-docker/",
  },
];

const topics = [
  {
    title: "Introduction to Containers",
    storage: "introduction-to-containers",
  },
  { title: "Docker Architecture", storage: "docker-architecture" },
  { title: "Docker Installation", storage: "install-docker" },
  { title: "Docker Images", storage: "docker-images" },
  { title: "Docker Containers", storage: "docker-containers" },
  { title: "Docker Compose", storage: "docekr-compose" },
  { title: "Container Orchestration", storage: "container-orchestration" },
  { title: "Docker Networking", storage: "docker-networking" },
  { title: "Docker Volumes and Storage", storage: "docker-volume-storage" },
  { title: "Docker Security", storage: "docker-security" },
  {
    title: "Docker Registry and Repository",
    storage: "docker-registry-repository",
  },
  { title: "Docker in CI/CD", storage: "docker-ci-cd" },
  { title: "Monitoring and Logging", storage: "docker-monitor-log" },
  { title: "Scaling and Load Balancing", storage: "docker-scale-load-balance" },
];
