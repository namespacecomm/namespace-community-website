import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: justify-center;
  align-items: center;
  justify-content: space-between;
  background-color: #010116;
`;
const Container = styled.div`
  scroll-snap-align: center;
  width: 100%;
  padding-top: 100px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
`;
const ProgramDescription = styled.div`
  @media only screen and (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const YtSection = styled.div`
  height: 100%;
  background-color: #010116;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2rem 0;
`;

const YoutubeFrame = styled.iframe`
  width: 30vw;
  height: 350px;

  @media only screen and (max-width: 768px) {
    width: 90vw;
    height: 250px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const Cryptocurrency = () => {
  return (
    <>
      <Section>
        <Container>
          <section className="py-10 bg-blue sm:py-16 lg:py-12">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-blue-100 to-blue-800 sm:text-4xl lg:text-5xl p-2">
                  Cryptocurrency
                </h2>
                <p className="mb-8 mx-auto mt-2 text-xl leading-relaxed text-white-600">
                  {" "}
                  Cryptocurrency is a digital or virtual form of currency that
                  uses cryptography for security, making it difficult to
                  counterfeit or double-spend. The most well-known
                  cryptocurrency is Bitcoin, introduced in 2009 by an anonymous
                  entity known as Satoshi Nakamoto. Unlike traditional
                  currencies issued by governments (fiat currencies),
                  cryptocurrencies operate on decentralized networks based on
                  blockchain technology, which is a distributed ledger that
                  records all transactions across a network of computers.{" "}
                </p>{" "}
                <p className="mb-8 mx-auto mt-2 text-xl leading-relaxed text-white-600">
                  {" "}
                  Cryptocurrencies are typically created through a process
                  called mining, where powerful computers solve complex
                  mathematical problems to validate transactions and add them to
                  the blockchain. This process also generates new coins.{" "}
                </p>{" "}
                <p className="mb-8 mx-auto mt-2 text-xl leading-relaxed text-white-600">
                  {" "}
                  Investors are drawn to cryptocurrencies for various reasons,
                  including the potential for high returns, privacy, and the
                  belief in a decentralized financial system. However, they are
                  also associated with significant risks, including price
                  volatility, regulatory scrutiny, and security concerns related
                  to hacks and scams.{" "}
                </p>{" "}
                <p className="mb-8 mx-auto mt-2 text-xl leading-relaxed text-white-600">
                  {" "}
                  As the cryptocurrency market continues to evolve, new coins
                  and technologies emerge, prompting discussions about their
                  potential impact on global finance, economics, and even social
                  structures. While some view them as the future of money,
                  others remain skeptical of their long-term viability.{" "}
                </p>
              </div>

              <h2 className="mt-3 text-2xl text-center md:text-4xl lg:text-5xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-violet-100 to-violet-800">
                Courses
              </h2>

              <div className="grid grid-cols-1 gap-6 mt-14 lg:mt-16 xl:gap-10 md:grid-cols-2 lg:grid-cols-2">
                {ResourceCourses.map((item) => {
                  return (
                    <a
                      href={item.to}
                      className="overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 shadow-xl shadow-cyan-300 bg-slate-950 rounded text-white p-4"
                      key={item.name}
                    >
                      <div className="text-center text-xl md:text-2xl lg:text-3xl font-semi-bold mb-14 mt-8">
                        {item.name}
                      </div>

                      <div className="program-content flex flex-col md:flex-row">
                        <div className="program-image md:w-3/6 md:pr-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full rounded-md"
                          />
                        </div>
                        <ProgramDescription className="program-description flex items-center border-2 border-slate-600 rounded-md p-4 md:w-full md:h-auto md:text-sm lg:text-xl xl:text-base text-neutral-400">
                          <p>{item.description}</p>
                        </ProgramDescription>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </section>
        </Container>
      </Section>

      <h2 className="mt-[100px] text-2xl text-center md:text-4xl lg:text-5xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-red-50 to-red-950">
        YouTube Videos
      </h2>

      <YtSection>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center">
          <YoutubeFrame src="https://www.youtube.com/embed/2w3RzYtOwsA" />
          <YoutubeFrame src="https://www.youtube.com/embed/9bZx6D-WKlg" />
          <YoutubeFrame src="https://www.youtube.com/embed/0G3GqQ34lIo" />
        </div>
      </YtSection>
    </>
  );
};

const ResourceCourses = [
  {
    name: "Bitcoin and Cryptocurrency Technologies",
    description:
      "This course from Princeton University offers a comprehensive introduction to the revolutionary yet often misunderstood new technologies of digital currency.",
    to: "https://www.coursera.org/learn/cryptocurrency",
    image:
      "https://www.coursera.org/learn/cryptocurrency/lecture/xyae8/bitcoin-and-cryptocurrency-technologies",
  },
  {
    name: "Blockchain Basics",
    description:
      "Learn about the basics of blockchain technology, how it works, and its applications in various industries, including finance and supply chain.",
    to: "https://www.edx.org/course/blockchain-basics",
    image:
      "https://prod-discovery.edx-cdn.org/cdn-cgi/image/width=auto,height=auto,quality=75,format=webp/media/course/image/8d7b3420-4d2e-4741-a9cb-f1b5f73c56ec-6087e3f8810e.small.jpeg",
  },
  {
    name: "Cryptocurrency Investment Course 2023: Fund Your Retirement!",
    description:
      "A comprehensive course on cryptocurrency investment strategies, risks, and opportunities to help you navigate the cryptocurrency landscape.",
    to: "https://www.udemy.com/course/cryptocurrency/",
    image: "https://img-a.udemycdn.com/course/240x135/2001952_7c0e_5.jpg",
  },
  {
    name: "Ethereum and Solidity: The Complete Developer's Guide",
    description:
      "This course teaches you how to build applications using Ethereum, Solidity, and Smart Contracts.",
    to: "https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/",
    image: "https://img-a.udemycdn.com/course/240x135/2017008_3846_3.jpg",
  },
];

const topics = [
  { title: "Bitcoin.org", to: "https://bitcoin.org/en/" },
  { title: "CoinDesk", to: "https://www.coindesk.com/" },
  { title: "CoinMarketCap", to: "https://coinmarketcap.com/" },
  { title: "CryptoCompare", to: "https://www.cryptocompare.com/" },
  { title: "Ethereum.org", to: "https://ethereum.org/en/" },
  { title: "Binance Academy", to: "https://academy.binance.com/en" },
];

export default Cryptocurrency;
