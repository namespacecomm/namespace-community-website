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

const Supplychain = () => {
  return (
    <>
      <Section>
        <Container>
          <section className="py-10 bg-blue sm:py-16 lg:py-12">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-blue-100 to-blue-800 sm:text-4xl lg:text-5xl p-2">
                Supply Chain Management
                </h2>
                <p className=" mb-8  mx-auto mt-2  text-xl leading-relaxed text-white-600">
                  Supply Chain Management (SCM) is the strategic oversight and coordination of all activities involved in the flow of goods and services from raw materials to the end consumer.
                  It encompasses the planning, execution, and control of these activities, ensuring that
                  products are delivered efficiently, effectively, and at the right cost.
                </p>
              </div>

              <h2 className="mt-3 text-2xl text-center md:text-4xl lg:text-5xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-violet-100 to-violet-800">
                Courses
              </h2>

              <div className="grid grid-cols-1 gap-6 mt-14 lg:mt-16 xl:gap-10 md:grid-cols-2 lg:grid-cols-2">
                {ResourceCourses.map((item) => {
                  return (
                    <a
                      href={item.to}
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


      <h2 className="mt-[100px] text-2xl text-center md:text-4xl lg:text-5xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-red-50 to-red-950">
        YouTube Videos
      </h2>

      <YtSection>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center">
          <YoutubeFrame src="https://www.youtube.com/embed/Lpp9bHtPAN0?si=ULzWlZ8D57V52eJW" />
          <YoutubeFrame src="https://www.youtube.com/embed/lZPO5RclZEo?si=jOEgr-t2TSsfuzyR" />
          <YoutubeFrame src="https://www.youtube.com/embed/eWSA6EF3xt0?si=Nxaxf2uonG3esO3F" />
        </div>
      </YtSection>

    </>
  );
};



const ResourceCourses = [
  {
    name: "Basics of SCM (Fundamental concepts of supply chain management)",
    description:
"This course introduces key concepts in Supply Chain Management (SCM), essential for companies involved in selling, producing, or buying goods. It provides a foundation for deeper SCM topics and helps students explore SCM as a potential career path.",
      
    to: "https://www.udemy.com/course/basics-of-scm/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Search_DSA_Beta_Prof_la.EN_cc.India&campaigntype=Search&portfolio=India&language=EN&product=Course&test=&audience=DSA&topic=&priority=Beta&utm_content=deal4584&utm_term=_._ag_160270535465_._ad_696202838328_._kw__._de_c_._dm__._pl__._ti_dsa-1677053955488_._li_9062010_._pd__._&matchtype=&gad_source=1&gclid=Cj0KCQjwu-63BhC9ARIsAMMTLXT7GOBTeDNsAYalpM-G-tLv77Pv6cGpVl3Mz59D0Sd9ukyvovjxVuwaAuYNEALw_wcB&couponCode=IND21PM",
    image: "https://c8.alamy.com/comp/2AK0DFP/functions-of-supply-chain-management-software-2AK0DFP.jpg",
  },
  {
    name: "Edx MITx: Supply Chain Fundamentals",
    description:
      "This Supply Chain Fundamentals course is part of the MITx MicroMasters Credential in Supply Chain Management, offered by #1 ranked SCM Master's program at the Massachusetts Institute of Technology.",
    to: "https://www.edx.org/learn/supply-chain-design/massachusetts-institute-of-technology-supply-chain-fundamentals",
    image: "https://prod-discovery.edx-cdn.org/cdn-cgi/image/width=auto,height=auto,quality=75,format=webp/media/course/image/324970b7-03a4-44d7-b39e-10bbda6f119f-6087e3f8810e.small.jpeg",
  },
  {
    name: "Coursera: Supply Chain Management Specialization",
    description:
      "Supply Chain Management. Master the Fundamentals: Logistics, Operations, Planning, Sourcing, and Strategy",
    to: "https://www.coursera.org/specializations/supply-chain-management",
    image: "https://prod-discovery.edx-cdn.org/cdn-cgi/image/width=auto,height=auto,quality=75,format=webp/media/course/image/324970b7-03a4-44d7-b39e-10bbda6f119f-6087e3f8810e.small.jpeg",
  },
  {
    name: "Coursera: Supply Chain Logistics",
    description:
      "Supply Chain Logistics by Rutgers University: Focuses on logistics, an important subset of supply chain management.",
    to: "https://www.coursera.org/learn/supply-chain-logistics",
    image: "https://prod-discovery.edx-cdn.org/cdn-cgi/image/width=auto,height=auto,quality=75,format=webp/media/course/image/324970b7-03a4-44d7-b39e-10bbda6f119f-6087e3f8810e.small.jpeg",
  },
];

export default Supplychain;

