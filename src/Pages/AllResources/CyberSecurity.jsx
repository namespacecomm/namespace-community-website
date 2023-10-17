import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./Main.css";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #010116;
`;

const Container = styled.div`
  scroll-snap-align: center;
  width: 100%;
  padding-top: 100px;
`;

export const CyberSecurity = () => {
  const [checkedTopics, setCheckedTopics] = useState({
    HTML: false,
    CSS: false,
    Javascript: false,
  });

  // const handleCheckboxChange = (topic) => {
  //   setCheckedTopics({
  //     ...checkedTopics,
  //     [topic]: !checkedTopics[topic],
  //   });
  // };

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
          <div className="px-0 py-10 mx-auto">
            <h1 className="text-3xl text-center font-bold leading-tight text-white sm:text-4xl lg:text-5xl mb-20">
              Cyber Security
            </h1>
            {/* <************************************MAIN SECTION*******************************************> */}
            <section className="text-gray-600 body-font px-10">
              <div className=" flex flex-wrap">
                <div className="flex flex-wrap justify-center">
                  <div className="lg:w-3/5 md:w-4/5 md:pr-10 md:py-6">
                    <div className="flex relative pb-12 ">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none">
                          hey
                        </div>
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
                      <div className="flex-grow pl-4 ">
                        <h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                          Choose Secure Technologies:
                        </h2>
                        <p className="leading-relaxed text-white">
                          Select secure and well-maintained technologies for web
                          development, frameworks, and libraries with a strong
                          focus on security, such as ruby on rails, django, or
                          angular. Stay updated on security vulnerabilities and
                          patches related to the chosen technologies.
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
                          Frontend Security
                        </h2>
                        <p className="leading-relaxed text-white ">
                          Implement security best practices in frontend
                          development to protect against common client-side
                          vulnerabilities, such as cross-site scripting (xss)
                          and cross-site request forgery (csrf). Ensure input
                          validation and output encoding to prevent injection
                          attacks. Use content security policy (csp) headers to
                          mitigate xss risks.
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
                          Backend Security
                        </h2>
                        <p className="leading-relaxed text-white ">
                          Write secure backend code by avoiding sql injection,
                          and validating user input thoroughly. Implement proper
                          access controls and authentication mechanisms, such as
                          oauth or jwt, to protect apis and sensitive resources.
                          Regularly update and patch server-side components and
                          libraries.
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
                          Database Security
                        </h2>
                        <p className="leading-relaxed text-white ">
                          Secure the database by implementing proper access
                          controls, strong authentication, and encryption of
                          sensitive data at rest and in transit. Conduct regular
                          security audits and vulnerability assessments of the
                          database. Ensure backup and disaster recovery plans
                          are in place to safeguard data.
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
                          Secure Project Build
                        </h2>
                        <p className="leading-relaxed text-white ">
                          Integrate automated security scanning tools like owasp
                          dependency-check or snyk into your ci/cd pipeline to
                          identify and remediate vulnerabilities in third-party
                          dependencies. Follow security-focused coding standards
                          and conduct code reviews with a security mindset.
                          Consider incorporating security testing, such as
                          penetration testing or code scanning, into your
                          development process.
                        </p>
                      </div>
                    </div>
                  </div>

                  <img
                    className="w-[400px] h-[400px] object-cover rounded-3xl md:mt-0 mt-12"
                    src="https://www.netcov.com/wp-content/pubfiles/2022/07/shutterstock_1092829541.jpg"
                    alt="Cybersecurity"
                  />
                </div>
              </div>
            </section>

            <section className="text-white body-font mt-[100px] max-w-screen mx-auto">
              <div className="flex flex-wrap gap-4 px-12 text-center mx-auto justify-center">
                {techUsed.map((front) => {
                  return (
                    <div
                      className="p-5 w-full lg:w-[500px] border rounded-lg"
                      key={front.title}
                    >
                      <div className="flex flex-col gap-4">
                        <h2 className="text-white title-font font-bold text-2xl">
                          {front.title}
                        </h2>

                        <p className="text-white">{front.content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
};

const techUsed = [
  {
    title: "Artificial Intelligence (AI) and Machine Learning (ML)",
    content:
      "Artificial Intelligence and Machine Learning are revolutionizing the cybersecurity industry. These technologies analyze vast amounts of data, learn from patterns, and make predictions about potential threats. By utilizing these technologies, cybersecurity experts can identify and respond to threats faster and more accurately than ever before.",
  },
  {
    title: "Behavioral Biometrics",
    content:
      "Behavioral biometrics is a new approach to cybersecurity that uses machine learning algorithms to analyze user behavior. This technology can detect patterns in the way users interact with devices, such as typing speed, mouse movement, and navigation. By analyzing these patterns, behavioral biometrics can identify potential threats, such as hackers who have gained access to a user’s account.",
  },
  {
    title: "Zero Trust Architecture",
    content:
      "Zero trust is a security model that requires strict identity verification for every person or device that tries to access an organization’s network or resources. This model assumes that no one is trusted by default, even if they are within the organization’s network perimeter. Zero trust architecture has gained popularity in recent years due to the increasing number of cyberattacks targeting businesses and organizations.",
  },
  {
    title: "Blockchain",
    content:
      "Blockchain technology is most associated with cryptocurrencies, but it has the potential to transform cybersecurity as well. By creating a decentralized database, blockchain can provide secure storage for sensitive information. Because there is no central authority controlling the data, it is much more difficult for hackers to gain unauthorized access.",
  },
  {
    title: "Quantum Computing",
    content:
      "Quantum computing is a technology that uses quantum mechanics to process data. It has the potential to solve complex problems much faster than traditional computers. While this technology is still in its infancy, it has the potential to revolutionize the field of cybersecurity by allowing more secure encryption.",
  },
  {
    title: "Cloud Security",
    content:
      "Cloud computing has become an essential part of many businesses, but it also introduces new security risks. Cloud security technologies are emerging to address these risks, such as multi-factor authentication, encryption, and access controls. By utilizing these technologies, businesses can ensure that their data is secure in the cloud.",
  },
  {
    title: "Internet of Things (IoT) Security",
    content:
      "IoT devices are becoming more prevalent in homes and businesses, and they are often vulnerable to cyberattacks. IoT security technologies include encryption, access controls, and monitoring to protect IoT devices and the data they collect.",
  },
];
