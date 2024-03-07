import React, { useState } from "react";
import LowLevelContent1 from "./LowLevelContent1";
import LowLevelContent2 from "./LowLevelContent2";

const Lessons = () => {
  
  // 
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  // sets the index to one higher for switching between lesson sections
  const handleNext = () => {
    setCurrentLessonIndex((prevIndex) => prevIndex + 1);
  };

  // sets the index to one less for switching between lesson sections
  const handleBack = () => {
    setCurrentLessonIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  // returns lesson content to be called in SortingLesson
  return (
    <div className="container-fluid" style={{padding: "50px", paddingTop: "0px" }}>
      <div className="row" style={{ padding: "0.5rem", textAlign: "center"}}>
        <h3>Low Level Operations and Architecture</h3>
      </div>
    <div className="row" style={{ height: "75vh", overflowY: "auto"}}>
    {currentLessonIndex === 0 && <LowLevelContent1 />}
    {currentLessonIndex === 1 && <LowLevelContent2 />}
    </div>
    <div className="row" style={{textAlign: "center"}}>
      <div className="col">
        <button className="lesson-button" onClick={handleBack} disabled={currentLessonIndex === 0}>
         Back
        </button>
      </div>
      <div className="col">
        <button className="lesson-button" onClick={handleNext} disabled={currentLessonIndex === 1}>
        Next
        </button>
      </div>
    </div>
    </div>
  )
};

export default Lessons;