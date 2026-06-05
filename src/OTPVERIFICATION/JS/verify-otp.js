import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../CSS/verify-otp.css";

const OtpVerification = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email || "";

  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [timer, setTimer] = useState(60);
  const [resending, setResending] = useState(false);

  useEffect(() => {

    if (timer > 0) {

      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    }

  }, [timer]);

  const handleVerify = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5181/auth/verify-otp",
        {
          email: email,
          otp: otp
        }
      );

      setMessage("OTP Verified Successfully ✅");

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {

      setMessage("Invalid OTP ❌");

    }
  };

  const handleResendOtp = async () => {

    try {

      setResending(true);

      await axios.post(
        "http://pronearby-env.eba-uimsahab.eu-north-1.elasticbeanstalk.com/auth/resend-otp",
        {
          email: email
        }
      );

      setMessage("New OTP Sent Successfully ✅");

      setTimer(60);

    } catch (error) {

      setMessage("Failed To Resend OTP ❌");

    } finally {

      setResending(false);

    }
  };

  return (
    <div className="otp-container">

      <div className="otp-card">

        <h2>Verify OTP</h2>

        <p>
          Enter the OTP sent to your email
        </p>

        <form onSubmit={handleVerify}>

          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />

          <button type="submit">
            Verify OTP
          </button>

        </form>

        <div className="resend-section">

          {timer > 0 ? (

            <p className="timer-text">
              Resend OTP in {timer}s
            </p>

          ) : (

            <button
              type="button"
              className="resend-btn"
              onClick={handleResendOtp}
              disabled={resending}
            >
              {resending ? "Sending..." : "Resend OTP"}
            </button>

          )}

        </div>

        {message && (
          <p className="message">
            {message}
          </p>
        )}

      </div>

    </div>
  );
};

export default OtpVerification;