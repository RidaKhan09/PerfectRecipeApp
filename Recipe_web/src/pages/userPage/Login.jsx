import React, { useState } from "react";
import logo from "../../assets/logo.png";
import food from "../../assets/cheesecakeRecipe.jpg";
import { Link } from "react-router-dom";
import { httpAction } from "../../utils/httpAction"; // ✅ adjust path if needed
import { apis } from "../../utils/apis"; // ✅ adjust path if needed
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { UseAuth } from "../../components/common/AuthContext";

const Login = () => {
  const { setUser } = UseAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const loginWithGoogle = () => {
    window.location.href = "http://localhost:5050/auth/google";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await httpAction({
        url: apis().loginUser,
        method: "POST",
        body: formData,
      });

      // if (res?.message === "Login successful") {
      //   localStorage.setItem("accessToken", res.token);

      //   if (res.user) {
      //     setUser(res.user); // instant context update
      //     await fetchUser();
      //   }

      //   toast.success("Login successful!");
      //   // 👇 Delay navigation slightly to allow context update to propagate
      //   setTimeout(() => {
      //     navigate("/");
      //   }, 100); // 100ms is enough
      // } 
      if (res?.message === "Login successful") {
        localStorage.setItem("accessToken", res.token);
        localStorage.setItem("user", JSON.stringify(res.user));
        setUser(res.user); // 🧠 this updates your context
        toast.success("Login successful!");
      
        // ✅ no need to reload
        navigate("/");
      }else {
        toast.error(res?.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error?.message || "Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row w-[90%] md:w-[900px] bg-white rounded-3xl overflow-hidden shadow-lg">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Perfect Recipe Logo"
              className="h-6 w-6 object-contain"
            />
            <h1 className="text-xl font-bold">
              <span className="text-black">Perfect</span>
              <span className="text-[#C46C5F]">Recipe</span>
            </h1>
          </div>

          {/* Login Form */}
          <div className="pt-12">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
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
                className="w-full mb-2 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C46C5F]"
              />

              {/* Forgot Password Link
              <div className="text-right mb-4">
                <Link to="/FPass" className="text-sm text-[#C46C5F] hover:underline">
                  Forgot password?
                </Link>
              </div> */}

              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-3 rounded-full hover:bg-gray-800 transition"
              >
                LOGIN
              </button>
            </form>

            {/* OR Divider */}
            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="mx-4 text-sm text-gray-500">OR</span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>

            {/* Login with Google */}
            <button
              onClick={loginWithGoogle}
              className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-full hover:bg-gray-100 transition"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-5 w-5 mr-2"
              />
              <span className="font-medium text-gray-700">
                Login with Google
              </span>
            </button>

            {/* Signup link */}
            <p className="mt-6 text-sm text-center text-gray-500">
              Don’t have an account?{" "}
              <Link
                to="/Signup"
                className="text-[#C46C5F] hover:underline font-semibold"
              >
                Sign up
              </Link>
            </p>
          </div>

          <p className="text-xs text-gray-400 mt-6">
            ©2025 PerfectRecipe L.L.D.
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

export default Login;
