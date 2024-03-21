import React from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown"
import '@leenguyen/react-flip-clock-countdown/dist/index.css'

const FLipClockTest = () => {
    return (
        <section className="flex flex-col justify-center items-center h-screen md:w-screen md:h-screen">
            <div className="bg-black/70 absolute w-full h-full"></div>
            <div className="absolute flex flex-col items-center text-center">
            <h3>Testing Flip function to eventually implement binary.</h3>
                <FlipClockCountdown 
                    to={new Date().getTime() + 24 * 3600 * 1000 + 5000} 
                    labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
                    duration={0.5} 
                />
            </div>
        </section>
    );
};

export default FLipClockTest;