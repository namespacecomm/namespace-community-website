import React, {useState} from "react";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'

const CounterUp = () => {

    const [counterOn, setCounterOn] = useState(false)

    return (

        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className="flex justify-center items-center h-[30vh] w-full mt-8">
                <div className=" w-[95%] text-white  flex justify-between">
                    <div className="px-4 font-bold text-8xl">
                        {counterOn && <CountUp start={0} end={2400} duration={3} delay={0} />} <span>+</span>
                        <p className="text-3xl">Unique Participants</p>
                    </div>

                    <div className="px-4 font-bold text-8xl">
                    {counterOn && <CountUp start={0} end={200} duration={3} delay={0} />}<span>+</span>
                        <p className="text-3xl">Colleges</p>
                    </div>

                    <div className="px-4 font-bold text-8xl">
                    {counterOn && <CountUp start={0} end={50} duration={3} delay={0} />}<span>+</span>
                        <p className="text-3xl">Cities</p>
                    </div>

                    <div className="px-4 font-bold text-8xl">
                    {counterOn && <CountUp start={0} end={16} duration={3} delay={0} />}<span>+</span>
                        <p className="text-3xl">Community Partners</p>
                    </div>
                </div>
            </div>   
        </ScrollTrigger>     
    );
}

export default CounterUp;