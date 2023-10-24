import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.div`
    display: flex;
    
    align-items: center;
    justify-content: space-between;
    display: flex;
    background-color: #010116;
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

export const Numpy = () => {
    const [isTopicChecked, setIsTopicChecked] = useState({
        arraysandindexing: false,
        datatypes: false,
        broadcasting: false,
        vectorizedoperations: false,
        mathsandstatsfunc: false,
        linearalgebra: false,
        fileio: false,
        randnumbergeneration: false,
        performanceoptimization: false,
    });

    const handleCheckboxChange = (topic) => {
        setIsTopicChecked({ ...isTopicChecked, [topic]: !isTopicChecked[topic] });
    };

    useEffect(() => {
        localStorage.setItem("isTopicChecked", JSON.stringify(isTopicChecked));
    }, [isTopicChecked]);

    useEffect(() => {
        const storedTopicsChecked = localStorage.getItem("isTopicChecked");
        if (storedTopicsChecked) { setIsTopicChecked(JSON.parse(storedTopicsChecked)); }
    }, []);

    return (
        <>
            <Section>
                <Container>
                    <section className="text-white body-font">
                        <div className="mx-auto flex px-2 mt-8 mb-4 items-center justify-center flex-col">
                            <img
                                className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-contain object-center rounded"
                                alt="hero"
                                src="https://numpy.org/images/numpy-image.jpg"
                            />
                            <div className="text-center lg:w-full w-full">
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                                    Numpy
                                </h1>
                                <p className="mb-8 leading-relaxed text-justify">
                                    NumPy (Numerical Python) is a library for scientific computing in Python. It provides a high-performance multidimensional array object, along with a vast collection of routines for fast operations on arrays. NumPy arrays are stored in contiguous blocks of memory, making them significantly faster to access than Python lists. This is especially crucial for large arrays, where the performance difference can be substantial.
                                    NumPy also offers a plethora of vectorized functions, which can be applied to entire arrays simultaneously. This can significantly improve the performance of code that performs repeated operations on arrays.
                                    In addition to its support for arrays and vectorized operations, NumPy also provides a comprehensive set of functions for performing common mathematical operations, such as matrix multiplication, vector addition, and other types of mathematical operations. NumPy also provides a number of functions for performing linear algebra operations on arrays. This includes functions for solving systems of linear equations, calculating eigenvalues and eigenvectors, and performing other types of linear algebra operations.
                                </p>
                            </div>
                        </div>

                        {/* <-------------------------------Topics Section ----------------------------------------------> */}
                        <h2 className="mb-2 text-lg font-semibold text-white">
                            Topics you need to cover:
                        </h2>
                        <div className="flex flex-wrap m-2">
                            {topics.map((front) => {
                                return (
                                    <div className="p-2 lg:w-max md:w-1/2" key={front.title}>
                                        <div className="h-full flex items-center border-gray-200 border px-4 py-2 rounded-lg hover:scale-105 transition-all">
                                            <div className="flex items-center gap-3">
                                                <label htmlFor={front.storage} className="text-white title-font font-bold text-xl cursor-pointer">{front.title}</label>
                                                <input
                                                    type="checkbox"
                                                    id={front.storage}
                                                    checked={isTopicChecked[front.storage]}
                                                    onChange={() => handleCheckboxChange(front.storage)}
                                                    className="w-4 h-4"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* <-----------------------------------------------RESOURCES SECTION---------------------------------------------------> */}
                        <section className="text-white body-font">
                            <div className=" px-0 py-14 mx-auto">
                                <div className="flex flex-col text-left w-full mb-2">
                                    <h1 className="text-xl font-bold title-font mb-4 text-white-900 tracking-widest">
                                        Resources
                                    </h1>
                                </div>
                                <ul className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                                    {resources.map((resource) => {
                                        return (
                                            <li className="lg:w-full bg-black/20 p-4 rounded-xl hover:scale-[102%] transition-all duration-200 ease-in-out" key={resource.title}>
                                                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                                    <img
                                                        alt="team"
                                                        className="flex-shrink-0 rounded-lg w-48 h-48 object-contain sm:mb-0 mb-4"
                                                        src={resource.image}
                                                    />
                                                    <div className="text-left flex-grow sm:pl-8">
                                                        <Link to={resource.link} target={"_blank"}>
                                                            <h2 className="title-font font-medium text-xl pb-1 text-white underline underline-offset-2">
                                                                {resource.title}
                                                            </h2>
                                                        </Link>

                                                        <h3 className="text-white mb-3">{resource.type}</h3>
                                                    </div>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </section>
                    </section>
                </Container>
            </Section>
        </>
    );
};

const resources = [
    {
        title: "NumPy Roadmap",
        image: "https://numpy.org/devdocs/_static/numpylogo.svg",
        type: "Roadmap",
        link: "https://numpy.org/devdocs/user/absolute_beginners.html",
    },
    {
        title: "NumPy Tutorial",
        image: "https://en.vetores.org/wp-content/uploads/w3schools.png",
        type: "Documentation",
        link: "https://www.w3schools.com/python/numpy/default.asp",
    },
    {
        title: "Python NumPy - GFG",
        image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png",
        type: "Article",
        link: "https://www.geeksforgeeks.org/python-numpy/",
    },
    {
        title: "Python NumPy Tutorial for Beginners - Youtube",
        image: "https://img.youtube.com/vi/QUT1VHiLmmI/sddefault.jpg",
        type: "Youtube Video",
        link: "https://youtu.be/QUT1VHiLmmI?feature=shared",
    },
    {
        title: "Introduction to Numpy",
        image: "https://www.simplilearn.com/ice9/assets/skillup-logo-new.svgz",
        type: "Course",
        link: "https://www.simplilearn.com/learn-numpy-basics-free-course-skillup",
    },
];

const topics = [
    {
        title: "Arrays and indexing",
        storage: "arraysandindexing",
    },
    {
        title: "Data types",
        storage: "datatypes",
    },
    {
        title: "Broadcasting",
        storage: "broadcasting",
    },
    {
        title: "Linear algebra",
        storage: "linearalgebra",
    },
    {
        title: "Vectorized operations",
        storage: "vectorizedoperations",
    },
    {
        title: "Mathematical and statistical functions",
        storage: "mathsandstatsfunc",
    },
    {
        title: "Performance optimization",
        storage: "performanceoptimization",
    },
    {
        title: "Random number generation",
        storage: "randnumbergeneration",
    },
    {
        title: "File input and output",
        storage: "fileio",
    },

    
];