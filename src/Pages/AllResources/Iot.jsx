import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

export default function ARVR() {
  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font text">
        <div className="px-5 py-24 mx-auto flex flex-wrap">
          <h1 className="text-2xl text-center font-bold leading-tight text-white sm:text-2xl lg:text-4xl">
            Internet of Things
          </h1>

          <div className="flex flex-wrap w-full">
            <div className="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>

                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                  </svg>
                </div>

                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                    Explore IoT Technogielos
                  </h2>
                  <p className="leading-relaxed text-white text-justify">
                    Start by gaining a comprehensive understanding of IoT and
                    its core concepts. Learn what IoT is, its components, and
                    how it's transforming various industries. Explore the
                    hardware and software aspects of IoT.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 18v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1m18-2H3a2 2 0 00-2 2v4a2 2 0 002 2h18a2 2 0 002-2v-4a2 2 0 00-2-2zM6 12v-2a2 2 0 012-2h8a2 2 0 012 2v2"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                    Experiment with Sensors and Actuators
                  </h2>
                  <p className="leading-relaxed text-white text-justify">
                    Start working with sensors (e.g., temperature sensors,
                    motion detectors), actuators (e.g., motors, relays), and
                    other electronic components. Learn how to interface these
                    components with IoT hardware.
                  </p>
                </div>
              </div>
              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-xl text-white mb-1 tracking-wider">
                    Build IoT Projects
                  </h2>
                  <p className="leading-relaxed text-white text-justify">
                    Practical experience is crucial in IoT learning. Start
                    building small IoT projects that involve sensors, data
                    collection, communication, and data processing. Projects
                    could include smart home automation, weather stations, or
                    simple IoT gadgets.
                  </p>
                </div>
              </div>
            </div>
            <img
              className="lg:w-2/5 md:w-1/2 object-contain object-center rounded-lg md:mt-0 mt-12"
              src="https://blog.hyperiondev.com/wp-content/uploads/2019/02/Blog-Become-VR-Developer.jpg"
              alt="AR/VR Development"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="px-5 py-0 mx-auto">
          <div className="flex flex-col text-left w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Select an IoT development pathway
            </h1>
            <p className="w-full text-left mx-auto leading-relaxed text-base">
              Choosing an IoT development pathway is a pivotal step in your
              journey to becoming proficient in Internet of Things (IoT)
              technologies.
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {iotdevPathway.map((path) => (
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
    </>
  );
}

const iotdevPathway = [
  {
    title: "IoT Hardware Development",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTzQ5SS2GnVr559TH4ZNEYmkgp-IRqHNqwBQ&usqp=CAU",
    description:
      "Learn to design and build IoT devices with sensor-equipped components, microcontroller programming, and hardware prototyping. Select the right sensors, actuators, and communication modules for specific IoT applications.",
    to: "/iothd",
  },
  {
    title: "IoT Software Development",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/VR_Logo_Virtual_Reality_Logo.svg/512px-VR_Logo_Virtual_Reality_Logo.svg.png",
    description:
      "Develop IoT applications, implement communication protocols, and work with IoT operating systems using languages such as Python, C/C++, or JavaScript.",
    to: "/iotsd",
  },
  {
    title: "IoT Data Analytics and Cloud Integration",
    image:
      "https://store-images.s-microsoft.com/image/apps.30079.13588442905826814.67f42e38-aee2-4a56-a78c-4c4a6d6b7b94.569f01eb-2590-4d84-9106-85e2c17110ce",
    description:
      "Learn how to effectively manage IoT data with AWS IoT, Azure IoT, or Google Cloud IoT. Enhance your skills in edge computing and real-time processing.",
    to: "/iotdaci",
  },
  {
    title: "IoT Applications and Industry Specialization",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS265x0TaRrles_hFc4yGkDtgwpc8TnXZz42Qpt-nPM-Y3TUsH1Oa-XNecfrUSzDENc4HY&usqp=CAU",
    description:
      "IoT has many applications in different industries. Choose a specialty like smart homes, healthcare, agriculture, industrial automation, or smart cities. Develop IoT solutions that meet specific needs.",
    to: "/iotappindus",
  },
];
