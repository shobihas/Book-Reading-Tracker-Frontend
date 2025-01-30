import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post('http://localhost:3000/signin', {
        email,
        password,
      });


      localStorage.setItem('token', response.data);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      console.log('Logged in successfully:', response.data);
      navigate('/home');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  }

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2 className="signin-title">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="auth-button">Signin</button>

        </form>
        <p className="signup-link">
          Not Registered? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
