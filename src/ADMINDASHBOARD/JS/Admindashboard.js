import React from "react";
import "../CSS/Admindashboard.css";
import {
  Line,
  Doughnut
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

import {
  FaUsers,
  FaBriefcase,
  FaCalendar,
  FaWallet,
  FaBell
} from "react-icons/fa";

ChartJS.register(
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function App() {

  const lineData = {
    labels: ["15 May", "16 May", "17 May", "18 May", "19 May", "20 May", "21 May"],
    datasets: [
      {
        data: [550, 400, 500, 600, 480, 620, 850],
        borderColor: "#4f6cff",
        tension: 0.4,
        pointRadius: 4,
        fill: false
      }
    ]
  };

  const lineOptions = {
    plugins: { legend: { display: false } },
    scales: {
      y: {
        grid: { color: "#eee" },
        ticks: { stepSize: 200 }
      },
      x: { grid: { display: false } }
    }
  };

  const donutData = {
    labels: ["Confirmed", "Completed", "Pending", "Cancelled"],
    datasets: [
      {
        data: [4562, 2785, 1216, 400],
        backgroundColor: ["#4caf50", "#2196f3", "#ff9800", "#f44336"],
        borderWidth: 0
      }
    ]
  };

  return (
    <div className="container">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>📍 ProNearby</h2>
        <ul>
          <li className="active">Dashboard</li>
          <li>Users</li>
          <li>Providers</li>
          <li>Bookings</li>
          <li>Services</li>
          <li>Categories</li>
          <li>Reviews</li>
          <li>Payments</li>
          <li>Reports</li>
          <li>Settings</li>
        </ul>
      </div>

      {/* Main */}
      <div className="main">

        {/* Header */}
        <div className="header">
          <div>
            <h2>Welcome back, Admin! 👋</h2>
            <p>Here's what's happening with ProNearby today.</p>
          </div>
          <div className="header-right">
            <input placeholder="Search here..." />
            <FaBell />
          </div>
        </div>

        {/* Cards */}
        <div className="cards">
          <Card icon={<FaUsers />} title="Total Users" value="12,845" />
          <Card icon={<FaBriefcase />} title="Total Providers" value="2,341" />
          <Card icon={<FaCalendar />} title="Total Bookings" value="8,963" />
          <Card icon={<FaWallet />} title="Total Revenue" value="₹24,68,920" />
        </div>

        {/* Middle */}
        <div className="middle">

          <div className="box large">
            <h3>Bookings Overview</h3>
            <Line data={lineData} options={lineOptions} />
          </div>

          <div className="box">
            <h3>Bookings by Status</h3>
            <div className="donut">
              <Doughnut data={donutData} />
              <div className="center-text">
                <h2>8,963</h2>
                <p>Total</p>
              </div>
            </div>
          </div>

          <div className="box">
            <h3>Recent Notifications</h3>
            <ul className="notifications">
              <li>New booking received</li>
              <li>New provider registered</li>
              <li>New review received</li>
              <li>Payment received</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="bottom">

          <div className="box">
            <h3>Recent Bookings</h3>
            <table>
              <tbody>
                <tr><td>#BN1256</td><td>Home Cleaning</td><td><span className="green">Confirmed</span></td><td>₹1299</td></tr>
                <tr><td>#BN1255</td><td>Plumbing</td><td><span className="blue">Completed</span></td><td>₹850</td></tr>
                <tr><td>#BN1254</td><td>AC Repair</td><td><span className="orange">Pending</span></td><td>₹1500</td></tr>
              </tbody>
            </table>
          </div>

          <div className="box">
            <h3>Top Services</h3>
            <Progress name="Home Cleaning" val="70%" />
            <Progress name="Plumbing" val="50%" />
            <Progress name="AC Repair" val="40%" />
          </div>

        </div>

      </div>
    </div>
  );
}

/* Components inside same file */

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

function Progress({ name, val }) {
  return (
    <div className="progress">
      <p>{name}</p>
      <div className="bar"><span style={{ width: val }}></span></div>
    </div>
  );
}