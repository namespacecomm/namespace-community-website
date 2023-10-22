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


const MLOps = () => {
  return (
    <>
      
      <Section>
        <Container>
        <section className="py-10 bg-blue sm:py-16 lg:py-12">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-blue-100 to-blue-800 sm:text-4xl lg:text-5xl">
                   MLOPS RESOURCES
                </h2>
                <p className=" mb-8  mx-auto mt-4  text-xl leading-relaxed text-white-600">
                MLOps (Machine Learning Operations) is a set of practices and tools that combine machine learning
                 (ML) and DevOps (Development and Operations) principles to automate and streamline the end-to-end ML
                  lifecycle, from data preparation and model development to deployment and monitoring. Here are some
                   valuable resources to help you get started with MLOps:
                </p>
              </div>

              <h2 className="mt-[100px] text-2xl text-center md:text-4xl lg:text-5xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-violet-100 to-violet-800">
                Courses
              </h2>

              <div className="grid grid-cols-1 gap-6 mt-14 lg:mt-16 xl:gap-10 md:grid-cols-2 lg:grid-cols-2">
                {ResourceCourses.map((item) => {
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


      <h2 className="mt-[100px] text-2xl text-center md:text-4xl lg:text-5xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-violet-100 to-violet-800">
        Books
      </h2>         

      <Section>
        <Container>
        <section className="py-10 bg-blue sm:py-16 lg:py-12">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                         
              <div className="grid grid-cols-1 gap-6 mt-14 lg:mt-16 xl:gap-10 md:grid-cols-2 lg:grid-cols-2">
                {ResourceBooks.map((item) => {
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
      <h2 className="mt-[100px] text-2xl text-center md:text-4xl lg:text-5xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-red-50 to-red-950">
        YouTube Videos
      </h2>

      <YtSection>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center">
          <YoutubeFrame src="https://www.youtube.com/embed/0Z0vZU6cMKY?si=7sHS0SNXpA0SFKVF"/>
          <YoutubeFrame src="https://www.youtube.com/embed/pmAnPdyKCDc?si=1qj7zDmb2gHcVcOn" />
          <YoutubeFrame src="https://www.youtube.com/embed/dPmH3G9NQtY?si=H4Qd9b93_jik41Ve" />
        </div>
      </YtSection>

      <h2 className="mt-[100px] mb-10 text-2xl text-center md:text-4xl lg:text-5xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-yellow-100 to-yellow-800">
                Others Resources
              </h2>

      <ul className="flex flex-wrap m-2">
                {topics.map((item) => {
                  return (
                    <a href={item.to}>
                    <li className="p-2 lg:w-max md:w-1/2" key={item.title}>
                      
                      <div className="h-full flex items-center border-gray-200 border px-4 py-2 rounded-lg hover:scale-105 transition-all">
                      <div className="flex items-center gap-3">
                        <label
                          htmlFor={item.storage}
                          className="text-white title-font font-bold text-xl cursor-pointer"
                        >
                          {item.title}
                        </label>
                        
                      </div>
                    </div>

                    
                      </li>
                      </a>
                  );
                })}
              </ul>
    </>
  );
};

const ResourceBooks = [
  {
    name: "Introducing MLOps",
     to:"https://www.google.co.in/books/edition/Introducing_MLOps/fR64zQEACAAJ?hl=en" ,
    
    description:
      "By Mark Treveil, Nicolas Omont, Clément Stenac, Kenji Lefevre, Du Phan, Joachim Zentici, Adrien Lavoillotte, Lynn Heidmann, Makoto Miyazaki",
      image: require("./icons/IntroducingMLOps.jpg"),
  },
  {
    name: "Practical MLOps",
    description:
      "By Noah Gift, Alfredo Deza",
    to: "https://www.google.co.in/books/edition/Practical_MLOps/Su9IzgEACAAJ?hl=en",
     image: require("./icons/PracticalMLOps.jpg"),
  },
 

];




const ResourceCourses = [
  {
    name: "Complete MLOps Bootcamp | From Zero to Hero in Python 2022",
    description:"If you're looking for a comprehensive, hands-on, and project-based guide to learning MLOps (Machine Learning Operations), you've come to the right place.",
    to:"https://www.udemy.com/course/complete-mlops-bootcamp-from-zero-to-hero-in-python-2022/" ,
     image: require("./icons/udemymlops.jpg"),
  },
  {
    name: "Machine Learning Operations (MLOps): Getting Started",
    description:"This course introduces participants to MLOps tools and best practices for deploying, evaluating, monitoring and operating production ML systems on Google Cloud.",
    to: "https://www.coursera.org/learn/mlops-fundamentals",
    image: require("./icons/mlopscoursera.jpeg"),
  },
  

];

const topics = [
    { title: "MLOps Community",
    to: "https://mlops.community/",
    },
    { title: "The MLOps Community on Reddit", 
    to: "https://www.reddit.com/r/mlops/?rdt=57977"
    },
    { title: "Towards Data Science", 
    to: "https://towardsdatascience.com/"
    },
    { title: "Kubeflow", 
    to: "https://www.kubeflow.org/"
    },
    { title: "MLflow", 
    to: "https://mlflow.org/"
    },
    { title: "TensorBoard", 
    to: "https://www.tensorflow.org/tensorboard"
    },
    { title: " The International Conference on Machine Learning (ICML)", 
    to: "https://icml.cc/"
    },
    
  
  
  ];
  

export default MLOps;
