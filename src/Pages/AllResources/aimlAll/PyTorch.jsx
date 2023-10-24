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

export const PyTorch = () => {
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
                                    PyTorch
                                </h1>
                                <p className="mb-8 leading-relaxed text-justify">
                                PyTorch is an open-source machine learning library developed by Facebook's AI Research lab,
                                which facilitates the development of deep learning projects. At its core,
                                PyTorch provides a multidimensional array library similar to NumPy, but with additional features
                                for GPU acceleration, making it suitable for high-performance computation. PyTorch adopts a
                                dynamic computational graph approach, allowing for a more intuitive and flexible workflow, 
                                especially during the debugging and development phases. It provides a rich ecosystem comprising
                                a vast array of pre-built models, tools, and libraries, fostering community-driven development
                                and sharing. Its native support for autograd (automatic differentiation) simplifies the
                                computation of gradients, which is crucial for backpropagation in neural networks.
                                Additionally, PyTorch offers robust support for various neural network architectures,
                                optimization routines, and performance profiling, making it a popular choice among researchers
                                and developers in the AI community.
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
        title: "PyTorch Official Documentation",
        image: "data:image/png;base64,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",
        type: "Roadmap",
        link: "https://pytorch.org/docs/stable/index.html",
    },
    {
        title: "Getting Started with PyTorch",
        image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png",
        type: "Article",
        link: "https://www.geeksforgeeks.org/getting-started-with-pytorch/",
    },
    {
        title: "PyTorch Tutorial",
        image: "https://cdn.lovesavingsgroup.com/logos/tutorials-point.jpg",
        type: "Documentation",
        link: "https://www.tutorialspoint.com/pytorch/index.htm",
    },
    {
        title: "PyTorch for Deep Learning & Machine Learning – Full Course",
        image: "data:image/jpeg;base64,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",
        type: "Youtube Video",
        link: "https://youtu.be/V_xro1bcAuA?si=7c489-FFCCkJyYPm",
    },
    {
        title: "Become a Deep Learning Engineer : Introduction to PyTorch",
        image: "https://www.simplilearn.com/ice9/assets/skillup-logo-new.svgz",
        type: "Course",
        link: "https://www.simplilearn.com/free-pytorch-course-beginners-skillup",
    },
];

const topics = [
    {
        title: "Autograd",
        storage: "tensorsanddatastructures",
    },
    {
        title: "Neural Networks",
        storage: "variablesandops",
    },
    {
        title: "nn.Module",
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
        title: "CUDA and GPU Acceleration",
        storage: "tensorflowserving",
    },
   

];