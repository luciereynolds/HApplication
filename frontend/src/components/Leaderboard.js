import React, { useEffect, useState } from "react";
import AllLessonsMedal from "../images/AllLessonsMedal.png";
import DTSMedal from "../images/DTSMedal.png";
import LLOMedal from "../images/LLOMedal.png";
import TDSMedal from "../images/TDSMedal.png";
import useTotalPoints from './useTotalPoints'; // Import the useTotalPoints hook
import useUsername from './useUsername'; // Import the useUsername hook

const Leaderboard = () => {
  const [lowLevelLessonCompleted, setLowLevelLessonCompleted] = useState(false);
  const [dataTypeLessonCompleted, setDataTypeLessonCompleted] = useState(false);
  const [testingLessonCompleted, setTestingLessonCompleted] = useState(false);

  const [username] = useUsername();

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
  }, []);

  return (
    <div className="container-fluid" style={{ padding: "50px", paddingTop: "0px" }}>
      <div className="row">
        <div className="col-md p-3 mx-2 text-dark" style={{ padding: "0.5rem", textAlign: "center" }}>
          <h3>Leaderboard 🏆</h3>
          <br></br>
          <div className="row">
            <div className="col-md">
              <h4>How well do you rank?</h4>
              <p>{username}: {getTotalPoints()}</p> {/* Displays total amount of points user has. */}
            </div>
            <div className="col-md p-3 mx-2 text-dark" style={{ padding: "0.5rem", textAlign: "center" }}>
              <h4>Your Achievements!🏅</h4>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
                {/* Display Low Level Lesson Medal if completed */}
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

                {/* Display Data Type Lesson Medal if completed */}
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

                {/* Display Testing Lesson Medal if completed */}
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

                {/* Display All Lessons Medal if all lessons completed */}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
