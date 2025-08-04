import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaCoins } from "react-icons/fa";
import BuyCoinsModal from "../common/BuyCoindModal";
import BASE_URL from "../../../src/api/BaseURL";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/userSlice";
import axios from "axios";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [openBuyModal, setOpenBuyModal] = useState(false);
  const dropdownRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // try to load user from localStorage if not already in Redux
    const storedUser = localStorage.getItem("user");
    if (storedUser && !user) {
      try {
        // eslint-disable-next-line no-unused-vars
        const parsedUser = JSON.parse(storedUser);
        // no setUser, since you're using redux only now. So skip this.
        // optionally: dispatch(setUser(parsedUser)); ← make one if needed
      } catch (err) {
        console.error("Invalid user JSON", err);
        localStorage.removeItem("user");
      }
    }
  }, [user]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get(`${BASE_URL}/user/logout`, {
        withCredentials: true,
      });

      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 z-50 px-4 sm:px-6 lg:px-10 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] w-full mx-auto flex items-center justify-between py-4 rounded-xl px-4 lg:px-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-6 w-6 object-contain" />
            <h1 className="text-xl font-bold">
              <span className="text-black">Perfect</span>
              <span className="text-[#C46C5F]">Recipe</span>
            </h1>
          </div>

          {/* Nav Links */}
          <ul className="hidden lg:flex items-center space-x-6 font-medium text-black">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/recipes">Recipe</Link></li>
            <li><Link to="/AddRecipe">Add Recipe</Link></li>
            <li><Link to="/BlogPage">Blog</Link></li>
            <li><Link to="/AboutusPage">About</Link></li>
          </ul>

          {/* Auth */}
          <div className="hidden lg:flex items-center space-x-3 relative">
            {user ? (
              <div className="flex items-center gap-4">
                {/* Coins */}
                <div
                  onClick={() => setOpenBuyModal(true)}
                  className="flex items-center gap-1 text-yellow-500 font-bold cursor-pointer"
                  title="Buy Coins"
                >
                  <FaCoins size={20} className="text-yellow-400 drop-shadow-sm" />
                  <span>Coins: {user.coins}</span>
                </div>

                {/* Avatar + Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <div
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="w-8 h-8 bg-pink-700 text-white rounded-full flex items-center justify-center font-bold uppercase cursor-pointer"
                  >
                    {user?.name?.[0]}
                  </div>

                  {showDropdown && (
                    <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md px-4 py-3 text-sm min-w-[200px] z-50">
                      <div className="font-semibold text-black">
                        {user.name}
                      </div>
                      <div className="text-gray-500">{user.email}</div>
                      <Link
                        to="/my-generated-recipes"
                        className="block px-3 py-1 text-black hover:bg-gray-100 rounded"
                      >
                        My Generated Recipes
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-3 py-1 text-red-600 hover:bg-red-50 rounded mt-2"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <>
                <Link to="/Login">
                  <button className="px-4 py-2 bg-[#F2F2F2] text-black font-medium rounded-md">
                    Log in
                  </button>
                </Link>
                <Link to="/Signup">
                  <button className="px-4 py-2 bg-[#C46C5F] text-white font-medium rounded-md">
                    Sign up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Buy Coins Modal */}
      {openBuyModal && (
        <BuyCoinsModal
          setOpen={setOpenBuyModal}
          user={user}
          setUser={() => {}} // optional, since Redux is handling user now
        />
      )}
    </>
  );
};

export default Navbar;
