import React, { useState } from "react";
import SortingLessonDTS from "./DataTypeContent/SortingLessonDTS";
import DataTypeContent1 from "./DataTypeContent/DataTypeContent1";

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
      <div className="row text-light" style={{ padding: "0.5rem", textAlign: "center", backgroundColor:"#6a5bcf"}}>
        <h3>Data Types and Structures</h3>
      </div>
    <div className="row" style={{ height: "75vh", overflowY: "auto"}}>
    {currentLessonIndex === 0 && <DataTypeContent1 />}
    {currentLessonIndex === 1 && <SortingLessonDTS />}
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
