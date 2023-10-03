import React from "react";
import { Link } from "react-router-dom";

const ReactNative = () => {
  return (
    <>
      <div>
        <section className="text-gray-600 body-font text">
          <div className="px-5 py-24 mx-auto flex flex-wrap">
            <h1 className="text-2xl text-center font-bold leading-tight text-white sm:text-2xl lg:text-4xl">
              REACT NATIVE DEVELOPMENT
            </h1>

            <div className="flex flex-wrap w-full">
              <div className="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6">
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>

                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
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
                      Choose an React Native Development Path
                    </h2>
                    <p className="leading-relaxed text-white text-justify">
                      React Native is a popular open-source framework for
                      building cross-platform mobile applications. If you're
                      interested in becoming a React Native developer.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
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
                      Learn Dart Programming
                    </h2>
                    <p className="leading-relaxed text-white text-justify">
                      Begin by mastering the Dart programming language, which is
                      used for React Native development.
                    </p>
                  </div>
                </div>
                <div className="flex relative">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
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
                      React Native Fundamentals:
                    </h2>
                    <p className="leading-relaxed text-white text-justify">
                      Build a strong foundation by learning React Native basics,
                      including widgets, layouts, navigation, and state
                      management.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="lg:w-2/5 md:w-1/2 object-contain object-center rounded-lg md:mt-0 mt-12"
                src="https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png"
                style={{ height: 400, width: "auto" }}
                alt="React Native Development"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="px-5 py-0 mx-auto">
            <div className="flex flex-col text-left w-full mb-10">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                Choose An React Native Development Path
              </h1>
              <p className="w-full text-left mx-auto leading-relaxed text-base">
                React Native development offers various paths, including The
                Mobile App Developer Path, cross-platform development, and more.
                Choose the one that aligns with your goals and project
                requirements.
              </p>
            </div>
            <div className="flex flex-wrap -m-2">
              {flutterDevelopmentPaths.map((path) => (
                <div key={path.title} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img
                      alt="path"
                      className="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4"
                      src={path.image}
                    />
                    <div className="flex-grow">
                      <Link to={path.to}>
                        <h2 className="text-white title-font font-bold underline text-xl">
                          {path.title}
                        </h2>
                      </Link>
                      <p className="text-white">{path.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
const flutterDevelopmentPaths = [
  {
    title: "Javascript",
    image:
      "https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept_335657-2412.jpg?w=1060&t=st=1696093913~exp=1696094513~hmac=72afb722e8869c28f844193e8f7ca0dc4d74d7e40d429d4ec7a725bb26164862",
    to: "/js",
    description:
      "Javascript gives functionality and behaviour to our websites / webapps",
  },
  {
    title: "Official Documentation:",
    image:
      "https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png",
    description:
      "The official React Native documentation provides comprehensive guides, API references, and tutorials to get you started.",
  },
  {
    title: "Expo",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAMMlLLQ2jjvthHRDsjjGyqhOvQgZqPbdN-0nNnNeajg&s",
    description:
      "A tool and platform for React Native that makes it easy to build and deploy mobile apps using JavaScript and React.",
  },
  {
    title: "The Open-Source Contributor Path:",
    image:
      "https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png",
    description:
      "If you enjoy contributing to the developer community, consider this path: Learning Dart and React Native.Identifying open-source React Native projects to contribute to on platforms like GitHub.Collaborating with other developers on bug fixes, new features, or documentation,Gaining rcognition in the React Native community",
  },
];
export default ReactNative;
