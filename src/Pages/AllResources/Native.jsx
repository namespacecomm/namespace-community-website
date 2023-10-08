import React from "react";
import { Link } from "react-router-dom";

export default function Native() {
  return (
    <>
      <div>
        <section className="text-gray-600 body-font text">
          <div className="px-5 py-24 mx-auto flex flex-wrap">
            <h1 className="text-2xl text-center font-bold leading-tight text-white sm:text-2xl lg:text-4xl">
              NATIVE DEVELOPMENT
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
                      Choose a Native Development Path
                    </h2>
                    <p className="leading-relaxed text-white text-justify">
                      Native development is a popular approach for building
                      platform-specific mobile applications. If you're
                      interested in becoming a native developer, you can choose
                      from various development paths.
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
                      Learn Java and Kotlin
                    </h2>
                    <p className="leading-relaxed text-white text-justify">
                      Start with Java or Kotlin, the primary programming
                      languages for Android app development
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
                      Andorid Studio Fundamentals
                    </h2>
                    <p className="leading-relaxed text-white text-justify">
                      Lay a solid groundwork in Android Studio by mastering
                      fundamental concepts like project structure, XML layouts,
                      activity lifecycle, and handling user input.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="lg:w-2/5 md:w-1/2 object-contain object-center rounded-lg md:mt-0 mt-12"
                src="https://phandroid.com/wp-content/uploads/2023/09/new-android-robot-1200x600.png"
                alt="Native App Development"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="px-5 py-0 mx-auto">
            <div className="flex flex-col text-left w-full mb-10">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                Choose a Native Development Path
              </h1>
              <p className="w-full text-left mx-auto leading-relaxed text-base">
                Native development offers various paths, including The android
                or ios development path, freelance development, and more. Choose
                the one that aligns with your goals and project requirements.
              </p>
            </div>
            <div className="flex flex-wrap -m-2">
              {nativeDevelopmentPaths.map((path) => (
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
              <h1 className="text-2xl font-bold title-font my-8 text-white tracking-widest">
                Native Resources
              </h1>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              {nativeResources.map((resource, index) => {
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
            {/* video resouces starts here */}
            <div className="flex flex-col text-left w-full mb-2">
              <h1 className="text-2xl font-bold title-font my-8 text-white tracking-widest">
                Native Video Resources
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
                        className="flex-shrink-0 rounded-lg w-75 h-75 object-cover object-center sm:mb-0 mb-1"
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

const nativeDevelopmentPaths = [
  {
    title: "Complete Beginner Path:",
    image:
      "https://static.vecteezy.com/system/resources/previews/004/865/921/non_2x/programmer-people-concept-use-laptop-and-programming-code-program-icon-spreading-with-modern-flat-style-free-vector.jpg",
    description:
      "This path introduce fundamental programming concepts, the Kotlin or Java, and gradually progress to cover basic Android app development, allowing learners to build their first simple Android apps without prior coding experience. Complementing this with the official Android documentation.",
    to: "/android-development-path", // Replace with your actual route
  },
  {
    title: "Experienced Programmer Path:",
    image:
      "https://i.pinimg.com/736x/90/d9/0a/90d90a2257e54da736f7c7c2a135bb97.jpg",
    description:
      "first mastering the Kotlin programming language, which is widely used for Android app development,then they can delve into Android-specific concepts, such as Activities, Fragments, and the Android lifecycle.This allow smooth transition into the world of native Android development.",
    to: "/web-developer-path", // Replace with your actual route
  },
  {
    title: "The Freelancer Path:",
    image:
      "https://logo.com/image-cdn/images/kts928pd/production/933e173f9a6bc90ac9b3442317bcebff66777cb9-383x384.png?w=1080&q=72",
    description:
      "In the Freelancer Path, individuals refine their mobile app development skills, becoming proficient in languages like Java, Kotlin and Android studio. They learn to market their services, acquire clients, manage projects independently, and adapt to diverse project requirements.",
    to: "/cross-platform-path", // Replace with your actual route
  },
  {
    title: "The UI/UX Designer Path",
    image:
      "https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5538286fbf4_Image%20by%20Freepik%202.jpg",
    description:
      "UI/UX Designers are experts in crafting the look, feel, and overall user experience of mobile apps.This path involves wireframing, prototyping, usability testing, and collaboration with developers to bring designs to life, ultimately enhancing user satisfaction and app success.",
    to: "/ui-ux-designer-path", // Replace with your actual route
  },
  {
    title: "The Open-Source Contributor Path:",
    image:
      "https://www.suse.com/c/wp-content/uploads/2018/10/Open-Source-Software-.jpg",
    description:
      "If you enjoy contributing to the developer community, consider this path: Learning kotlin and java, Identifying open-source android projects to contribute to on platforms like GitHub, Collaborating with other developers on bug fixes, new features, or documentation, Gaining recognition in the React Native community.",
    to: "/open-source-contributor-path", // Replace with your actual route
  },
];

const nativeResources = [
  {
    title: "Android Developer Documentation",
    type: "Official Documentation",
    image:
      "https://www.androidauthority.com/wp-content/uploads/2019/08/new-android-logo-2019-robot-head-reactions-animated-2.gif",
    link: "https://developer.android.com/docs",
  },
  {
    title: "Kotlin Projects on Github",
    type: "GitHub Repository",
    image:
      "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png",
    link: "https://www.androidauthority.com/wp-content/uploads/2019/08/new-android-logo-2019-robot-head-reactions-animated-2.gif",
  },
  {
    title: "Java Community",
    type: "Community Resources",
    image:
      "https://i.pinimg.com/564x/79/5e/bb/795ebb5f4a470cd7242136237f61fc53.jpg",
    link: "https://dev.to/t/java",
  },
  {
    title: "Kotlin Community",
    type: "Community Resources",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrvxJdtmimu4t82D8aDOjcczzzdYRvrUJPZLqfe29OLA&s",
    link: "https://kotlinlang.org/community/",
  },
];

const videoResources = [
  {
    title: "Java Full Course for free ☕",
    image: "https://img.youtube.com/vi/xk4_1vDrzzo/hqdefault.jpg",
    type: "video resource",
    link: "https://www.youtube.com/watch?v=xk4_1vDrzzo",
  },
  {
    title: "Learn Kotlin Programming – Full Course for Beginners",
    image: "https://img.youtube.com/vi/EExSSotojVI/hqdefault.jpg",
    type: "video resource",
    link: "https://www.youtube.com/watch?v=EExSSotojVI",
  },
  {
    title: "Instagram Clone Project",
    image: "https://img.youtube.com/vi/0LFbPZ3GA7g/hqdefault.jpg",
    type: "video resource",
    link: "https://www.youtube.com/watch?v=0LFbPZ3GA7g&list=PLUhfM8afLE_OFEGWaRmQFGizcjJyr_89j&index=1",
  },
  {
    title: "Weather App",
    image: "https://img.youtube.com/vi/QFGKV8j2ulY/hqdefault.jpg",
    type: "video resource",
    link: "https://www.youtube.com/watch?v=QFGKV8j2ulY&list=PLUhfM8afLE_OFEGWaRmQFGizcjJyr_89j&index=5",
  },
];
