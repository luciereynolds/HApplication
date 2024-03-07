import React from "react";

const Lessons = () => {

  return (
    <div className="container-fluid" style={{ padding: "50px", paddingTop: "0px" }}>
      <div className="row">
        <div className="col-md p-3 mx-2 text-dark" style={{ padding: "0.5rem" }}>
          <h3 style={{textAlign: "center"}}>Explore our lessons!</h3>
          <br></br>
          <div className="row">
            <div className="col-md mx-2" style={{backgroundColor: "#8c7bff", borderRadius: "20px", paddingTop: "20px"}}>
              <a href="/lessons/datatypesandstructures" className="nav-item nav-link">
                <h4 style={{textAlign: "center"}}>Data Types and Structures</h4>
                <p>Embark on a coding journey! Discover programming basics with numbers, words, and structures.</p>
              </a>
            </div>
            <div className="col-md mx-2" style={{backgroundColor: "#4ada85", borderRadius: "20px", paddingTop: "20px"}}>
              <a href="/lessons/datatypesandstructures" className="nav-item nav-link">
                <h4 style={{textAlign: "center"}}>Low Level Operations and Computing Architecture</h4>
                <p>Discover computing essentials: binary, memory, CPU. Decode low-level operations, explore computer architecture. Unveil tech secrets in a nutshell!</p>
              </a>
            </div>
            <div className="col-md mx-2" style={{backgroundColor: "#fda4fe", borderRadius: "20px", paddingTop: "20px"}}>
              <a href="/lessons/datatypesandstructures" className="nav-item nav-link">
                <h4 style={{textAlign: "center"}}>Testing and Documenting Solutions</h4>
                <p>Level up coding skills! Learn to test and document like a pro. Make sure your solutions rock and your code tells the story!</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;


// delete eventually - just for reference rn

//return (
//    <div className="container-fluid">
//      <h3  style={{padding: "0.5rem"}}>Explore our lessons!🚀</h3>
//      <div className="row" style={{padding: "0.5rem"}}>
//        <div className="col p-3 mx-2">
//          <h4>
//            <a href="/lessons/datatypesandstructures" className="nav-item nav-link">
//              Data Types and Structures
//            </a>
//          </h4>
//          <p>Embark on a coding journey! Discover programming basics with numbers, words, and structures.</p>
//        </div>
//        <div className="col p-3 mx-2">
//          <h4>Low Level Operations and Computer Architecture </h4>
//          <p>Discover computing essentials: binary, memory, CPU. Decode low-level operations, explore computer architecture. Unveil tech secrets in a nutshell!</p>
//        </div>
//        <div className="col p-3 mx-2">
//          <h4>Testing and Documenting Solutions </h4>
//          <p>Level up coding skills! Learn to test and document like a pro. Make sure your solutions rock and your code tells the story!</p>
//        </div>
//      </div>
//    </div>
//  );
//};

// colours
// #8c7bff - purple
// #4ada85 - green
// #fda4fe - pink
// #fed201 - yellow
