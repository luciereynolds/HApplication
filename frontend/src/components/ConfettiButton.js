import React, { useState, useEffect } from 'react';
import { useReward } from 'react-rewards';
import useTotalPoints from './useTotalPoints'; // Import the useTotalPoints hook

const ConfettiButton = () => {
    const [animationComplete, setAnimationComplete] = useState(false); // State to track if animation is complete
    const { reward: confettiReward, isAnimating: isConfettiAnimating } = useReward('confettiReward', 'confetti');
    const { addPoints } = useTotalPoints(); // Use object destructuring to get addPoints


    useEffect(() => {
        if (animationComplete) {
            // Add points when animation is complete and the user finishes the lesson
            setTimeout(() => {
                window.location.href = "/lessons"; // Redirects user back to main lessons page
                addPoints(50); 
            }, 3000); // Delays the redirect to allow the confetti animation to play
        }
    }, [animationComplete, addPoints]);

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
