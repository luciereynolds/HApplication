import React from "react";
import Logo from "../images/RocketIcon.png";

const Navigation = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <nav className="navbar navbar-expand-lg align-items-center">
          <a href="/" className="navbar-brand" style={{ marginTop: "0.5rem", maxHeight: "45px"}}>
              <img src={Logo} alt="Logo" style={{ height: "50px", marginRight: "10px" }}/>
              <span style={{ fontSize: "20px", fontWeight: "bold" }}>ComputingCadets</span>
          </a>

          <button
            type="button"
            className="navbar-toggler ms-auto me-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto">
              <a href="/" className="nav-item nav-link active" style={{ padding:"0.5rem"}}>
                Home
              </a>
              <a href="/lessons" className="nav-item nav-link" style={{ padding:"0.5rem"}}>
                Lessons
              </a>
              <a href="/leaderboard" className="nav-item nav-link" style={{ padding:"0.5rem"}}>
                Leaderboard
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
