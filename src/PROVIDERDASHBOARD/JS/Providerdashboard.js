import React from "react";
import "../CSS/Providerdashboard.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

import {
  FaCalendar,
  FaRupeeSign,
  FaStar,
  FaClock,
  FaThumbsUp
} from "react-icons/fa";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function ProviderDashboard() {

  const chartData = {
    labels: ["15 May", "16 May", "17 May", "18 May", "19 May", "20 May", "21 May"],
    datasets: [{
      data: [10000, 12000, 9000, 15000, 10000, 17000, 21000],
      borderColor: "#4f6cff",
      tension: 0.4,
      fill: false
    }]
  };

  const chartOptions = {
    plugins: { legend: { display: false } },
    scales: {
      y: { grid: { color: "#eee" } },
      x: { grid: { display: false } }
    }
  };

  return (
    <div className="container">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>📍 ProNearby</h2>
        <ul>
          <li className="active">Dashboard</li>
          <li>My Bookings</li>
          <li>My Services</li>
          <li>Earnings</li>
          <li>Schedule</li>
          <li>Reviews</li>
          <li>Messages</li>
          <li>Profile</li>
          <li>Settings</li>
        </ul>
      </div>

      {/* Main */}
      <div className="main">

        {/* Header */}
        <div className="header">
          <div>
            <h2>Welcome back, Ramesh! 👋</h2>
            <p>Here's what's happening with your business today.</p>
          </div>
        </div>

        {/* Cards */}
        <div className="cards">
          <Card icon={<FaCalendar />} title="Today's Bookings" value="4" />
          <Card icon={<FaRupeeSign />} title="This Month Earnings" value="₹18,750" />
          <Card icon={<FaCalendar />} title="Total Bookings" value="128" />
          <Card icon={<FaStar />} title="Average Rating" value="4.8 ⭐" />
        </div>

        {/* Middle */}
        <div className="middle">

          <div className="box">
            <h3>Today's Bookings</h3>
            <ul>
              <li>09:30 AM - Home Electrical Repair</li>
              <li>12:00 PM - Fan Installation</li>
              <li>03:30 PM - Switch Board Repair</li>
              <li>06:00 PM - Light Fitting</li>
            </ul>
          </div>

          <div className="box large">
            <h3>Earnings Overview</h3>
            <Line data={chartData} options={chartOptions} />
          </div>

          <div className="box">
            <h3>Upcoming Schedule</h3>
            <ul>
              <li>AC Installation</li>
              <li>Wiring Repair</li>
              <li>Geyser Repair</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="bottom">

          <div className="box">
            <h3>Recent Reviews</h3>
            <p>⭐ Priya: Great work!</p>
            <p>⭐ Amit: Excellent service</p>
            <p>⭐ Neha: Very good experience</p>
          </div>

          <div className="box">
            <h3>Performance Summary</h3>
            <div className="summary">
              <div><FaCalendar /> 28 Jobs</div>
              <div><FaClock /> 96%</div>
              <div><FaStar /> 4.8</div>
              <div><FaThumbsUp /> 98%</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

/* Reusable Card */
function Card({ icon, title, value }) {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <div>
        <h4>{title}</h4>
        <h2>{value}</h2>
      </div>
    </div>
  );
}