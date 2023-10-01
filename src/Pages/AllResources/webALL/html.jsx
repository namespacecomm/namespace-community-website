import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Footer from '../../../components/Footer/Footer';
import Navbar from '../../../components/Navbar/Navbar';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: flex;
  background-color: rgb(9, 9, 121);
  background-repeat: no-repeat;
  background: linear-gradient(
    262deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(2, 0, 36, 1) 1%
  );
  ${
    '' /* background-repeat: no-repeat;
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
    closure: false
  });

  const handleCheckboxChange = (topic) => {
    setJsTopicsChecked({
      ...jstopicsChecked,
      [topic]: !jstopicsChecked[topic]
    });
  };

  useEffect(() => {
    localStorage.setItem('jstopicsChecked', JSON.stringify(jstopicsChecked));
  }, [jstopicsChecked]);

  useEffect(() => {
    const storedTopicsChecked = localStorage.getItem('jstopicsChecked');
    if (storedTopicsChecked) {
      setJsTopicsChecked(JSON.parse(storedTopicsChecked));
    }
  }, []);

  return (
    <>
      <Section>
        <Navbar />
        <Container>
          <section class="text-white body-font">
            <div class="mx-auto flex px-2 mt-8 mb-4 items-center justify-center flex-col">
              <img
                class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-contain object-center rounded"
                alt="hero"
                src="https://img.freepik.com/free-vector/web-developers-courses-computer-programming-web-design-script-coding-study-computer-science-student-learning-interface-structure-components_335657-1161.jpg?w=826&t=st=1696142260~exp=1696142860~hmac=0023559da96b5349b1452cf23667ac25b74a8e365a5d0b4074c1f9847b911e85"
              />
              <div class="text-center lg:w-full w-full">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  HTML: HyperText Markup Language
                </h1>
                <p class="mb-8 leading-relaxed text-justify">
                  HTML (HyperText Markup Language) is the most basic building
                  block of the Web. It defines the meaning and structure of web
                  content. Other technologies besides HTML are generally used to
                  describe a web page's appearance/presentation (CSS) or
                  functionality/behavior (JavaScript). "Hypertext" refers to
                  links that connect web pages to one another, either within a
                  single website or between websites. Links are a fundamental
                  aspect of the Web. By uploading content to the Internet and
                  linking it to pages created by other people, you become an
                  active participant in the World Wide Web. HTML uses "markup"
                  to annotate text, images, and other content for display in a
                  Web browser. HTML markup includes special "elements" such as
                  &lt;head&gt;, &lt;title&gt;, &lt;body&gt;, &lt;header&gt;,
                  &lt;footer&gt;, &lt;article&gt;, &lt;section&gt;, &lt;p&gt;,
                  &lt;div&gt;, &lt;span&gt;, &lt;img&gt;, &lt;aside&gt;,
                  &lt;audio&gt;, &lt;canvas&gt;, &lt;datalist&gt;,
                  &lt;details&gt;, &lt;embed&gt;, &lt;nav&gt;, &lt;search&gt;,
                  &lt;output&gt;, &lt;progress&gt;, &lt;video&gt;, &lt;ul&gt;,
                  &lt;ol&gt;, &lt;li&gt; and many others. An HTML element is set
                  off from other text in a document by "tags", which consist of
                  the element name surrounded by "&lt;" and "&gt;". The name of
                  an element inside a tag is case-insensitive. That is, it can
                  be written in uppercase, lowercase, or a mixture. For example,
                  the &lt;title&gt; tag can be written as &lt;Title&gt;,
                  &lt;TITLE&gt;, or in any other way. However, the convention
                  and recommended practice are to write tags in lowercase.
                </p>
              </div>
            </div>
            {/* <-------------------------------Topics Section ----------------------------------------------> */}
            <h2 class="mb-2 text-lg font-semiboldtext-white">
              Topics you need to cover:
            </h2>
            <div class="flex flex-wrap m-2">
              {topics.map((front) => {
                return (
                  <div class="p-2 lg:w-max md:w-1/2 ">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <div class="flex-row flex gap-16">
                        <h2 class="text-white title-font font-bold text-xl">
                          {front.title}
                        </h2>
                        <input
                          type="checkbox"
                          id={front.storage}
                          checked={jstopicsChecked[front.storage]}
                          onChange={() => handleCheckboxChange(front.storage)}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <-----------------------------------------------RESOURCES SECTION---------------------------------------------------> */}
            <section class="text-white body-font">
              <div class=" px-0 py-14 mx-auto">
                <div class="flex flex-col text-left w-full mb-2">
                  <h1 class="text-xl font-bold title-font mb-4 text-white-900 tracking-widest">
                    Resources
                  </h1>
                </div>
                <div class="flex flex-wrap -m-4">
                  {resources.map((resource) => {
                    return (
                      <div class="p-4 lg:w-1/2">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                          <img
                            alt="team"
                            class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                            src={resource.image}
                          />
                          <div class="text-left flex-grow sm:pl-8">
                            <h2 class="title-font font-medium text-lg text-white">
                              {resource.title}
                            </h2>
                            <h3 class="text-white mb-3">{resource.type}</h3>
                            <a href={resource.link} class="mb-4">
                              Link
                            </a>
                            <span class="inline-flex"></span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
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
    title: 'MDN Documentation',
    image:
      'https://pbs.twimg.com/profile_images/1511434207079407618/AwzUxnVf_400x400.png',
    type: 'Documentation',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
  },
  {
    title: 'W3Schools - Introduction to HTML',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1088px-W3Schools_logo.svg.png',
    type: 'Documentation',
    link: 'https://www.w3schools.com/html/html_intro.asp'
  }
];

const topics = [
  { title: 'HTML Structure', storage: 'html-structure' },
  { title: 'HTML Elements', storage: 'html-elements' },
  { title: 'Attributes', storage: 'html-attributes' },
  { title: 'Text Formatting', storage: 'text-formatting' },
  { title: 'Images', storage: 'html-images' },
  { title: 'Links', storage: 'html-links' },
  { title: 'Lists', storage: 'html-lists' },
  { title: 'Forms', storage: 'html-forms' },
  { title: 'Semantic Elements', storage: 'semantic-html' },
  { title: 'Headings and Document Structure', storage: 'document-structure' },
  { title: 'HTML Comments', storage: 'html-comments' },
  { title: 'Browser Developer Tools', storage: 'dev-tools' }
];
