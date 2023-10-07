import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./Main.css";
import { Link } from "react-router-dom";

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
    width: 90vw;
    overflow-y: scroll;
    flex-direction: column;

    justify-content: space-between;
  }
`;

export const CompProg = () => {
  const [checkedTopics, setCheckedTopics] = useState({
    HTML: false,
    CSS: false,
    Javascript: false,
  });

  const handleCheckboxChange = (topic) => {
    setCheckedTopics({
      ...checkedTopics,
      [topic]: !checkedTopics[topic],
    });
  };

  useEffect(() => {
    localStorage.setItem("checkedTopics", JSON.stringify(checkedTopics));
  }, [checkedTopics]);

  useEffect(() => {
    const storedCheckedTopics = localStorage.getItem("checkedTopics");
    if (storedCheckedTopics) {
      setCheckedTopics(JSON.parse(storedCheckedTopics));
    }
  }, []);

  return (
    <>
      <Section>
        <Container>
          {/* --------------------------------MAIN HEADING------------------------------------------------------ */}
          <div className=" px-0 py-10 ">
            <h1 className="text-3xl text-center font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              COMPETITIVE PROGRAMMING
            </h1>
            {/* <************************************MAIN SECTION*******************************************> */}
            <section className="text-gray-600 body-font">
              <div className="px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex flex-wrap w-full">
                  <div className="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6">
                    <div className="flex relative pb-12">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 inline-flex items-center justify-center text-white relative z-10">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                        </svg>
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                          Understand the Basics
                        </h2>
                        <p className="leading-relaxed text-white text-justify">
                          Competitive Programming involves solving algorithmic
                          and data structure problems efficiently. Start by
                          understanding fundamental concepts like data
                          structures (arrays, linked lists, trees, graphs) and
                          algorithms (sorting, searching, dynamic programming).
                        </p>
                      </div>
                    </div>
                    <div className="flex relative pb-12">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 inline-flex items-center justify-center text-white relative z-10">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 18v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1m18-2H3a2 2 0 00-2 2v4a2 2 0 002 2h18a2 2 0 002-2v-4a2 2 0 00-2-2zM6 12v-2a2 2 0 012-2h8a2 2 0 012 2v2"></path>
                        </svg>
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                          Practice Regularly
                        </h2>
                        <p className="leading-relaxed text-white text-justify">
                          Just like in sports, regular practice is essential in
                          competitive programming. Solve a variety of problems
                          on online platforms like Codeforces, LeetCode, and
                          HackerRank to improve your problem-solving skills and
                          speed.
                        </p>
                      </div>
                    </div>
                    <div className="flex relative pb-12">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 inline-flex items-center justify-center text-white relative z-10">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
                        </svg>
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                          Learn Advanced Algorithms
                        </h2>
                        <p className="leading-relaxed text-white text-justify">
                          Dive deeper into complex algorithms such as graph
                          algorithms (Dijkstra's, Floyd-Warshall), dynamic
                          programming, and number theory. Understanding and
                          implementing advanced algorithms is crucial for
                          solving challenging problems efficiently.
                        </p>
                      </div>
                    </div>

                    <div className="flex relative pb-12">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 inline-flex items-center justify-center text-white relative z-10">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
                        </svg>
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                          Participate in Contests
                        </h2>
                        <p className="leading-relaxed text-white text-justify">
                          Engage in coding contests on platforms like CodeChef,
                          AtCoder, and Topcoder. Competing in contests exposes
                          you to a variety of problem types and improves your
                          ability to think critically and optimize solutions
                          under time constraints.
                        </p>
                      </div>
                    </div>

                    <div className="flex relative pb-12">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 inline-flex items-center justify-center text-white relative z-10">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-bold title-font text-xl text-white mb-1 tracking-wider">
                          Analyse and Learn
                        </h2>
                        <p className="leading-relaxed text-white text-justify">
                          After contests, thoroughly analyze your solutions and
                          editorials for problems you couldn't solve. Understand
                          different approaches, optimizations, and coding
                          styles. Learning from mistakes is an integral part of
                          improving in competitive programming.
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="lg:w-2/5 md:w-1/2 object-contain object-center rounded-lg md:mt-0 mt-12"
                    src="https://i.ibb.co/RyJZwg8/cp.png"
                    alt="step"
                  />
                </div>
              </div>
            </section>

            {/* <-----------------------------------------------END OF MAIN SECTION-------------------------------------------------> */}
            {/* <------------------------------------Basic Algo-------------------------------------------------------> */}
            <section className="text-white body-font">
              <div className="px-5 py-0 mx-auto">
                <div className="flex flex-col text-left w-full mb-10">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                    1. Algorithmic Foundations
                  </h1>
                  <p className="w-full text-left mx-auto leading-relaxed text-base">
                    Below are the topics that you need to master to excel in
                    competitive programming.
                  </p>
                </div>
                <div className="flex flex-wrap -m-2">
                  {algorithmicFoundations.map((topic) => {
                    return (
                      <div
                        className="p-2 lg:w-1/3 md:w-1/2 w-full"
                        key={topic.title}
                      >
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="topic"
                            className="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4"
                            src={topic.image}
                          />
                          <div className="flex-grow">
                            <Link to={topic.to}>
                              <h2 className="text-white title-font font-bold underline text-xl">
                                {topic.title}
                              </h2>
                            </Link>
                            <p className="text-white">{topic.des}</p>
                            <input
                              type="checkbox"
                              id={topic.title}
                              checked={checkedTopics[topic.title]}
                              onChange={() => handleCheckboxChange(topic.title)}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* <------------------------------------Advanced Algo-------------------------------------------------------> */}
                <br />
                <div className="flex flex-col text-left w-full mb-10">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                    2. Advanced Data Structures
                  </h1>
                  <p className="w-full text-left mx-auto leading-relaxed text-base">
                    Below are the topics that you need to master to become
                    proficient in competitive programming.
                  </p>
                </div>
                <div className="flex flex-wrap -m-2">
                  {advancedDataStructures.map((topic) => {
                    return (
                      <div
                        className="p-2 lg:w-1/3 md:w-1/2 w-full"
                        key={topic.title}
                      >
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="topic"
                            className="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4"
                            src={topic.image}
                          />
                          <div className="flex-grow">
                            <Link to={topic.to}>
                              <h2 className="text-white title-font font-bold underline text-xl">
                                {topic.title}
                              </h2>
                            </Link>
                            <p className="text-white">{topic.des}</p>
                            <input
                              type="checkbox"
                              id={topic.title}
                              checked={checkedTopics[topic.title]}
                              onChange={() => handleCheckboxChange(topic.title)}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* start from here */}
                {/* <------------------------------------CP resources-------------------------------------------------------> */}
                <br />
                <div className="flex flex-col text-left w-full mb-10">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                    3. Compitative Programming Resources
                  </h1>
                  <p className="w-full text-left mx-auto leading-relaxed text-base">
                    Below are the resources that you can follow to learn more and master yoursel on fcompetitive programming.
                  </p>
                </div>
                <div className="flex flex-wrap -m-2">
                  {CompProgResources.map((topic) => {
                    return (
                      <div
                        className="p-2 lg:w-1/3 md:w-1/2 w-full"
                        key={topic.title}
                      >
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="topic"
                            className="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4"
                            src={topic.image}
                          />
                          <div className="flex-grow">
                            <Link to={topic.to}>
                              <h2 className="text-white title-font font-bold underline text-xl">
                                {topic.title}
                              </h2>
                            </Link>
                            <p className="text-white">{topic.des}</p>
                            <input
                              type="checkbox"
                              id={topic.title}
                              checked={checkedTopics[topic.title]}
                              onChange={() => handleCheckboxChange(topic.title)}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* ends at here */}
                {/* start from here */}
                {/* <------------------------------------introduction of some youtube chanals-------------------------------------------------------> */}
                <br />
                <div className="flex flex-col text-left w-full mb-10">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                  4. Populer Youtube channels for compitative programming
                  </h1>
                  <p className="w-full text-left mx-auto leading-relaxed text-base">
                       Below are the populer youtube channels from where you can learn more about compitative programming topics.
                  </p>
                </div>
                <div className="flex flex-wrap -m-2">
                  {cpYouTubeResource.map((topic) => {
                    return (
                      <div
                        className="p-2 lg:w-1/3 md:w-1/2 w-full"
                        key={topic.title}
                      >
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="topic"
                            className="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4"
                            src={topic.image}
                          />
                          <div className="flex-grow">
                            <Link to={topic.to}>
                              <h2 className="text-white title-font font-bold underline text-xl">
                                {topic.title}
                              </h2>
                            </Link>
                            <p className="text-white">{topic.des}</p>
                            <input
                              type="checkbox"
                              id={topic.title}
                              checked={checkedTopics[topic.title]}
                              onChange={() => handleCheckboxChange(topic.title)}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* ends at here */}
                {/* start from here */}
                {/* <------------------------------------introduction of cp platforms-------------------------------------------------------> */}
                <br />
                <div className="flex flex-col text-left w-full mb-10">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                  5. Introduction of cp platforms
                  </h1>
                  <p className="w-full text-left mx-auto leading-relaxed text-base">
                       Below are the resources where you can practice programming and make yourself master for competitive programming.
                  </p>
                </div>
                <div className="flex flex-wrap -m-2">
                  {cpPlatforms.map((topic) => {
                    return (
                      <div
                        className="p-2 lg:w-1/3 md:w-1/2 w-full"
                        key={topic.title}
                      >
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="topic"
                            className="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4"
                            src={topic.image}
                          />
                          <div className="flex-grow">
                            <Link to={topic.to}>
                              <h2 className="text-white title-font font-bold underline text-xl">
                                {topic.title}
                              </h2>
                            </Link>
                            <p className="text-white">{topic.des}</p>
                            <input
                              type="checkbox"
                              id={topic.title}
                              checked={checkedTopics[topic.title]}
                              onChange={() => handleCheckboxChange(topic.title)}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* ends at here */}
              </div>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
};

const algorithmicFoundations = [
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    // to: "/algorithmic-topic1",
    title: "Sorting Algorithms",
    des: "Understand various sorting algorithms such as quicksort, mergesort, etc.",
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    // to: "/algorithmic-topic2",
    title: "Searching Algorithms",
    des: "Learn different searching algorithms like binary search, linear search, etc.",
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    // to: "/algorithmic-topic3",
    title: "Dynamic Programming",
    des: "Master the technique of breaking down complex problems into simpler, more manageable subproblems.",
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    // to: "/algorithmic-topic4",
    title: "Graph Algorithms",
    des: "Explore algorithms to solve problems related to graphs, such as shortest paths, minimum spanning tree, etc.",
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    // to: "/algorithmic-topic5",
    title: "Bit Manipulation",
    des: "Understand operations on individual bits of numbers, often used in competitive programming.",
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    // to: "/algorithmic-topic6",
    title: "Divide and Conquer",
    des: "Learn the approach of breaking a problem into subproblems, solving them independently, and combining solutions.",
  },
];

const advancedDataStructures = [
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    // to: "/data-structure-topic1",
    title: "Graph Data Structures",
    des: "Explore different graph representations and algorithms like DFS, BFS, etc.",
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    // to: "/data-structure-topic2",
    title: "Tree Data Structures",
    des: "Understand tree-based data structures like BST, AVL tree, etc.",
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    // to: "/data-structure-topic3",
    title: "Trie Data Structure",
    des: "Learn about the trie data structure, useful for efficient string operations.",
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    // to: "/data-structure-topic4",
    title: "Heap Data Structure",
    des: "Understand the heap data structure and its applications in priority queues and heapsort.",
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    // to: "/data-structure-topic5",
    title: "Hash Table",
    des: "Learn about the hash table data structure and its efficient data retrieval operations.",
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    // to: "/data-structure-topic6",
    title: "Disjoint Set (Union-Find)",
    des: "Explore the disjoint-set data structure and its applications, such as in Kruskal's algorithm for minimum spanning trees.",
  },
];

const CompProgResources = [
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://www.geeksforgeeks.org/",
    title: "GeeksforGeeks",
    des: "Comprehensive tutorials, articles, and coding challenges for data structures, algorithms, and coding interviews."
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://leetcode.com/",
    title: "LeetCode",
    des: "Coding challenges, contests, and articles on data structures, algorithms, and programming topics."
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://www.hackerrank.com/",
    title: "HackerRank",
    des: "Learn and practice data structures, algorithms, and AI through tutorials and challenges."
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://www.topcoder.com/",
    title: "TopCoder",
    des: "Tutorials, articles, and practice problems for competitive programming and algorithms."
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://www.coursera.org/",
    title: "Coursera",
    des: "Online courses covering algorithms, data structures, machine learning, and more."
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://www.edx.org/",
    title: "edX",
    des: "Online courses from top universities covering data structures, algorithms, and programming topics."
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://ocw.mit.edu/",
    title: "MIT OpenCourseWare",
    des: "Free access to MIT course materials on various programming topics."
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://online.stanford.edu/",
    title: "Stanford Online",
    des: "Online courses and resources on algorithms, data structures, and more from Stanford University."
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://www.khanacademy.org/",
    title: "Khan Academy",
    des: "Free tutorials and interactive lessons for programming and computer science concepts."
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://www.youtube.com/",
    title: "YouTube",
    des: "Video tutorials and lectures on data structures, algorithms, and coding interviews."
  },

];

const cpYouTubeResource = [
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://www.youtube.com/@TheCodingTrain",
    title: "The Coding Train",
    des: "This channel, hosted by Daniel Shiffman, offers creative coding tutorials, including algorithms and data structures.",
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://www.youtube.com/@tmwilliamlin168",
    title: "William Lin",
    des: "William Lin is a competitive programmer with a substantial following on YouTube. He provides solutions to competitive programming problems, coding contest analysis, and tips.",
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://www.youtube.com/@Errichto",
    title: "Errichto Algorithms",
    des: "Errichto's channel focuses on competitive programming tutorials, explanations, and solutions to algorithmic problems.",
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://www.youtube.com/@codencode",
    title: "CodeNCode",
    des: "CodeNCode provides in-depth explanations of competitive programming concepts and also covers dynamic programming, graphs, and more.",
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://www.youtube.com/@gkcs",
    title: "Gaurav Sen",
    des: "Gaurav Sen's channel offers a mix of computer science topics, interviews, and competitive programming tips.",
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://www.youtube.com/@TechWithTim",
    title: "Tech With Tim",
    des: "While primarily known for Python tutorials, Tech With Tim also has a series on competitive programming and algorithmic problem-solving.",
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://www.youtube.com/@iamluv",
    title: "Luv",
    des: "You can find almost every topic of compitative programming here",
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://www.youtube.com/@AlgoBot048",
    title: "AlgoBot",
    des: "After each round of codeforces round, you can found analysis here.",
  },
];


const cpPlatforms = [
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://toph.co/",
    title: "TOPH",
    des: "This is an online platform that offers a diverse collection of coding challenges and contests, making it an ideal resource for programmers looking to enhance their algorithmic and problem-solving skills through practice and competition."
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://lightoj.com/",
    title: "LightOJ",
    des: "An online judge for programming contests and practice problems."
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://codeforces.com/",
    title: "Codeforces",
    des: "A competitive programming platform with contests and algorithmic problems."
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://onlinejudge.org/",
    title: "UVa (UVa Online Judge)",
    des: "A classic online judge with a vast collection of algorithmic problems."
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://atcoder.jp/",
    title: "AtCoder",
    des: "A Japanese competitive programming platform with contests and problems."
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://www.codechef.com/",
    title: "CodeChef",
    des: "An Indian competitive programming platform for contests and practice."
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://www.hackerrank.com/",
    title: "HackerRank",
    des: "An online platform for coding challenges, interviews, and competitions."
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://www.hackerearth.com/",
    title: "HackerEarth",
    des: "A platform for coding challenges, hackathons, and hiring assessments."
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://cses.fi/",
    title: "CSES Problem Set",
    des: "A collection of competitive programming problems from the University of Helsinki."
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://www.geeksforgeeks.org/",
    title: "GeeksforGeeks (GFG)",
    des: "A resource for coding interviews, data structures, and algorithms."
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://leetcode.com/",
    title: "LeetCode",
    des: "An online platform for coding interviews, contests, and algorithm practice."
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://live.icpc.global/",
    title: "ICPC Live Archive",
    des: "Archived problems from the International Collegiate Programming Contest (ICPC)."
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://www.spoj.com/",
    title: "SPOJ (Sphere Online Judge)",
    des: "An online judge with a wide range of algorithmic and competitive programming problems."
  }
];
