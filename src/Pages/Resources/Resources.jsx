import React from "react";
import styled from "styled-components";
import { ResourceMain } from "../../constants/ResourceMain";


const Section = styled.div`
  display: flex;
  flex-direction: justify-center;
  align-items: center;
  justify-content: space-between;
  background-color: #010116;
`;

const Container = styled.div`
  scroll-snap-align: center;
  width: 95%;
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

function Resources() {
  return (
    <>
      <Section>
        <Container>
          <section className="py-10 bg-blue sm:py-16 lg:py-12">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  RESOURCES
                </h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white-600">
                  Explore our valuable resources, including articles, guides,
                  videos, and tools, designed to help you succeed and stay
                  informed.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 mt-14 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-2">
                {ResourceMain.map((item) => {
                  return (
                    <div
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
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </Container>
      </Section>
    </>
  );
}

export default Resources;
