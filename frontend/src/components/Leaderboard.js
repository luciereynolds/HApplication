import React from "react";
import AllLessonsMedal from "../images/AllLessonsMedal.png";

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