import React from "react";
import AllLessonsMedal from "../images/AllLessonsMedal.png";
import DTSMedal from "../images/DTSMedal.png";
import LLOMedal from "../images/LLOMedal.png";
import TDSMedal from "../images/TDSMedal.png";
import TopDog from "../images/TopDogMedal.png";

const Leaderboard = () => {
  return (
    <div className="container-fluid" style={{ padding: "50px", paddingTop: "0px" }}>
      <div className="row">
        <div className="col-md p-3 mx-2 text-dark" style={{ padding: "0.5rem", textAlign: "center" }}>
          <h3>Leaderboard 🏆</h3>
          <br></br>
          <div className="row">
            <div className="col-md">
              <h4>How well do you rank?</h4>
            </div>
            <div className="col-md">
              <h4>Your Achievements!🏅</h4>
              <img
            src={AllLessonsMedal}
            alt="Gold medal for completing all lessons"
            style={{ maxWidth: "20%", height: "auto" }}
          />
          <p>Completed all lessons!</p>
          <img
            src={DTSMedal}
            alt="Medal for completing Data Type Lesson"
            style={{ maxWidth: "20%", height: "auto" }}
          />
          <p>Completed Data Types Lesson!</p>
          <img
            src={LLOMedal}
            alt="Medal for completing Low Level Lesson"
            style={{ maxWidth: "20%", height: "auto" }}
          />
          <p>Completed Low Level Lesson!</p>
          <img
            src={TDSMedal}
            alt="Medal for completing Testing Lesson"
            style={{ maxWidth: "20%", height: "auto" }}
          />
          <p>Completed Testing Lesson!</p>
          <img
            src={TopDog}
            alt="Medal for being at the top of the leaderboard"
            style={{ maxWidth: "20%", height: "auto" }}
          />
          <p>Top Dog! You're top of the Leaderboard!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

// delete later - just for reference

//return (
//  <div className="container-fluid">
//    <h3>Leaderboard 🏆</h3>
//    <div className="row">
//    <div className="col p-3 mx-2">
//      <h4>How well do you rank? </h4>
//    </div>
//    <div className="col p-3 mx-2">
//      <h4>Your Achievements!🏅</h4>
//    </div>
//    </div>
//  </div>
//);