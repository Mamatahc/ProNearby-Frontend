import React, { useState } from "react";
import "../CSS/signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "USER",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("All fields are required");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
  "http://localhost:8080/auth/signup",
  {
    name: formData.name,
    email: formData.email,
    password: formData.password,
    role: formData.role,
  }
);

console.log("Signup Response:", response.data);

      setSuccess("Signup successful! OTP sent to your email.");

      setTimeout(() => {
        navigate("/verify-otp", {
          state: {
            email: formData.email,
          },
        });
      }, 1000);

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "USER",
      });

    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.response?.data ||
        "Signup failed"
      );
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">

        <h2>ProNearby</h2>
        <p>Create your account</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="role-select"
          >
            <option value="USER">User</option>
            <option value="PROVIDER">Provider</option>
          </select>

          {error && <div className="error">{error}</div>}
          {success && <div className="success">{success}</div>}

          <button type="submit">
            Sign Up
          </button>

        </form>

        <p className="login-link">
          Already have an account?
          <a href="/login"> Login</a>
        </p>

      </div>
    </div>
  );
};

export default Signup;