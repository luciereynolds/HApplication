import React, { useState } from "react";
import LowLevelContent1 from "./LowLevelContent/LowLevelContent1";
import LowLevelContent2 from "./LowLevelContent/LowLevelContent2";
import LowLevelContent3 from "./LowLevelContent/LowLevelContent3";
import LowLevelContent4 from "./LowLevelContent/LowLevelContent4";
import LowLevelContent5 from "./LowLevelContent/LowLevelContent5";
import FLipClockTest from "./LowLevelContent/FlipClockTest";

const Lessons = () => {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  const handleNext = () => {
    setCurrentLessonIndex((prevIndex) => prevIndex + 1);
  };

  const handleBack = () => {
    setCurrentLessonIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const totalLessons = 6; // Set the total number of lessons

  const progressPercentage = ((currentLessonIndex + 1) / totalLessons) * 100;

  return (
    <div className="container-fluid" style={{ padding: "50px", paddingTop: "0px" }}>
      <div className="row text-light" style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", backgroundColor: "#2eba68", borderRadius: "20px", padding: "1rem" }}>
        <h3 style={{ margin: 0 }}>Low Level Operations and Architecture</h3>
      </div>
      <div className="row" style={{ height: "75vh", overflowY: "auto" }}>
        {currentLessonIndex === 0 && <LowLevelContent1 />}
        {currentLessonIndex === 1 && <LowLevelContent2 />}
        {currentLessonIndex === 2 && <LowLevelContent3 />}
        {currentLessonIndex === 3 && <FLipClockTest />}
        {currentLessonIndex === 4 && <LowLevelContent4 />}
        {currentLessonIndex === 5 && <LowLevelContent5 />}
      </div>
      <div className="row" style={{ textAlign: "center" }}>
        <div className="col">
          <button className="lesson-button" onClick={handleBack} disabled={currentLessonIndex === 0}>
            Back
          </button>
        </div>
        <div className="col">
          <div>
            <progress value={progressPercentage} max="100"></progress>
            <p>{`${progressPercentage.toFixed(0)}% Complete`}</p>
          </div>
        </div>
        <div className="col">
          <button className="lesson-button" onClick={handleNext} disabled={currentLessonIndex === totalLessons - 1}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
