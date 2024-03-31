import { useState, useEffect } from 'react';

function useTotalPoints() {
    // Check if totalpoints already exists in local storage
    const [totalpoints, setTotalPoints] = useState(() => {
        const storedTotalPoints = localStorage.getItem('totalpoints');
        return storedTotalPoints ? parseInt(storedTotalPoints, 10) : 0;
    });

    // Update local storage whenever totalpoints changes
    useEffect(() => {
        localStorage.setItem('totalpoints', totalpoints.toString());
    }, [totalpoints]);

    // Function to add points to totalpoints
    const addPoints = (pointsToAdd) => {
        setTotalPoints((prevTotalPoints) => prevTotalPoints + pointsToAdd);
    };

    return { totalpoints, addPoints }; // Return both totalpoints and addPoints
}

export default useTotalPoints;
