import React from 'react';

export const Solidity = () => {
    return (
        <>
            <section className="text-gray-600 body-font text">
                <div className="px-5 py-24 mx-auto flex flex-wrap">
                    <h1 className="text-2xl text-center font-bold leading-tight text-white sm:text-2xl lg:text-4xl">
                        Solidity Programming Language
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
                                        Learning Solidity
                                    </h2>
                                    <p className="leading-relaxed text-white text-justify">
                                        Solidity presents a challenging learning curve, but the rewards are substantial, given its emphasis on secure and efficient smart contract development for blockchain applications. To delve into Solidity, a great starting point is the official documentation provided by Ethereum, the platform it primarily supports. The Ethereum documentation offers comprehensive guides and examples to understand Solidity's intricacies. Engaging with the vibrant Ethereum community, known for its supportiveness, can greatly enhance the learning experience. Actively participating in forums like Ethereum Stack Exchange or Reddit communities such as r/ethereum can provide valuable insights and assistance. Furthermore, hands-on learning through real-world projects and utilizing platforms like Remix IDE, Truffle Suite, or online coding platforms such as Codewars tailored for Solidity can significantly bolster your proficiency in this language.
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
                                        Unique Features:
                                    </h2>
                                    <p className="leading-relaxed text-white text-justify">
                                        Solidity stands out for its focus on secure and decentralized smart contract development while maintaining efficiency.
                                        Its unique design ensures tamper-proof transactions on the Ethereum blockchain, making it a cornerstone for building decentralized applications (DApps).
                                        Solidity's contract-oriented programming paradigm enables developers to create intricate smart contracts that self-execute under specific conditions.
                                        Additionally, Solidity's integration with Ethereum Virtual Machine (EVM) allows for seamless execution of these contracts across a global network of nodes, ensuring the integrity and security of the blockchain network.
                                        With features like built-in support for data structures, event-driven programming, and Ethereum-specific libraries, Solidity empowers developers to create robust and secure applications in the rapidly evolving landscape of blockchain technology.
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
                                        Growing Ecosystem and Industry Adoption:
                                    </h2>
                                    <p className="leading-relaxed text-white text-justify">
                                        In parallel with the booming interest in blockchain technology, Solidity's ecosystem has seen significant expansion.
                                        A plethora of libraries and frameworks have emerged, enabling developers to create sophisticated and secure smart contracts with ease.
                                        Notably, major players in the blockchain industry, including decentralized finance (DeFi) platforms and non-fungible token (NFT) marketplaces, have embraced Solidity for building their core protocols.
                                        The language's traction is further evidenced by its integration into widely-used blockchain platforms beyond Ethereum, broadening its scope and applicability.
                                        Solidity has garnered enthusiastic support from the developer community, with active forums, online tutorials, and open-source projects fostering a collaborative environment.
                                        This growing ecosystem and developer enthusiasm signify Solidity's pivotal role in shaping the future of decentralized applications and blockchain innovation.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <img
                            className="lg:w-2/5 md:w-1/2 object-contain object-center rounded-lg md:mt-0 mt-12"
                            src="https://images.ctfassets.net/aq13lwl6616q/5bjxznRqgZFwC0gVPisBfh/337c80fadfc7d9b12a494d3af467e656/solidity_logo.jpg?w=655&fm=webp"
                            alt="Solidity"
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
                            These provide the overview of Solidity's main features and tools.
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
                                                            <a href={tools.description.subredditLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Solidity subreddit: </a> {tools.description.text}
                                                        </>
                                                    )}
                                                    {tools.description.userForumLink && (
                                                        <>
                                                            <br />
                                                            <a href={tools.description.userForumLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Users Forum: </a> {tools.description.text1}
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
        image: "https://docs.soliditylang.org/en/v0.8.21/_static/img/logo.svg",
        description: {
            textDoc: 'Solidity is an object-oriented, high-level language for implementing smart contracts. Smart contracts are programs that govern the behavior of accounts within the Ethereum state.',
            docLink: "https://docs.soliditylang.org/en/v0.8.21/"
        },
    },
    {
        title: 'Community Resources',
        image: "https://styles.redditmedia.com/t5_37k24/styles/communityIcon_1etv9auttp181.png?width=256&s=c9fd0fe7ec9e2b0e377dd5198fd033a05674c302",
        description: {
            text: 'A community forum for discussing Solidity-related topics, sharing projects, and seeking help.',
            text1: 'An official forum for Solidity users to ask questions and share knowledge.',
            subredditLink: 'https://www.reddit.com/r/solidity/',
            userForumLink: 'https://users.rust-lang.org/'
        },

    },
    {
        title: 'Learning Resources  ',
        image: 'https://cryptozombies.io/images/Group%201421.png',
        description: {
            czLink: 'https://cryptozombies.io/',
            ytLink: 'https://www.youtube.com/watch?v=umepbfKp5rI',
            textcz: 'This is an interactive code school that teaches you to write Solidity by building your own crypto-collectibles game.',
            textyt: 'You can also learn it from Pattric Collins, a great instructor! 🚀🔗',
        },
    },
];
