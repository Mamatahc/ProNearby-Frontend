import React from "react";
import { FaBars } from "react-icons/fa";
import "../CSS/UserDashboard.css";
import {
  FaHome,
  FaCalendar,
  FaUsers,
  FaTools,
  FaEnvelope,
  FaStar,
  FaHeart,
  FaTag,
  FaCog,
  FaShoppingBag,
} from "react-icons/fa";

const UserDashboard = () => {
  return (
    <div className="Userdashboard">

      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">ProNearby</h2>

        <ul>
          <li className="active"><FaHome /> UserDashboard</li>
          <li><FaCalendar /> Bookings</li>
          <li><FaUsers /> Providers</li>
          <li><FaTools /> Services</li>
          <li><FaEnvelope /> Messages <span className="badge">3</span></li>
          <li><FaStar /> Reviews</li>
          <li><FaHeart /> Favorites</li>
          <li><FaTag /> Offers</li>
          <li><FaCog /> Settings</li>
        </ul>

        <div className="profile">
          <img src="https://i.pravatar.cc/40" alt="user" />
          <div>
            <p>Rahul Sharma</p>
            <span>Customer</span>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="main">

        {/* Header */}
        <div className="header">
          <div className="header-left">
            <FaBars className="menu-icon" />
            <input
              type="text"
              placeholder="Search services, providers..."
            />
          </div>

          <div className="header-right">
            <span>🔔</span>
            <span>📍 Bangalore, India</span>
          </div>
        </div>

        {/* Banner */}
        <div className="banner">
          <div className="banner-left">
            <h3>
              Find Trusted Services <br />
              <span>Near You.</span>
            </h3>

            <p>
              Book verified professionals for your home, beauty, repairs and more.
            </p>

            <button>Book a Service</button>
          </div>

          <video
            src="/videos/deliveryboy.mp4"
            autoPlay
            loop
            muted
            className="banner-video"
          />
        </div>

        {/* Cards */}
        <div className="cards">
          <div className="card">
            <FaShoppingBag className="icon green" />
            <h3>12</h3>
            <p>Total Bookings</p>
          </div>

          <div className="card">
            <FaStar className="icon purple" />
            <h3>4.8</h3>
            <p>Rating</p>
          </div>

          <div className="card">
            <FaUsers className="icon orange" />
            <h3>25</h3>
            <p>Providers</p>
          </div>

          <div className="card">
            <FaHeart className="icon blue" />
            <h3>8</h3>
            <p>Saved</p>
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="bottom">

          <div className="box">
            <h4>Recent Bookings</h4>

            <div className="booking">
              <span>Home Cleaning</span>
              <span className="green-text">Confirmed</span>
            </div>

            <div className="booking">
              <span>Plumbing</span>
              <span className="blue-text">Completed</span>
            </div>

            <div className="booking">
              <span>Salon</span>
              <span className="orange-text">Pending</span>
            </div>
          </div>

          <div className="box">
            <h4>Top Services</h4>

            <div className="progress-item">
              <p>Cleaning</p>
              <div className="progress">
                <div className="progress-bar blue" style={{ width: "80%" }}></div>
              </div>
            </div>

            <div className="progress-item">
              <p>Plumbing</p>
              <div className="progress">
                <div className="progress-bar purple" style={{ width: "60%" }}></div>
              </div>
            </div>
          </div>

          <div className="box">
            <h4>Reviews</h4>
            <h2>4.8 ⭐</h2>
            <p>Based on 230 reviews</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserDashboard;