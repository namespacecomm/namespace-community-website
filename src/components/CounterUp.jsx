import React, { useState } from "react";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const CounterUp = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <div className="flex flex-col justify-center items-center h-auto w-full mt-8">
        <div className="w-[95%] text-white flex flex-row justify-around flex-wrap md:flex-nowrap">
          <div className="px-4 mb-8 md:mb-0 font-bold text-4xl md:text-6xl lg:text-8xl text-center md:text-left flex-1">
            <div className="whitespace-nowrap">
              {counterOn && <CountUp start={0} end={2400} duration={3} delay={0} />} <span>+</span>
            </div>
            <p className="text-lg md:text-2xl lg:text-3xl mt-2">Unique Participants</p>
          </div>

          <div className="px-4 mb-8 md:mb-0 font-bold text-4xl md:text-6xl lg:text-8xl text-center md:text-left flex-1">
            <div className="whitespace-nowrap">
              {counterOn && <CountUp start={0} end={200} duration={3} delay={0} />} <span>+</span>
            </div>
            <p className="text-lg md:text-2xl lg:text-3xl mt-2">Colleges</p>
          </div>

          <div className="px-4 mb-8 md:mb-0 font-bold text-4xl md:text-6xl lg:text-8xl text-center md:text-left flex-1">
            <div className="whitespace-nowrap">
              {counterOn && <CountUp start={0} end={50} duration={3} delay={0} />} <span>+</span>
            </div>
            <p className="text-lg md:text-2xl lg:text-3xl mt-2">Cities</p>
          </div>

          <div className="px-4 mb-8 md:mb-0 font-bold text-4xl md:text-6xl lg:text-8xl text-center md:text-left flex-1">
            <div className="whitespace-nowrap">
              {counterOn && <CountUp start={0} end={16} duration={3} delay={0} />} <span>+</span>
            </div>
            <p className="text-lg md:text-2xl lg:text-3xl mt-2">Community Partners</p>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
}

export default CounterUp;
