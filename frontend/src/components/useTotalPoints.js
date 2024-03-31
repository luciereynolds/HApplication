import { useState, useEffect } from 'react';

function useTotalPoints() {
    
    // Check if totalPoints already exists in local storage
    const [totalPoints, setTotalPoints] = useState(() => {
        const storedTotalPoints = localStorage.getItem('totalPoints');
        return storedTotalPoints ? parseInt(storedTotalPoints, 10) : 0;
    });

    // Check if points for knowledge test already exist in local storage
    const [testPoints, setTestPoints] = useState(() => {
        const storedTestPoints = localStorage.getItem('testPoints');
        return storedTestPoints ? parseInt(storedTestPoints, 10) : 0;
    });


    // Update local storage whenever totalpoints changes
    useEffect(() => {
        localStorage.setItem('totalPoints', totalPoints.toString());
    }, [totalPoints]);

    useEffect(() => {
        localStorage.setItem('testPoints', testPoints.toString());
    }, [testPoints]);
    
    const addTestPoints = (pointsToAdd) => {
        setTestPoints((prevPoints) => prevPoints + pointsToAdd);
    };

    // Function to add points to totalpoints
    const addPoints = (pointsToAdd) => {
        setTotalPoints((prevTotalPoints) => prevTotalPoints + pointsToAdd);
    };

     // Function to get total points across all activities
     const getTotalPoints = () => {
        return testPoints + totalPoints;
    };

    return { testPoints, totalPoints, addTestPoints, getTotalPoints, addPoints };
}

export default useTotalPoints;
