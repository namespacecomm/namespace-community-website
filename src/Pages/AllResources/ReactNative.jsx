import React from "react";
import { Link } from "react-router-dom";

export default function ReactNative() {
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
                      Choose a React Native Development Path
                    </h2>
                    <p className="leading-relaxed text-white text-justify">
                      React Native is a popular framework for building
                      cross-platform mobile applications. If you're interested
                      in becoming a React Native developer, you can choose from
                      various development paths.
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
                      Learn JavaScript and React
                    </h2>
                    <p className="leading-relaxed text-white text-justify">
                      Begin by mastering JavaScript and React, which are
                      fundamental for React Native development.
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
                      React Native Fundamentals
                    </h2>
                    <p className="leading-relaxed text-white text-justify">
                      Build a strong foundation by learning React Native basics,
                      including components, navigation, and state management.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="lg:w-2/5 md:w-1/2 object-contain object-center rounded-lg md:mt-0 mt-12"
                src="https://miro.medium.com/v2/resize:fit:1024/1*QY5S4senfFh-mIViSi5A_Q.png"
                alt="React Native App Development"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="px-5 py-0 mx-auto">
            <div className="flex flex-col text-left w-full mb-10">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                Choose a React Native Development Path
              </h1>
              <p className="w-full text-left mx-auto leading-relaxed text-base">
                React Native development offers various paths, including The
                Mobile App Developer Path, cross-platform development, and more.
                Choose the one that aligns with your goals and project
                requirements.
              </p>
            </div>
            <div className="flex flex-wrap -m-2">
              {reactNativeDevelopmentPaths.map((path) => (
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

        <section className="text-white body-font">
          <div className="px-5 py-14 mx-auto">
            <div className="flex flex-col text-left w-full mb-2">
              <h1 className="text-2xl font-bold title-font mb-4 text-white tracking-widest">
                React Native Resources
              </h1>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              {reactNativeResources.map((resource, index) => {
                return (
                  <div
                    className="lg:w-full bg-black/20 p-4 rounded-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
                    key={index}
                  >
                    <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                      <img
                        alt="resource"
                        className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                        src={resource.image}
                      />
                      <div className="text-left flex-grow sm:pl-8">
                        <a
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h2 className="title-font font-medium text-xl pb-1 text-white underline underline-offset-2">
                            {resource.title}
                          </h2>
                        </a>
                        <h3 className="text-white mb-2">{resource.type}</h3>
                        <a
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="px-5 py-14 mx-auto">
            <div className="flex flex-col text-left w-full mb-2">
              <h1 className="text-2xl font-bold title-font my-8 text-white tracking-widest">
                React Native Video Resources
              </h1>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              {videoResources.map((resource, index) => {
                return (
                  <div
                    className="lg:w-full bg-black/20 p-4 rounded-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
                    key={index}
                  >
                    <div className="h-full flex sm:flex-col flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                      <img
                        alt="resource"
                        className="flex-shrink-0 rounded-lg w-75 h-75 object-contain object-center sm:mb-0 mb-1"
                        src={resource.image}
                      />
                      <div className="text-center flex-grow ">
                        <a
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h2 className="title-font font-medium text-xl pb-1 text-white underline underline-offset-2">
                            {resource.title}
                          </h2>
                        </a>
                        <h3 className="text-white mb-2">{resource.type}</h3>
                        <a
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const reactNativeDevelopmentPaths = [
  {
    title: "The Mobile App Developer Path:",
    image:
      "https://www.postingtree.com/wp-content/uploads/2022/06/7-Key-Differences-Traditional-vs-Mobile-App-Development-1.png",
    description:
      "This path focuses on building mobile applications using React Native for both iOS and Android platforms. It includes Learning JavaScript and React, Mastering React Native UI components, Exploring navigation and state management, Integrating APIs for data retrieval, Building and publishing mobile apps.",
    // to: "/mobile-app-developer-path", // Replace with your actual route
  },
  {
    title: "The Front-End Web Developer Path",
    image:
      "https://appinventiv.com/wp-content/uploads/sites/1/2019/06/Less-Talked-About-React-Native-App-Development-Considerations.png",
    description:
      "If you're a front-end web developer interested in expanding your skills to mobile development, this path is for you: Learning JavaScript and React, Building mobile-friendly web applications using React Native for the web, Understanding responsive design principles, Integrating web APIs and services, Deploying React Native web applications.",
    // to: "/web-developer-path", // Replace with your actual route
  },
  {
    title: "The Cross-Platform Developer Path:",
    image: "https://softflame.in/images/cross2.png",
    description:
      "If you want to develop for multiple platforms beyond just mobile and web, consider this path: Mastering JavaScript and React, Exploring React Native's cross-platform capabilities, Experimenting with React Native for desktop (Windows, macOS, Linux), Creating cross-platform applications for various devices.",
    // to: "/cross-platform-path", // Replace with your actual route
  },
  {
    title: "The UI/UX Designer Path",
    image:
      "https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5538286fbf4_Image%20by%20Freepik%202.jpg",
    description:
      "If your passion lies in designing user interfaces and experiences, you can specialize in React Native UI/UX design: Learning JavaScript basics, Gaining a deep understanding of React Native components and design principles, Creating visually appealing and user-friendly UIs, Collaborating with developers to bring designs to life.",
    // to: "/ui-ux-designer-path", // Replace with your actual route
  },
  {
    title: "The Open-Source Contributor Path:",
    image:
      "https://www.suse.com/c/wp-content/uploads/2018/10/Open-Source-Software-.jpg",
    description:
      "If you enjoy contributing to the developer community, consider this path: Learning JavaScript and React, Identifying open-source React Native projects to contribute to on platforms like GitHub, Collaborating with other developers on bug fixes, new features, or documentation, Gaining recognition in the React Native community.",
    // to: "/open-source-contributor-path", // Replace with your actual route
  },
];

const reactNativeResources = [
  {
    title: "React Native Documentation",
    type: "Official Documentation",
    image:
      "https://cdn1.iconfinder.com/data/icons/soleicons-fill-vol-1/64/reactjs_javascript_library_atom_atomic_react-512.png",
    link: "https://reactnative.dev/docs/getting-started",
  },
  {
    title: "React Native GitHub Repository",
    type: "GitHub Repository",
    image:
      "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png",
    link: "https://github.com/facebook/react-native",
  },
  {
    title: "React Native Community",
    type: "Community Resources",
    image: "https://avatars.githubusercontent.com/u/20269980?v=4",
    link: "https://www.reactnative.directory/",
  },
  {
    title: "React Native Expo",
    type: "Development Environment",
    image: "https://static.expo.dev/static/brand/square-512x512.png",
    link: "https://expo.dev/",
  },
];
const videoResources = [
  {
    title: "React Native Course",
    image: "https://img.youtube.com/vi/obH0Po_RdWk/hqdefault.jpg",
    type: "Youtube Video",
    link: "https://www.youtube.com/watch?v=obH0Po_RdWk",
  },
  {
    title: "React native tutorial",
    image: "https://img.youtube.com/vi/z1qG80Jkzi8/hqdefault.jpg",
    type: "Youtube Playlist",
    link: "https://www.youtube.com/watch?v=z1qG80Jkzi8&list=PL8p2I9GklV468O2wk-n8Q1KmtMhnHHj4C&index=1",
  },
  {
    title: "Building a Health Application with React Native: Step Counter",
    image: "https://img.youtube.com/vi/VVoXcr18mdo/hqdefault.jpg",
    type: "Youtube Video",
    link: "https://www.youtube.com/watch?v=VVoXcr18mdo",
  },
  {
    title: "React Native Tutorial | Travel App 2023 | Beginners Course",
    image: "https://img.youtube.com/vi/9bFOUJ9MV_s/hqdefault.jpg",
    type: "Youtube Video",
    link: "https://www.youtube.com/watch?v=9bFOUJ9MV_s",
  },
];
