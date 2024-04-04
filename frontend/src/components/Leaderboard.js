import React, { useEffect, useState } from "react";
import AllLessonsMedal from "../images/AllLessonsMedal.png";
import DTSMedal from "../images/DTSMedal.png";
import LLOMedal from "../images/LLOMedal.png";
import TDSMedal from "../images/TDSMedal.png";
import TopDogMedal from "../images/TopDogMedal.png";
import useTotalPoints from './useTotalPoints'; // Import the useTotalPoints hook
import useUsername from './useUsername'; // Import the useUsername hook

// returns the leaderboard
const Leaderboard = () => {
  const [lowLevelLessonCompleted, setLowLevelLessonCompleted] = useState(false);
  const [dataTypeLessonCompleted, setDataTypeLessonCompleted] = useState(false);
  const [testingLessonCompleted, setTestingLessonCompleted] = useState(false);
  const [users, setUsers] = useState([]); // State to hold users and their points
  const [initialDataFetched, setInitialDataFetched] = useState(false); // State to track initial data fetch
  const [username] = useUsername(); // Logged-in user's name

  // Fetch total points using the useTotalPoints hook
  const { getTotalPoints } = useTotalPoints();

  useEffect(() => {
    // Retrieve completion status from local storage
    const lowLevelLessonCompletionStatus = JSON.parse(localStorage.getItem("lowLevelLessonCompletion")) || false;
    const dataTypeLessonCompletionStatus = JSON.parse(localStorage.getItem("dataTypeLessonCompletion")) || false;
    const testingLessonCompletionStatus = JSON.parse(localStorage.getItem("testingLessonCompletion")) || false;

    // Update state with completion status
    setLowLevelLessonCompleted(lowLevelLessonCompletionStatus);
    setDataTypeLessonCompleted(dataTypeLessonCompletionStatus);
    setTestingLessonCompleted(testingLessonCompletionStatus);

    // Set initial data fetch to true
    setInitialDataFetched(true);
  }, []);

  useEffect(() => {
    // If initial data fetch has not been done or users are already set, return
    if (!initialDataFetched || users.length > 0) return;

    // Simulate users with points
    const simulatedUsers = [
      { name: 'Mark', points: 55 },
      { name: 'Craig', points: 25 },
      { name: 'Oliver', points: 100 },
      { name: username, points: getTotalPoints() }, // Include logged-in user
    ];

    // Sort users by points
    simulatedUsers.sort((a, b) => b.points - a.points);

    // Set users state
    setUsers(simulatedUsers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, getTotalPoints, initialDataFetched, users]); // Include users in the dependency array

  return (
    <div className="container-fluid" style={{ padding: "50px", paddingTop: "0px" }}>
      <div className="row">
        <div className="col-md p-3 mx-2 text-dark" style={{ padding: "0.5rem", textAlign: "center" }}>
          <h3>Leaderboard 🏆</h3>
          <br></br>
          <div className="row">
            <div className="col-md p-3 mx-2 bg-light rounded shadow-sm">
              <h4 className="mb-4">How well do you rank?</h4>
              <div className="overflow-auto" style={{ maxHeight: "300px" }}>
                {/* Display users sorted by points */}
                {users.map((user, index) => (
                  <div key={index} className={`py-2 ${index % 2 === 0 ? 'bg-white' : 'bg-light'}`}>
                    <p className="m-0 d-flex justify-content-between align-items-center px-3">
                      <span>
                        {/* Display medal emojis for top 3 users */}
                        {index === 0 && "🥇 "}
                        {index === 1 && "🥈 "}
                        {index === 2 && "🥉 "}
                        {index > 2 && `${index + 1}. `}
                        {user.name}
                      </span>
                      <span>{user.points}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
  
            <div className="col-md p-3 mx-2 bg-light rounded shadow-sm">
              <div>
                <h4>Your Achievements!🏅</h4>
                {lowLevelLessonCompleted || dataTypeLessonCompleted || testingLessonCompleted ? (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
                    {/* Display TopDog Medal if the user is at the top of the leaderboard */}
                    {users.length > 0 && users[0].name === username && (
                      <div>
                        <img
                          src={TopDogMedal}
                          alt="Top Dog Medal for being number 1 on the leaderboard"
                          style={{ width: "50%", height: "auto" }}
                        />
                        <p>Top Dog! You're no. 1!</p>
                      </div>
                    )}
                    
                    {/* Display other medals based on completion status */}
                    {lowLevelLessonCompleted && (
                      <div>
                        <img
                          src={LLOMedal}
                          alt="Medal for completing Low Level Lesson"
                          style={{ width: "50%", height: "auto" }}
                        />
                        <p>Completed Low Level Lesson!</p>
                      </div>
                    )}
                    {dataTypeLessonCompleted && (
                      <div>
                        <img
                          src={DTSMedal}
                          alt="Medal for completing Data Type Lesson"
                          style={{ width: "50%", height: "auto" }}
                        />
                        <p>Completed Data Types Lesson!</p>
                      </div>
                    )}
                    {testingLessonCompleted && (
                      <div>
                        <img
                          src={TDSMedal}
                          alt="Medal for completing Testing Lesson"
                          style={{ width: "50%", height: "auto" }}
                        />
                        <p>Completed Testing Lesson!</p>
                      </div>
                    )}
                    {lowLevelLessonCompleted && dataTypeLessonCompleted && testingLessonCompleted && (
                      <div>
                        <img
                          src={AllLessonsMedal}
                          alt="Gold medal for completing all lessons"
                          style={{ width: "50%", height: "auto" }}
                        />
                        <p>Completed all lessons!</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <p>No achievements yet. Start doing some lessons and earn points and medals! You'll get a medal for each lesson you complete!</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  


};

export default Leaderboard;
