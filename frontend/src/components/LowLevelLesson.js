import React, { useState } from "react";
import LowLevelContent1 from "./LowLevelContent/LowLevelContent1";
import LowLevelContent2 from "./LowLevelContent/LowLevelContent2";
import LowLevelContent3 from "./LowLevelContent/LowLevelContent3";

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
      <div className="row text-light" style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", backgroundColor: "#2eba68", borderRadius: "20px", padding: "1rem" }}>
        <h3 style={{ margin: 0 }}>Low Level Operations and Architecture</h3>
      </div>
    <div className="row" style={{ height: "75vh", overflowY: "auto"}}>
    {currentLessonIndex === 0 && <LowLevelContent1 />}
    {currentLessonIndex === 1 && <LowLevelContent2 />}
    {currentLessonIndex === 2 && <LowLevelContent3 />}
    </div>
    <div className="row" style={{textAlign: "center"}}>
      <div className="col">
        <button className="lesson-button" onClick={handleBack} disabled={currentLessonIndex === 0}>
         Back
        </button>
      </div>
      <div className="col">
        <button className="lesson-button" onClick={handleNext} disabled={currentLessonIndex === 2}>
        Next
        </button>
      </div>
    </div>
    </div>
  )
};

export default Lessons;