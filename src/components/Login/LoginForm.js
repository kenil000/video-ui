import React, { useRef, useState } from "react";
import "./LoginForm.css";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/home");
    } catch {
      setError("Failed to sign in!");
    }
    setLoading(false);
  }

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="heading">
            <h3>Log In</h3>
            {error !== "" ? <div className="error">{error}</div> : ""}
            <div className="input-container">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                name="email"
                id="email"
                ref={emailRef}
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                ref={passwordRef}
                required
              />
            </div>
            <div className="button-container">
              <input disabled={loading} type="submit" value="Log In" />
            </div>
            <div className="signup__route">
              Need an account?<Link to="/">Sign Up</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
