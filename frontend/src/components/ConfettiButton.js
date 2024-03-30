import React, { useState, useEffect } from 'react';
import { useReward } from 'react-rewards';

const ConfettiButton = () => {
    const [animationComplete, setAnimationComplete] = useState(false); // State to track if animation is complete
    const { reward: confettiReward, isAnimating: isConfettiAnimating } = useReward('confettiReward', 'confetti');

    useEffect(() => {
        if (animationComplete) {
            setTimeout(() => {
                window.location.href = "/lessons"; // Redirect to homepage after a delay
            }, 3000); // Adjust delay as needed
        }
    }, [animationComplete]);

    return (
        <button className='lesson-button'
            disabled={isConfettiAnimating}
            onClick={() => {
                confettiReward();
                setAnimationComplete(true); // Set animation complete when button is clicked
            }}
        >
            <span id="confettiReward" />
            Finish
        </button>
    );
};

export default ConfettiButton;
