import React from "react";
import SortableContainer from "./SortableContainer";

const SortingLessonDTS = () => {
  const initialItems = {
    root: ['true', '2', '"Hello World!"', '"01414960999"', 'false', '362'],
    container1: [],
    container2: [],
    container3: [],
  };

  return (
    <div className="container-fluid lesson-content-container">
      <div className="row" style={{ paddingTop: "20px" }}>
        <div className="col text-center">
          <h4>Sort the data into the correct data type! 🤖</h4>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <p className="instructions">Drag each item to the corresponding category.</p>
        </div>
      </div>
      <div className="row">
        <div className="col text-center"></div>
        <div className="col text-center">
          <h5 className="data-type-heading">String</h5>
        </div>
        <div className="col text-center">
          <h5 className="data-type-heading">Integer</h5>
        </div>
        <div className="col text-center">
          <h5 className="data-type-heading">Boolean</h5>
        </div>
      </div>
      <div className="row">
        <SortableContainer initialItems={initialItems} />
      </div>
    </div>
  );
};

export default SortingLessonDTS;
