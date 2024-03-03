import React from "react";
import Logo from "../images/RocketIcon.png";

const Navigation = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light py-2 py-lg-0 d-flex align-items-center">
          <a href="/" className="navbar-brand" style={{ marginTop: "15px"}}>
            <img
              src={Logo}
              alt="Logo"
              style={{ height: "50px", marginRight: "10px" }}
            />
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
              <a href="/" className="nav-item nav-link active">
                Home
              </a>
              <a href="/lessons" className="nav-item nav-link">
                Lessons
              </a>
              <a href="/leaderboard" className="nav-item nav-link">
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
