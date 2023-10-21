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

export const TERRAFORM = () => {
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
                alt="terraform"
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1638214524004/FHbc6fKe6.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress"
              />
              <div className="text-center lg:w-full w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  TERRAFORM
                </h1>
                <p className="mb-8 text-center mx-4">
                Terraform is an infrastructure as code tool that lets you build, change, and version infrastructure safely and efficiently. This includes low-level components like compute instances, storage, and networking; and high-level components like DNS entries and SaaS features.
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
    title: "Getting started with Terraform",
    image: "https://miro.medium.com/max/1280/1*FdZ3fMqJMKhheQP4MVzCvw.jpeg",
    type: "Documentation",
    link: "https://developer.hashicorp.com/terraform?product_intent=terraform",
  },
  {
    title: "Terraform Tutorial",
    image: "https://th.bing.com/th/id/OIP.moFRz2RjPxGpYzAE-WGWKQHaHa?pid=ImgDet&rs=1",
    type: "Tutorial",
    link: "https://developer.hashicorp.com/terraform/tutorials",
  },
  {
    title: "Automate your AWS cloud infrastructure - YouTube",
    image: "https://miro.medium.com/max/2008/1*tYf1ZHiWng-tr0GZF9Cs3g.jpeg",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=SLB_c_ayRMo",
  },
  {
    title: "Terraform Courses - Udemy ",
    image: "https://s.udemycdn.com/meta/default-meta-image-v2.png",
    type: "Course",
    link: "https://www.udemy.com/topic/terraform/",
  },
  
  {
    title:"Terraform Certifications",
    image:"https://th.bing.com/th/id/OIP.7pSPknrz2gJU7HWA4RHhtAHaHa?pid=ImgDet&rs=1",
    type:"Study guides",
    link:"https://developer.hashicorp.com/terraform/tutorials/certification-003",
  },
  {
    title:"Contribute to Terraform",
    image:"https://www.terraform.io/img/og-image.png",
    type:"Github",
    link:"https://github.com/hashicorp/terraform",
  }
];

const topics = [
  { title: "Cloud Computing Basics", storage: "cloud-computing" },
  { title: "Terraform CLI", storage: "Terraform-cli" },
  { title: "Terraform configuration", storage: "Terraform-configuration" },
  { title: "Terraform state", storage: "Terraform-state" },
  { title: "Terraform provision", storage: "Terraform-provision" },
  { title: "Terraform cloud", storage: "Terraform-cloud" },
  { title: "Terraform modules", storage: "Terraform-modules" },
  { title: "Terraform applications", storage: "Terraform-applications" },
  { title: "Terraform Documentations", storage: "Terraform-Documentations" },
  { title: "Add-ons", storage: "add-ons" },
  ];
