import React, { useState } from "react";
import axios from "axios";
import logo from "../../assets/logo.png";
import food from "../../assets/cheesecakeRecipe.jpg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`${name}: ${value}`); // 🧪 Shows live input in console
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
  
    console.log("Form Data Submitted:", formData); // 🧪
  
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
  
    try {
      const res = await axios.post("http://localhost:5050/user/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
  
      console.log("Signup Success:", res.data);
      toast.success("Signup successful! Redirecting to login...");
  
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);
  
      setTimeout(() => {
        navigate("/login"); // 👈 go to login after 1.5 sec
      }, 1500);
  
    } catch (err) {
      console.error("Signup Error:", err.response?.data || err.message);
      toast.error("Signup failed: " + (err.response?.data?.message || err.message));
    }
  };
  
 // const submitHandler = async(values)=> {
    //   console.log(values);
    //   const data={
    //     url:apis().registerUser,
    //     method: 'POST',
    //     body:values
    //   }
    //   const result = await httpAction(data)
    //   console.log(result)
    // }

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
                className="w-full bg-black text-white font-semibold py-3 rounded-full hover:bg-gray-800 transition"
              >
                SIGN UP
              </button>

              {/* Login with Google */}
              <div className="pt-8">
                <button
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
