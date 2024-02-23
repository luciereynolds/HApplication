import React from "react";

const Lessons = () => {

  return (
    <div className="container-fluid">
      <h3>Explore our lessons!🚀</h3>
      <div className="row">
        <div className="col p-3 mx-2">
          <h4><a href="/lessons/datatypesandstructures" className="nav-item nav-link">
            Data Types and Structures
          </a></h4>
          <p>Embark on a coding journey! Discover programming basics with numbers, words, and structures.</p>
        </div>
        <div className="col p-3 mx-2">
          <h4>Low Level Operations and Computer Architecture </h4>
          <p>Discover computing essentials: binary, memory, CPU. Decode low-level operations, explore computer architecture. Unveil tech secrets in a nutshell!</p>
        </div>
        <div className="col p-3 mx-2">
          <h4>Testing and Documenting Solutions </h4>
          <p>Level up coding skills! Learn to test and document like a pro. Make sure your solutions rock and your code tells the story!</p>
        </div>
      </div>
    </div>
  );
};

export default Lessons;