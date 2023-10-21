import React from 'react'

const Mathematics = () => {
    return (
        <>
            <section>
                <container>
                    <section className="text-white body-font">
                        <div className="mx-auto flex px-2 mt-8 mb-4 items-center justify-center flex-col">
                            <img
                                className="lg:w-2/6 md:w-3/6 w-5/6 m-10 object-contain object-center rounded"
                                alt="hero"
                                src="https://static.scientificamerican.com/blogs/cache/file/15E43A6F-3941-471A-BF4A81AECDC8C8AA_source.jpg?w=590&h=800&19535223-FF51-4AE3-A05064AFC6E375F5"
                            />
                            <div className="text-center lg:w-2/3 w-full">
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                                    Mathematics for Data-science
                                </h1>
                                <p className="mb-8 leading-relaxed text-justify">
                                    Mathematics serves as the cornerstone of data science, providing the essential tools and techniques for understanding and solving complex problems. In the realm of data science, mathematics acts as a guiding light, illuminating the path to uncovering valuable insights from vast datasets. Let's delve into the significance of mathematics in data science and explore its applications in various fields.
                                </p>
                            </div>
                        </div>
                        <h2 className="mb-2 mx-5 text-lg font-semibold text-white">
                            Topics you need to cover:
                        </h2>
                        <div className="flex flex-wrap justify-center">
                            {

                            }
                        </div>
                    </section>
                    <section className="text-white body-font">
                        <div className="px-0 py-14 mx-auto">
                            <div className="flex flex-col text-left w-full mb-2">
                                <h1 className="text-xl font-bold title-font mx-5 text-white-900 tracking-widest">
                                    Resources
                                </h1>
                            </div>
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 m-4">
                                {resources.map((resource, index) => {
                                    return (
                                        <div
                                            className="lg:w-full bg-black/20 p-4 rounded-xl hover:scale-[102%] transition-all duration-200 ease-in-out border-gray-200 border p-4"
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
                    <section className="text-white body-font">
                        <div className="px-0 py-14 mx-auto">
                            <div className="flex flex-col text-left w-full mb-2">
                                <h1 className="text-xl font-bold title-font mx-5 text-white-900 tracking-widest">
                                    Major Topics
                                </h1>
                            </div>
                            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 m-4">
                                {topics.map((tools) => {
                                    return (
                                        <div
                                            className="lg:w-full bg-black/20 p-4 rounded-xl hover:scale-[102%] transition-all duration-200 ease-in-out border-gray-200 border p-4"
                                        >
                                            <div className="text-left flex-grow sm:pl-8">
                                                <h2 className="title-font font-medium text-xl pb-1 text-white underline underline-offset-2">
                                                    {tools.title}
                                                </h2>

                                                <h3 className="text-white my-3">
                                                    {tools.brief}
                                                </h3>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </section>
                </container>
            </section>
        </>
    );
}
const resources = [
    {
        title: "Perfect channel to start learning essential mathematics",
        image: "https://yt3.googleusercontent.com/ytc/APkrFKa78JclPNY9Oh8Fy2b4v7PMDOKFcZcbKHum1tkd8A=s176-c-k-c0x00ffffff-no-rj",
        type: "Tutorial",
        link: "https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw",
    },
    {
        title: "A good site to test your skills",
        image: "https://projecteuler.net/images/clipart/euler_portrait.png",
        type: "Practice",
        link: "https://projecteuler.net/",
    },
];

const topics = [
    {
        title: "Foundation of Data science",
        brief: "At its core, data science is about making sense of data. Mathematics equips data scientists with the fundamental concepts necessary for data analysis and interpretation.",
    },
    {
        title: "Statistics",
        brief: "Statistical methods enable data scientists to draw inferences from data, assess uncertainties, and make data-driven decisions. Whether it's calculating means and variances or performing hypothesis testing, statistics empowers data scientists to validate their findings rigorously.",
    },
    {
        title: "Probability Theory",
        brief: "Probability theory is applied in various areas, such as machine learning algorithms, where probabilistic models are used for classification, regression, and clustering tasks.",
    },
    {
        title: "Calculus",
        brief: " Calculus-based optimization algorithm, are employed to minimize the error and enhance the accuracy of predictive models. Calculus also finds applications in time series analysis, where derivatives help analyze trends and patterns over time.",
    },
    {
        title: "Linear Algebra",
        brief: "Linear algebra is the study of vectors and linear equations, and it finds extensive applications in data science. Matrices, a fundamental concept in linear algebra, are used to represent and manipulate data efficiently.Linear algebra also underpins algorithms in deep learning, where neural networks are represented and optimized as matrices.",
    },
    {
        title: "Mathematical Modeling",
        brief: "Data scientists use mathematical models to simulate, predict, and optimize outcomes. Whether it's predicting stock prices, optimizing supply chains, or understanding the spread of diseases, mathematical modeling enables data scientists to gain valuable insights into complex systems.",
    },
];

export default Mathematics