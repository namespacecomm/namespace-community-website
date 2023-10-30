import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

export default function DpAlgo() {
  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font text">
        <div className="px-6 py-24 mx-auto flex flex-wrap">
        <div className=" lg:w-full w-full">
                <h1 className="text-4xl pb-2 font-bold leading-7 text-transparent bg-clip-text  bg-gradient-to-r from-teal-400 to-yellow-200 sm:text-4xl lg:text-5xl text-center">
                  Dynamic Programming
                  <br></br>
                </h1>
                <br></br>
                <p className="max-w-2xl mx-auto my-10 text-center text-xl font-bold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-amber-500 to-pink-500 ">
                Dynamic programming is a powerful problem-solving technique used in computer science and mathematics. It involves breaking down a complex problem into smaller overlapping subproblems and solving each subproblem only once, storing the results to avoid redundant computations. 
                </p>
              </div>

          <div className="flex flex-wrap w-full">
            <div className="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>

                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                  </svg>
                </div>

                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                  Overlapping Subproblems:
                  </h2>
                  <p className="leading-relaxed text-white text-justify">
                  Dynamic programming is particularly effective for problems that can be broken down into smaller subproblems that are solved independently but share common sub-subproblems. By storing and reusing the solutions to these subproblems, dynamic programming can significantly reduce the computational workload.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 18v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1m18-2H3a2 2 0 00-2 2v4a2 2 0 002 2h18a2 2 0 002-2v-4a2 2 0 00-2-2zM6 12v-2a2 2 0 012-2h8a2 2 0 012 2v2"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                  Optimal Substructure:
                  </h2>
                  <p className="leading-relaxed text-white text-justify">
                  Problems that can be solved optimally by combining the solutions of their subproblems exhibit optimal substructure. This means that the optimal solution to the overall problem can be constructed from the optimal solutions of its subproblems.
                  </p>
                </div>
              </div>
              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-xl text-white mb-1 tracking-wider">
                  Memoization and Tabulation:
                  </h2>
                  <p className="leading-relaxed text-white text-justify">
                  Dynamic programming can be implemented using two main approaches: memoization (top-down) and tabulation (bottom-up). Memoization involves using a cache or table to store the results of subproblems as they are solved recursively, while tabulation starts from the smallest subproblems and works its way up, populating a table with solutions for progressively larger problems.
                  </p>
                </div>
              </div>
            </div>
            <img
              className="lg:w-2/5 md:w-1/2 object-contain object-center rounded-lg md:mt-0 mt-12"
              src="https://www.masaischool.com/blog/content/images/2023/05/Dynamic-Programming-101.png"
              alt="AR/VR Development"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="px-5 py-0 mx-auto">
          <div className="flex flex-col text-left w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Types of Search Algorithm:
            </h1>
            
          </div>
          <div className="flex flex-wrap -m-2">
            {iotdevPathway.map((path) => (
              <div key={path.title} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="path"
                    className="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4"
                    src={path.image}
                  />
                  <div className="flex-grow">
                    <Link to={path.to}>
                      <h2 className="text-white title-font font-bold underline text-xl">
                        {path.title}
                      </h2>
                    </Link>
                    <p className="text-white">{path.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const iotdevPathway = [
  {
    title: "Top-Down (Memoization)",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20220914114911/DynamicProgramming1.jpg",
    description:
      "searching algorithms have different characteristics and are chosen based on the specific requirements and characteristics of the dataset and search task at hand.",
   
  },
  {
    title: "Bottom-Up (Tabulation)",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20220914114911/DynamicProgramming1.jpg",
    description:
      "searching algorithms have different characteristics and are chosen based on the specific requirements and characteristics of the dataset and search task at hand.",
   
  },
  
];
