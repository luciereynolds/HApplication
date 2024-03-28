import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import Navigation from "./components/Navigation";
import MainLessons from "./components/MainLessons";
import DataTypesLesson from "./components/DataTypesLesson";
import LowLevelLesson from "./components/LowLevelLesson";
import TestingAndDocLesson from "./components/TestingAndDocLesson";
import Login from "./components/LogIn";
import BlockedPage from './components/BlockedPage';
import NoPage from "./components/NoPage";
import useToken from "./components/useToken";

import 'bootstrap/dist/js/bootstrap.js';
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { token, setToken } = useToken();
  const isLoggedIn = !!token; // Check if user is logged in

  return (
    <>
      <div className="wrapper">
        <Navigation isLoggedIn={isLoggedIn} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lessons" element={<MainLessons />} />
            <Route path="*" element={<NoPage />} />
            {isLoggedIn && (
              <>
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/lessons/datatypesandstructures" element={<DataTypesLesson />} />
                <Route path="/lessons/LowLevelOperation" element={<LowLevelLesson />} />
                <Route path="/lessons/TestingAndDocumenting" element={<TestingAndDocLesson />} />
              </>
            )}
            {!isLoggedIn && <Route path="/login" element={<Login setToken={setToken} />} />}
            <Route path="/lessons/TestingAndDocumenting" element={<BlockedPage />} />
            <Route path="/lessons/LowLevelOperation" element={<BlockedPage />} />
            <Route path="/lessons/datatypesandstructures" element={<BlockedPage />} />
            <Route path="/leaderboard" element={<BlockedPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
