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


const Scikit = () => {
    return (
        <>

            <Section>
                <Container>
                    <section className="py-10 bg-blue sm:py-16 lg:py-12">
                        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                            <div className=" w-full  mx-auto text-center">
                                <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-blue-500 to-blue-800 sm:text-4xl lg:text-5xl">
                                    SCIKIT-LEARN RESOURCES
                                </h2>
                                <p className=" mx-auto mt-4 text-base leading-relaxed text-white-600">
                                    Scikit-learn is a free software machine learning library for the Python programming language. It features a wide range of supervised and unsupervised learning algorithms, as well as tools for data preprocessing, model selection, and evaluation. Scikit-learn is a popular choice for machine learning practitioners because of its simplicity, efficiency, and flexibility.
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
                            Tutorials
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
                    <YoutubeFrame src="https://www.youtube.com/embed/pqNCD_5r0IU" />
                    <YoutubeFrame src=" https://www.youtube.com/embed/videoseries?si=6Y3OEWYckWTyuoIK&amp;list=PLS1QulWo1RIa7ha9SewcZlsTQVwL7n7oq" />
                    <YoutubeFrame src="https://www.youtube.com/embed/0Lt9w-BxKFQ" />
                </div>
            </YtSection>
        </>
    );
};

const ResourceCourse = [
    {
        name: "Scikit-Learn For Machine Learning Classification Problems",
        to: "https://www.coursera.org/projects/scikit-learn-for-machine-learning-classification-problems",
        description: " In this project, we will learn how to build and train classifier models using Scikit-Learn library. Scikit-learn is a free machine learning library developed for python. Scikit-learn offers several algorithms for classification, regression, and clustering.",
        image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/6a/5c2a5b4adf45838d9a1b37386135a9/project-70.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop",
    },
    {
        name: "Machine learning with Scikit-learn",
        description: "Learn the most important machine learning techniques using the best machine learning library available",
        to: "https://www.udemy.com/course/machine-learning-with-scikit-learn/",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRzl3Z-Ck3bbAr6JbZIbwyYGb-z_O7mvoWtGCXR7jUtffOujbPv",
    },
    {
        name: "Supervised Learning with scikit-learn",
        to: "https://www.datacamp.com/courses/supervised-learning-with-scikit-learn",
        description: "Grow your machine learning skills with scikit-learn in Python. Use real-world datasets in this interactive course and learn how to make powerful predictions!",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQUxWTS2y_pPN9rnlNvpvKpuiZJAHUUP1MXrwfG-hi7A0SO24fR",
    },
    {
        name: "scikit-learn tips and tricks",
        to: " https://www.udemy.com/course/scikit-learn-tips-and-tricks/",
        description: "Master Scikit-Learn for Real-World ML",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ96wz2bqECgreOShxILS30xpjPAor3XPIxN7t70C8SkbAxtSIh",
    },


];

const topics = [
    {
        title: "scikit-learn Machine Learning in Python",
        to: "https://scikit-learn.org/stable/getting_started.html"
    },
    {
        title: "Scikit Learn Tutorial By Tutorialspoint",
        to: "https://www.tutorialspoint.com/scikit_learn/index.htm"
    },
    {
        title: "Python SciKit Learn Tutorial",
        to: "  https://www.digitalocean.com/community/tutorials/python-scikit-learn-tutorial"
    },
    {
        title: "Scikit-learn Tutorial - Importing and Exploring",
        to: "  https://intellipaat.com/blog/tutorial/python-tutorial/scikit-learn-tutorial/"
    },
    {
        title: "Scikit-learn Tutorial: Machine Learning in Python",
        to: "https://www.dataquest.io/blog/sci-kit-learn-tutorial/"
    },
    {
        title: "Introduction to Machine Learning in Python with scikit-learn ",
        to: " https://www.dataschool.io/machine-learning-with-scikit-learn/"
    },

];

export default Scikit;