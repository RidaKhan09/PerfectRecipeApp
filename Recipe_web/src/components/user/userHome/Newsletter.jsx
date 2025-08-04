import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = () => {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setMessage("⚠️ Please enter your email.");
    } else if (!emailRegex.test(email)) {
      setMessage("❌ Enter a valid email address.");
    } else {
      // ✅ Do whatever you want with the email (send to backend, etc.)
      console.log("Subscribed with email:", email);

      setMessage("✅ Subscribed successfully!");
      setEmail(""); // Clear input
    }
  };

  return (
    <div className="bg-[#FFF0EE] py-10 px-4 mt-16">
      <h1 className="text-3xl font-bold text-center mb-3 text-black">Let’s Stay In Touch!</h1>
      <p className="text-center text-gray-600 mb-6">
        Join our newsletter, so that we reach out to you with our news and offers.
      </p>

      <div className="max-w-md mx-auto flex">
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-white border border-gray-300 rounded-l py-2 px-4 focus:outline-none"
        />
        <button
          onClick={handleSubscribe}
          className="bg-[#C46C5F] text-white rounded-r px-4 py-2 hover:bg-[#a9534b] transition-all duration-200"
        >
          Subscribe
        </button>
      </div>

      {message && (
        <p className="text-center mt-4 text-sm text-[#C46C5F]">{message}</p>
      )}
    </div>
  );
};

export default Newsletter;
