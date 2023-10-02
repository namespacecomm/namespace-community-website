import React  from 'react';
import styled from "styled-components";

import Navbar from '../../components/Navbar/Navbar';

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

const DataScience = () => {
  return (
    <>
    <Section>
      <Container>
     
      <Navbar />

      <br />
      <h1 className="text-3xl text-center font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
        Data Science
      </h1>

      <div className="bg-white shadow-md rounded-lg overflow-hidden mx-4 sm:mx-8 md:mx-16 lg:mx-20 my-8">
        <div className="md:flex">
          {/* Left Side (Image) */}
          <div className="md:w-1/2">
            <img
              src="https://cdn1.expresscomputer.in/wp-content/uploads/2022/11/21123050/EC_Data_Science_Technology_750.jpg"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Side (Content) */}
          <div className="md:w-1/2 p-4">
            <h2 className="text-xl font-semibold mb-2">Data Science</h2>
            <p className="text-gray-700">
              Data Science is a multidisciplinary field that combines
              techniques from statistics, mathematics, and computer science to
              extract meaningful insights and knowledge from large and complex
              datasets. It involves the use of various tools and algorithms to
              analyze, visualize, and interpret data, making it an essential
              driver of informed decision-making in numerous industries. Data
              Scientists play a crucial role in identifying trends, predicting
              future outcomes, and solving complex problems by leveraging
              data-driven approaches. Their work encompasses tasks such as data
              collection, cleaning, modeling, and the development of machine
              learning models. As data continues to grow in volume and
              importance, the field of Data Science remains at the forefront of
              innovation, driving advancements in technology, business, and
              research.
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
                <h3 className="text-lg font-semibold">Problem Definition</h3>
                <p className="text-gray-700">
                  Begin by clearly defining the problem you want to solve or the
                  question you want to answer. Understand the objectives and
                  goals of your analysis.
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
                <p className="text-gray-700">
                  Collect relevant data from various sources and preprocess it.
                  Data cleaning, transformation, and feature engineering are
                  essential steps to make the data ready for analysis.
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
                <p className="text-gray-700">
                  Explore the data to gain insights, identify patterns, and
                  understand its characteristics. Visualization and statistical
                  techniques are often used in this stage to uncover trends and
                  relationships.
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
                <p className="text-gray-700">
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
                <p className="text-gray-700">
                  Assess the performance of your models using appropriate
                  metrics. If the model meets the desired criteria, deploy it to
                  make predictions or generate insights. If not, refine the
                  model or revisit earlier stages.
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
          />
        </div>
      </div>
         
      </Container>
    </Section>
    </>
  );
};

export default DataScience;
