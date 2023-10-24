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

export const Tensorflow = () => {
    const [isTopicChecked, setIsTopicChecked] = useState({
        tensorsanddatastructures: false,
        variablesandops: false,
        kerasapi: false,
        automaticdiff: false,
        modeltrainandopt: false,
        modelevaluation: false,
        tensorflowserving: false,
        tensorflowdebugger: false,
        tensorboard: false,
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
                                src="data:image/png;base64,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"
                            />
                            <div className="text-center lg:w-full w-full">
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                                    TensorFlow
                                </h1>
                                <p className="mb-8 leading-relaxed text-justify">
                                    TensorFlow is a powerful open-source software library for machine learning and artificial intelligence. It provides a comprehensive set of tools and APIs for building, training, and deploying machine learning models. TensorFlow's core data structure is the tensor, a multidimensional array that can be used to represent a wide variety of data types. TensorFlow supports a wide range of machine learning algorithms, including deep learning, linear regression, and support vector machines. It also provides a number of built-in optimizers and loss functions, making it easy to train machine learning models.
                                    TensorFlow is designed to be flexible and scalable. It can be used on a variety of hardware platforms, from laptops to large-scale distributed systems. TensorFlow also provides a number of tools for debugging and monitoring machine learning models, making it easier to identify and address problems.
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
        title: "TensorFlow Roadmap",
        image: "https://www.gstatic.com/devrel-devsite/prod/v89c3b644dadab0c1b29fcdfaa83db3f3db74c1887a83ba5a78318ee59aec3871/tensorflow/images/lockup.svg",
        type: "Roadmap",
        link: "https://www.tensorflow.org/guide",
    },
    {
        title: "Introduction to TensorFlow",
        image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png",
        type: "Article",
        link: "https://www.geeksforgeeks.org/introduction-to-tensorflow/",
    },
    {
        title: "TensorFlow Tutorial",
        image: "https://cdn.lovesavingsgroup.com/logos/tutorials-point.jpg",
        type: "Documentation",
        link: "https://www.tutorialspoint.com/tensorflow/index.htm",
    },
    {
        title: "TensorFlow 2.0 Complete - Youtube",
        image: "https://img.youtube.com/vi/tPYj3fFJGjk/sddefault.jpg",
        type: "Youtube Video",
        link: "https://youtu.be/tPYj3fFJGjk?feature=shared",
    },
    {
        title: "TensorFlow for Beginners",
        image: "https://www.simplilearn.com/ice9/assets/skillup-logo-new.svgz",
        type: "Course",
        link: "https://www.simplilearn.com/learn-tensorflow-basics-free-course-skillup",
    },
];

const topics = [
    {
        title: "Tensors and data structures:",
        storage: "tensorsanddatastructures",
    },
    {
        title: "Variables and operations",
        storage: "variablesandops",
    },
    {
        title: "Keras API",
        storage: "kerasapi",
    },
    {
        title: "Automatic differentiation",
        storage: "automaticdiff",
    },
    {
        title: "Model training and optimization",
        storage: "modeltrainandopt",
    },
    {
        title: "Model evaluation",
        storage: "modelevaluation",
    },
    {
        title: "TensorFlow Serving:",
        storage: "tensorflowserving",
    },
    {
        title: "TensorFlow Debugger",
        storage: "tensorflowdebugger",
    },
    {
        title: "TensorBoard",
        storage: "tensorboard",
    },


];