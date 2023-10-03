import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  ${
    ""
  }
  background-color: #010116;
  ${
    ""
  }
`;

const Container = styled.div`
  scroll-snap-align: center;
  width: 90%;
  padding-top: 100px;
  @media only screen and (min-width: 768px) {
    overflow-y: scroll;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Netlify = () => {
  return (
    <>
      <Section>
        <Container>
          <section className="text-white body-font">
            <div className="mx-auto flex px-2 mt-8 mb-4 items-center justify-center flex-col">
              <img
                className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-contain object-center rounded"
                alt="hero"
                src="https://www.codespot.org/assets/netlify-cover.jpg"
              />
              <div className="text-center lg:w-full w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  Netlify
                </h1>
                <p className="mb-8 w-full text-justify">
                Netlify is a fantastic platform for hosting websites, and it's especially welcoming for beginners. Netlify is like a helpful friend for anyone looking to share their ideas or creations on the internet through a website. It takes care of all the technical stuff, making it super easy for beginners. You just give it your website, and it magically makes it live on the web, loading fast and secure for people all around the world. Plus, you can choose a custom web address (like "MyAmazingWebsite.com"), and they even offer a free plan to get you started. It's like having a supportive partner to make your online dreams come true.
                </p>
                <h1 className="mb-8 w-full text-justify text-2xl font-bold">Here are few key points about netlify web hosting service.</h1>
                <ul className="text-left gap-4 flex flex-col">
                <li><span className="text-lg font-semibold mr-4">Website Hosting Made Easy:</span> <br />Netlify is like a super-friendly landlord for your website. It takes your website files and puts them on the internet so that people can see them. You don't need to worry about servers or complicated tech stuff.</li>
                <li><span className="text-lg font-semibold mr-4">No Coding Experience Required:</span> <br />Even if you're not a tech expert, you can use Netlify. It's designed to be super simple. Just imagine it as your website's home on the internet, and Netlify takes care of all the technical details.</li>
                <li><span className="text-lg font-semibold mr-4">Automatic Updates:</span> <br /> When you make changes to your website (like adding new text, images, or features), Netlify automatically updates your site for you. It's like magic! You don't need to do anything extra.</li>
                <li><span className="text-lg font-semibold mr-4">Secure and Fast:</span><br /> Netlify helps keep your website safe and speedy. It adds a protective shield around your site, so it's safe from bad stuff, and it makes your website load really fast for people all over the world.</li>
                <li><span className="text-lg font-semibold mr-4">Custom Web Address:</span> <br />You can give your website a fancy name, like "mycoolsite.com." Netlify shows you how to do it, and they even make sure it's safe with an "https://" in front of it. It's like having your own special address on the internet.</li>
                <li><span className="text-lg font-semibold mr-4">Helps You Learn:</span><br /> Netlify has lots of tutorials and guides, so if you want to learn more about websites and how they work, you can explore and become a web expert over time.</li>
                <li><span className="text-lg font-semibold mr-4">Free to Start:</span> <br />The best part is, you can get started for free! They offer a free plan that includes all the basics, making it perfect for beginners and small projects.</li>
                </ul>
              </div>
            </div>
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
    title: "Host your site for free, with version control, staging, and more using Netlify",
    image: "https://i.ytimg.com/vi/i9qCmQ2EeUA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9j8R6y3JmuVa7JTtXIzk6CytGuw",
    type: "Youtube Video",
    link: "https://www.youtube.com/watch?v=i9qCmQ2EeUA&pp=ygUSaG9zdGluZyBvbiBuZXRsaWZ5",
  },
  {
    title: "Everything you need to know about the Netlify platform",
    image: "https://i.ytimg.com/vi/XG8nJDWu3a0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUPkt1689luKyNS9Q517b-iGwCpA",
    type: "Youtube Video",
    link: "https://www.youtube.com/watch?v=XG8nJDWu3a0",
  },
  {
    title: "Netlify Official Documentation",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXpPxl1A6bw65y-4P4KXAXpLgDj1GvTCMhzQ&usqp=CAU",
    type: "Documentation",
    link: "https://docs.netlify.com/"
  }
];