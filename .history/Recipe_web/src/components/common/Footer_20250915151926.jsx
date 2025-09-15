import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import tiktok from "../../assets/icons/tiktok.svg";
import x from "../../assets/icons/x.svg";
import facebook from "../../assets/icons/facebook.svg";
import insta from "../../assets/icons/insta.svg";
import pinterest from "../../assets/icons/pinterest.svg";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto p-6 sm:p-8 lg:p-12 bg-gray-100 text-gray-900">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        {/* Logo + About */}
        <div className="flex flex-col space-y-3 md:max-w-xs">
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Perfect Recipe Logo"
              className="h-8 w-8 object-contain"
            />
            <h1 className="text-xl font-bold">
              <span className="text-black">Perfect</span>
              <span className="text-[#C46C5F]">Recipe</span>
            </h1>
          </div>
          <p className="text-sm leading-relaxed max-w-xs text-gray-700">
            The purpose of lorem ipsum is to create a natural looking block of
            text (sentence, paragraph, page, etc.) that doesn&apos;t distract
            from the layout.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 md:gap-20 flex-grow">
          <div>
            <h3 className="text-sm font-bold mb-4">Quick links</h3>
            <ul className="text-sm space-y-3 text-gray-700">
              <li>
                <Link to="/" className="hover:text-[#C46C5F]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="hover:text-[#C46C5F]">
                  Recipe
                </Link>
              </li>
              <li>
                <Link to="/BlogPage" className="hover:text-[#C46C5F]">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4">Company</h3>
            <ul className="text-sm space-y-3 text-gray-700">
              <li>
                <Link to="/ShareRecipe" className="hover:text-[#C46C5F]">
                  Share Recipe
                </Link>
              </li>
              <li>
                <Link to="/AboutusPage" className="hover:text-[#C46C5F]">
                  About
                </Link>
              </li>
              <li>
                <Link to="/ContactPage" className="hover:text-[#C46C5F]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4">Legal</h3>
            <ul className="text-sm space-y-3 text-gray-700">
              <li>
                <Link to="/Terms" className="hover:text-[#C46C5F]">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/Privacy" className="hover:text-[#C46C5F]">
                  Privacy & Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col w-full max-w-sm">
          <h3 className="font-semibold mb-2 text-sm">Newsletter</h3>
          <p className="text-xs mb-3 text-gray-700">
            Subscribe to our newsletter to get more free tips
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed!");
              e.target.reset();
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              placeholder="Enter Your Email"
              aria-label="Enter your email"
              className="flex-grow border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-rose-600"
            />
            <button
              type="submit"
              className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded text-sm font-semibold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <hr className="border-t border-gray-300 mt-10" />
      <div className="mt-4 text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© 2023 Perfect Recipe. All Rights Reserved</p>

        {/* Socials */}
        <div className="flex space-x-5">
          <Link to="/tiktok" aria-label="TikTok link">
            <img src={tiktok} alt="TikTok" className="w-6 h-6" />
          </Link>
          <Link to="/x" aria-label="X link">
            <img src={x} alt="X" className="w-6 h-6" />
          </Link>
          <Link to="/facebook" aria-label="Facebook link">
            <img src={facebook} alt="Facebook" className="w-6 h-6" />
          </Link>
          <Link to="/instagram" aria-label="Instagram link">
            <img src={insta} alt="Instagram" className="w-6 h-6" />
          </Link>
          <Link to="/pinterest" aria-label="Pinterest link">
            <img src={pinterest} alt="Pinterest" className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
