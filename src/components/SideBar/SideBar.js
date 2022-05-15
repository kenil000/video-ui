import React, { useState } from "react";
import "./SideBar.css";
import SidebarRow from "../SidebarRow/SidebarRow";
import { useNavigate, useLocation } from "react-router-dom";

const SideBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const allvideoLink = () => navigate("/home");
  const fitnessLink = () => navigate("/fitness");
  const dietLink = () => navigate("/diet");
  return (
    <>
      <div className="sidebar">
        <div
          className={`menu_item ${pathname === "/home" ? "active" : ""}`}
          onClick={allvideoLink}
        >
          <SidebarRow selected title="All Videos" />
        </div>
        <div
          className={`menu_item ${pathname === "/fitness" ? "active" : ""}`}
          onClick={fitnessLink}
        >
          <SidebarRow title="Fitness" />
        </div>
        <div
          className={`menu_item ${pathname === "/diet" ? "active" : ""}`}
          onClick={dietLink}
        >
          <SidebarRow title="Diet" />
        </div>
      </div>
    </>
  );
};

export default SideBar;
