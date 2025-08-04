import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import BASE_URL from "../../../src/api/BaseURL"; 

const VerifyOtp = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, ""); // only digits
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (index < 5 && value) {
      inputRefs.current[index + 1].focus();
    }

    console.log("OTP:", newOtp.join(""));
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const fullOtp = otp.join("");
    if (fullOtp.length < 6) {
      alert("Please enter full 6-digit OTP 📩");
      return;
    }
  
    try {
      const response = await fetch(`${BASE_URL}/api/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp: fullOtp }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log("✅ OTP Verified:", data);
        alert("OTP Verified Successfully!");
      } else {
        console.error("❌ OTP Failed:", data.message);
        alert(data.message || "OTP verification failed");
      }
    } catch (error) {
      console.error("🚨 Error verifying OTP:", error);
      alert("Something went wrong. Try again.");
    }
  };
  

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center bg-gray-100">
      <div className="w-[90%] max-w-md bg-white rounded-3xl shadow-lg p-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Verify OTP
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Enter the 6-digit OTP sent to your email.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 items-center">
          <div className="flex justify-center gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleBackspace(e, index)}
                className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C46C5F]"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-[#C46C5F] text-white font-semibold py-3 rounded-full hover:bg-[#a9554c] transition"
          >
            Verify OTP
          </button>
        </form>

        <div className="text-center mt-6">
          <Link to="/FPass" className="text-sm text-[#C46C5F] hover:underline">
            ← Didn't receive code? Go back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
