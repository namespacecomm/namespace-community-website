import React from "react";
import { Link } from "react-router-dom";

export default function Blockchain() {
  return (
    <>
    <div>
      <section className="text-gray-600 body-font text">
        <div className="px-5 py-24 mx-auto flex flex-wrap">
          <h1 className="text-2xl text-center font-bold leading-tight text-white sm:text-2xl lg:text-4xl">
            BLOCKCHAIN TECHNOLOGY
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                  </svg>
                </div>

                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                    Understand Blockchain Basics
                  </h2>
                  <p className="leading-relaxed text-white text-justify">
                    Blockchain is a distributed ledger technology. Learn the
                    fundamental concepts, such as blocks, nodes, and consensus
                    mechanisms, that underpin blockchain networks.
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 18v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1m18-2H3a2 2 0 00-2 2v4a2 2 0 002 2h18a2 2 0 002-2v-4a2 2 0 00-2-2zM6 12v-2a2 2 0 012-2h8a2 2 0 012 2v2"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                    Explore Use Cases
                  </h2>
                  <p className="leading-relaxed text-white text-justify">
                    Discover the real-world applications of blockchain
                    technology, including cryptocurrency, supply chain
                    management, and decentralized finance (DeFi).
                  </p>
                </div>
              </div>
              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-xl text-white mb-1 tracking-wider">
                    Develop Blockchain Projects
                  </h2>
                  <p className="leading-relaxed text-white text-justify">
                    Gain hands-on experience by creating your blockchain
                    projects. Start with a simple blockchain implementation
                    and explore smart contract development.
                  </p>
                </div>
              </div>
            </div>
            <img
              className="lg:w-2/5 md:w-1/2 object-contain object-center rounded-lg md:mt-0 mt-12"
              src="https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      <section>
        <div className="px-5 py-0 mx-auto">
          <div className="flex flex-col text-left w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Explore Blockchain Use Cases
            </h1>
            <p className="w-full text-left mx-auto leading-relaxed text-base">
              Discover the various applications of blockchain technology, from
              cryptocurrencies to supply chain management and beyond.
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {blockchainUseCases.map((item) => (
              <div key={item.title} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    className="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4"
                    src={item.image}
                    alt=""
                  />
                  <div className="flex-grow">
                    <Link to={item.endpoint}>
                      <h2 className="text-white title-font font-bold underline text-xl">
                        {item.title}
                      </h2>
                    </Link>
                    <p className="text-white">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-12">
        <div className="px-5 py-0 mx-auto ">
          <div className="flex flex-col text-left w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Blockchain Development Tools
            </h1>
            <p className="w-full text-left mx-auto leading-relaxed text-base">
              Explore the tools and technologies commonly used in blockchain
              development, including blockchain platforms and smart contract
              languages.
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {blockchainTools.map((tool) => (
              <div key={tool.title} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    className="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4"
                    src={tool.image}
                    alt=""
                  />
                  <div className="flex-grow">
                    <Link to={tool.endpoint}>
                      <h2 className="text-white title-font font-bold underline text-xl">
                        {tool.title}
                      </h2>
                    </Link>
                    <p className="text-white">{tool.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

const blockchainUseCases = [
  {
    title: "Cryptocurrency",
    image: "https://cdn3.iconfinder.com/data/icons/object-emoji/50/BitCoin-128.png",
    description:
      "Cryptocurrencies like Bitcoin and Ethereum are some of the most well-known blockchain use cases. Learn about digital currencies, wallets, and transactions.",
    endpoint: "cryptocurrency"
  },
  {
    title: "Supply Chain Management",
    image:
      "https://media.istockphoto.com/id/1339299049/vector/add-chain-icon.jpg?b=1&s=170x170&k=20&c=Y4h-5Di4EswUqkO-U6xNeQfdRuyQ3c2oW_45XnoV58w=",
    description:
      "Blockchain is used for transparent and efficient supply chain management. Explore how it's used to trace products and verify authenticity.",
    endpoint: "supply-chain-management",
  },
  {
    title: "Decentralized Finance (DeFi)",
    image:
      "https://cdn2.iconfinder.com/data/icons/cryptocurrency-51/512/Dao_decentralized_autonomous_organization_crypto-512.png",
    description:
      "DeFi applications leverage blockchain to create decentralized financial services, including lending, borrowing, and trading without intermediaries.",
    endpoint: "defi",
  },
 
];

const blockchainTools = [
  {
    title: "Ethereum",
    image:
      "https://cdn3.iconfinder.com/data/icons/currency-and-cryptocurrency-signs/64/cryptocurrency_blockchain_Ethereum_ETH-128.png",
    description:
      "Ethereum is a popular blockchain platform for building decentralized applications (DApps) and smart contracts using Solidity.",
    endpoint: "ethereum",
  },
  {
    title: "Hyperledger Fabric",
    image: "https://chainstack.com/wp-content/uploads/2020/07/fabric.png",
    description:
      "Hyperledger Fabric is an open-source framework for enterprise blockchain solutions, offering modularity and privacy features.",
    endpoint: "hyperledger-fabric",
  },
  {
    title: "Truffle",
    image: "https://www.trufflesuite.com/img/truffle-logo-dark.svg",
    description:
      "Truffle is a development environment, testing framework, and asset pipeline for Ethereum-based DApps and smart contracts.",
    endpoint: "truffle",
  },
  {
    title: "Rust",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS9Kn9M4fzjeLXpEaft9bWv3BLPPOdh36wMA&usqp=CAU",
    description:
      "Rust is a memory-safe programming language which offers high-level simplicity with low-level performance.",
    endpoint: "Rust",
  },
  {
    title: "Solidity",
    image: "https://styles.redditmedia.com/t5_37k24/styles/communityIcon_1etv9auttp181.png?width=256&s=c9fd0fe7ec9e2b0e377dd5198fd033a05674c302",
    description:
      "Solidity is an object-oriented programming language for implementing smart contracts on various blockchain platforms.",
    endpoint: "Solidity",
  },
];
