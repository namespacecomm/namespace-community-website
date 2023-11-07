import React from "react";
import { Link } from "react-router-dom";

export default function AIML() {
  return (
    <>
      <div>
        <section className="text-gray-600 body-font text">
          <div className="px-5 py-24 mx-auto flex flex-wrap">
            <h1 className="text-2xl text-center font-bold leading-tight text-white sm:text-2xl lg:text-4xl">
              ARTIFICIAL INTELLIGENCE & MACHINE LEARNING
            </h1>

            <div className="flex flex-wrap w-full">
              <div className="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6">
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
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
                      Explore AI/ML Domains
                    </h2>
                    <p className="leading-relaxed text-white text-justify">
                      Artificial Intelligence and Machine Learning encompass
                      various domains, such as natural language processing,
                      computer vision, and reinforcement learning. Choose a
                      specific area of interest that aligns with your goals and
                      explore its fundamentals.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
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
                      Learn ML Algorithms
                    </h2>
                    <p className="leading-relaxed text-white text-justify">
                      Understanding machine learning algorithms is essential.
                      Study supervised learning, unsupervised learning, and
                      reinforcement learning algorithms. Dive into popular
                      libraries like TensorFlow and PyTorch for hands-on
                      experience.
                    </p>
                  </div>
                </div>
                <div className="flex relative">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
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
                      Build ML Projects
                    </h2>
                    <p className="leading-relaxed text-white text-justify">
                      Hands-on experience is key to mastering AI/ML. Start with
                      small projects, like image classification or sentiment
                      analysis, and gradually work on more complex projects.
                      Learn about data preprocessing, model training, and
                      evaluation.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="lg:w-2/5 md:w-1/2 object-contain object-center rounded-lg md:mt-0 mt-12"
                src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/01/AI-ML-AIM.jpeg"
                alt="AI/ML"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="px-5 py-0 mx-auto">
            <div className="flex flex-col text-left w-full mb-10">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                Explore AI/ML Domains
              </h1>
              <p className="w-full text-left mx-auto leading-relaxed text-base">
                Artificial Intelligence and Machine Learning encompass various
                domains, such as natural language processing, computer vision,
                and reinforcement learning. Choose a specific area of interest
                that aligns with your goals and explore its fundamentals.
              </p>
            </div>
            <div className="flex flex-wrap -m-2">
              {aiMlDomains.map((domain) => (
                <div
                  key={domain.title}
                  className="p-2 lg:w-1/3 md:w-1/2 w-full"
                >
                  <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img
                      alt="domain"
                      className="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4"
                      src={domain.image}
                    />
                    <div className="flex-grow">
                      <Link to={domain.to}>
                        <h2 className="text-white title-font font-bold underline text-xl">
                          {domain.title}
                        </h2>
                      </Link>
                      <p className="text-white">{domain.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="px-5 py-0 mx-auto ">
            <div className="flex flex-col text-left w-full mb-10">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                Different ML Frameworks
              </h1>
              <p className="w-full text-left mx-auto leading-relaxed text-base">
                Explore different machine learning frameworks that are widely
                used in the field. Each framework has its own strengths and
                capabilities for various ML tasks.
              </p>
            </div>
            <div className="flex flex-wrap -m-2">
              {mlFrameworks.map((framework) => (
                <div
                  key={framework.title}
                  className="p-2 lg:w-1/3 md:w-1/2 w-full"
                >
                  <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img
                      alt="framework"
                      className="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4"
                      src={framework.image}
                    />
                    <div className="flex-grow">
                      <Link to={framework.to}>
                        <h2 className="text-white title-font font-bold underline text-xl">
                          {framework.title}
                        </h2>
                      </Link>
                      <p className="text-white">{framework.description}</p>
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
}

const aiMlDomains = [
    {
        title: "Natural Language Processing",
        image: "https://e7.pngegg.com/pngimages/183/226/png-clipart-artificial-intelligence-deep-learning-machine-learning-chatbot-natural-language-processing-others-miscellaneous-text.png",
        description: "Natural Language Processing (NLP) involves the interaction between computers and human language. Explore tasks like sentiment analysis, language generation, and chatbots.",
        to: "/nlp",
    },
    {
        title: "Computer Vision",
        image: "https://media.istockphoto.com/id/1159595208/vector/computer-vision-icon-simple-element-illustration.jpg?s=612x612&w=0&k=20&c=LsOon1dLqDngBmMYa1XhBTp3V_4NzIf7_eyfhnE38hc=",
        description: "Computer Vision focuses on teaching machines to interpret and understand the visual world. Dive into image recognition, object detection, and facial recognition.",
        to: "/computer-vision",
    },
    {
        title: "Reinforcement Learning",
        image: "https://e7.pngegg.com/pngimages/923/684/png-clipart-chatbot-artificial-intelligence-technology-machine-learning-technology-electronics-logo.png",
        description: "Reinforcement Learning is about training agents to make sequences of decisions by rewarding them for desired behaviors. Explore applications in gaming and robotics.",
        to: "/RL",
    },
    {
        title: "Deep Learning",
        image: "https://miro.medium.com/v2/resize:fit:555/1*gMzDDP1bjMYrzVBBml8Vnw.png",
        description: "Deep Learning is a subset of machine learning involving neural networks with many layers. Study neural architectures, backpropagation, and applications like image recognition.",
        to: "/DL",
    },
    
];

const mlFrameworks = [
  {
    title: "TensorFlow",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png",
    description:
      "TensorFlow is an open-source machine learning framework developed by Google. It's known for its flexibility and scalability, making it suitable for a wide range of ML tasks.",
    to: "/tensorflow",
  },
  {
    title: "PyTorch",
    image:
      "https://www.pngitem.com/pimgs/m/31-310639_pytorch-logo-png-transparent-png.png",
    description:
      "PyTorch is an open-source deep learning framework developed by Facebook's AI Research lab. It's popular for its dynamic computation graph and is widely used in research and industry.",
    to: "/pytorch",
  },
  {
    title: "Scikit-Learn",
    image:
      "https://vectorseek.com/wp-content/uploads/2023/02/Scikit-learn-Logo-Vector.jpg",
    description:
      "Scikit-Learn is a simple and efficient tool for data analysis and modeling. It provides easy-to-use interfaces for various ML algorithms and is suitable for beginners.",
    to: "/scikit-learn",
  },
  {
    title: "Keras",
    image: "https://w7.pngwing.com/pngs/571/118/png-transparent-keras-logo.png",
    description:
      "Keras is an open-source deep learning library that acts as an interface for TensorFlow, Theano, and CNTK. It's known for its user-friendly and high-level API.",
    to: "/keras",
  },
  {
    title: "Pandas",
    image: "https://pandas.pydata.org/static/img/pandas_mark.svg",
    description:
      "Pandas is an open-source data manipulation library for Python. It provides data structures and functions for working with structured data, making it essential for data preprocessing in ML.",
    to: "/pandas",
  },
  {
    title: "NumPy",
    image:
      "https://user-images.githubusercontent.com/50221806/86498201-a8bd8680-bd39-11ea-9d08-66b610a8dc01.png",
    description:
      "NumPy is a fundamental package for scientific computing with Python. It provides support for large, multi-dimensional arrays and matrices, along with mathematical functions.",
    to: "/numpy",
  },
  {
    title: "Matplotlib",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Created_with_Matplotlib-logo.svg/2048px-Created_with_Matplotlib-logo.svg.png",
    description:
      "Matplotlib is a popular Python library for creating static, animated, and interactive visualizations in data analysis and machine learning projects.",
    to: "/matplotlib",
  },
];
