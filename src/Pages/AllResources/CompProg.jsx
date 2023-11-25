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
                    3. Competitive Programming Resources
                  </h1>
                  <p className="w-full text-left mx-auto leading-relaxed text-base">
                    Below are the resources that you can follow to learn more and master competitive programming.
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
                  4. Populer Youtube channels for competitive programming
                  </h1>
                  <p className="w-full text-left mx-auto leading-relaxed text-base">
                       Below are the populer youtube channels from where you can learn more about competitive programming topics.
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
    to:"/sortalgo",
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    // to: "/algorithmic-topic2",
    title: "Searching Algorithms",
    des: "Learn different searching algorithms like binary search, linear search, etc.",
    to:"/searchalgo",
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    // to: "/algorithmic-topic3",
    title: "Dynamic Programming",
    des: "Master the technique of breaking down complex problems into simpler, more manageable subproblems.",
    to:"/dynamicpro",
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
    image: "data:image/jpeg;base64,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",
    to: "https://www.geeksforgeeks.org/",
    title: "GeeksforGeeks",
    des: "Comprehensive tutorials, articles, and coding challenges for data structures, algorithms, and coding interviews."
  },
  {
    image: "data:image/png;base64,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",
    to: "https://leetcode.com/",
    title: "LeetCode",
    des: "Coding challenges, contests, and articles on data structures, algorithms, and programming topics."
  },
  {
    image: "https://camo.githubusercontent.com/49e713e1463692beaff7b552eb60511454485659f6131286eeab9db84e91840a/68747470733a2f2f69302e77702e636f6d2f6772616473696e67616d65732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031362f30352f3835363737315f3636383232343035333139373834315f313934333639393030395f6f2e706e67",
    to: "https://www.hackerrank.com/",
    title: "HackerRank",
    des: "Learn and practice data structures, algorithms, and AI through tutorials and challenges."
  },
  {
    image: "data:image/jpeg;base64,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",
    to: "https://www.topcoder.com/",
    title: "TopCoder",
    des: "Tutorials, articles, and practice problems for competitive programming and algorithms."
  },
  {
    image: "data:image/png;base64,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",
    to: "https://www.coursera.org/",
    title: "Coursera",
    des: "Online courses covering algorithms, data structures, machine learning, and more."
  },
  {
    image: "data:image/png;base64,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",
    to: "https://www.edx.org/",
    title: "edX",
    des: "Online courses from top universities covering data structures, algorithms, and programming topics."
  },
  {
    image: "data:image/png;base64,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",
    to: "https://ocw.mit.edu/",
    title: "MIT OpenCourseWare",
    des: "Free access to MIT course materials on various programming topics."
  },
  {
    image: "data:image/png;base64,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",
    to: "https://online.stanford.edu/",
    title: "Stanford Online",
    des: "Online courses and resources on algorithms, data structures, and more from Stanford University."
  },
  {
    image: "data:image/png;base64,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",
    to: "https://www.khanacademy.org/",
    title: "Khan Academy",
    des: "Free tutorials and interactive lessons for programming and computer science concepts."
  },
  {
    image: "data:image/png;base64,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",
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
    to: "https://www.youtube.com/channel/UCqL-fzHtN3NQPbYqGymMbTA",
    title: "TLE Eliminators",
    des: "A popular community for Competitive Programming enthusiasts, TLE Eminators is run and mentored by Priyansh Aggarwal",
  },
  {
    image: "https://i.ibb.co/KDmVCHq/3014296.png",
    to: "https://www.youtube.com/@iamluv",
    title: "Luv",
    des: "You can find almost every topic of competitive programming here",
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
