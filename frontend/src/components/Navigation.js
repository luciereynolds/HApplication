import React from "react";
import Logo from "../images/RocketIcon.png"; // Replace with the actual path to your logo image

const Navigation = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#254e8f" }}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light py-2 py-lg-0">
          <button
            type="button"
            className="navbar-toggler ms-auto me-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Add the logo to the brand */}
          <a href="/" className="navbar-brand">
            <img src={Logo} alt="Logo" style={{ height: "80px", marginRight: "10px" }} />
          </a>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto">
              <a href="/" className="nav-item nav-link active" style={{ color: "white" }}>
                Home
              </a>
              <a href="/lessons" className="nav-item nav-link" style={{ color: "white" }}>
                Lessons
              </a>
              <a href="/leaderboard" className="nav-item nav-link" style={{ color: "white" }}>
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