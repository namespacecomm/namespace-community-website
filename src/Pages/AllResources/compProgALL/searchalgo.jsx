import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

export default function SearchAlgo() {
  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font text">
        <div className="px-6 py-24 mx-auto flex flex-wrap">
        <div className=" lg:w-full w-full">
                <h1 className="text-4xl pb-2 font-bold leading-7 text-transparent bg-clip-text  bg-gradient-to-r from-teal-400 to-yellow-200 sm:text-4xl lg:text-5xl text-center">
                  Search Algorithm
                  <br></br>
                </h1>
                <br></br>
                <p className="max-w-2xl mx-auto my-10 text-center text-xl font-bold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-amber-500 to-pink-500 ">
                Searching algorithms are methods for locating a specific element within a dataset, varying in time complexity and suitability based on the data structure and search criteria.
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
                  Searching Criteria:
                  </h2>
                  <p className="leading-relaxed text-white text-justify">
                  The nature of the search criteria, including whether you are looking for an exact match, a range of values, or elements satisfying certain conditions, will influence the choice of a searching algorithm. For instance, if you need to find exact matches in a sorted array, binary search is a suitable choice. If you want to search for elements that meet certain criteria or conditions, you may need custom searching algorithms or filters.
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
                  Time Complexity:
                  </h2>
                  <p className="leading-relaxed text-white text-justify">
                  Time complexity in searching algorithms refers to the amount of time it takes for an algorithm to find a specific element within a dataset. Different searching algorithms have different time complexities, which can impact their efficiency. Common time complexities for searching algorithms include O(n) for linear search, O(log n) for binary search on sorted data, and O(1) for hash table-based lookups. Understanding the time complexity of a searching algorithm is crucial for selecting the right approach for your specific use case.
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
                  Data Structure:
                  </h2>
                  <p className="leading-relaxed text-white text-justify">
                  The choice of data structure plays a significant role in the efficiency of searching algorithms. Some data structures, such as arrays, linked lists, binary search trees, and hash tables, are well-suited for specific searching tasks. For example, binary search is efficient on a sorted array, while hash tables excel at providing constant-time lookups. Selecting the appropriate data structure is essential for optimizing search operations.
                  </p>
                </div>
              </div>
            </div>
            <img
              className="lg:w-2/5 md:w-1/2 object-contain object-center rounded-lg md:mt-0 mt-12"
              src="https://www.volusion.com/blog/content/images/2018/11/What-is-a-Search-Algorithm.png"
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
    title: "Linear Search",
    image:
      "https://www.devopsschool.com/blog/wp-content/uploads/2021/06/Complete-Tutorials-of-Introduction-to-Algorithm.png",
    description:
      "searching algorithms have different characteristics and are chosen based on the specific requirements and characteristics of the dataset and search task at hand.",
   
  },
  {
    title: "Binary Search",
    image:
      "https://www.devopsschool.com/blog/wp-content/uploads/2021/06/Complete-Tutorials-of-Introduction-to-Algorithm.png",
    description:
      "searching algorithms have different characteristics and are chosen based on the specific requirements and characteristics of the dataset and search task at hand.",
   
  },
  {
    title: "Hashing",
    image:
      "https://www.devopsschool.com/blog/wp-content/uploads/2021/06/Complete-Tutorials-of-Introduction-to-Algorithm.png",
    description:
      "searching algorithms have different characteristics and are chosen based on the specific requirements and characteristics of the dataset and search task at hand.",
   
  },
  {
    title: "Interpolation Search",
    image:
      "https://www.devopsschool.com/blog/wp-content/uploads/2021/06/Complete-Tutorials-of-Introduction-to-Algorithm.png",
    description:
      "searching algorithms have different characteristics and are chosen based on the specific requirements and characteristics of the dataset and search task at hand.",
    
  },
  {
    title: "Exponential Search",
    image:
      "https://www.devopsschool.com/blog/wp-content/uploads/2021/06/Complete-Tutorials-of-Introduction-to-Algorithm.png",
    description:
      "searching algorithms have different characteristics and are chosen based on the specific requirements and characteristics of the dataset and search task at hand.",
    
  },
  {
    title: "Jump Search",
    image:
      "https://www.devopsschool.com/blog/wp-content/uploads/2021/06/Complete-Tutorials-of-Introduction-to-Algorithm.png",
    description:
      "searching algorithms have different characteristics and are chosen based on the specific requirements and characteristics of the dataset and search task at hand.",
    
  },
  {
    title: "Fibonacci Search",
    image:
      "https://www.devopsschool.com/blog/wp-content/uploads/2021/06/Complete-Tutorials-of-Introduction-to-Algorithm.png",
    description:
      "searching algorithms have different characteristics and are chosen based on the specific requirements and characteristics of the dataset and search task at hand.",
    
  },
  {
    title: "Ternary Search",
    image:
      "https://www.devopsschool.com/blog/wp-content/uploads/2021/06/Complete-Tutorials-of-Introduction-to-Algorithm.png",
    description:
      "searching algorithms have different characteristics and are chosen based on the specific requirements and characteristics of the dataset and search task at hand.",
    
  },
  {
    title: "Depth-First Search (DFS)",
    image:
      "https://www.devopsschool.com/blog/wp-content/uploads/2021/06/Complete-Tutorials-of-Introduction-to-Algorithm.png",
    description:
      "searching algorithms have different characteristics and are chosen based on the specific requirements and characteristics of the dataset and search task at hand.",
    
  },
  {
    title: "Breadth-First Search (BFS)",
    image:
      "https://www.devopsschool.com/blog/wp-content/uploads/2021/06/Complete-Tutorials-of-Introduction-to-Algorithm.png",
    description:
      "searching algorithms have different characteristics and are chosen based on the specific requirements and characteristics of the dataset and search task at hand.",
    
  },
  
];
