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


const Matplotlib = () => {
    return (
        <>

            <Section>
                <Container>
                    <section className="py-10 bg-blue sm:py-16 lg:py-12">
                        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                            <div className=" w-full  mx-auto text-center">
                                <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-blue-500 to-blue-800 sm:text-4xl lg:text-5xl">
                                    MATPLOTLIB RESOURCES
                                </h2>
                                <p className=" mx-auto mt-4 text-base leading-relaxed text-white-600">
                                    Matplotlib is a comprehensive library for creating static, animated, and interactive visualizations in Python. It provides a wide range of plotting capabilities, including line plots, bar charts, histograms, scatter plots, 3D plots, and more. Matplotlib is also highly customizable, allowing you to create plots that are tailored to your specific needs.
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
                    <YoutubeFrame src="https://www.youtube.com/embed/OZOOLe2imFo" />
                    <YoutubeFrame src=" https://www.youtube.com/embed/3Xc3CA655Y4" />
                    <YoutubeFrame src="https://www.youtube.com/embed/OKJyGzgWP6c" />
                </div>
            </YtSection>
        </>
    );
};

const ResourceCourse = [
    {
        name: "The Complete Matplotlib Course: From Zero to Expert!",
        to: "https://www.udemy.com/course/the-complete-matplotlib-course-from-zero-to-expert/",
        description: "The Foundations of Matplotlib for everyone! Start learning Matplotlib for free and begin your data analysis career!",
        image: "https://t3.gstatic.com/images?q=tbn:ANd9GcRehmEJ9acCzymAsF58cSI7TArjG0jmAoVHiqKFyXqOFKYWB4OA",
    },
    {
        name: "Select Topics in Python: Matplotlib",
        description: "This course is designed for learners with some Python experience, and provides a crash course in Matplotlib. This enables the learners to delve into core data visualization topics that can be transferred to other languages. ",
        to: "https://www.coursera.org/learn/select-topics-in-python-matplotlib",
        image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/dc/4cbc6e2947418baebbe2d972a3630e/SquarePythonSelectTopicsIcon.png?auto=format%2Ccompress&dpr=1&w=&h=&fit=fill",
    },
    {
        name: "Data Visualisation with Python: Matplotlib and Visual Analysis",
        to: "https://www.futurelearn.com/courses/data-visualisation-with-python-matplotlib-and-visual-analysis-sc",
        description: "Discover how to produce visual data analytics and business insights with the powerful Python programming language.",
        image: "https://ugc.futurelearn.com/uploads/images/84/be/84be3d04-3ffc-4e52-b8fc-e635f60c3f86.svg",
    },
    {
        name: "Complete Course on Data Visualization, Matplotlib and Python",
        to: " https://www.udemy.com/course/complete-course-on-data-visualization-matplotlib-and-python/",
        description: "Master Matplotlib Anatomy and Learn Seaborn to Visualize Data with Custom, Beautiful Charts, Suitable for All Purposes ",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdgvVSWb9g6ws6vndJpP5J-mhp7PXI3zhydZvYIGlnn7Eo63yC",
    },


];

const topics = [
    {
        title: "Matplotlib Tutorial By tutorialspoint",
        to: "https://www.tutorialspoint.com/matplotlib/index.htm"
    },
    {
        title: "Matplotlib: Visualization with Python",
        to: "https://matplotlib.org/stable/tutorials/index"
    },
    {
        title: "Introduction to Matplotlib By GeeksforGeeks",
        to: "https://www.geeksforgeeks.org/python-introduction-matplotlib/"
    },
    {
        title: "Matplotlib tutorial for beginners",
        to: "  https://www.kaggle.com/code/prashant111/matplotlib-tutorial-for-beginners"
    },
    {
        title: "Matplotlib Tutorial By W3Schools",
        to: "  https://www.w3schools.com/python/matplotlib_intro.asp"
    },
    {
        title: "Introduction to Plotting with Matplotlib By DataCamp ",
        to: " https://www.datacamp.com/tutorial/matplotlib-tutorial-python"
    },

];

export default Matplotlib;