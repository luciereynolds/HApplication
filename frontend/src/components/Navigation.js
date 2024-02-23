import React from "react";

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
