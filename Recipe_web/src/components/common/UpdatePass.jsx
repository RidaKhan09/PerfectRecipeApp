import React, { useState } from "react";
import { Link } from "react-router-dom";

const UpdatePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUpdatePassword = (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      alert("Broo, both fields are required 😬");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match 🥲");
      return;
    }

    // Placeholder: Password update logic here
    alert("Password updated successfully 🎉");
    // You can redirect to login after this
  };

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center bg-gray-100">
      <div className="w-[90%] max-w-md bg-white rounded-3xl shadow-lg p-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Reset Your Password
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Choose a new strong password to secure your account 🔐
        </p>

        <form onSubmit={handleUpdatePassword} className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="New Password"
            className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C46C5F]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm New Password"
            className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C46C5F]"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-[#C46C5F] text-white font-semibold py-3 rounded-full hover:bg-[#a9554c] transition"
          >
            Update Password
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

export default UpdatePassword;
