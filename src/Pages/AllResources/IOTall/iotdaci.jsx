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


const IOTdaci = () => {
  return (
    <>
      
      <Section>
        <Container>
        <section className="py-10 bg-blue sm:py-16 lg:py-12">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-blue-100 to-blue-800 sm:text-4xl lg:text-5xl">
                   IOT  Data Analytics and Cloud Integration
                </h2>
                <p className=" mb-8  mx-auto mt-4  text-xl leading-relaxed text-white-600">
                Learn how to effectively manage IoT data with AWS IoT, Azure IoT, or Google Cloud IoT. Enhance your skills in edge computing and real-time processing.
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
          <YoutubeFrame src="https://www.youtube.com/embed/HmbUJEShA-8?si=KbxVURd8gvcQajmZF"/>
          <YoutubeFrame src="https://www.youtube.com/embed/6mBO2vqLv38?si=oy9XSRch336pCccN" />
          <YoutubeFrame src="https://www.youtube.com/embed/OfGxbxUCa2k?si=YuJVDPacd81LD3bV" />
        </div>
      </YtSection>

      <h2 className="mt-[100px] mb-10 text-2xl text-center md:text-4xl lg:text-5xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-yellow-100 to-yellow-800">
                Others Resources
              </h2>
              <div className="mx-auto flex px-2 mt-8 mb-4 items-center justify-center flex-col">
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
              </div>
    </>
  );
};

const ResourceBooks = [
  {
    name: "The Internet of Things",
     to:"https://www.google.co.in/books/edition/The_Internet_of_Things/9GQ0BwAAQBAJ?hl=en&gbpv=0" ,
    
    description: "How Smart TVs, Smart Cars, Smart Homes, and Smart Cities Are Changing the World By Michael Miller ",
      image: "https://m.media-amazon.com/images/I/513nN1Fx1cL.jpg",
  },
  {
    name: "Build Your Own IoT Platform",
    description:
      "Develop a Fully Flexible and Scalable Internet of Things Platform in 24 Hours",
    to: "https://www.google.co.in/books/edition/Practical_MLOps/Su9IzgEACAAJ?hl=en",
     image: "https://m.media-amazon.com/images/I/61e7Cy1EpNL._AC_UF1000,1000_QL80_.jpg",
  },
 

];




const ResourceCourses = [
  {
    name: "An Introduction to Programming the Internet of Things (IOT) Specialization",
    description:"Create Your Own Internet of Things (IoT) Device. Design and create a simple IoT device in just six courses.",
    to:"https://www.coursera.org/specializations/iot" ,
     image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/XDP/XDP~SPECIALIZATION!~iot/XDP~SPECIALIZATION!~iot.jpeg",
  },
  {
    name: "Introduction to the Internet of Things and Embedded Systems",
    description:" In this first class in the specialization you will learn the importance of IoT in society, the current components of typical IoT devices and trends for the future.",
    to: "https://www.coursera.org/learn/iot",
    image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/39/739310451a11e5bd9a998e94db442d/Course-1-logo.jpg?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
  },
  

];

const topics = [
    { title: " IoT Central",
    to: "https://www.iotcentral.io/",
    },
    { title: "IoT Forums ", 
    to: "https://iotforums.com/"
    },
    { title: " Industrial Internet Consortium (IIC)", 
    to: "https://www.iiconsortium.org/"
    },
    { title: "IoT For All", 
    to: "https://www.iotforall.com/"
    },
    { title: "IoT World Today", 
    to: "https://www.iotworldtoday.com/"
    },
    { title: "IoT Agenda", 
    to: "https://www.techtarget.com/iotagenda/"
    },
   
  
  
  ];
  

export default IOTdaci;
