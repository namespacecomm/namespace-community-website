import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../../components/Footer/Footer";
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

export const Django = () => {
  const [djangoTopicsChecked, setDjangoTopicsChecked] = useState({
    datamodelling: false,
    crudoperations: false,
    querying: false,
    documents: false,
    collections: false,
    indexes: false,
  });

  const handleCheckboxChange = (topic) => {
    setDjangoTopicsChecked({
      ...djangoTopicsChecked,
      [topic]: !djangoTopicsChecked[topic],
    });
  };

  useEffect(() => {
    localStorage.setItem(
      "djangoTopicsChecked",
      JSON.stringify(djangoTopicsChecked)
    );
  }, [djangoTopicsChecked]);

  useEffect(() => {
    const storedTopicsChecked = localStorage.getItem("djangoTopicsChecked");
    if (storedTopicsChecked) {
      setDjangoTopicsChecked(JSON.parse(storedTopicsChecked));
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
                src="https://www.ozankartal.com.tr/wp-content/uploads/2020/04/django.png"
              />
              <div className="text-center lg:w-full w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  Django
                </h1>
                <p className="mb-8 leading-relaxed text-justify">
                  Django is a free and open-source, Python-based web framework
                  that follows the model–template–views (MTV) architectural
                  pattern.It is maintained by the Django Software Foundation
                  (DSF), an independent organization established in the US as a
                  501 non-profit. Django's primary goal is to ease the creation
                  of complex, database-driven websites. The framework emphasizes
                  reusability and "pluggability" of components, less code, low
                  coupling, rapid development, and the principle of don't repeat
                  yourself.Python is used throughout, even for settings, files,
                  and data models. Django also provides an optional
                  administrative create, read, update and delete interface that
                  is generated dynamically through introspection and configured
                  via admin models.
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
                          checked={djangoTopicsChecked[front.storage]}
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
      <Footer />
    </>
  );
};

const resources = [
  {
    title: "Django Documentation",
    image:
      "https://seeklogo.com/images/D/django-logo-4C5ECF7036-seeklogo.com.png",
    type: "Documentation",
    link: "https://docs.djangoproject.com/en/4.2/",
  },
  {
    title: "W3Schools - Django Tutorial",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1088px-W3Schools_logo.svg.png",
    type: "Documentation",
    link: "https://www.w3schools.com/django/",
  },
  {
    title: "Django Documentation",
    image:
      "https://pbs.twimg.com/profile_images/1511434207079407618/AwzUxnVf_400x400.png",
    type: "Documentation",
    link: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Introduction",
  },
  {
    title: "Python Django Tutorial for Beginners",
    image: "https://i.ytimg.com/vi/rHux0gMZ3Eg/maxresdefault.jpg",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=rHux0gMZ3Eg",
  },
  {
    title: "Python Django Crash Course",
    image:
      "https://i.ytimg.com/vi/e1IyzVyrLSU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCysPATjJl6PaethSLR_NiugOLEhw",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=e1IyzVyrLSU",
  },
  {
    title: "Python Django Web Framework - Full Course for Beginners",
    image: "https://i.ytimg.com/vi/F5mRW0jo-U4/maxresdefault.jpg",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=F5mRW0jo-U4",
  },
  {
    title: "Python and Django Full Stack Web Developer Bootcamp",
    image: "https://img-b.udemycdn.com/course/240x135/822444_a6db.jpg",
    type: "Course",
    link: "https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp/",
  },
  {
    title: "Python And Django Framework And HTML 5 Complete Course 2022",
    image: "https://img-c.udemycdn.com/course/750x422/4972370_1c04.jpg",
    type: "Course",
    link: "https://www.udemy.com/course/python-and-django-framework-and-html-5-complete-course-2022/",
  },
];

const topics = [
  { title: "Python", storage: "python" },
  { title: "Django Models", storage: "djangomodels" },
  { title: "Django Views and Templates", storage: "viewsandtemplates" },
  { title: "URL Routing", storage: "urlrounting" },
  { title: "MVT Architecture", storage: "djangomvt" },
  { title: "REST APIs", storage: "djangorest" },
  { title: "Django ORM (Object-Relational Mapping)", storage: "djangoorm" },
];
