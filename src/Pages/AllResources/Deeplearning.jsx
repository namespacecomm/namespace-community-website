import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #010116;
`;

const Container = styled.div`
  scroll-snap-align: center;
  max-width: 1400px;
  width: 100%;
  padding-top: 100px;
  @media only screen and (max-width: 768px) {
    width: 90vw;
    overflow-y: scroll;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const DeepLearning = () => {
    const [dlTopicsChecked, setDlTopicsChecked] = useState({
        neuralNetworks: false,
        deepNeuralNetworks: false,
        convolutionalNetworks: false,
        recurrentNetworks: false,
        naturalLanguageProcessing: false,
        reinforcementLearning: false,
        generativeAdversarialNetworks: false,
    });

    const handleCheckboxChange = (topic) => {
        setDlTopicsChecked({
            ...dlTopicsChecked,
            [topic]: !dlTopicsChecked[topic],
        });
    };

    useEffect(() => {
        localStorage.setItem("dlTopicsChecked", JSON.stringify(dlTopicsChecked));
    }, [dlTopicsChecked]);

    useEffect(() => {
        const storedTopicsChecked = localStorage.getItem("dlTopicsChecked");
        if (storedTopicsChecked) {
            setDlTopicsChecked(JSON.parse(storedTopicsChecked));
        }
    }, []);

    return (
        <>
            <Section>
                <Navbar />
                <Container>
                    <section className="text-white body-font">
                        <div className="mx-auto flex px-2 mt-8 mb-4 items-center justify-center flex-col">
                            <img
                                className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-contain object-center rounded"
                                alt="hero"
                                src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Deep_Learning_Applications.jpg"
                            />
                            <div className="text-center lg:w-2/3 w-full">
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                                    Deep Learning
                                </h1>
                                <p className="mb-8 leading-relaxed text-justify">
                                    Deep Learning is a subset of machine learning where artificial neural networks, inspired by the human brain's structure and function, are used to model and solve complex tasks. It has found applications in various fields, including computer vision, natural language processing, and reinforcement learning.
                                </p>
                                <p className="mb-8 leading-relaxed text-justify">
                                    Deep Learning algorithms aim to automatically learn patterns and representations from data, enabling the development of models capable of making predictions, recognizing patterns, and generating creative content. Key concepts in Deep Learning include neural networks, layers, activation functions, loss functions, and optimization algorithms.
                                </p>
                                <p className="mb-8 leading-relaxed text-justify">
                                    Neural networks, the fundamental building blocks of Deep Learning, consist of interconnected nodes (neurons) organized into layers. These layers include an input layer, one or more hidden layers, and an output layer. Neurons within each layer process information and pass it to the next layer through weighted connections. The learning process involves adjusting these weights to minimize prediction errors.
                                </p>
                            </div>
                        </div>
                        <h2 className="mb-2 text-lg font-semibold text-white">
                            Topics you need to cover:
                        </h2>
                        <div className="flex flex-wrap justify-center">
                            {topics.map((dlTopic) => (
                                <div
                                    className="w-full sm:w-1/2 lg:w-1/3 p-4"
                                    key={dlTopic.storage}
                                >
                                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                                        <h2 className="text-white text-xl font-bold mb-4">
                                            {dlTopic.title}
                                        </h2>
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id={dlTopic.storage}
                                                checked={dlTopicsChecked[dlTopic.storage]}
                                                onChange={() => handleCheckboxChange(dlTopic.storage)}
                                                className="mr-2"
                                            />
                                            <label
                                                htmlFor={dlTopic.storage}
                                                className="text-white cursor-pointer select-none"
                                            >
                                                Completed
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </section>
                    <section className="text-white body-font">
                        <div className="px-0 py-14 mx-auto">
                            <div className="flex flex-col text-left w-full mb-2">
                                <h1 className="text-xl font-bold title-font mb-4 text-white-900 tracking-widest">
                                    Resources
                                </h1>
                            </div>
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                                {resources.map((resource, index) => {
                                    return (
                                        <div
                                            className="lg:w-full bg-black/20 p-4 rounded-xl hover:scale-[102%] transition-all duration-200 ease-in-out"
                                            key={index}
                                        >
                                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                                <img
                                                    alt="resource"
                                                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                                                    src={resource.image}
                                                />
                                                <div className="text-left flex-grow sm:pl-8">
                                                    <a
                                                        href={resource.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <h2 className="title-font font-medium text-xl pb-1 text-white underline underline-offset-2">
                                                            {resource.title}
                                                        </h2>
                                                    </a>
                                                    <h3 className="text-white mb-3">{resource.type}</h3>
                                                    <a
                                                        href={resource.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="mb-4"
                                                    >
                                                        Link
                                                    </a>
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
};

const resources = [
    {
        title: "Deep Learning Specialization on Coursera",
        image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-rebrand-logo-square.png?auto=format%2Ccompress&dpr=1",
        type: "Specialization",
        link: "https://www.coursera.org/specializations/deep-learning",
    },
    {
        title: "Deep Learning A-Z",
        image: "https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og",
        type: "Course",
        link: "https://www.udemy.com/course/deeplearning/",
    },
];

const topics = [
    {
        title: "Neural Networks",
        storage: "neuralNetworks",
    },
    {
        title: "Deep Neural Networks",
        storage: "deepNeuralNetworks",
    },
    {
        title: "Convolutional Networks",
        storage: "convolutionalNetworks",
    },
    {
        title: "Recurrent Networks",
        storage: "recurrentNetworks",
    },
    {
        title: "Natural Language Processing",
        storage: "naturalLanguageProcessing",
    },
    {
        title: "Reinforcement Learning",
        storage: "reinforcementLearning",
    },
    {
        title: "Generative Adversarial Networks",
        storage: "generativeAdversarialNetworks",
    },
];

export default DeepLearning;
