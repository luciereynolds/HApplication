import React from "react";
import AllLessonsMedal from "../images/AllLessonsMedal.png";
import DTSMedal from "../images/DTSMedal.png";
import LLOMedal from "../images/LLOMedal.png";
import TDSMedal from "../images/TDSMedal.png";
import TopDog from "../images/TopDogMedal.png";

const Leaderboard = () => {
  // Array of medal data
  const medals = [
    { image: AllLessonsMedal, alt: "Gold medal for completing all lessons", text: "Completed all lessons!" },
    { image: DTSMedal, alt: "Medal for completing Data Type Lesson", text: "Completed Data Types Lesson!" },
    { image: LLOMedal, alt: "Medal for completing Low Level Lesson", text: "Completed Low Level Lesson!" },
    { image: TDSMedal, alt: "Medal for completing Testing Lesson", text: "Completed Testing Lesson!" },
    { image: TopDog, alt: "Medal for being at the top of the leaderboard", text: "Top Dog! You're top of the Leaderboard!" }
  ];

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
            <div className="col-md p-3 mx-2 text-dark" style={{ padding: "0.5rem", textAlign: "center" }}>
              <h4>Your Achievements!🏅</h4>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
                {medals.map((medal, index) => (
                  <div key={index}>
                    <img
                      src={medal.image}
                      alt={medal.alt}
                      style={{ width: "50%", height: "auto" }}
                    />
                    <p>{medal.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
