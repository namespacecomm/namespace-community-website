import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styled from "styled-components";
import "./Main.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: flex;
  ${"" /* background-color: rgb(9, 9, 121);
  background-repeat: no-repeat;
  background: linear-gradient(
    262deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(2, 0, 36, 1) 1%
  ); */
    }
  background-color: #010116;
  ${"" /* background-repeat: no-repeat;
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
                <Navbar />
                <Container>
                    {/* --------------------------------MAIN HEADING------------------------------------------------------ */}
                    <div className=" px-0 py-10 ">
                        <h1 className="text-3xl text-center font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                            COMPETITIVE PROGRAMMING
                        </h1>
                        {/* <************************************MAIN SECTION*******************************************> */}
                        <section class="text-gray-600 body-font">
                            <div class="px-5 py-24 mx-auto flex flex-wrap">
                                <div class="flex flex-wrap w-full">
                                    <div class="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6">
                                        <div class="flex relative pb-12">
                                            <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                            </div>
                                            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 inline-flex items-center justify-center text-white relative z-10">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    class="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                                                </svg>
                                            </div>
                                            <div class="flex-grow pl-4">
                                                <h2 class="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                                                    Understand the Basics
                                                </h2>
                                                <p class="leading-relaxed text-white text-justify">
                                                    Competitive Programming involves solving algorithmic and data structure problems efficiently. Start by understanding fundamental concepts like data structures (arrays, linked lists, trees, graphs) and algorithms (sorting, searching, dynamic programming).
                                                </p>
                                            </div>
                                        </div>
                                        <div class="flex relative pb-12">
                                            <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                            </div>
                                            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 inline-flex items-center justify-center text-white relative z-10">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    class="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M21 18v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1m18-2H3a2 2 0 00-2 2v4a2 2 0 002 2h18a2 2 0 002-2v-4a2 2 0 00-2-2zM6 12v-2a2 2 0 012-2h8a2 2 0 012 2v2"></path>
                                                </svg>
                                            </div>
                                            <div class="flex-grow pl-4">
                                                <h2 class="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                                                    Practice Regularly
                                                </h2>
                                                <p class="leading-relaxed text-white text-justify">
                                                    Just like in sports, regular practice is essential in competitive programming. Solve a variety of problems on online platforms like Codeforces, LeetCode, and HackerRank to improve your problem-solving skills and speed.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="flex relative pb-12">
                                            <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                            </div>
                                            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 inline-flex items-center justify-center text-white relative z-10">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    class="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
                                                </svg>
                                            </div>
                                            <div class="flex-grow pl-4">
                                                <h2 class="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                                                    Learn Advanced Algorithms
                                                </h2>
                                                <p class="leading-relaxed text-white text-justify">
                                                    Dive deeper into complex algorithms such as graph algorithms (Dijkstra's, Floyd-Warshall), dynamic programming, and number theory. Understanding and implementing advanced algorithms is crucial for solving challenging problems efficiently.
                                                </p>
                                            </div>
                                        </div>

                                        <div class="flex relative pb-12">
                                            <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                            </div>
                                            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 inline-flex items-center justify-center text-white relative z-10">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    class="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
                                                </svg>
                                            </div>
                                            <div class="flex-grow pl-4">
                                                <h2 class="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                                                    Participate in Contests
                                                </h2>
                                                <p class="leading-relaxed text-white text-justify">
                                                    Engage in coding contests on platforms like CodeChef, AtCoder, and Topcoder. Competing in contests exposes you to a variety of problem types and improves your ability to think critically and optimize solutions under time constraints.
                                                </p>
                                            </div>
                                        </div>

                                        <div class="flex relative pb-12">
                                            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 inline-flex items-center justify-center text-white relative z-10">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    class="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                                    <path d="M22 4L12 14.01l-3-3"></path>
                                                </svg>
                                            </div>
                                            <div class="flex-grow pl-4">
                                                <h2 class="font-bold title-font text-xl text-white mb-1 tracking-wider">
                                                    Analyse and Learn
                                                </h2>
                                                <p class="leading-relaxed text-white text-justify">
                                                    After contests, thoroughly analyze your solutions and editorials for problems you couldn't solve. Understand different approaches, optimizations, and coding styles. Learning from mistakes is an integral part of improving in competitive programming.
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    <img
                                        class="lg:w-2/5 md:w-1/2 object-contain object-center rounded-lg md:mt-0 mt-12"
                                        src="https://i.ibb.co/RyJZwg8/cp.png"
                                        alt="step"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* <-----------------------------------------------END OF MAIN SECTION-------------------------------------------------> */}
                        {/* <------------------------------------Basic Algo-------------------------------------------------------> */}
                        <section class="text-white body-font">
                            <div class="px-5 py-0 mx-auto">
                                <div class="flex flex-col text-left w-full mb-10">
                                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                                        1. Algorithmic Foundations
                                    </h1>
                                    <p class="w-full text-left mx-auto leading-relaxed text-base">
                                        Below are the topics that you need to master to excel in competitive programming.
                                    </p>
                                </div>
                                <div class="flex flex-wrap -m-2">
                                    {algorithmicFoundations.map((topic) => {
                                        return (
                                            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                                                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                                    <img
                                                        alt="topic"
                                                        class="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4"
                                                        src={topic.image}
                                                    />
                                                    <div class="flex-grow">
                                                        <Link to={topic.to}>
                                                            <h2 class="text-white title-font font-bold underline text-xl">{topic.title}</h2>
                                                        </Link>
                                                        <p class="text-white">{topic.des}</p>
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
                                <div class="flex flex-col text-left w-full mb-10">
                                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                                        2. Advanced Data Structures
                                    </h1>
                                    <p class="w-full text-left mx-auto leading-relaxed text-base">
                                        Below are the topics that you need to master to become proficient in competitive programming.
                                    </p>
                                </div>
                                <div class="flex flex-wrap -m-2">
                                    {advancedDataStructures.map((topic) => {
                                        return (
                                            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                                                <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                                    <img
                                                        alt="topic"
                                                        class="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4"
                                                        src={topic.image}
                                                    />
                                                    <div class="flex-grow">
                                                        <Link to={topic.to}>
                                                            <h2 class="text-white title-font font-bold underline text-xl">{topic.title}</h2>
                                                        </Link>
                                                        <p class="text-white">{topic.des}</p>
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
                            </div>
                        </section>

                    </div>
                </Container>
            </Section>
            <Footer />
        </>
    );
};

const algorithmicFoundations = [
    {
        image: "https://i.ibb.co/KDmVCHq/3014296.png",
        to: '/algorithmic-topic1',
        title: 'Sorting Algorithms',
        des: 'Understand various sorting algorithms such as quicksort, mergesort, etc.',
    },
    {
        image: "https://i.ibb.co/KDmVCHq/3014296.png",
        to: '/algorithmic-topic2',
        title: 'Searching Algorithms',
        des: 'Learn different searching algorithms like binary search, linear search, etc.',
    },
    {
        image: "https://i.ibb.co/KDmVCHq/3014296.png",
        to: '/algorithmic-topic3',
        title: 'Dynamic Programming',
        des: 'Master the technique of breaking down complex problems into simpler, more manageable subproblems.',
    },
    {
        image: "https://i.ibb.co/KDmVCHq/3014296.png",
        to: '/algorithmic-topic4',
        title: 'Graph Algorithms',
        des: 'Explore algorithms to solve problems related to graphs, such as shortest paths, minimum spanning tree, etc.',
    },
    {
        image: "https://i.ibb.co/KDmVCHq/3014296.png",
        to: '/algorithmic-topic5',
        title: 'Bit Manipulation',
        des: 'Understand operations on individual bits of numbers, often used in competitive programming.',
    },
    {
        image: "https://i.ibb.co/KDmVCHq/3014296.png",
        to: '/algorithmic-topic6',
        title: 'Divide and Conquer',
        des: 'Learn the approach of breaking a problem into subproblems, solving them independently, and combining solutions.',
    },
];

const advancedDataStructures = [
    {
        image: "https://i.ibb.co/KDmVCHq/3014296.png",
        to: '/data-structure-topic1',
        title: 'Graph Data Structures',
        des: 'Explore different graph representations and algorithms like DFS, BFS, etc.',
    },
    {
        image: "https://i.ibb.co/KDmVCHq/3014296.png",
        to: '/data-structure-topic2',
        title: 'Tree Data Structures',
        des: 'Understand tree-based data structures like BST, AVL tree, etc.',
    },
    {
        image: "https://i.ibb.co/KDmVCHq/3014296.png",
        to: '/data-structure-topic3',
        title: 'Trie Data Structure',
        des: 'Learn about the trie data structure, useful for efficient string operations.',
    },
    {
        image: "https://i.ibb.co/KDmVCHq/3014296.png",
        to: '/data-structure-topic4',
        title: 'Heap Data Structure',
        des: 'Understand the heap data structure and its applications in priority queues and heapsort.',
    },
    {
        image: "https://i.ibb.co/KDmVCHq/3014296.png",
        to: '/data-structure-topic5',
        title: 'Hash Table',
        des: 'Learn about the hash table data structure and its efficient data retrieval operations.',
    },
    {
        image: "https://i.ibb.co/KDmVCHq/3014296.png",
        to: '/data-structure-topic6',
        title: 'Disjoint Set (Union-Find)',
        des: 'Explore the disjoint-set data structure and its applications, such as in Kruskal\'s algorithm for minimum spanning trees.',
    },
];
