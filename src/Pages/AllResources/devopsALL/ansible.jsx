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

export const ANSIBLE = () => {
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
                alt="Ansible"
                src="https://dt-cdn.net/wp-content/uploads/2020/08/Ansible.jpg"
              />
              <div className="text-center lg:w-full w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  ANSIBLE
                </h1>
                <p className="mb-8 text-center mx-4">
                Ansible is an IT automation tool. It can configure systems, deploy software, and orchestrate more advanced IT tasks such as continuous deployments or zero downtime rolling updates.
                Ansible’s main goals are simplicity and ease-of-use. It also has a strong focus on security and reliability, featuring a minimum of moving parts, usage of OpenSSH for transport (with other transports and pull modes as alternatives), and a language that is designed around auditability by humans–even those not familiar with the program.
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
    title: "Getting started with Ansible",
    image: "https://newsofttraining.com/wp-content/uploads/2019/08/ansible-logo.png",
    type: "Documentation",
    link: "https://docs.ansible.com/ansible/latest/getting_started/index.html",
  },
  {
    title: "Ansible Tutorial",
    image: "https://pantheon.tech/wp-content/uploads/2019/04/ansible.png",
    type: "Tutorial",
    link: "https://www.tutorialspoint.com/ansible/index.htm",
  },
  {
    title: "What Is Ansible? | How Ansible Works? - YouTube",
    image: "https://1.cms.s81c.com/sites/default/files/2018-11-22/Ansible_ov.png",
    type: "Youtube video",
    link: "https://pantheon.tech/wp-content/uploads/2019/04/ansible.png",
  },
  {
    title: "Mastering Ansible - Udemy ",
    image: "https://s.udemycdn.com/meta/default-meta-image-v2.png",
    type: "Course",
    link: "https://www.udemy.com/course/mastering-ansible/?matchtype=p&msclkid=9592242bd3731e4510e3411823ae5ffe&utm_campaign=BG-LongTail_la.EN_cc.INDIA&utm_content=deal4584&utm_medium=udemyads&utm_source=bing&utm_term=_._ag_1214960761643159_._ad__._kw_%2BAnsible+%2BCourse_._de_c_._dm__._pl__._ti_kwd-75935360748534%3Aloc-90_._li_155014_._pd__._",
  },
  
  {
    title:"RHCE Ansible Series",
    image:"https://linuxhandbook.com/content/images/size/w1000/2020/10/ansible-playbook.png",
    type:"Tutorial series",
    link:"https://linuxhandbook.com/tag/rhce-ansible-series/",
  }
];

const topics = [
  { title: "Cloud Computing", storage: "cloud-computing" },
  { title: "Ansible CLI", storage: "Ansible-cli" },
  { title: "Ansible inventories", storage: "Ansible-inventories" },
  { title: "Ansible testing", storage: "Ansible-testing" },
  { title: "Ansible playbooks", storage: "Ansible-playbooks" },
  { title: "Ansible vaults", storage: "Ansible-vaults" },
  { title: "Ansible modules", storage: "Ansible-modules" },
  { title: "Ansible collections", storage: "Ansible-collections" },
  { title: "Ansible Documentations", storage: "Ansible-Documentations" },
  { title: "Add-ons", storage: "add-ons" },
  ];
