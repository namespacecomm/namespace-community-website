import React from "react";
import { Link } from "react-router-dom";

export default function ARVR() {
  return (
    <>
      <section className="text-gray-600 body-font text">
        <div className="px-5 py-24 mx-auto flex flex-wrap">
          <h1 className="text-2xl text-center font-bold leading-tight text-white sm:text-2xl lg:text-4xl">
            AR/VR DEVELOPMENT
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
                    Explore AR/VR Technologies
                  </h2>
                  <p className="leading-relaxed text-white text-justify">
                    AR (Augmented Reality) and VR (Virtual Reality) technologies
                    are reshaping how we interact with digital experiences. Dive
                    into the world of AR/VR to understand their applications,
                    tools, and possibilities.
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
                    Develop AR/VR Applications
                  </h2>
                  <p className="leading-relaxed text-white text-justify">
                    Hands-on experience is key to becoming proficient in AR/VR
                    development. Start by building simple AR/VR projects to
                    practice your skills. As you gain expertise, you can work on
                    more complex immersive applications and explore innovative
                    use cases.
                  </p>
                </div>
              </div>
              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10">
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
                    Stay Updated with AR/VR Trends
                  </h2>
                  <p className="leading-relaxed text-white text-justify">
                    The field of AR/VR is rapidly evolving. Keep yourself
                    informed about the latest trends, tools, and best practices
                    in AR/VR development to create cutting-edge and immersive
                    experiences.
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
              Choose an AR/VR Development Path
            </h1>
            <p className="w-full text-left mx-auto leading-relaxed text-base">
              AR/VR development offers various paths to explore immersive
              technologies and create captivating experiences. Choose the one
              that aligns with your interests and goals. Here are some popular
              options:
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {arvrDevelopmentPaths.map((item) => (
              <div key={item.title} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt={item.title}
                    className="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4"
                    src={item.image}
                  />
                  <div className="flex-grow">
                    <Link to={item.endpoint}>
                      <h2 className="text-white title-font font-bold underline text-xl">
                        {item.title}
                      </h2>
                    </Link>
                    <p className="text-white">{item.description}</p>
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

const arvrDevelopmentPaths = [
  {
    title: "Augmented Reality (AR)",
    image: "https://cdn-icons-png.flaticon.com/512/4647/4647093.png",
    description:
      "Augmented Reality (AR) development involves overlaying digital information or objects onto the real world. Explore AR development to create interactive and informative experiences.",
    endpoint: "augmented-reality"
  },
  {
    title: "Virtual Reality (VR)",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/VR_Logo_Virtual_Reality_Logo.svg/512px-VR_Logo_Virtual_Reality_Logo.svg.png",
    description:
      "Virtual Reality (VR) development focuses on creating immersive, computer-generated environments. Dive into VR development to build captivating virtual worlds and experiences.",
    endpoint: "virtual-reality"
  },
  {
    title: "Mixed Reality (MR)",
    image:
      "https://store-images.s-microsoft.com/image/apps.30079.13588442905826814.67f42e38-aee2-4a56-a78c-4c4a6d6b7b94.569f01eb-2590-4d84-9106-85e2c17110ce",
    description:
      "Mixed Reality (MR) combines elements of both AR and VR, allowing digital and physical objects to interact. Learn MR development to create hybrid experiences.",
    endpoint: "mixed-reality"
  },
  {
    title: "Unity 3D",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS265x0TaRrles_hFc4yGkDtgwpc8TnXZz42Qpt-nPM-Y3TUsH1Oa-XNecfrUSzDENc4HY&usqp=CAU",
    description:
      "Unity 3D is a popular game engine used for AR and VR development. Explore Unity to build interactive and realistic 3D experiences for various platforms.",
    endpoint: "unity3d"
  },
  {
    title: "WebXR",
    image: "https://immersiveweb.dev/images/webxrlogo.png",
    description:
      "WebXR enables AR and VR experiences in web browsers. Dive into WebXR development to create web-based AR/VR applications that are accessible to a wide audience.",
    endpoint: "webXR"
  },
];
