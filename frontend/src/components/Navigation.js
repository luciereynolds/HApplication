import React from "react";
import Logo from "../images/RocketIcon.png";

const Navigation = () => {
  const token = localStorage.getItem('token'); // Retrieve token from localStorage

  const handleLogout = () => {
    // Clear token from localStorage or perform any other logout actions
    localStorage.removeItem('token');
    localStorage.removeItem('dataTypeLessonCompletion');
    localStorage.removeItem('lowLevelLessonCompletion');
    localStorage.removeItem('testingLessonCompletion');
    localStorage.removeItem('totalPoints');
    localStorage.removeItem('testPoints');
    // Redirect to login page or any other appropriate page
    window.location.href = '/';
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <nav className="navbar navbar-expand-lg align-items-center">
          <a href="/" className="navbar-brand" style={{ marginTop: "0.5rem", maxHeight: "45px" }}>
            <img src={Logo} alt="Logo" style={{ height: "50px", marginRight: "10px" }} />
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
              <a href="/" className="nav-item nav-link active" style={{ padding: "0.5rem" }}>
                Home
              </a>
              <li className="nav-item dropdown">
                <a href="/lessons" className="nav item nav-link" style={{ padding: "0.5rem" }}>
                  Lessons
                </a>
                <div className="dropdown-menu" aria-labelledby="lessonsDropdown">
                  <a className="dropdown-item" href="/lessons/DataTypesAndStructures">Data Types and Structures</a>
                  <a className="dropdown-item" href="/lessons/LowLevelOperation">Low Level Operations and Computing Architecture</a>
                  <a className="dropdown-item" href="/lessons/TestingAndDocumenting">Testing and Documenting Solutions</a>
                </div>
              </li>
              <a href="/leaderboard" className="nav-item nav-link" style={{ padding: "0.5rem" }}>
                Leaderboard
              </a>
              {token ? ( // Check if token exists
                <>
                  <a href="/" className="nav-item nav-link" style={{ padding: "0.5rem" }} onClick={handleLogout}>
                    Logout
                  </a>
                </>
              ) : (
                <a href="/login" className="nav-item nav-link" style={{ padding: "0.5rem" }}>
                  Login
                </a>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
