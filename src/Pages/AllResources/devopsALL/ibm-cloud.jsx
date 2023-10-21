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

const YtSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
display: flex;
background-color: #010116;
`;
const YoutubeFrame = styled.iframe`
  width: 30vw;
  height: 350px;

  @media only screen and (max-width: 768px) {
    width: 90vw;
    height: 250px;
    margin-top: 10px;
    margin-bottom: 10px;
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

export const IBM = () => {
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
              
              <div className="text-center lg:w-full w-full">
                <h1 className="title-font font-bold sm:text-4xl text-3xl mb-4 leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-blue-500 to-blue-800  lg:text-5xl">
                  IBM CLOUD
                </h1>
                <p className="mb-8  mx-auto mt-4  text-2xl leading-relaxed text-white-600">
                IBM Cloud provides a wide range of resources and services for cloud computing, including infrastructure
                 as a service (IaaS), platform as a service (PaaS), and software as a service (SaaS) offerings. 
                 These resources and services can help organizations build, deploy, and manage applications
                  and workloads in the cloud. Here are some of the key IBM Cloud resources and services:
                </p>
              </div>
            </div>
            {/* <-------------------------------Topics Section ----------------------------------------------> */}
            <h2 className=" text-2xl text-center font-semibold mb-4 leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-blue-300 to-blue-900">
              IBM Cloud Services:
            </h2>
                <ul className="flex flex-wrap m-2">
                {topics.map((item) => {
                  return (
                    <a href={item.to}>
                    <li className="p-2 lg:w-max md:w-1/2" key={item.title}>
                      
                      <div className="h-full flex items-center border-gray-200 border px-4 py-2 rounded-lg hover:scale-105 transition-all">
                      <div className="flex items-center gap-3">
                        <label
                          htmlFor={item.storage}
                          className="text-white title-font font-bold text-xl cursor-pointer"
                        >
                          {item.title}
                        </label>
                        
                      </div>
                    </div>

                    
                      </li>
                      </a>
                  );
                })}
              </ul>
            {/* <-----------------------------------------------RESOURCES SECTION---------------------------------------------------> */}
            <section className="text-white body-font">
              <div className=" px-0 py-14 mx-auto">
                <div className="flex flex-col text-left w-full mb-2">
                  <h2 className="text-2xl text-center font-semibold mb-4 leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-blue-300 to-blue-900">
                    Resources:
                  </h2>
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
      
      <YtSection>
        <div className="justify-items-center">
          <YoutubeFrame src="https://www.youtube.com/embed/videoseries?si=AkRVzFRE_LKlDxQb&amp;list=PLOspHqNVtKAC-_ZAGresP-i0okHe5FjcJ"/>
       
        </div>
      </YtSection>
    </>
  );
};

const resources = [
  {
    title: "IBM CLOUD - Docs",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/24/IBM_Cloud_logo.png",
    type: "Documentation",
    link: "https://cloud.ibm.com/docs",
  },
  {
    title: "IBM Documentation",
    image: "https://higherlogicdownload.s3.amazonaws.com/IMWUC/UploadedImages/df4b6c52-fa54-45e2-93a7-0baaee086cf2/IBM_Doc.jpg",
    type: "Documentation ",
    link: "https://www.ibm.com/docs/en",
  },
  {
    title: "IBM Cloud Essentials",
    image:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/XDP/XDP~COURSE!~ibm-cloud-essentials/XDP~COURSE!~ibm-cloud-essentials.jpeg",
    type: "Course",
    link: "https://www.coursera.org/learn/ibm-cloud-essentials",
  },
 
  {
    title: "IBM Center for Cloud Training",
    image: "https://images.credly.com/images/aa363f2a-dc74-44bd-9ffd-ead8f307ef96/IBM_Professional_Certified_Architect_-_Cloud_v5.png",
    type: "Course",
    link: "https://www.ibm.com/training/cloud",
  },
  
];

const topics = [
  { title: "IBM cloud virtual servers",
  to: "https://www.ibm.com/products/virtual-servers",
  },
  { title: "IBM Cloud Kubernetes Service", 
  to: "https://www.ibm.com/products/kubernetes-service"
  },
  { title: "IBM Cloud Object Storage", 
  to: "https://www.ibm.com/cloud/object-storage"
  },
  { title: "IBM Cloud Databases", 
  to: "https://www.ibm.com/cloud/databases"
  },
  { title: "IBM Cloud Functions", 
  to: "https://cloud.ibm.com/functions/"
  },
  { title: "IBM Cloud Watson", 
  to: "https://cloud.ibm.com/developer/watson/dashboard"
  },
  { title: "IBM Cloud Internet of Things (IoT)", 
  to: "https://www.ibm.com/cloud/internet-of-things"
  },
  { title: "IBM Cloud Foundry", 
  to: "https://www.cloudfoundry.org/"
  },
  { title: "IBM Cloud AI Services", 
  to: "https://www.ibm.com/artificial-intelligence"
  },
  { title: "IBM Cloud Security and Compliance", 
  to: "https://www.ibm.com/products/security-and-compliance-center"
  },
  { title: "IBM Cloud Functions", 
  to: "https://cloud.ibm.com/functions/"
  },
  { title: "IBM Cloud DevOps Services", 
  to: "https://www.ibm.com/devops"
  },
  { title: "IBM Cloud Monitoring and Logging", 
  to: "https://www.ibm.com/products/cloud-monitoring"
  },
  { title: "IBM Cloud Integration Services", 
  to: "https://www.ibm.com/integration"
  },
  { title: "IBM Cloud Storage", 
  to: "https://www.ibm.com/cloud/storage"
  },
  { title: "IBM Cloud Networking", 
  to: "https://www.ibm.com/cloud/network"
  },
  { title: "IBM Cloud Marketplace", 
  to: "https://mediacenter.ibm.com/channel/IBM+Cloud+marketplace"
  },


];
