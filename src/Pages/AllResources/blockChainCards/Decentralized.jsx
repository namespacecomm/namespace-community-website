import React from "react";
import { difiContents } from "../../../constants/difiConstants";

export default function Decentralized() {
  return (
    <>
      <section>
        <div className="scroll-snap-align-center w-full pt-24">
          <section className="py-10 bg-blue sm:py-16 lg:py-12">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-yellow-200 sm:text-4xl lg:text-5xl">
                  CryptoCurrency
                </h2>
                <p className="max-w-2xl mx-auto my-10 text-center text-xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500">
                  Explore our valuable resources, including articles, guides,
                  videos, and tools, designed to help you succeed and stay
                  informed.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 mt-14 lg:mt-16 xl:gap-10 md:grid-cols-2 lg:grid-cols-2">
                {difiContents.map((item) => {
                  return (
                    <a
                      href={item.to}
                      className="overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 shadow-xl shadow-cyan-300 bg-slate-950 rounded text-white p-4"
                      key={item.name}
                    >
                      <div className="text-center text-xl md:text-2xl lg:text-3xl font-semi-bold mb-14 mt-8">
                        {item.name}
                      </div>

                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-3/6 md:pr-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full rounded-md"
                          />
                        </div>
                        <div className="flex items-center border-2 border-slate-600 rounded-md p-4 md:w-full text-neutral-400">
                          <p className="text-sm md:text-sm lg:text-xl xl:text-base">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
