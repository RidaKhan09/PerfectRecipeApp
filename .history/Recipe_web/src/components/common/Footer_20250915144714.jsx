import React from "react";
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
import tiktok from "../../assets/icons/tiktok.svg";
import x from "../../assets/icons/x.svg";
import facebook from "../../assets/icons/facebook.svg";
import insta from "../../assets/icons/insta.svg";
import pinterest from "../../assets/icons/pinterest.svg";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-12 bg-gray-100 text-gray-900 ">
      <div className=" flex flex-col md:flex-row md:justify-between md:items-start gap-y-8 md:gap-y-0">
        <div className="flex flex-col space-y-3 md:max-w-xs">
            {/* Logo */}
                  <div className="flex items-center space-x-2">
                    <img src={logo} alt="Perfect Recipe Logo" className="h-6 w-6 object-contain" />
                    <h1 className="text-xl font-bold">
                      <span className="text-black">Perfect</span>
                      <span className="text-[#C46C5F]">Recipe</span>
                    </h1>
                  </div>
          <p className="text-sm leading-relaxed max-w-xs">
            The purpose of lorem ipsum is to create a natural looking block of
            text (sentence, paragraph, page, etc.) that doesn&apos;t distract
            from the layout.
          </p>
        </div>

        <div className="flex justify-between md:justify-center flex-grow gap-x-10 max-w-xl">
          <div>
            <h3 className="text-xs font-bold  mb-5">
              Quick links
            </h3>
            <ul className="text-xs space-y-5 text-gray-700">
            <li><Link to="/" className="hover:underline focus:underline outline-none">Home</Link></li>
              <li><Link to="/recipes" className="hover:underline focus:underline outline-none">Recipe</Link></li>   
              <li><Link to="/BlogPage" className="hover:underline focus:underline outline-none">Blog</Link></li>  
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold  mb-5">
              Quick links
            </h3>
            <ul className="text-xs space-y-5 text-gray-700">
              <li><Link to="/AboutusPage" className="hover:text-[#C46C5F]">Share Recipe</Link></li>  
                <li><Link to="/AboutusPage" className="hover:text-[#C46C5F]">About</Link></li>  
                <li><Link to="/AboutusPage" className="hover:text-[#C46C5F]">Contact</Link></li>  
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold mb-5">Legal</h3>
            <ul className="text-xs space-y-5 text-gray-700">
            <li><Link to="/AboutusPage" className="hover:underline focus:underline">Terms of Use</Link></li>  
            <li><Link to="/AboutusPage" className="hover:underline focus:underline">Privacy & Cookies</Link></li>  
            </ul>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-sm">
          <h3 className="font-semibold mb-2 text-sm">Newsletter</h3>
          <p className="text-xs mb-3 text-gray-700">
            Subscribe to our newsletter to get more free tip
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

      <hr className="border-t border-gray-300 mt-10" />

      <div className="mt-4 text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p>© 2023 Recipe.Logo. All Right Reserved</p>
        <div className="flex space-x-5 text-gray-700">
          {/* TikTok */}
          <a
  href="https://www.tiktok.com/@yourusername" 
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-rose-600 focus:text-rose-600 outline-none"
  aria-label="TikTok link"
>
  <img src={tiktok} alt="TikTok" className="w-6 h-6" />
</a>

          {/* Logo X shape */}
          <a
  href="#logo"
  className="hover:text-rose-600 focus:text-rose-600 outline-none"
  aria-label="Logo link"
>
<img src={x} alt="X" className="w-6 h-6" />
</a>


          {/* Facebook */}
          <a
            href="#facebook"
            className="hover:text-rose-600 focus:text-rose-600 outline-none"
            aria-label="Facebook link"
          >
          <img src={facebook} alt="FACEBOOK" className="w-6 h-6" />
          </a>

          {/* Instagram */}
          <a
            href="#instagram"
            className="hover:text-rose-600 focus:text-rose-600 outline-none"
            aria-label="Instagram link"
          >
           <img src={insta} alt="INSTA" className="w-6 h-6" />
          </a>

          {/* Pinterest */}
          <a
            href="#pinterest"
            className="hover:text-rose-600 focus:text-rose-600 outline-none"
            aria-label="Pinterest link"
          >
           <img src={pinterest} alt="PINTEREST" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

