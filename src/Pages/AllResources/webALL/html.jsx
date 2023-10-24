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

export const HTML = () => {
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
                alt="HTML"
                src="https://img.freepik.com/free-vector/web-developers-courses-computer-programming-web-design-script-coding-study-computer-science-student-learning-interface-structure-components_335657-1161.jpg?w=826&t=st=1696142260~exp=1696142860~hmac=0023559da96b5349b1452cf23667ac25b74a8e365a5d0b4074c1f9847b911e85"
              />
              <div className="text-center lg:w-full w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                HTML
                </h1>
                <p className="mb-8 text-center mx-4">
                HTML (HyperText Markup Language) is the most basic building
                  block of the Web. It defines the meaning and structure of web
                  content. <br></br>Other technologies besides HTML are generally used to
                  describe a web page's appearance/presentation (CSS) or
                  functionality/behavior (JavaScript). <br></br>"Hypertext" refers to
                  links that connect web pages to one another, either within a
                  single website or between websites. Links are a fundamental
                  aspect of the Web.<br></br> By uploading content to the Internet and
                  linking it to pages created by other people, you become an
                  active participant in the World Wide Web.<br></br> HTML uses "markup"
                  to annotate text, images, and other content for display in a
                  Web browser.<br></br> <br></br><b>HTML markup includes special "elements" such as:</b>
                  <br></br> &lt;head&gt;, &lt;title&gt;, &lt;body&gt;, &lt;header&gt;,
                  <br></br>  &lt;footer&gt;, &lt;article&gt;, &lt;section&gt;, &lt;p&gt;,
                  <br></br> &lt;div&gt;, &lt;span&gt;, &lt;img&gt;, &lt;aside&gt;,
                  <br></br> &lt;audio&gt;, &lt;canvas&gt;, &lt;datalist&gt;,
                  <br></br> &lt;details&gt;, &lt;embed&gt;, &lt;nav&gt;, &lt;search&gt;,
                  <br></br> &lt;output&gt;, &lt;progress&gt;, &lt;video&gt;, &lt;ul&gt;,
                  <br></br> &lt;ol&gt;, &lt;li&gt; and many others.<br></br><br></br> An HTML element is set
                  off from other text in a document by "tags", which consist of
                  the element name surrounded by "&lt;" and "&gt;". <br></br>The name of
                  an element inside a tag is case-insensitive. That is, it can
                  be written in uppercase, lowercase, or a mixture. <br></br>For example,
                  the &lt;title&gt; tag can be written as &lt;Title&gt;,
                  &lt;TITLE&gt;, or in any other way. <br></br>However, the convention
                  and recommended practice are to write tags in lowercase. </p>
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
    title: "MDN Documentation",
    image:
      "https://pbs.twimg.com/profile_images/1511434207079407618/AwzUxnVf_400x400.png",
    type: "Documentation",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    title: "W3Schools - Introduction to HTML",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1088px-W3Schools_logo.svg.png",
    type: "Documentation",
    link: "https://www.w3schools.com/html/html_intro.asp",
  },
  {
    title: "HTML in 100 seconds",
    image: "https://i.ytimg.com/vi_webp/ok-plXXHlWw/maxresdefault.webp",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=ok-plXXHlWw",
  },
  {
    title: "HTML Tutorial for Beginners: HTML Crash Course",
    image: "https://i.ytimg.com/vi/qz0aGYrrlhU/maxresdefault.jpg",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=qz0aGYrrlhU",
  },
  {
    title: "Learn HTML - Full Tutorial for Beginners",
    image: "https://i.ytimg.com/vi_webp/kUMe1FH4CHE/maxresdefault.webp",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=kUMe1FH4CHE",
  },
  {
    title: "The HTML Handbook",
    image: "https://flaviocopes.com/bootcamp.jpg",
    type: "Documentation",
    link: "https://flaviocopes.com/book/html/",
  },
  {
    title: "Web Development by Doing:HTML/CSS From Scratch",
    image: "https://img-c.udemycdn.com/course/240x135/65330_5f74_10.jpg",
    type: "Course",
    link: "https://www.udemy.com/course/web-development-learn-by-doing-html5-css3-from-scratch-introductory/",
  },
  {
    title: "HTML for Beginners",
    image: "https://img-c.udemycdn.com/course/240x135/59535_1f48_6.jpg",
    type: "Course",
    link: "https://www.udemy.com/course/hmtl5-training/",
  },
];

const topics = [
  { title: "HTML Structure", storage: "htmlstructure" },
  { title: "HTML Elements", storage: "htmlelements" },
  { title: "Attributes", storage: "htmlattributes" },
  { title: "Text Formatting", storage: "textformatting" },
  { title: "Images", storage: "htmlimages" },
  { title: "Links", storage: "htmllinks" },
  { title: "Lists", storage: "htmllists" },
  { title: "Forms", storage: "htmlforms" },
  { title: "Semantic Elements", storage: "semantichtml" },
  { title: "Headings and Document Structure", storage: "documentstructure" },
  { title: "HTML Comments", storage: "htmlcomments" },
  { title: "Browser Developer Tools", storage: "devtools" },
];

