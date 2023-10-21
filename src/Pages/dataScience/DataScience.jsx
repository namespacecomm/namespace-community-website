import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.div`
  display: flex;
  flex-direction: center;
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
    "" /* background-repeat: no-repeat;
    background: no-repeat url("./img/bg.jpg"); */
  }
`;

const Container = styled.div`
  scroll-snap-align: center;
  width: 1400px;
  @media only screen and (max-width: 768px) {
    width: 90vw;
    overflow-y: scroll;
    flex-direction: column;

    justify-content: space-between;
  }
`;

export const DataScience = () => {
  return (
    <>
      <Section>
        <Container>
          <br />
          <h1 className="text-3xl text-center font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Data Science
          </h1>

          <div className="bg-transparent shadow-md rounded-lg overflow-hidden mx-4 sm:mx-8 md:mx-16 lg:mx-20 my-8">
            <div className="md:flex">
              {/* Left Side (Image) */}
              <div className="md:w-1/2">
                <img
                  src="https://cdn1.expresscomputer.in/wp-content/uploads/2022/11/21123050/EC_Data_Science_Technology_750.jpg"
                  className="w-full h-auto object-cover"
                  alt=""
                />
              </div>

              {/* Right Side (Content) */}
              <div className="md:w-1/2 p-4">
                <h2 className="text-xl font-semibold mb-2">Data Science</h2>
                <p className="text-white-700">
                  Data Science is a multidisciplinary field that combines
                  techniques from statistics, mathematics, and computer science
                  to extract meaningful insights and knowledge from large and
                  complex datasets. It involves the use of various tools and
                  algorithms to analyze, visualize, and interpret data, making
                  it an essential driver of informed decision-making in numerous
                  industries. Data Scientists play a crucial role in identifying
                  trends, predicting future outcomes, and solving complex
                  problems by leveraging data-driven approaches. Their work
                  encompasses tasks such as data collection, cleaning, modeling,
                  and the development of machine learning models. As data
                  continues to grow in volume and importance, the field of Data
                  Science remains at the forefront of innovation, driving
                  advancements in technology, business, and research.
                </p>

                <div className="mt-4">
                  <a
                    href="/dataScience"
                    className="text-blue-500 hover:text-blue-700 underline"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <br />
          <h1 className="text-3xl text-center font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            RoadMap
          </h1>
          <br />

          <div className="flex flex-col md:flex-row">
            {/* Left side - Roadmap */}
            <div className="md:w-1/2 p-4 m-10 mt-auto">
              <div className="relative">
                {/* Vertical Line */}
                {/* <div className="absolute top-0 left-1/2 w-1 h-full bg-gray-300 transform -translate-x-1/2 hidden md:block" /> */}

                {/* Stage 1 */}
                <div className="flex items-center mb-10">
                  <div className="w-28 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center">
                    <i className="fas fa-clipboard-list text-3xl"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">
                      Problem Definition
                    </h3>
                    <p className="text-slate-400">
                      Begin by clearly defining the problem you want to solve or
                      the question you want to answer. Understand the objectives
                      and goals of your analysis.
                    </p>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="flex items-center mb-10">
                  <div className="w-28 h-12 rounded-full bg-green-500 text-white flex items-center justify-center">
                    <i className="fas fa-database text-3xl"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">
                      Data Collection and Preparation
                    </h3>
                    <p className="text-slate-400">
                      Collect relevant data from various sources and preprocess
                      it. Data cleaning, transformation, and feature engineering
                      are essential steps to make the data ready for analysis.
                    </p>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="flex items-center mb-10">
                  <div className="w-28 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center">
                    <i className="fas fa-chart-bar text-3xl"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">
                      Exploratory Data Analysis (EDA)
                    </h3>
                    <p className="text-slate-400">
                      Explore the data to gain insights, identify patterns, and
                      understand its characteristics. Visualization and
                      statistical techniques are often used in this stage to
                      uncover trends and relationships.
                    </p>
                  </div>
                </div>

                {/* Stage 4 */}
                <div className="flex items-center mb-10">
                  <div className="w-28 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center">
                    <i className="fas fa-flask text-3xl"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Modeling</h3>
                    <p className="text-slate-400">
                      Build predictive or descriptive models depending on the
                      problem. Select appropriate algorithms, train and evaluate
                      models, and fine-tune their parameters.
                    </p>
                  </div>
                </div>

                {/* Stage 5 */}
                <div className="flex items-center mb-10">
                  <div className="w-28 h-12 rounded-full bg-red-500 text-white flex items-center justify-center">
                    <i className="fas fa-check text-3xl"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">
                      Evaluation and Deployment
                    </h3>
                    <p className="text-slate-400">
                      Assess the performance of your models using appropriate
                      metrics. If the model meets the desired criteria, deploy
                      it to make predictions or generate insights. If not,
                      refine the model or revisit earlier stages.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="md:w-1/2 p-4 mt-4">
              <img
                src="https://static.vecteezy.com/system/resources/previews/004/578/651/non_2x/cloud-data-analysis-and-server-investment-free-vector.jpg"
                className="w-full h-auto"
                alt=""
              />
            </div>
          </div>
          <section>
          <div className="px-5 py-0 mx-auto">
            <div className="flex flex-col text-left w-full mb-10">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                Explore Data Science Domains
              </h1>
              <p className="w-full text-left mx-auto leading-relaxed text-base">
              The must-haves of Data Science and its pathway. 
              </p>
            </div>
            <div className="flex flex-wrap -m-2">
              {dataScienceDomains.map((domain) => (
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
        </Container>
      </Section>
    </>
  );
};
const dataScienceDomains = [
  {
      title: "Mathematics",
      image: "data:image/png;base64,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",
      description: "Linear Algebra, Multivariable Calculus & Optimization Technique: These three things are very important as they help us in understanding various machine learning algorithms that play an important role in Data Science.",
      to: "/dataScience/mathematics",
  },
  {
      title: "Statistics",
      image: "data:image/png;base64,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",
      description: " Understanding of Statistics is very significant as this is a part of Data analysis. Probability is also significant to statistics and it is considered a prerequisite for mastering machine learning.",
      to: "/dataScience/statistics",
  },
  {
      title: "Econometrics",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBmkme8biHffDmzkN_u1mEp9lKfUjquXqZyQ&usqp=CAU",
      description: "Econometrics uses statistics to analyze economic and financial data. It's vital in data science for modeling and forecasting. Learn econometric software like R and Python, and consider economic theories and data sources. Useful for time series data and financial analysis.",
      to: "/dataScience/econometrics",
  },
  {
      title: "Deep Learning",
      image: "https://miro.medium.com/v2/resize:fit:555/1*gMzDDP1bjMYrzVBBml8Vnw.png",
      description: "Deep Learning is a subset of machine learning involving neural networks with many layers. Study neural architectures, backpropagation, and applications like image recognition.",
      to: "/dataScience/deeplearning",
  },
  {
    title: "python",
    image: "https://media.istockphoto.com/id/1159595208/vector/computer-vision-icon-simple-element-illustration.jpg?s=612x612&w=0&k=20&c=LsOon1dLqDngBmMYa1XhBTp3V_4NzIf7_eyfhnE38hc=",
    description: "In data science, Python is versatile, used for data engineering, machine learning, and visualization, with libraries like Pandas and Matplotlib. R is explicitly for statistics and visualization. SQL is for databases, often learned after Python or R.",
    to: "/pyresource",
},
{
  title: "MLOps",
  image: "data:image/png;base64,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",
  description: "MLOps automates machine learning model deployment in production. It blends DevOps and ML for efficient development, testing, and monitoring. MLOps streamlines ML research to real-world applications, fostering collaboration between data scientists and operations teams.",
  to: "/mlops",
},
{
  title: "R (Programming Lanuage)",
  image: "https://4.bp.blogspot.com/-EvdzIrpMBTg/WWUnDC97QcI/AAAAAAAAFjA/AG3K09V1_iAVbghf97vP0bmtd_kF6knEACLcBGAs/s1600/Top%2B10%2Bbest%2BProgramming%2Bvideo%2Btutorials.png",
  description: "A solid grasp of probability theory is essential when working with R, especially in the context of machine learning. Probability serves as the foundational framework for many statistical and machine learning algorithms in R, making it a fundamental concept to grasp for anyone looking to excel in data analysis and predictive modeling with this programming language.",
  to: "/Statistics",
},
];



export default DataScience;
