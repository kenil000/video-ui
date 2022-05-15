import React, { useState } from "react";
import "./Header.css";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = ({ backendComments }) => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out!");
    }
  }

  return (
    <div className="header">
      {error !== "" ? <div className="error">{error}</div> : ""}
      <div className="header__left">
        <h3>Welcome to Videos</h3>
      </div>
      <div className="header__right">
        <button className="logout__button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
