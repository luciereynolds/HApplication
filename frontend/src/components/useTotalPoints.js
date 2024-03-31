import { useState, useEffect } from 'react';

function useTotalPoints() {
    
    // Check if totalpoints already exists in local storage
    const [totalpoints, setTotalPoints] = useState(() => {
        const storedTotalPoints = localStorage.getItem('totalpoints');
        return storedTotalPoints ? parseInt(storedTotalPoints, 10) : 0;
    });

    // Check if points for knowledge test already exist in local storage
    const [knowledgeTestPoints, setKnowledgeTestPoints] = useState(() => {
        const storedKnowledgeTestPoints = localStorage.getItem('knowledgeTestPoints');
        return storedKnowledgeTestPoints ? parseInt(storedKnowledgeTestPoints, 10) : 0;
    });


    // Update local storage whenever totalpoints changes
    useEffect(() => {
        localStorage.setItem('totalpoints', totalpoints.toString());
    }, [totalpoints]);

    useEffect(() => {
        localStorage.setItem('knowledgeTestPoints', knowledgeTestPoints.toString());
    }, [knowledgeTestPoints]);
    
    const addKnowledgeTestPoints = (pointsToAdd) => {
        setKnowledgeTestPoints((prevPoints) => prevPoints + pointsToAdd);
    };

    // Function to add points to totalpoints
    const addPoints = (pointsToAdd) => {
        setTotalPoints((prevTotalPoints) => prevTotalPoints + pointsToAdd);
    };

     // Function to get total points across all activities
     const getTotalPoints = () => {
        return knowledgeTestPoints + totalpoints;
    };

    return { knowledgeTestPoints, totalpoints, addKnowledgeTestPoints, getTotalPoints, addPoints };
}

export default useTotalPoints;
