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


const Pandas = () => {
    return (
        <>

            <Section>
                <Container>
                    <section className="py-10 bg-blue sm:py-16 lg:py-12">
                        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                            <div className=" w-full  mx-auto text-center">
                                <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-blue-500 to-blue-800 sm:text-4xl lg:text-5xl">
                                    PANDAS RESOURCES
                                </h2>
                                <p className=" mx-auto mt-4 text-base leading-relaxed text-white-600">

                                    Pandas is a Python library used for data analysis and manipulation which provides high-performance, easy-to-use data structures and data analysis tools.
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
                    <YoutubeFrame src="https://www.youtube.com/embed/CmorAWRsCAw?list=PLeo1K3hjS3uuASpe-1LjfG5f14Bnozjwy" />
                    <YoutubeFrame src=" https://www.youtube.com/embed/gtjxAH8uaP0" />
                    <YoutubeFrame src="https://www.youtube.com/embed/UB3DE5Bgfx4" />
                </div>
            </YtSection>
        </>
    );
};

const ResourceCourse = [
    {
        name: "Data Manipulation in Python: A Pandas Crash Course",
        to: "https://www.udemy.com/course/data-manipulation-in-python/",
        description: "Learn how to use Python and Pandas for data analysis and data manipulation. Transform, clean and merge data with Python.",
        image: "https://img-b.udemycdn.com/course/480x270/2860646_37eb_2.jpg",
    },
    {
        name: "The Complete Pandas Bootcamp 2023: Data Science with Python",
        description: "Pandas fully explained | 150+ Exercises | Must-have skills for Machine Learning & Finance | + Scikit-Learn and Seaborn",
        to: "https://www.udemy.com/course/the-pandas-bootcamp/",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQHzsXrBr3z5DlTb5c8mq7e-t89iZSgv3KQ0KEZx52f8XtP0Yxf",
    },
    {
        name: "Python for Data Analysis: Pandas & NumPy",
        to: "https://www.coursera.org/projects/python-for-data-analysis-numpy",
        description: "In this hands-on project, we will understand the fundamentals of data analysis in Python and we will leverage the power of two important python libraries known as Numpy and pandas.",
        image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/a3/b4bf1c1b574171b82d7bd553043854/python-101.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop",
    },
    {
        name: "Mastering Data Analysis with Pandas",
        to: " https://www.coursera.org/projects/learning-path-data-analysis-with-pandas",
        description: "In this structured series of hands-on guided projects, we will master the fundamentals of data analysis and manipulation with Pandas and Python. Pandas is a super powerful, fast, flexible and easy to use open-source data analysis and manipulation tool. ",
        image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/2a/2532b5c3d443789eee2b2342d0b109/page2.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop",
    },


];

const topics = [
    {
        title: "Pandas Documentation",
        to: "https://pandas.pydata.org/docs/"
    },
    {
        title: "Pandas Tutorial By GeeksforGeeks",
        to: "//www.geeksforgeeks.org/pandas-tutorial/"
    },
    {
        title: "Python pandas tutorial: The ultimate guide for beginners",
        to: "https://www.datacamp.com/tutorial/pandas"
    },
    {
        title: "Python Pandas Tutorial By Tutorialspoint",
        to: " https://www.tutorialspoint.com/python_pandas/index.htm"
    },
    {
        title: "Pandas Tutorial By W3Schools",
        to: "  https://www.w3schools.com/python/pandas/default.asp"
    },
    {
        title: "Python Pandas Tutorial By Javatpoint",
        to: "  https://www.javatpoint.com/python-pandas"
    },

];

export default Pandas;
