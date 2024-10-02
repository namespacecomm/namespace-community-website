
import React from 'react';
// import img from '../../../../public/img/project-images/Hyperledger-fabric.png'
export const Hyperledger = () => {
    return (
        <>
            <section className="text-gray-600 body-font text">
                <div className="px-5 py-24 mx-auto flex flex-wrap">
                    <h1 className="text-2xl text-center font-bold leading-tight text-white sm:text-2xl lg:text-4xl">
                    Hyperledger Fabric
                    </h1>

                    <div className="flex flex-wrap w-full">
                        <div className="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6">
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>

                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                                    </svg>
                                </div>

                                <div className="flex-grow pl-4">
                                    <h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                                        Learning Hyperledger Fabric
                                    </h2>
                                    <p className="leading-relaxed text-white text-justify">
                                    Hyperledger Fabric is a blockchain platform designed to support the development of enterprise-grade distributed applications. It is an open-source project under the Linux Foundation's Hyperledger umbrella.
                                    </p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M21 18v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1m18-2H3a2 2 0 00-2 2v4a2 2 0 002 2h18a2 2 0 002-2v-4a2 2 0 00-2-2zM6 12v-2a2 2 0 012-2h8a2 2 0 012 2v2"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                                        Features:
                                    </h2>
                                    <p className="leading-relaxed text-white text-justify">
                                    Fabric is designed to be modular, allowing for different components to be added or removed as needed. This makes it flexible and adaptable to different use cases.
                                    Fabric is optimized for performance, with a focus on scalability and throughput. It uses a pluggable consensus mechanism, allowing for different consensus algorithms to be used depending on the specific requirements of the application.
                                    Fabric supports the ability to create private channels, which are restricted to a subset of participants. This allows for sensitive data to be shared only with authorized parties.
                                    Fabric uses a variety of security mechanisms to protect data and prevent attacks. These include encryption, digital signatures, and access controls.
                                    Fabric is designed to be interoperable with other blockchain platforms and systems. This allows for the creation of more complex and interconnected networks.
                                    </p>
                                </div>
                            </div>
                            <div className="flex relative">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-bold title-font text-xl text-white mb-1 tracking-wider">
                                    Use cases:
                                    </h2>
                                    <p className="leading-relaxed text-white text-justify">
                                    Supply chain management: Fabric can be used to track the movement of goods through a supply chain, ensuring transparency and accountability.
                                    Financial services: Fabric can be used to create new financial products and services, such as digital currencies and smart contracts.
                                    Healthcare: Fabric can be used to manage patient data and medical records, ensuring privacy and security.
                                    IoT: Fabric can be used to connect IoT devices and create decentralized applications for data sharing and management.
                                    Government: Fabric can be used to create secure and transparent government services, such as voting and land registration.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <img
                            className="lg:w-2/5 md:w-1/2 object-contain object-center rounded-lg md:mt-0 mt-12"
                            src="https://www.ledgerinsights.com/wp-content/uploads/2020/01/hyperledger-fabric.jpg"
                            alt="Hyperledger-fabric"
                        />
                    </div>
                </div>
            </section>

            <section>
                <div className="px-5 py-0 mx-auto">
                    <div className="flex flex-col text-left w-full mb-10">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                            Some Important Links
                        </h1>
                        <p className="w-full text-left mx-auto leading-relaxed text-base">
                            These provide the overview of Hyperledger Fabric's main features and tools.
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-2">
                        {Rustrss.map((tools) => (
                            <div key={tools.title} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                    <img alt="tools" className="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4" src={tools.image} />
                                    <div className="flex-grow">

                                        <h2 className="text-white title-font font-bold underline text-xl">
                                            {tools.title}
                                        </h2>

                                        <p className="text-white">
                                            {typeof tools.description === 'object' ? (
                                                <>
                                                    {tools.description.docLink && (
                                                        <>
                                                            <br />
                                                            <a href={tools.description.docLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Official Documentation: </a> {tools.description.textDoc}
                                                        </>
                                                    )}

                                                    {tools.description.subredditLink && (
                                                        <>
                                                            <br />
                                                            <a href={tools.description.subredditLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Hyperledger Fabric subreddit: </a> {tools.description.text}
                                                        </>
                                                    )}
                                                    {tools.description.userForumLink && (
                                                        <>
                                                            <br />
                                                            <a href={tools.description.userForumLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Udamy Course </a> {tools.description.text1}
                                                        </>
                                                    )}
                                                    {tools.description.czLink && (
                                                        <>
                                                            <br />
                                                            <a href={tools.description.czLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Crypto-zombies: </a> {tools.description.textcz}
                                                        </>
                                                    )}
                                                    {tools.description.ytLink && (
                                                        <>
                                                            <br />
                                                            <a href={tools.description.ytLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Youtube:</a> {tools.description.textyt}
                                                        </>
                                                    )}
                                                </>
                                            ) : (
                                                tools.description
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </section>
        </>
    );
};

const Rustrss = [
    {
        title: 'Official Documentation',
        image: "https://www.ledgerinsights.com/wp-content/uploads/2020/01/hyperledger-fabric.jpg",
        description: {
            textDoc: 'In general terms, a blockchain is an immutable transaction ledger, maintained within a distributed network of peer nodes',
            docLink: "https://hyperledger-fabric.readthedocs.io/en/release-2.5/"
        },
    },
    {
        title: 'Community Resources',
        image: "https://www.ledgerinsights.com/wp-content/uploads/2020/01/hyperledger-fabric.jpg",
        description: {
            text: 'Here are some essential resources and URLs to explore Hyperledger Fabric communities:',
            subredditLink: 'https://medium.com/novai-hyperledger-fabric-101/exploring-the-communities-of-hyperledger-fabric-a1d59a61618a',
        },

    },
    {
        title: 'Learning Resources  ',
        image: "https://www.ledgerinsights.com/wp-content/uploads/2020/01/hyperledger-fabric.jpg",
        description: {
            text: 'A curated list of resources for creating applications with Hyperledger Fabric',
            text1: 'Hyperledger is an open-source collaborative initiative by The Linux Foundation to advance cross-industry blockchain technologies, involving leaders from finance, banking, IoT, supply chains, manufacturing, and technology.',
            subredditLink: 'https://github.com/wearetheledger/awesome-hyperledger-fabric',
            userForumLink: 'https://www.udemy.com/course/hyperledger-fabric-deep-dive-for-architects-and-engineers/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Search_DSA_GammaCatchall_NonP_la.EN_cc.India&campaigntype=Search&portfolio=India&language=EN&product=Course&test=&audience=DSA&topic=&priority=Gamma&utm_content=deal4584&utm_term=_._ag_166578677881_._ad_700948726517_._kw__._de_c_._dm__._pl__._ti_dsa-1456167871416_._li_9062010_._pd__._&matchtype=&gad_source=1&gclid=Cj0KCQjw3vO3BhCqARIsAEWblcAnaWCgowAvExeem221wvEUvBkI3BOFysVDLVvlEod508QTp3uPpXIaAjb-EALw_wcB&couponCode=ST15MT100124B'
        },
    },
];

