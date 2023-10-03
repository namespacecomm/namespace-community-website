import React from "react";
import styled from "styled-components";
import { programsList } from "../../constants/programs";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: flex;
  ${
    "" /* background-color: rgb(9, 9, 121);
  background-repeat: no-repeat;
  background: linear-gradient(
    262deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(2, 0, 36, 1) 1%
  ); */
  }
  background-color: #010116;
  ${
    "" /* background-repeat: no-repeat;
  background: no-repeat url("./img/bg.jpg"); */
  }
`;

const Container = styled.div`
  scroll-snap-align: center;
  width: 1400px;
  padding-top: 100px;
  @media only screen and (max-width: 768px) {
    width: 100%;

    flex-direction: column;

    justify-content: space-between;
  }
`;

function Programs() {
  return (
    <>
      <Section>
        <Container>
          <section className="py-10 bg-blue sm:py-16 lg:py-12">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Internal Programs
                </h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white-600">
                  NSCC BPIT Conducts multiple internal programs exclusively for
                  its members. They focus on the technical development of all
                  the individuals concerened.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-1 lg:grid-cols-1">
                {programsList.map((item) => {
                  return (
                    <div
                      className="overflow-hidden bg-white rounded shadow-lg text-black p-4"
                      key={item.name}
                    >
                      <div className="text-center text-xl md:text-2xl lg:text-5xl font-semibold mb-12 mt-8">
                        {item.name}
                      </div>

                      <div className="program-content flex flex-col md:flex-row">
                        <div className="program-image md:w-1/2 pr-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full rounded-md"
                          />
                        </div>
                        <div className="program-description md:w-1/2 mt-4 md:mt-0 h-48 md:h-auto md:text-2xl lg:text-3xl">
                          <p>{item.description}</p>
                        </div>
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

export default Programs;
