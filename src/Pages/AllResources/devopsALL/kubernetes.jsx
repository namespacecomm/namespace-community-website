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

export const KUBERNETES = () => {
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
                src="https://spaceliftio.wpcomstaging.com/wp-content/uploads/2022/07/90.kubernetes-cluster.png"
              />
              <div className="text-center lg:w-full w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  KUBERNETES
                </h1>
                <p className="mb-8 leading-relaxed text-justify">
                Kubernetes is an open-source container orchestration platform that simplifies the deployment, scaling, and management of containerized applications. Originally developed by Google and now maintained by the CNCF, Kubernetes automates tasks such as load balancing, scaling, and updates. It organizes containers into pods, the smallest deployable units, ensuring application resilience and scalability. With a master-worker architecture, declarative configurations, and extensions like Helm and Istio, Kubernetes offers improved resource utilization, application isolation, and portability across diverse environments. It has become the industry standard for container orchestration, empowering organizations to efficiently build, deploy, and scale container-based applications. Developers use Docker to containerize their applications during development, and then Kubernetes is used to manage and orchestrate those containers in production environments. This combination leverages the strengths of each tool to create a robust containerization and orchestration solution.
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
              <div className=" px-0 py-14 mx-auto">
                <div className="flex flex-col text-left w-full mb-2">
                  <h1 className="text-xl font-bold title-font mb-4 text-white-900 tracking-widest">
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
    title: "Kubernetes - Docs",
    image: "https://cdn2.iconfinder.com/data/icons/mixd/512/20_kubernetes-1024.png",
    type: "Documentation",
    link: "https://kubernetes.io/docs/home/",
  },
  {
    title: "Learn Kubernetes in Under 3 Hours: A Detailed Guide to Orchestrating Containers",
    image: "https://cdn-media-1.freecodecamp.org/images/1*0ju9JOPACF90yXSi-s2gwQ.jpeg",
    type: "Documentation",
    link: "https://www.freecodecamp.org/news/learn-kubernetes-in-under-3-hours-a-detailed-guide-to-orchestrating-containers-114ff420e882/",
  },
  {
    title: "Kubernetes in 100 seconds",
    image: "https://i.ytimg.com/vi/PziYflu8cB8/maxresdefault.jpg",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=PziYflu8cB8",
  },
  {
    title: "Kubernetes Tutorial for Beginners ",
    image: "https://res.cloudinary.com/practicaldev/image/fetch/s--Mf4oAsZ2--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/z0jd5imjjfti53lfbmb8.png",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=X48VuDVv0do",
  },
  {
    title: "Kubectl Cheat Sheet ",
    image: "https://spacelift.io/_next/image?url=https%3A%2F%2Fspaceliftio.wpcomstaging.com%2Fwp-content%2Fuploads%2F2022%2F08%2F91.kubernetes-cheat-sheet.png&w=3840&q=100",
    type: "Cheat Sheet",
    link: "https://spacelift.io/blog/kubernetes-cheat-sheet",
  },
  {
    title: "The Kubernetes Handbook",
    image: "https://www.freecodecamp.org/news/content/images/size/w2000/2023/07/Kubernetes-Handbook-Mockup.png",
    type: "Documentation",
    link: "https://www.freecodecamp.org/news/the-kubernetes-handbook/",
  },
  {
    title: "Kubernetes Crash Course for Absolute Beginners ",
    image: "https://i.ytimg.com/vi/s_o8dwzRlu4/maxresdefault.jpg",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=s_o8dwzRlu4",
  },
  {
    title: "Learn DevOps: The Complete Kubernetes Course",
    image: "https://img-c.udemycdn.com/course/750x422/1007250_9e3c_5.jpg",
    type: "Course",
    link: "https://www.udemy.com/course/learn-devops-the-complete-kubernetes-course/",
  },
];

const topics = [
  { title: "Kubernetes Fundamentals", storage: "kubernetes-fundamentals" },
  { title: "Kubectl and CLI", storage: "kubectl-cli" },
  { title: "Pods and Containers", storage: "pods-and-containers" },
  { title: "Docker Images", storage: "docker-images" },
  { title: "Deployments and Scaling", storage: "deployments-and-scaling" },
  { title: "Services and Networking", storage: "services-and-networking" },
  { title: "Configurations and Secrets", storage: "config-secrets" },
  { title: "Storage", storage: "storage" },
  { title: "Security and RBAC", storage: "security-rbac" },
  { title: "Cluster Management and CI/CD", storage: "cluster-management-ci-cd" },
  { title: "Monitoring and Logging", storage: "monitor-log" },
  { title: "Scaling and Load Balancing", storage: "docker-scale-load-balance" },
];
