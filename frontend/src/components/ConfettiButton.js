import React, { useState, useEffect } from 'react';
import { useReward } from 'react-rewards';
import useTotalPoints from './useTotalPoints'; // Import the useTotalPoints hook

// returns the confetti button using react-rewards
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

    // displays the button with finish displayed as the text to be displayed at the end of a lesson
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
