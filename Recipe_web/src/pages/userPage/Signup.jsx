import React, { useState } from "react";
import logo from "../../assets/logo.png";
import food from "../../assets/cheesecakeRecipe.jpg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../redux/slices/userSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    dispatch(
      signupUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Signup successful! Redirecting...");
        setTimeout(() => navigate("/login"), 1500);
      })
      .catch((errMsg) => toast.error("Signup failed: " + errMsg));
  };

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row w-[90%] md:w-[900px] bg-white rounded-3xl overflow-hidden shadow-lg">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Perfect Recipe Logo" className="h-6 w-6 object-contain" />
            <h1 className="text-xl font-bold">
              <span className="text-black">Perfect</span>
              <span className="text-[#C46C5F]">Recipe</span>
            </h1>
          </div>
          <div className="pt-8">
            <form onSubmit={handleSignup}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mb-4 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C46C5F]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full mb-4 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C46C5F]"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mb-4 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C46C5F]"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full mb-6 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C46C5F]"
              />

              <button
                type="submit"
                className={`w-full bg-black text-white font-semibold py-3 rounded-full transition ${loading ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-800"}`}
                disabled={loading}
              >
                {loading ? "Signing up..." : "SIGN UP"}
              </button>

              {/* Login with Google */}
              <div className="pt-8">
                <button
                  type="button"
                  onClick={() => alert("Google login feature coming soon...")}
                  className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-full hover:bg-gray-100 transition"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="h-5 w-5 mr-2"
                  />
                  <span className="font-medium text-gray-700">Continue With Google</span>
                </button>
              </div>
            </form>
          </div>
          <p className="text-xs text-gray-400 mt-6">
            Already have an account?{" "}
            <Link to="/Login" className="text-[#C46C5F] underline">
              Login
            </Link>
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block w-1/2">
          <img src={food} alt="Food" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
