import React, { useRef, useState } from "react";
import "./Signup.css";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwors do not match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/home");
    } catch {
      setError("Failed to create an account!");
    }
    setLoading(false);
  }

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="heading">
            <h3>Sign Up</h3>
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
            <div className="input-container">
              <label htmlFor="password">Password Confirmation:</label>
              <input
                type="password"
                name="password"
                id="password__confirm"
                ref={passwordConfirmRef}
              />
            </div>
            <div className="button-container">
              <input disabled={loading} type="submit" value="Sign Up" />
            </div>
            <div className="login__route">
              Already have an account?<Link to="/login">Log In</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
