import React from "react";
import { Link } from "react-router-dom";

export default function Flutter() {
  return (
    <>
      <div>
        <section className="text-gray-600 body-font text">
          <div className="px-5 py-24 mx-auto flex flex-wrap">
            <h1 className="text-2xl text-center font-bold leading-tight text-white sm:text-2xl lg:text-4xl">
              FLUTTER DEVELOPMENT
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
                      Choose an Flutter Development Path
                    </h2>
                    <p className="leading-relaxed text-white text-justify">
                      Flutter is a popular open-source framework for building
                      cross-platform mobile applications. If you're interested
                      in becoming a Flutter developer.
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
                      used for Flutter development.
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
                      Flutter Fundamentals:
                    </h2>
                    <p className="leading-relaxed text-white text-justify">
                      Build a strong foundation by learning Flutter basics,
                      including widgets, layouts, navigation, and state
                      management.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="lg:w-2/5 md:w-1/2 object-contain object-center rounded-lg md:mt-0 mt-12"
                src="https://www.elluminatiinc.com/wp-content/uploads/2020/07/blog/androidappdevelopmenttools.png"
                alt="Android App Development"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="px-5 py-0 mx-auto">
            <div className="flex flex-col text-left w-full mb-10">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                Choose An Flutter Development Path
              </h1>
              <p className="w-full text-left mx-auto leading-relaxed text-base">
                Flutter development offers various paths, including The Mobile
                App Developer Path, cross-platform development, and more. Choose
                the one that aligns with your goals and project requirements.
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
        <section>
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

const flutterDevelopmentPaths = [
  {
    title: "The Mobile App Developer Path:",
    image:
      "https://png.pngtree.com/png-clipart/20230825/original/pngtree-mobile-android-operating-system-with-latest-version-installed-picture-image_8721522.png",
    description:
      "This path focuses on building mobile applications using Flutter for both iOS and Android platforms. It includes Learning Dart and Flutter basics. Mastering UI development with widgets. Exploring state management solutions. Integrating APIs for data retrieval. Building and publishing mobile apps.",
  },
  {
    title: "The Front-End Web Developer Path",
    image:
      "https://appinventiv.com/wp-content/uploads/sites/1/2019/09/Best-10-Cross-platform-app-frameworks-to-consider-in-2020.png",
    description:
      "If you're a front-end web developer interested in expanding your skills to mobile development, this path is for you:Learning Dart and Flutter,Building mobile-friendly web applications using Flutter for the web,Understanding responsive design principles,Integrating web APIs and services,Deploying Flutter web applications.",
  },
  {
    title: "The Cross-Platform Developer Path:",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ3O6qVi6VFkEDOxPqjKsAHcRPacOfyhmIDEEPocKzmvOqY-RUhrDay7ZCAVAT7D7oaTE&usqp=CAU",
    description:
      "If you want to develop for multiple platforms beyond just mobile and web, consider this path:Mastering Dart and Flutter fundamentals, Exploring Flutter's desktop support (Windows, macOS, Linux),Experimenting with Flutter for embedded devices ,Creating cross-platform applications for various devices.",
  },
  {
    title: "The UI/UX Designer Path",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kR9W4a2KR6Mg6uJ_Mxe7e_UVIUeoQtIZfdD7EjSTBYWNFWsa2DT0Obrr0uGpP0C7xp8&usqp=CAU",
    description:
      "If your passion lies in designing user interfaces and experiences, you can specialize in Flutter UI/UX design:Learning Dart basics,Gaining a deep understanding of Flutter widgets and design principles,Creating visually appealing and user-friendly UIs,Collaborating with developers to bring designs to life.",
  },
  {
    title: "The Open-Source Contributor Path:",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymUrbs2H6p32KIMGMRHdLVGRxuLrkUSgJEPbdKnnIBURsnmwezznm6gqXO8nzGm5efO0&usqp=CAU",
    description:
      "If you enjoy contributing to the developer community, consider this path: Learning Dart and Flutter.Identifying open-source Flutter projects to contribute to on platforms like GitHub.Collaborating with other developers on bug fixes, new features, or documentation,Gaining rcognition in the Flutter community",
  },
];

const videoResources = [
  {
    title:
      "Flutter Course for Beginners – 37-hour Cross Platform App Development Tutorial",
    image: "https://img.youtube.com/vi/VPvVD8t02U8/hqdefault.jpg",
    type: "Youtube Video",
    link: "https://www.youtube.com/watch?v=VPvVD8t02U8",
  },
  {
    title: "Master Flutter in 8 Hours 2.0 | Full New Course 2023 | Hindi",
    image: "https://img.youtube.com/vi/jYoALeP3eH8/hqdefault.jpg",
    type: "Youtube Video",
    link: "https://www.youtube.com/watch?v=jYoALeP3eH8",
  },
  {
    title: "Flutter Master Class Travel App",
    image: "https://img.youtube.com/vi/x4DydJKVvQk/hqdefault.jpg",
    type: "Youtube Video",
    link: "https://www.youtube.com/watch?v=x4DydJKVvQk",
  },
  {
    title: "Flutter ToDo App Tutorial for Beginners",
    image: "https://img.youtube.com/vi/K4P5DZ9TRns/hqdefault.jpg",
    type: "Youtube Video",
    link: "https://www.youtube.com/watch?v=K4P5DZ9TRns",
  },
];
