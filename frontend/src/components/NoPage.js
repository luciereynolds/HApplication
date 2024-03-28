import React from "react";

// returns empty under construction page
const NoPage = () => {
  return (
    <div className="container-fluid" style={{ padding: "50px", paddingTop: "0px" }}>
      <div className="row">
        <div className="col-md p-3 mx-2 text-dark" style={{ padding: "0.5rem" }}>
          <h2><b>404</b></h2>
          <p>Page not found</p>
        </div>
      </div>
    </div>
  )
};

export default NoPage;