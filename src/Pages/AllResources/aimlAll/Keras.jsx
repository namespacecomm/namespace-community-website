import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.div`
    display: flex;
    
    align-items: center;
    justify-content: space-between;
    
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

export const Keras = () => {
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
                                alt="Keras"
                                src="data:image/png;base64,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"
                            />
                            <div className="text-center lg:w-full w-full">
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                                    Keras
                                </h1>
                                <p className="mb-8 leading-relaxed text-justify">
                                Keras is an open-source neural network library in Python, acting as an interface for 
                                TensorFlow. It's designed for fast experimentation with deep learning, offering 
                                user-friendly, modular, and extensible attributes. Keras provides common neural-network 
                                building blocks like layers and activation functions, making it straightforward to 
                                quickly develop and train neural network architectures.
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
        title: "Keras Official Documentation",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEXQAAD////NAAD13Nz87+/wwMD12dnKAADuuLjXRUX9+Pjrra3XQkLvu7vWPz/vvr7ppKTcZGTbXl7aWFjZUlLYS0vonZ3mlpb55OTfdHTebW3xxsb00NDdZ2fts7Pmk5PTISHjhobhfHzSHBzVMTHRDw/VNTXfcHDUKip+QHsdAAAFFElEQVR4nO3da1fbMAwG4NilKQQYjDuU+4Dx/3/hekrHSmOJ1NbFyvR+pRg9JzmQRIppwtjTaBfAnv9D2LWTcabtVsJ2FseZWbsSTmIzzsSJC63HhfbjQvtxof240H5caD8utB8X2o8L7ceF9uNC+3Gh/bjQflxoPy60Hxfajwvtx4X240L7caH9kAm/DiKRLVS4WEMoPJyuZTd7sXgzn25kflpUGJFwucxa2szV4nVisJCgtGJhvN2sap61XPydAIbwo6A0GmGc9qs6ylgv3iSBWWv9W5RAGPdTZR1vvSBwBBdRF+6kqtp6QegILnJRcoJVI0SAoRuDEAMuKsxPLcJ4hwGn9o8hDsz70/N36SqEjMA6hHynaFOHkBVYg5AXWIEw/sSARRdsH+trC7mB6kJ2oLYwnmDAQ4onK7pCAaCuUAKoKsSB+c96Nn6KnlAGqCgUAuoJ4ykGvKd7Pq0lFANqCfFTlBKoJJQ7gkpCSaCKUBSoIYxnGHCfussnLxQGygulgeJCcaC0UB4oLFQAygpx4PbtuGHVCQrjuQJQUqgDFBQqAeWEWkAxoRpQSogDS9r031cnIox7akAZoSZQRKgKlBDqAgWEOPCSG8gvjAe6QHahOpBbqA9kFsYf6kBeIQ58EAGyCnHg1YyQgVXHKESBITxZP4btIw4M4Z3QgVTHJtzpvhNeGf9NMyDsV2zL6jSF4Y1QAlanKtwxfU0zKDwPgb9WpysMZ4QWoDplYcl7BgOrUxaSjB/i1WkLw53ZpxiDQ6hJVqcvvLX6rG14no0+L90ivwhB/erEhBP41a3cd2qHVSclXNwQH4Ff5LzdlxIuDxN8P/VCJ+pVJyP8+H0JDyQy3irKCFev9sRd8BMWe8Br+RxpjvB5ek7jSVQnIFy7RYLHTdhuFQWE6ydgvAc/Rj11+fkj2YVfn2wjnz0pxqSr4xZuPhWFG/pdIQWqjlnYu+ZMb8CwTNn7vmB1vMLrxHDbVp8uD68weXeL9IRf8yFwdZzC0/QQ7TEo5LhV5BSeQZPe8HnK0K1hFO6BKyJNqcfsKsDq+HpP8ILxAhTSX4IrvRV0BRLJuzVKb3a9gMKyTaFS1Sm9u3YJCqkvwdXeP5ykvmcZ4m6N2juk76AwlO1A16tO7S3ZB1BI261RfNMZPk9JuzWKb6sjsxo3hETN9/GfYGJ2LYkfo7mnQgsKCS/BVffFeIUPIl23Rnfnj2eYSNatUd69pbcr6FbfPqw63R14kPOUqlujvcdQas/ZVYgGptT3iZqDQqJLcG1h08AHkaZboy6EN54l6taoC9nPU30hdp5S7DRUgxDZN5GgW1ODEBlhIOjW1CDERhjKuzV1CJE9lYq7NXUIkRGG4m5NHUJshKF0YKoSYYNsrFTYralFiIwwFL5bU4sQa7mVdWuqESKjNmXdmnqEyAhDOMiurSYhdp6WXIJXJMRGGAq6NTUJkRGGgm5NTULsPM2/BK9KiI0wZO8+X5cQGWEI17nVVSXERhhyN7+uTNi8gcLH3Oo05mmwtaARhuwBW5L/2ZXc/X8vsyDgPM2+TaT5r2QJ4kHueukRhvw/+UT/Wa73GCIbCIwwFNRGIuwdxXxgujVccHdBJNxcVfG7e6uxCGuKC+3HhfbjQvtxof240H5caD8utB8X2o8L7ceF9uNC+3Gh/bjQflxoPy60Hxfajwvtx4X240L7caH9uNB+PoXtLI4zs3Yl7NrJONN2K+G440L7+QPK4U+zmdKNJQAAAABJRU5ErkJggg==",
        type: "Roadmap",
        link: "https://keras.io/",
    },
    {
        title: "Image Classification using Keras",
        image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png",
        type: "Article",
        link: "https://www.geeksforgeeks.org/python-image-classification-using-keras/",
    },
    {
        title: "Keras Tutorial",
        image: "https://cdn.lovesavingsgroup.com/logos/tutorials-point.jpg",
        type: "Documentation",
        link: "https://www.tutorialspoint.com/keras/index.htm",
    },
    {
        title: "Keras with Tensorflow",
        image: "https://i.ytimg.com/vi/qFJeN9V1ZsI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCV04UeCAcyWAz2JgMdY6RuYvsnjg",
        type: "Youtube Video",
        link: "https://www.youtube.com/watch?v=qFJeN9V1ZsI&pp=ygUFa2VyYXM%3D",
    },
    {
        title: "Introduction to Deep Learning with Keras",
        image: "https://www.simplilearn.com/ice9/assets/skillup-logo-new.svgz",
        type: "Course",
        link: "https://www.simplilearn.com/learn-keras-for-beginners-free-course-skillup",
    },
];

const topics = [
    {
        title: "Backend Engine",
        storage: "tensorsanddatastructures",
    },
    {
        title: "Functional API",
        storage: "variablesandops",
    },
    {
        title: "Layers and Models",
        storage: "kerasapi",
    },
    {
        title: "Optimizers",
        storage: "automaticdiff",
    },
    {
        title: "Regularization Techniques",
        storage: "modeltrainandopt",
    },
    {
        title: "Model Serialization and Deserialization",
        storage: "modelevaluation",
    },
    {
        title: "Multi-GPU and Distributed Training",
        storage: "tensorflowserving",
    },
   

];