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


const Python = () => {
  return (
    <>
      
      <Section>
        <Container>
        <section className="py-10 bg-blue sm:py-16 lg:py-12">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-blue-500 to-blue-800 sm:text-4xl lg:text-5xl">
                   PYTHON RESOURCES
                </h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white-600">
                  Explore our valuable resources, including articles, guides,
                  videos, and tools, designed to help you succeed and stay
                  informed.
                </p>
              </div>

              <h2 className="mt-[100px] text-2xl text-center md:text-4xl lg:text-5xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-blue-500 to-blue-800">
                Courses
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


      <h2 className="mt-[100px] text-2xl text-center md:text-4xl lg:text-5xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-blue-500 to-blue-800">
        Coding Platforms
      </h2>         

      <Section>
        <Container>
        <section className="py-10 bg-blue sm:py-16 lg:py-12">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                         
              <div className="grid grid-cols-1 gap-6 mt-14 lg:mt-16 xl:gap-10 md:grid-cols-2 lg:grid-cols-2">
                {ResourcePlatform.map((item) => {
                  return (
                      <a href={item.to}
                        className="overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 shadow-xl shadow-cyan-300 bg-slate-950 rounded text-white p-4"
                        key={item.name}
                      >
                        <div className="text-center text-xl md:text-2xl lg:text-3xl font-semi-bold mb-14 mt-8">
                          {item.name}
                        </div>

                        <div className="program-content flex flex-col md:flex-row">
                          <div className="program-image md:w-[100%] md:pr-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full rounded-md"
                            />
                          </div>
                          
                        </div>
                      </a>
                  );
                })}
              </div>
            </div>
          </section>
        </Container>
      </Section>          
      <h2 className="mt-[100px] text-2xl text-center md:text-4xl lg:text-5xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-blue-500 to-blue-800">
        YouTube Videos
      </h2>

      <YtSection>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center">
          <YoutubeFrame src="https://www.youtube.com/embed/_uQrJ0TkZlc?si=P_xv__6-3BDmAVFK"/>
          <YoutubeFrame src="https://www.youtube.com/embed/XKHEtdqhLK8?si=tBNIGwvO5mUEDDAo" />
          <YoutubeFrame src="https://www.youtube.com/embed/nLRL_NcnK-4?si=UGGeUpkb5lStA_53" />
        </div>
      </YtSection>

    </>
  );
};

const ResourceCourse = [
  {
    name: "The Complete Python Bootcamp From Zero to Hero in Python",
    to:"https://www.udemy.com/course/complete-python-bootcamp/" ,
    
    description:
      "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games. ",
     image: require("./icons/pyudemybc.png"),
  },
  {
    name: "100 Days of Code: The Complete Python Pro Bootcamp for 2023",
    description:
      "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!.",
    to: "https://udemy.com/course/100-days-of-code/",
     image: require("./icons/py100udemy.png"),
  },
  {
    name: "Python for Data Science, AI & Development",
     to: "https://www.coursera.org/learn/python-for-applied-data-science-ai",
    description:
      "Kickstart your learning of Python with this beginner-friendly self-paced course taught by an expert.",
     image: require("./icons/pycourserads.jpeg"),
  },
  {
    name: "Crash Course on Python",
    description:
      "This course is designed to teach you the foundations in order to write simple programs in Python using the most common structures. No previous exposure to programming is needed.",
     to: "https://www.coursera.org/learn/python-crash-course",
    image: require("./icons/pythoncrashcourse.jpeg"),
  },

];




const ResourcePlatform = [
  {
    name: "Leetcode",
    to:"https://leetcode.com/" ,
    image: require("./icons/leetcode.png"),
  },
  {
    name: "Codechef",
    to: "https://www.codechef.com/dashboard",
     image: require("./icons/codechef.jpeg"),
  },
  {
    name: "Codeforces",
     to: "https://codeforces.com/",
     image: require("./icons/codeforces.jpeg"),
  },
  {
    name: "HackerRank",
     to: "https://www.hackerrank.com/",
    image: require("./icons/hackerrank.webp"),
  },

];

export default Python;
