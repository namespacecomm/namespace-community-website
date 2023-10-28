import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

export default function SortAlgo() {
  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font text">
        <div className="px-6 py-24 mx-auto flex flex-wrap">
        <div className=" lg:w-full w-full">
                <h1 className="text-4xl pb-2 font-bold leading-7 text-transparent bg-clip-text  bg-gradient-to-r from-teal-400 to-yellow-200 sm:text-4xl lg:text-5xl text-center">
                  Sorting Algorithm
                  <br></br>
                </h1>
                <br></br>
                <p className="max-w-2xl mx-auto my-10 text-center text-xl font-bold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-amber-500 to-pink-500 ">
                A Sorting Algorithm is used to rearrange a given array or list of elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of elements in the respective data structure.
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
                  Stability: 
                  </h2>
                  <p className="leading-relaxed text-white text-justify">
                  Stability is an important characteristic of sorting algorithms. A sorting algorithm is stable if it preserves the relative order of equal elements in the sorted output as they appeared in the original input. Stability is essential in scenarios where you need to sort data by multiple criteria or maintain the order of elements that have equal keys. Algorithms like Merge Sort and Bubble Sort are stable, while algorithms like Quick Sort are generally not stable.
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
                  Sorting algorithms can have different time complexities, with some being more efficient than others. Common time complexities for sorting algorithms include O(n^2) for algorithms like Bubble Sort and Selection Sort, O(n log n) for efficient algorithms like Merge Sort and Quick Sort, and O(n) for linear-time sorting algorithms like Counting Sort and Radix Sort. Choosing the right sorting algorithm depends on the size of the data and the specific requirements of the task.
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
                  Space Complexity:
                  </h2>
                  <p className="leading-relaxed text-white text-justify">
                  Space complexity describes the amount of additional memory or storage space required by an algorithm to perform the sorting. In-place sorting algorithms, like Quicksort and Heapsort, have a low space complexity because they sort the data without requiring additional memory proportional to the size of the input. Other sorting algorithms, like Merge Sort, may require additional memory for temporary data structures, making them less space-efficient.
                  </p>
                </div>
              </div>
            </div>
            <img
              className="lg:w-2/5 md:w-1/2 object-contain object-center rounded-lg md:mt-0 mt-12"
              src="https://embed-ssl.wistia.com/deliveries/70d6f4e10e2badb5ef394f00c17ad2bc1c14f6e7.jpg"
              alt="AR/VR Development"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="px-5 py-0 mx-auto">
          <div className="flex flex-col text-left w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Types of Sorting Algorithm:
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
    title: "Selection Sort",
    image:
      "https://www.devopsschool.com/blog/wp-content/uploads/2021/06/Complete-Tutorials-of-Introduction-to-Algorithm.png",
    description:
      "Sorting algorithms reorder a dataset to achieve a specified order (e.g., ascending or descending) based on a defined criteria, enhancing data accessibility and processing efficiency. They vary in efficiency and stability.",
   
  },
  {
    title: "Bubble Sort",
    image:
      "https://www.devopsschool.com/blog/wp-content/uploads/2021/06/Complete-Tutorials-of-Introduction-to-Algorithm.png",
    description:
      "Sorting algorithms reorder a dataset to achieve a specified order (e.g., ascending or descending) based on a defined criteria, enhancing data accessibility and processing efficiency. They vary in efficiency and stability.",
   
  },
  {
    title: "Insertion Sort",
    image:
      "https://www.devopsschool.com/blog/wp-content/uploads/2021/06/Complete-Tutorials-of-Introduction-to-Algorithm.png",
    description:
      "Sorting algorithms reorder a dataset to achieve a specified order (e.g., ascending or descending) based on a defined criteria, enhancing data accessibility and processing efficiency. They vary in efficiency and stability.",
   
  },
  {
    title: "Merge Sort",
    image:
      "https://www.devopsschool.com/blog/wp-content/uploads/2021/06/Complete-Tutorials-of-Introduction-to-Algorithm.png",
    description:
      "Sorting algorithms reorder a dataset to achieve a specified order (e.g., ascending or descending) based on a defined criteria, enhancing data accessibility and processing efficiency. They vary in efficiency and stability.",
    
  },
  {
    title: "Quick Sort",
    image:
      "https://www.devopsschool.com/blog/wp-content/uploads/2021/06/Complete-Tutorials-of-Introduction-to-Algorithm.png",
    description:
      "Sorting algorithms reorder a dataset to achieve a specified order (e.g., ascending or descending) based on a defined criteria, enhancing data accessibility and processing efficiency. They vary in efficiency and stability.",
    
  },
  {
    title: "Heap Sort",
    image:
      "https://www.devopsschool.com/blog/wp-content/uploads/2021/06/Complete-Tutorials-of-Introduction-to-Algorithm.png",
    description:
      "Sorting algorithms reorder a dataset to achieve a specified order (e.g., ascending or descending) based on a defined criteria, enhancing data accessibility and processing efficiency. They vary in efficiency and stability.",
    
  },
  {
    title: "Counting Sort",
    image:
      "https://www.devopsschool.com/blog/wp-content/uploads/2021/06/Complete-Tutorials-of-Introduction-to-Algorithm.png",
    description:
      "Sorting algorithms reorder a dataset to achieve a specified order (e.g., ascending or descending) based on a defined criteria, enhancing data accessibility and processing efficiency. They vary in efficiency and stability.",
    
  },
  {
    title: "Radix Sort",
    image:
      "https://www.devopsschool.com/blog/wp-content/uploads/2021/06/Complete-Tutorials-of-Introduction-to-Algorithm.png",
    description:
      "Sorting algorithms reorder a dataset to achieve a specified order (e.g., ascending or descending) based on a defined criteria, enhancing data accessibility and processing efficiency. They vary in efficiency and stability.",
    
  },
  {
    title: "Bucket Sort",
    image:
      "https://www.devopsschool.com/blog/wp-content/uploads/2021/06/Complete-Tutorials-of-Introduction-to-Algorithm.png",
    description:
      "Sorting algorithms reorder a dataset to achieve a specified order (e.g., ascending or descending) based on a defined criteria, enhancing data accessibility and processing efficiency. They vary in efficiency and stability.",
    
  },
  {
    title: "Bingo Sort Algorithm",
    image:
      "https://www.devopsschool.com/blog/wp-content/uploads/2021/06/Complete-Tutorials-of-Introduction-to-Algorithm.png",
    description:
      "Sorting algorithms reorder a dataset to achieve a specified order (e.g., ascending or descending) based on a defined criteria, enhancing data accessibility and processing efficiency. They vary in efficiency and stability.",
    
  },
  {
    title: "ShellSort",
    image:
      "https://www.devopsschool.com/blog/wp-content/uploads/2021/06/Complete-Tutorials-of-Introduction-to-Algorithm.png",
    description:
      "Sorting algorithms reorder a dataset to achieve a specified order (e.g., ascending or descending) based on a defined criteria, enhancing data accessibility and processing efficiency. They vary in efficiency and stability.",
    
  },
  {
    title: "TimSort",
    image:
      "https://www.devopsschool.com/blog/wp-content/uploads/2021/06/Complete-Tutorials-of-Introduction-to-Algorithm.png",
    description:
      "Sorting algorithms reorder a dataset to achieve a specified order (e.g., ascending or descending) based on a defined criteria, enhancing data accessibility and processing efficiency. They vary in efficiency and stability.",
    
  },
  {
    title: "Comb Sort",
    image:
      "https://www.devopsschool.com/blog/wp-content/uploads/2021/06/Complete-Tutorials-of-Introduction-to-Algorithm.png",
    description:
      "Sorting algorithms reorder a dataset to achieve a specified order (e.g., ascending or descending) based on a defined criteria, enhancing data accessibility and processing efficiency. They vary in efficiency and stability.",
    
  },
  {
    title: "Pigeonhole Sort",
    image:
      "https://www.devopsschool.com/blog/wp-content/uploads/2021/06/Complete-Tutorials-of-Introduction-to-Algorithm.png",
    description:
      "Sorting algorithms reorder a dataset to achieve a specified order (e.g., ascending or descending) based on a defined criteria, enhancing data accessibility and processing efficiency. They vary in efficiency and stability.",
    
  },
  {
    title: "Cycle Sort",
    image:
      "https://www.devopsschool.com/blog/wp-content/uploads/2021/06/Complete-Tutorials-of-Introduction-to-Algorithm.png",
    description:
      "Sorting algorithms reorder a dataset to achieve a specified order (e.g., ascending or descending) based on a defined criteria, enhancing data accessibility and processing efficiency. They vary in efficiency and stability.",
    
  },
  {
    title: "Cocktail Sort",
    image:
      "https://www.devopsschool.com/blog/wp-content/uploads/2021/06/Complete-Tutorials-of-Introduction-to-Algorithm.png",
    description:
      "Sorting algorithms reorder a dataset to achieve a specified order (e.g., ascending or descending) based on a defined criteria, enhancing data accessibility and processing efficiency. They vary in efficiency and stability.",
    
  },
  {
    title: "Strand Sort",
    image:
      "https://www.devopsschool.com/blog/wp-content/uploads/2021/06/Complete-Tutorials-of-Introduction-to-Algorithm.png",
    description:
      "Sorting algorithms reorder a dataset to achieve a specified order (e.g., ascending or descending) based on a defined criteria, enhancing data accessibility and processing efficiency. They vary in efficiency and stability.",
    
  },
  {
    title: "Bitonic Sort",
    image:
      "https://www.devopsschool.com/blog/wp-content/uploads/2021/06/Complete-Tutorials-of-Introduction-to-Algorithm.png",
    description:
      "Sorting algorithms reorder a dataset to achieve a specified order (e.g., ascending or descending) based on a defined criteria, enhancing data accessibility and processing efficiency. They vary in efficiency and stability.",
    
  },
];
