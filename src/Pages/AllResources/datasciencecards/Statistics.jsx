import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: justify-center;
  align-items: center;
  justify-content: space-between;
  background-color: #010116;
`;
const Container = styled.div`
  scroll-snap-align: center;
  width: 100%;
  padding-top: 100px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
`;
const ProgramDescription = styled.div`
  @media only screen and (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const YtSection = styled.div`
  height: 100%;
  background-color: #010116;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2rem 0;
`;

const YoutubeFrame = styled.iframe`
  width: 30vw;
  height: 350px;

  @media only screen and (max-width: 768px) {
    width: 90vw;
    height: 250px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;


const Statistics = () => {
    return (
        <>

            <Section>
                <Container>
                    <section className="py-10 bg-blue sm:py-16 lg:py-12">
                        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                            <div className=" w-full  mx-auto text-center">
                                <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-blue-500 to-blue-800 sm:text-4xl lg:text-5xl">
                                    STATISTICS & PROBABILITY RESOURCES
                                </h2>
                                <p className=" mx-auto mt-4 text-base leading-relaxed text-white-600">
                                    Statistics is the study of collecting, analyzing, interpreting, and
                                    presenting data. Probability is the study of chance and uncertainty,
                                    a fundamental branch of mathematics used in various fields.
                                </p>
                            </div>

                            <h2 className="mt-[100px] text-2xl text-center md:text-4xl lg:text-5xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-blue-500 to-blue-800">
                                Online Courses
                            </h2>

                            <div className="grid grid-cols-1 gap-6 mt-14 lg:mt-16 xl:gap-10 md:grid-cols-2 lg:grid-cols-2">
                                {ResourceCourse.map((item) => {
                                    return (
                                        <a href={item.to}
                                            className="overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 shadow-xl shadow-cyan-300 bg-slate-950 rounded text-white p-4"
                                            key={item.name}
                                        >
                                            <div className="text-center text-xl md:text-2xl lg:text-3xl font-semi-bold mb-14 mt-8">
                                                {item.name}
                                            </div>

                                            <div className="program-content flex flex-col md:flex-row">
                                                <div className="program-image md:w-3/6 md:pr-4">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full rounded-md"
                                                    />
                                                </div>
                                                <ProgramDescription className="program-description flex items-center border-2 border-slate-600 rounded-md p-4 md:w-full md:h-auto md:text-sm lg:text-xl xl:text-base text-neutral-400">
                                                    <p>{item.description}</p>
                                                </ProgramDescription>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                </Container>
            </Section>
            <section className="text-white body-font">
                <div className="px-0 py-14 mx-auto">
                    <div className="flex flex-col text-left w-full mb-2">
                        <h2 className="mt-[100px] text-2xl text-center md:text-4xl lg:text-5xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-blue-500 to-blue-800">
                            Documentation
                        </h2>
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 m-4">
                        {topics.map((tools) => {
                            return (
                                <a href={tools.to}>
                                    <div
                                        className="lg:w-full bg-black/20 p-4 rounded-xl hover:scale-[102%] transition-all duration-200 ease-in-out border-gray-200 border p-4"
                                    >
                                        <div className="text-left flex-grow sm:pl-8">
                                            <h2 className="title-font font-medium text-xl pb-1 text-white underline underline-offset-2">
                                                {tools.title}
                                            </h2>
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>

            </section>


            <h2 className="mt-[100px] text-2xl text-center md:text-4xl lg:text-5xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-blue-500 to-blue-800">
                YouTube Videos
            </h2>

            <YtSection>
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center">
                    <YoutubeFrame src="https://www.youtube.com/embed/XcLO4f1i4Yo" />
                    <YoutubeFrame src=" https://www.youtube.com/embed/xxpc-HPKN28" />
                    <YoutubeFrame src="https://www.youtube.com/embed/LZzq1zSL1bs" />
                </div>
            </YtSection>
        </>
    );
};

const ResourceCourse = [
    {
        name: "Introduction to Statistics for Data Science using Python",
        to: "https://www.edx.org/learn/computer-programming/ibm-introduction-to-statistics-for-data-science-using-python",
        description:"This Statistics for Data Science course is designed to introduce you to the basic principles of statistical methods and procedures used for data analysis.",
        image: "https://prod-discovery.edx-cdn.org/media/course/image/ae9667ef-a636-465c-a342-25492f42a954-2637e57d564b.small.png",
    },
    {
        name: "Introduction To Probability And Statistics",
        description:"This course provides an elementary introduction to probability and statistics with applications. Topics include: basic combinatorics, random variables, probability distributions, Bayesian inference, hypothesis testing, confidence intervals, and linear regression.",
        to: "https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/",
        image: "https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/c16c76a278bc037b6226b880e87201b4_18-05s14.jpg",
    },
    {
        name: "Probability & Statistics for Machine Learning & Data Science",
        to: "https://www.coursera.org/learn/machine-learning-probability-and-statistics",
        description:"This course is part of Mathematics for Machine Learning and Data Science Specialization",
        image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/46/8e9dd9c487408b8729acb7ec3719c7/Prob-DL_Square_Banner_Coursera_800x800.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&fit=crop&q=50",
    },
    {
        name: "Probability and Statistics in Data Science using Python",
        to: " https://www.edx.org/learn/statistics/the-university-of-california-san-diego-probability-and-statistics-in-data-science-using-python",
        description:"Using Python, learn statistical and probabilistic approaches to understand and gain insights from data.",
        image: "https://prod-discovery.edx-cdn.org/media/course/image/2102f79d-9a44-41e9-9d92-884bec46dc65-c659c737cb7c.small.jpg",
    },


];

const topics = [
    {
        title: "SciPy Documentation",
        to: "https://docs.scipy.org/doc/scipy/reference/",
    },
    {
        title: "NumPy Documentation",
        to: "https://numpy.org/doc/stable/",
    },
    {
        title: "Pandas Documentation",
        to: "https://pandas.pydata.org/docs/"
    },

];

export default Statistics;
