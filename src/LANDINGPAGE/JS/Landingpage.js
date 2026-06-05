import React from "react";
import "../CSS/Landingpage.css";

import {
  FaMapMarkerAlt,
  FaUsers,
  FaShieldAlt,
  FaThumbsUp,
  FaArrowRight,
  FaTools,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaHeadset
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import A1 from "../../assets/A1.png";

export default function LandingPage() {

  const navigate = useNavigate();

  return (

    <div className="landing">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">

          <FaMapMarkerAlt className="logo-icon" />

          <span>
            Pro<span>Nearby</span>
          </span>

        </div>

        <ul className="nav-links">
          <li className="active">Home</li>
          <li>Features</li>
          <li>Services</li>
          <li>How It Works</li>
          <li>Testimonials</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>

        <div className="nav-right">

          {/* LOGIN */}

          <button
            className="login"
            onClick={() => navigate("/login")}
          >
            Log In
          </button>

          {/* SIGNUP */}

          <button
            className="signup"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>

        </div>

      </nav>

      {/* ================= HERO ================= */}

      <section className="hero">

        {/* LEFT */}

        <div className="hero-left">

          <div className="tag">
            ✨ Your Service, Our Priority
          </div>

          <h1>
            All Your Home Services
            <br />
            <span>One Click Away!</span>
          </h1>

          <p>
            ProNearby connects you with trusted professionals
            for all your home service needs. Fast, reliable
            and hassle-free service booking right at your
            fingertips.
          </p>

          {/* BUTTONS */}

          <div className="hero-buttons">

            <button className="primary">
              Book a Service
              <FaArrowRight />
            </button>

            <button className="secondary">
              Explore Services
            </button>

          </div>

          {/* FEATURES */}

          <div className="hero-features">

            <div className="feature-item">

              <div className="feature-icon blue">
                <FaShieldAlt />
              </div>

              <div>
                <h4>Verified Professionals</h4>
                <p>Trusted & Background Checked</p>
              </div>

            </div>

            <div className="feature-item">

              <div className="feature-icon green">
                <FaThumbsUp />
              </div>

              <div>
                <h4>Quality Service</h4>
                <p>100% Satisfaction</p>
              </div>

            </div>

            <div className="feature-item">

              <div className="feature-icon purple">
                <FaUsers />
              </div>

              <div>
                <h4>Secure Payments</h4>
                <p>Safe & Encrypted</p>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="hero-right">

          <div className="image-bg"></div>

          <img
            src={A1}
            alt="App Preview"
          />

        </div>

      </section>

      {/* ================= WHY SECTION ================= */}

      <section className="why">

        <span className="why-tag">
          WHY CHOOSE PRONEARBY
        </span>

        <h2>
          Making Home Services
          Simple & Reliable
        </h2>

        <p>
          We bring convenience, quality and trust
          together for a seamless experience.
        </p>

        {/* GRID */}

        <div className="features-grid">

          <div className="feature-card">

            <div className="card-icon blue-card">
              <FaTools />
            </div>

            <h4>Wide Range of Services</h4>

            <p>
              From cleaning to repairs, we offer
              a wide range of home services.
            </p>

          </div>

          <div className="feature-card">

            <div className="card-icon green-card">
              <FaCalendarCheck />
            </div>

            <h4>Easy Booking</h4>

            <p>
              Book your services in just a few
              taps quickly and conveniently.
            </p>

          </div>

          <div className="feature-card">

            <div className="card-icon purple-card">
              <FaShieldAlt />
            </div>

            <h4>Verified Professionals</h4>

            <p>
              All our professionals are verified
              and trained.
            </p>

          </div>

          <div className="feature-card">

            <div className="card-icon orange-card">
              <FaMoneyBillWave />
            </div>

            <h4>Affordable Pricing</h4>

            <p>
              Get the best quality services
              at transparent pricing.
            </p>

          </div>

          <div className="feature-card">

            <div className="card-icon pink-card">
              <FaHeadset />
            </div>

            <h4>Customer Support</h4>

            <p>
              Our support team is always
              ready to assist you.
            </p>

          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="stats">

        <div className="stat-box">
          <h2>10K+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat-box">
          <h2>5K+</h2>
          <p>Service Providers</p>
        </div>

        <div className="stat-box">
          <h2>99%</h2>
          <p>Satisfaction Rate</p>
        </div>

        <div className="stat-box">
          <h2>24/7</h2>
          <p>Customer Support</p>
        </div>

      </section>

    </div>
  );
}