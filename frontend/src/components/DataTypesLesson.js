import React, { useState } from "react";
import SortingLessonDTS from "./DataTypeContent/SortingLessonDTS";
import DataTypeContent1 from "./DataTypeContent/DataTypeContent1";
import DataTypeContent2 from "./DataTypeContent/DataTypeContent2";
import DataTypeContent3 from "./DataTypeContent/DataTypeContent3";
import DataTypeContent4 from "./DataTypeContent/DataTypeContent4";
import TestComponent from "./DataTypeContent/KnowledgeTest";

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
  
  // returns lesson content to be called in SortingLesson
  return (
    <div className="container-fluid" style={{ padding: "50px", paddingTop: "0px" }}>
      <div className="row text-light" style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", backgroundColor: "#6a5bcf", borderRadius: "20px", padding: "1rem" }}>
        <h3 style={{ margin: 0 }}>Data Types and Structures</h3>
      </div>
      <div className="row" style={{ height: "75vh", overflowY: "auto" }}>
        {currentLessonIndex === 0 && <DataTypeContent1 />}
        {currentLessonIndex === 1 && <DataTypeContent2 />}
        {currentLessonIndex === 2 && <DataTypeContent3 />}
        {currentLessonIndex === 3 && <DataTypeContent4 />}
        {currentLessonIndex === 4 && <SortingLessonDTS />}
        {currentLessonIndex === 5 && <TestComponent />}
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

 // return (
 //   <div className="container-fluid" style={{ height: "80vh" }}>
 //     <div className="row" style={{ paddingTop: "20px", textAlign: "center" }}>
 //       <h3>Data Types and Structures 🚀</h3>
 //     </div>
 //     <div className="row" style={{ height: "75vh", overflowY: "auto" }}>
 //       {currentLessonIndex === 0 && <DataTypeLesson />}
 //       {currentLessonIndex === 1 && <SortingLessonDTS />}
 //     </div>
 //     <div className="row" style={{ marginTop: "10px", marginBottom: "20px", textAlign: "center" }}>
 //       <div className="col">
//         <button className="lesson-button" onClick={handleBack} disabled={currentLessonIndex === 0}>
//            Back
//          </button>
 //       </div>
 //       <div className="col">
 //         <button className="lesson-button" onClick={handleNext} disabled={currentLessonIndex === 1}>
  //          Next
  //        </button>
  //      </div>
  //      <p></p>
  //    </div>
  //  </div>
  //);
//};
