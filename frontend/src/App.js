import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import Navigation from "./components/Navigation";
import NoPage from "./components/NoPage";
import MainLessons from "./components/MainLessons";
import DataTypesLesson from "./components/DataTypesLesson";
import LowLevelLesson from "./components/LowLevelLesson";
import 'bootstrap/dist/js/bootstrap.js';
import "./App.css";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <Navigation />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lessons" element={<MainLessons />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/lessons/datatypesandstructures" element={<DataTypesLesson />} />
            <Route path="/lessons/LowLevelOperation" element={<LowLevelLesson />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;