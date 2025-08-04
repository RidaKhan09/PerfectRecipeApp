import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { httpAction } from "../../utils/httpAction";
import { apis } from "../../utils/apis";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Bruh, enter your registered email first 😅");
      return;
    }

    try {
      const data = {
        url: apis().forgotPass,
        method: "POST",
        body: { email },
      };

      const result = await httpAction(data);
     
      if (result?.status) {
        toast.success(result?.message)
        navigate("/OTPVerify");
      } 
    } catch (err) {
      console.error("OTP error:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center bg-gray-100">
      <div className="w-[90%] max-w-md bg-white rounded-3xl shadow-lg p-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Find Your Account
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Enter your registered email to receive an OTP.
        </p>

        <form onSubmit={handleSendOTP} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C46C5F]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-[#C46C5F] text-white font-semibold py-3 rounded-full hover:bg-[#a9554c] transition"
          >
            Send OTP
          </button>
        </form>

        <div className="text-center mt-6">
          <Link to="/login" className="text-sm text-[#C46C5F] hover:underline">
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
