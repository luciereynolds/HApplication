import React, { useState } from "react";
import SortableContainer from "../SortableFunctionality/SortableContainer";
import useTotalPoints from '../useTotalPoints'; // Import the useTotalPoints hook

const SortingLessonDTS = () => {
  const initialItems = {
    root: ['true', '2', '"Hello World!"', '"01414960999"', 'false', '362'],
    container1: [],
    container2: [],
    container3: [],
  };

  const { addTestPoints } = useTotalPoints(); // Use object destructuring to get addTestPoints

  const [sortedItems, setSortedItems] = useState(initialItems);

  const handleSubmit = () => {
    const correctOrder = {
      root: [],
      container1: ['"Hello World!"','"01414960999"',],
      container2: ['2','362'],
      container3: ['true','false',],
    };

    console.log("Sorted Items:", sortedItems);
    console.log("Correct Order:", correctOrder);

    let isCorrect = true;

    // Compare each item in sortedItems with corresponding item in correctOrder
    for (const key in sortedItems) {
      if (JSON.stringify(sortedItems[key]) !== JSON.stringify(correctOrder[key])) {
        isCorrect = false;
        break;
      }
    }

    if (isCorrect) {
      alert("Congratulations! The items are sorted correctly.");
      addTestPoints(25);
    } else {
      alert("Sorry! The items are not sorted correctly. Please try again.");
    }
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
        <SortableContainer initialItems={initialItems} onSortChange={setSortedItems} />
      </div>
      <div className="row">
        <div className="col text-center">
          <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default SortingLessonDTS;
