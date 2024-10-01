import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./Main.css";
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

export const DevOps = () => {
  const [checkedTopics, setCheckedTopics] = useState({
    HTML: false,
    CSS: false,
    Javascript: false,
  });

  const handleCheckboxChange = (topic) => {
    setCheckedTopics({
      ...checkedTopics,
      [topic]: !checkedTopics[topic],
    });
  };

  useEffect(() => {
    localStorage.setItem("checkedTopics", JSON.stringify(checkedTopics));
  }, [checkedTopics]);

  useEffect(() => {
    const storedCheckedTopics = localStorage.getItem("checkedTopics");
    if (storedCheckedTopics) {
      setCheckedTopics(JSON.parse(storedCheckedTopics));
    }
  }, []);

  return (
    <>
      <Section>
        <Container>
          {/* --------------------------------MAIN HEADING------------------------------------------------------ */}
          <div className=" px-0 py-10 ">
            <h1 className="text-3xl text-center font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Dev Ops
            </h1>
            {/* <************************************MAIN SECTION*******************************************> */}
            <section className="text-gray-600 body-font">
              <div className="px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex flex-wrap w-full">
                  <div className="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6">
                    <div className="flex relative pb-12">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 inline-flex items-center justify-center text-white relative z-10">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                        </svg>
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                        <a href="#iac-section">Infrastructure as Code (IaC)</a>
                        </h2>
                        <p className="leading-relaxed text-white text-justify">
                          In DevOps, managing infrastructure becomes code. Tools
                          like Terraform or Ansible are widely used. It involves
                          defining and managing your infrastructure as code,
                          enabling version control, and ensuring consistency in
                          deployment.
                        </p>
                      </div>
                    </div>
                    <div className="flex relative pb-12">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 inline-flex items-center justify-center text-white relative z-10">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 18v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1m18-2H3a2 2 0 00-2 2v4a2 2 0 002 2h18a2 2 0 002-2v-4a2 2 0 00-2-2zM6 12v-2a2 2 0 012-2h8a2 2 0 012 2v2"></path>
                        </svg>
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                          <a href="#cicd-section">CI/CD Automation </a>
                        </h2>
                        <p className="leading-relaxed text-white text-justify">
                          Automate code integration (CI) with tools like
                          Jenkins, GitLab CI, or Travis CI, addressing
                          integration issues early. Implement continuous
                          deployment/delivery (CD) for automated testing and
                          streamlined production releases.
                        </p>
                      </div>
                    </div>
                    <div className="flex relative pb-12">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 inline-flex items-center justify-center text-white relative z-10">
                        <svg
                          width="19px"
                          height="19px"
                          viewBox="0 0 0.57 0.57"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.487 0.173 0.285 0.285m0 0L0.083 0.173M0.285 0.285v0.226m0.214 -0.129V0.188c0 -0.008 0 -0.012 -0.001 -0.016a0.024 0.024 0 0 0 -0.005 -0.009 0.052 0.052 0 0 0 -0.013 -0.009L0.304 0.057C0.297 0.054 0.293 0.052 0.29 0.051a0.024 0.024 0 0 0 -0.01 0 0.057 0.057 0 0 0 -0.014 0.006L0.091 0.155a0.052 0.052 0 0 0 -0.013 0.009 0.024 0.024 0 0 0 -0.005 0.009C0.071 0.176 0.071 0.18 0.071 0.188v0.193c0 0.008 0 0.012 0.001 0.016a0.024 0.024 0 0 0 0.005 0.009 0.052 0.052 0 0 0 0.013 0.009l0.176 0.098a0.057 0.057 0 0 0 0.014 0.006 0.02 0.02 0 0 0 0.01 0 0.057 0.057 0 0 0 0.014 -0.006l0.176 -0.098a0.052 0.052 0 0 0 0.013 -0.009 0.024 0.024 0 0 0 0.005 -0.009c0.001 -0.003 0.001 -0.008 0.001 -0.016Z"
                            stroke="#fff"
                            strokeWidth="0.0475"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                           <a href="#co-section">Containerization and Orchestration</a>
                        </h2>
                        <p className="leading-relaxed text-white text-justify">
                          Embrace Docker for containerization, packaging
                          applications into containers. Use Kubernetes for
                          orchestration, managing and scaling containerized
                          applications.
                        </p>
                      </div>
                    </div>
                    <div className="flex relative pb-12">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 inline-flex items-center justify-center text-white relative z-10">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
                        </svg>
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                           <a href="#msc-section">Monitoring, Security, and Collaboration </a>
                        </h2>
                        <p className="leading-relaxed text-white text-justify">
                          Implement monitoring tools (e.g., Prometheus, Grafana)
                          for system health and logging. Integrate security
                          practices (e.g., SonarQube) throughout the development
                          lifecycle. Foster collaboration through communication
                          tools (e.g., Slack, Microsoft Teams).
                        </p>
                      </div>
                    </div>

                    <div className="flex relative">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 inline-flex items-center justify-center text-white relative z-10">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-bold title-font text-xl text-white mb-1 tracking-wider">
                           <a href="#csci-section">Build Projects with Cloud Services and Continuous
                          Improvement </a>
                        </h2>
                        <p className="leading-relaxed text-white text-justify">
                          Leverage cloud services (AWS, Azure, Google Cloud) for
                          scalability and flexibility. Cultivate a culture of
                          continuous improvement in DevOps, regularly assessing
                          processes, embracing feedback, and engaging in
                          hands-on projects for mastery.
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="lg:w-2/5 md:w-1/2 object-contain object-center rounded-lg md:mt-0 mt-12"
                    src="https://cdni.iconscout.com/illustration/premium/thumb/male-developer-looking-for-devops-7154205-5805807.png?f=webp"
                    alt="step"
                  />
                </div>
              </div>
            </section>
            {/* <-----------------------------------------------END OF MAIN SECTION-------------------------------------------------> */}
            {/* <------------------------------------Frontend Development-------------------------------------------------------> */}
            <section className="text-white body-font">
              <div className="px-5 py-0 mx-auto">
                <div id="iac-section" className="flex flex-col text-left w-full mb-10">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                    1. IaC
                  </h1>
                  <p className="w-full text-left mx-auto leading-relaxed text-base">
                    Below are the topics that you need to complete to understand
                    Infrastructure As Code (IaC)
                  </p>
                </div>
                <div className="flex flex-wrap -m-2">
                  {iac.map((front) => {
                    return (
                      <div
                        className="p-2 lg:w-1/3 md:w-1/2 w-full"
                        key={front.title}
                      >
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="team"
                            className="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4"
                            src={front.image}
                          />
                          <div className="flex-grow">
                            <Link to={front.to}>
                              <h2 className="text-white title-font font-bold underline text-xl">
                                {front.title}
                              </h2>
                            </Link>
                            <p className="text-white">{front.des}</p>
                            <input
                              type="checkbox"
                              id={front.title}
                              checked={checkedTopics[front.title]}
                              onChange={() => handleCheckboxChange(front.title)}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <br />

                <div id="cicd-section" className="flex flex-col text-left w-full mb-10">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                    2. CI/CD Automation
                  </h1>
                  <p className="w-full text-left mx-auto leading-relaxed text-base">
                    Below are the topics that you need to complete to learn
                    CI/CD Automation
                  </p>
                </div>
                <div className="flex flex-wrap -m-2">
                  {cicd.map((back) => {
                    return (
                      <div
                        className="p-2 lg:w-1/3 md:w-1/2 w-full"
                        key={back.title}
                      >
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="team"
                            className="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4"
                            src={back.image}
                          />
                          <div className="flex-grow">
                            <Link to={back.to}>
                              <h2 className="text-white title-font font-bold underline text-xl">
                                {back.title}
                              </h2>
                            </Link>
                            <p className="text-white">{back.des}</p>
                            <input
                              type="checkbox"
                              id={back.title}
                              checked={checkedTopics[back.title]}
                              onChange={() => handleCheckboxChange(back.title)}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <br />

                <div id="co-section" className="flex flex-col text-left w-full mb-10">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                    3. Containerization And Orchestration
                  </h1>
                  <p className="w-full text-left mx-auto leading-relaxed text-base">
                    Below are the topics that you need to complete to learn
                    about Containerization And Orchestration
                  </p>
                </div>
                <div className="flex flex-wrap -m-2">
                  {container.map((back) => {
                    return (
                      <div
                        className="p-2 lg:w-1/3 md:w-1/2 w-full"
                        key={back.title}
                      >
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="team"
                            className="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4"
                            src={back.image}
                          />
                          <div className="flex-grow">
                            <Link to={back.to}>
                              <h2 className="text-white title-font font-bold underline text-xl">
                                {back.title}
                              </h2>
                            </Link>
                            <p className="text-white">{back.des}</p>
                            <input
                              type="checkbox"
                              id={back.title}
                              checked={checkedTopics[back.title]}
                              onChange={() => handleCheckboxChange(back.title)}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <br />

                <div id="msc-section" className="flex flex-col text-left w-full mb-10">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                    4. Monitoring, Security, And Collaboration
                  </h1>
                  <p className="w-full text-left mx-auto leading-relaxed text-base">
                    Below are the topics that you need to complete to understand
                    Monitoring, Security, And Collaboration
                  </p>
                </div>
                <div className="flex flex-wrap -m-2">
                  {monitoring.map((back) => {
                    return (
                      <div
                        className="p-2 lg:w-1/3 md:w-1/2 w-full"
                        key={back.title}
                      >
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="team"
                            className="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4"
                            src={back.image}
                          />
                          <div className="flex-grow">
                            <Link to={back.to}>
                              <h2 className="text-white title-font font-bold underline text-xl">
                                {back.title}
                              </h2>
                            </Link>
                            <p className="text-white">{back.des}</p>
                            <input
                              type="checkbox"
                              id={back.title}
                              checked={checkedTopics[back.title]}
                              onChange={() => handleCheckboxChange(back.title)}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <br />

                <div id="csci-section" className="flex flex-col text-left w-full mb-10">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                    5. Cloud Services and Continuous Improvement
                  </h1>
                  <p className="w-full text-left mx-auto leading-relaxed text-base">
                    Below are the topics that you need to complete to complete
                    the devops journey
                  </p>
                </div>
                <div className="flex flex-wrap -m-2">
                  {cloud.map((back) => {
                    return (
                      <div
                        className="p-2 lg:w-1/3 md:w-1/2 w-full"
                        key={back.title}
                      >
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="team"
                            className="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4"
                            src={back.image}
                          />
                          <div className="flex-grow">
                            <Link to={back.to}>
                              <h2 className="text-white title-font font-bold underline text-xl">
                                {back.title}
                              </h2>
                            </Link>
                            <p className="text-white">{back.des}</p>
                            <input
                              type="checkbox"
                              id={back.title}
                              checked={checkedTopics[back.title]}
                              onChange={() => handleCheckboxChange(back.title)}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <br />
              </div>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
};

const iac = [
  {
    title: "Ansible",
    image: "https://www.vectorlogo.zone/logos/ansible/ansible-ar21.svg",
    to: "/ansible",
    des: "Ansible is a suite of software tools that enables infrastructure as code",
  },
  {
    title: "Terraform",
    image: "https://www.vectorlogo.zone/logos/terraformio/terraformio-ar21.svg",
    to: "/terraform",
    des: "Terraform is an infrastructure-as-code software tool created by HashiCorp.",
  },
];

const cicd = [
  {
    title: "Jenkins",
    image: "https://www.vectorlogo.zone/logos/jenkins/jenkins-ar21.svg",
    to: "/jenkins",
    des: "Jenkins helps automate the parts of software development related to building, testing, and deploying, facilitating continuous integration, and continuous delivery",
  },
  {
    title: "GitLab CI",
    image: "https://www.vectorlogo.zone/logos/gitlab/gitlab-ar21.svg",
    to: "/gitlab",
    des: "GitLab Inc. is an open-core company that operates GitLab, a DevOps software package which can develop, secure, and operate software",
  
  },
  {
    title: "Github Action",
    image:
      "https://img.freepik.com/premium-psd/3d-social-media-github-icon-rendering-front-view_391890-18330.jpg?w=740",
    to: "/git",
    des: "GitHub: Web platform for collaborative code management and version control.",
  },
];

const container = [
  {
    title: "Docker",
    image: "https://www.vectorlogo.zone/logos/docker/docker-ar21.svg",
    to: "/docker",
    des: "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers",
  },
  {
    title: "netes",
    image: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-ar21.svg",
    to: "/kubernetes",
    des: "Kubernetes is an open-source container orchestration system for automating software deployment, scaling, and management",
  },
];

const monitoring = [
  {
    title: "Prometheus",
    image:
      "https://www.vectorlogo.zone/logos/prometheusio/prometheusio-ar21.svg",
    to: "/prometheus",
    des: "An open-source monitoring system with a dimensional data model, flexible query language, efficient time series database and modern alerting approach.",
  },
  {
    title: "New Relic",
    image: "https://www.vectorlogo.zone/logos/newrelic/newrelic-ar21.svg",
    to: "/newrelic",
    des: "New Relic is a US-based web tracking and analytics company",
  },
  {
    title: "Slack",
    image: "https://www.vectorlogo.zone/logos/slack/slack-ar21.svg",
    to: "/slack",
    des: "Slack is a cloud-based freemium cross-platform instant messaging service created by Slack Technologies and currently owned by Salesforce",
  },
];

const cloud = [
  {
    title: "AWS",
    image: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg",
    to: "/aws",
    des: "AWS provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis",
  },
  {
    title: "Microsoft Azure",
    image:
      "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-ar21.svg",
    to: "/azure",
    des: "Microsoft Azure provides on-demand cloud computing platforms and APIs for individuals, businesses, and governments.",
  },
  {
    title: "Google Cloud Platform (GCP)",
    image:
      "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg",
    to: "/gcp",
    des: "Google Cloud Platform is Google's cloud computing offering, providing services for computing, storage, databases, machine learning, and data analytics.",
  },
  {
    title: "IBM Cloud",
    image: "https://www.vectorlogo.zone/logos/ibm_cloud/ibm_cloud-ar21.svg",
    to: "/ibm-cloud",
    des: "IBM Cloud offers a comprehensive suite of cloud services, including cloud infrastructure, AI and machine learning, blockchain, and more.",
  },
  {
    title: "Oracle Cloud",
    image:
      "https://cd.foundation/wp-content/uploads/sites/78/2021/05/oraclecloud.png",
    to: "/oracle-cloud",
    des: "Oracle Cloud provides cloud services for databases, computing, analytics, and applications. It caters to businesses and offers a variety of cloud solutions.",
  },
  {
    title: "DigitalOcean",
    image:
      "https://www.vectorlogo.zone/logos/digitalocean/digitalocean-ar21.svg",
    to: "/digitalocean",
    des: "DigitalOcean is a developer-friendly cloud infrastructure provider known for its simplicity. It offers virtual private servers (known as Droplets)",
  },
  {
    title: "Heroku",
    image: "https://www.vectorlogo.zone/logos/heroku/heroku-ar21.svg",
    to: "/heroku",
    des: "Heroku is a platform as a service (PaaS) that simplifies application deployment and management. It is particularly popular for web application hosting.",
  },
];
