import React from "react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Quote } from "lucide-react";

const founderImages = [
  { url: "./img/founder1.png", alt: "Pradeepto 1" },
  { url: "./img/founder2.png", alt: "Pradeepto 2" },
];

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto group">
      <div className="relative h-auto overflow-hidden rounded-2xl shadow-2xl shadow-pink-500/30 transform hover:scale-[1.02] transition-all duration-500">
        <div className="relative w-full aspect-[3/4]">
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
              isAnimating ? "opacity-80" : "opacity-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/50 text-white p-3 rounded-full hover:bg-pink-600 transition-all duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900/50 text-white p-3 rounded-full hover:bg-pink-600 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

const Founder = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full px-6 mb-24">
      <div
        className={`transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12 order-2 lg:order-1 lg:mr-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-pink-500 tracking-tight">
                Founder and Lead
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-500" />
            </div>

            <div className="relative">
              <Quote className="absolute -left-8 -top-6 w-16 h-16 text-pink-500/20" />
              <div className="space-y-8 text-gray-300 text-justify">
                <p className="text-lg md:text-xl font-medium leading-relaxed">
                  It is always exciting to witness the growth and vibrancy of
                  our community. What started as a small group of tech
                  enthusiasts has blossomed into a{" "}
                  <span className="text-pink-400">
                    dynamic and supportive network
                  </span>{" "}
                  of learners, innovators, and professionals from around the
                  Delhi-NCR region.
                </p>
                <p className="text-lg md:text-xl font-medium leading-relaxed">
                  Our goal is to provide a clear path for those just starting
                  their tech journeys, helping them navigate through the diverse
                  fields of
                  <span className="text-pink-400">
                    {" "}
                    competitive programming
                  </span>
                  , <span className="text-purple-400">web development</span>,
                  <span className="text-pink-400"> machine learning</span>, and
                  more.
                </p>
                <p className="text-lg md:text-xl font-medium leading-relaxed">
                  Looking ahead, we are excited to continue expanding our reach
                  and impact. We are exploring new initiatives, enhancing our
                  existing programs, and constantly seeking ways to better serve
                  our community members.
                </p>
                <div className="pt-4 flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
                  <a
                    href="https://pradeeptosarkar.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
                  >
                    Pradeepto Sarkar
                    <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </a>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <ImageSlider images={founderImages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
