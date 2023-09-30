import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styled from "styled-components";
import { ResourceMain } from "../../constants/ResourceMain";
import { Link } from "react-router-dom";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: flex;
  background-color: rgb(9, 9, 121);
  background-repeat: no-repeat;
  background: linear-gradient(
    262deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(2, 0, 36, 1) 1%
  );
  ${
    "" /* background-repeat: no-repeat;
  background: no-repeat url("./img/bg.jpg"); */
  }
`;

const Container = styled.div`
  scroll-snap-align: center;
  width: 1400px;
  @media only screen and (max-width: 768px) {
    width: 100%;

    flex-direction: column;

    justify-content: space-between;
  }
`;

function Resources() {
  return (
    <Section>
      <Navbar />
      <Container>
        <section className="py-10 bg-blue sm:py-16 lg:py-12">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                RESOURCES
              </h2>
              <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {
              ResourceMain.map((item) => {
                return <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-8">
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 w-12 h-auto"
                      src={item.image}
                      alt=""
                    />
                    <div className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">{item.name}</p>
                      {/* <p className="mt-px text-sm text-gray-600">
                        Direct Integration
                      </p> */}
                    </div>
                    <Link to={item.to} >
                    <svg
                      className="block w-6 h-6 text-blue-600 cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                    </Link>
                  </div>
                  <p className="text-base leading-relaxed text-gray-600 mt-7">
                    {item.description}
                  </p>
                </div>
              </div>
              })
            }
            </div>
          </div>
        </section>
      </Container>
    </Section>
  );
}

export default Resources;
