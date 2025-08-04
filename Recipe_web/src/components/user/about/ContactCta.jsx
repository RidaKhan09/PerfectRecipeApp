import React, { useState, useRef } from "react";
import ContactInfoSection from "./ContactInfo";

const ContactCTA = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const infoRef = useRef(null);

  const handleClick = () => {
    setShowContactInfo(true);
    setTimeout(() => {
      infoRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="text-center mt-20">
      <h2 className="text-2xl font-semibold mb-4 text-[#C46C5F]">
        Have a question or suggestion?
      </h2>
      <p className="text-gray-600 mb-6">We’d love to hear from you!</p>
      <button
        onClick={handleClick}
        className="inline-block bg-[#C46C5F] text-white px-6 py-2 rounded-full hover:bg-[#a94a45] transition"
      >
        Contact Us
      </button>

      {/* 👇 Contact Info Reveal Section */}
      {showContactInfo && (
        <div ref={infoRef}>
          <ContactInfoSection />
        </div>
      )}
    </div>
  );
};

export default ContactCTA;
