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

export const JENKINS = () => {
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
          <section className="text-white body-font">
            <div className="mx-auto flex px-2 mt-8 mb-4 items-center justify-center flex-col">
              <img
                className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-contain object-center rounded"
                alt="hero"
                src="https://www.jenkins.io/images/logos/jenkins/Jenkins-stop-the-war.svg"
              />
              <div className="text-center lg:w-full w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  JENKINS
                </h1>
                <p className="mb-8 leading-relaxed text-justify">
                  Jenkins is an open-source automation server widely used for
                  continuous integration and continuous delivery (CI/CD)
                  pipelines. It plays a crucial role in software development by
                  automating various tasks like building, testing, and deploying
                  code, enabling teams to quickly and reliably deliver software
                  updates. Jenkins provides a user-friendly interface for
                  configuring and managing automation workflows, which are
                  defined as code in the form of pipeline scripts. It supports a
                  vast ecosystem of plugins, making it highly extensible and
                  adaptable to various development environments and tools.
                  Jenkins is known for its flexibility, scalability, and
                  community support, making it a cornerstone of modern software
                  development practices. Jenkins acts as a central hub for
                  orchestrating the entire software development lifecycle. It
                  can be integrated with version control systems (such as Git),
                  build tools (like Maven or Gradle), testing frameworks, and
                  deployment platforms, making it a versatile tool for managing
                  complex and customized automation workflows.
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
    title: "Jenkins Handbook",
    image: "https://www.jenkins.io/images/logo-title-opengraph.png",
    type: "Documentation",
    link: "https://www.jenkins.io/doc/book/",
  },
  {
    title: "Jenkins Tutorial For Beginners: 21+ Practical Guides",
    image:
      "https://devopscube.com/wp-content/uploads/2019/01/jenkins-beginner-tutorials-1160x468.png.webp",
    type: "Documentation",
    link: "https://devopscube.com/jenkins-2-tutorials-getting-started-guide/",
  },
  {
    title: "Learn Jenkins! Complete Jenkins Course - Zero to Hero",
    image: "https://i.ytimg.com/vi/6YZvp2GwT0A/mqdefault.jpg",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=6YZvp2GwT0A",
  },
  {
    title: "Learn Jenkins by Building a CI/CD Pipeline ",
    image:
      "https://www.freecodecamp.org/news/content/images/2022/09/jenkins.png",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=f4idgaq2VqA",
  },
  {
    title: "Jenkins Cheat Sheet ",
    image:
      "https://miro.medium.com/v2/resize:fit:1280/format:webp/1*HcWQYQFB3FttTJScpkn4Qw.jpeg",
    type: "Cheat Sheet",
    link: "https://medium.com/edureka/jenkins-cheat-sheet-e0f7e25558a3",
  },
  {
    title: "Jenkins Pipeline Tutorial",
    image:
      "https://devopscube.com/wp-content/uploads/2020/04/jenkins-pipeline-as-code-min-1160x468.png.webp",
    type: "Documentation",
    link: "https://devopscube.com/jenkins-pipeline-as-code/",
  },
  {
    title: "Build+Deploy+Test with Jenkins 2.0",
    image: "https://img-c.udemycdn.com/course/750x422/1141808_f32f_5.jpg",
    type: "Course",
    link: "https://www.udemy.com/course/working-with-jenkins/",
  },
  {
    title: "Jenkins Tutorial For Beginners (DevOps and Developers)",
    image: "https://img-c.udemycdn.com/course/750x422/1825202_d640_3.jpg",
    type: "Course",
    link: "https://www.udemy.com/course/jenkins-tutorial-for-beginners-devops-and-developers/",
  },
];

const topics = [
  { title: "Introduction to Jenkins", storage: "intro-jenkins" },
  { title: "Jenkins Basics", storage: "jenkins-basic" },
  { title: "Working with Jenkins Jobs", storage: "jenkins-jobs" },
  { title: "Version Control Integration", storage: "ver-control-intergrate" },
  { title: "Plugins and Extensions", storage: "plugins-extensions" },
  { title: "Pipeline as Code (Jenkins Pipeline)", storage: "jenkins-pipline" },
  { title: "Security and Access Control", storage: "security-access-control" },
  { title: "Storage", storage: "storage" },
  { title: "Security and RBAC", storage: "security-rbac" },
  {
    title: "Integration with Other Tools",
    storage: "integration with other tools",
  },
  { title: "Monitoring", storage: "jenkins-monitor" },
  { title: "Scaling Jenkins", storage: "scale-jenkins" },
];
