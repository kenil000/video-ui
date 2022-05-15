import React from "react";
import "./App.css";
import Signup from "./components/Signup/Signup";
import LoginForm from "./components/Login/LoginForm";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import RecommendedVideos from "./components/Videos/RecommendedVideos";
import { AuthProvider } from "./components/contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FitnessVideo from "./components/Videos/FitnessVideo";
import DietVideo from "./components/Videos/DietVideo";
import WatchVideo from "./components/WatchVideo/WatchVideo";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route
              path="/home"
              element={
                <div className="welcome">
                  <Header />
                  <div className="sidebar__page">
                    <SideBar />
                    <RecommendedVideos />
                  </div>
                </div>
              }
            />
            <Route
              path="/fitness"
              element={
                <div className="welcome">
                  <Header />
                  <div className="sidebar__page">
                    <SideBar />
                    <FitnessVideo />
                  </div>
                </div>
              }
            />
            <Route
              path="/diet"
              element={
                <div className="welcome">
                  <Header />
                  <div className="sidebar__page">
                    <SideBar />
                    <DietVideo />
                  </div>
                </div>
              }
            />
            <Route
              path="/watchvideo"
              element={
                <div className="welcome">
                  <Header />
                  <WatchVideo />
                </div>
              }
            ></Route>
            <Route
              exact
              path="/"
              element={
                <div className="AppMain">
                  <Signup />
                </div>
              }
            />
            <Route
              path="/login"
              element={
                <div className="AppMain">
                  <LoginForm />
                </div>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
