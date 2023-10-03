import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.div`
    display: flex;
    flex-direction: column;
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

export const NLP  = () => {
    const [isTopicChecked, setIsTopicChecked] = useState({
        textPreprocessing: false,
        textRepresentation: false,
        statsAndMlModels: false,
        languageModels: false,
        entityRecognition: false,
        partOfSpeechTagging: false,
        semanticParsing: false,
        sentimentAnalysis: false,
        textClassification: false,
        machineTranslation: false,
        topicModeling: false,
        textGeneration: false,
        practicalApplication: false,
        toolsAndLibraries: false,
        evaluationMetrics: false,
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
                        src="https://img.freepik.com/free-vector/isometric-npl-illustration_23-2149260763.jpg?size=626&ext=jpg"
                    />
                    <div className="text-center lg:w-full w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                            Natural Language Processing (NLP)
                        </h1>
                        <p className="mb-8 leading-relaxed text-justify">
                            Natural Language Processing (NLP) is a specialized field within artificial intelligence (AI) that revolves around the interaction between computers and human languages. Its fundamental goal is to empower computers with the ability to comprehend, interpret, and generate human language in a manner that is meaningful and valuable. NLP is a multifaceted domain that grapples with the intricacies of language, encompassing tasks like understanding the context of text, identifying entities within it (such as names of individuals, places, or organizations), and establishing relationships between these entities. Additionally, NLP empowers computers to generate human-like text, which finds applications in chatbots, automated content creation, and summarization of lengthy documents. This technology is pivotal in an array of applications, from language translation services to sentiment analysis and beyond, fundamentally enhancing the interaction between humans and machines.
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
        title: "NLP Roadmap",
        image: "https://assets.static-upwork.com/org-logo/1584185526120599552?date=1696343474220",
        type: "Roadmap",
        link: "https://blog.futuresmart.ai/nlp-roadmap-2023-step-by-step-guide",
    },
    {
        title: "TutorialsPoint Docs",
        image: "https://play-lh.googleusercontent.com/FCMz5gMEQlgvAn99DzjX9Z2CuQ_MY2aInD1j87Y7uC1cimimyI2YjvHeqGVFyPW6EQ=s188",
        type: "Documentation",
        link: "https://www.tutorialspoint.com/natural_language_processing/natural_language_processing_quick_guide.htm",
    },
    {
        title: "Learn Natural Language Processing with Deep Learning",
        image: "https://web.stanford.edu/class/cs224n/images/stanford-nlp-logo-new.jpg",
        type: "Stanford University's Course",
        link: "https://web.stanford.edu/class/cs224n/",
    },
    {
        title: "Natural Language Toolkit",
        image: "https://egoesp.com/machine_learning/img/logo_nltk.webp",
        type: "Documentation",
        link: "https://www.nltk.org",
    },
    {
        title: "Natural Language Processing (NLP) Tutorial",
        image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png",
        type: "Article",
        link: "https://www.geeksforgeeks.org/natural-language-processing-nlp-tutorial/",
    },
    {
        title: "Natural Language Processing with spaCy & Python - Course for Beginners",
        image: "https://ccweb.imgix.net/https%3A%2F%2Fimg.youtube.com%2Fvi%2FdIUTsFT2MeQ%2Fhqdefault.jpg?ar=16%3A9&auto=format&cs=strip&fit=crop&h=380&ixlib=php-4.1.0&w=535&s=2f695fbe721716ff01f94eaa9d373108",
        type: "Youtube Video",
        link: "https://www.youtube.com/watch?v=dIUTsFT2MeQ",
    },
    {
        title: "NLP Tutorial Python",
        image: "https://i.ytimg.com/vi/R-AG4-qZs1A/mqdefault.jpg",
        type: "Youtube Course",
        link: "https://www.youtube.com/playlist?list=PLeo1K3hjS3uuvuAXhYjV2lMEShq2UYSwX",
    }
];

const topics = [
    {
        title: "Text Preprocessing",
        storage: "textPreprocessing",
    },
    {
        title: "Text Representation",
        storage: "textRepresentation",
    },
    {
        title: "Statistical and Machine Learning Models",
        storage: "statsAndMlModels",
    },
    {
        title: "Language Models",
        storage: "languageModels",
    },
    {
        title: "Named Entity Recognition (NER)",
        storage: "entityRecognition",
    },
    {
        title: "Part-of-Speech (POS) Tagging",
        storage: "partOfSpeechTagging",
    },
    {
        title: "Semantic Parsing",
        storage: "semanticParsing",
    },
    {
        title: "Sentiment Analysis",
        storage: "sentimentAnalysis",
    },
    {
        title: "Text Classification",
        storage: "textClassification",
    },
    {
        title: "Machine Translation",
        storage: "machineTranslation",
    },
    {
        title: "Topic Modeling",
        storage: "topicModeling",
    },
    {
        title: "Text Generation",
        storage: "textGeneration",
    },
    {
        title: "Practical Applications",
        storage: "practicalApplication",
    },
    {
        title: "Tools and Libraries",
        storage: "toolsAndLibraries",
    },
    {
        title: "Evaluation Metrics",
        storage: "evaluationMetrics",
    },
];