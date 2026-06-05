import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Login from "./Loginpage/JS/login";
import Signup from "./SIGNUPpage/JS/signup";
import UserDashboard from "./DASHBOARDPage/JS/UserDashboard";
import AdminDashboard from "./ADMINDASHBOARD/JS/Admindashboard";
import ProviderDashboard from "./PROVIDERDASHBOARD/JS/Providerdashboard";
import LandingPage from "./LANDINGPAGE/JS/Landingpage";
import OtpVerification from "./OTPVERIFICATION/JS/verify-otp";




function App() {
  return (
    <Router>
      <Routes>

        {/* 🌐 Landing Page (Default) */}
        <Route path="/" element={<LandingPage />} />

        {/* 🔐 Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-otp" element={<OtpVerification />} />
       

        {/* 👤 Dashboards */}
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/providerdashboard" element={<ProviderDashboard />} />

        {/* 🔁 Optional direct access */}
      <Route path="/Landingpage" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

      </Routes>
    </Router>
  );
}

export default App;