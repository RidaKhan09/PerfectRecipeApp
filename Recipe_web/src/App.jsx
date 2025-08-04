// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from "./components/common/ScrollToTop";
import Login from "./pages/userPage/Login";
import Signup from "./pages/userPage/Signup";
import FPass from "./components/common/FPass"
import OTPVerify from "./components/common/OTPVerify"
import UpdatePass from "./components/common/UpdatePass"

import Homepage from './Pages/userPage/Homepage';
import Recipes from './pages/userPage/Recipes'
import BlogPage from './pages/userPage/BlogPage';
import AboutusPage from './pages/userPage/AboutusPage';
import AddRecipe from './pages/userPage/AddRecipe';
import PaymentSuccess from "./components/common/payment_Success"; // ✅ update the path if needed
import MyGeneratedRecipes from './components/common/MyGeneratedRecipes'; // ✅ adjust path if needed
import GeneratedRecipeDetail from "./components/user/recipee/generatedRecipe/GeneratedRecipeDetail";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js"

// const stripePromise = loadStripe("pk_test_51RpkTsCLoAsL2v78saSZGNaFCiK8U6JYJTCHbV8WAvfAKIqaIjDuBorszzOxk2eI3U9tgkLErDcSziaPj9macY18001DFwfWIu"); // Your publishable key

import './App.css';

function App() {
  return (
    <>
   
        <Router>
       
          <Navbar /> 
            <ScrollToTop /> 
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/BlogPage" element={<BlogPage/>}/>
            <Route path="/AboutusPage" element={<AboutusPage/>}/>
            <Route path="/AddRecipe" element={<AddRecipe/>}/>
            <Route path="/login" element={<Login />} />  
            <Route path="/signup" element={<Signup />} />
            <Route path="/FPass" element={<FPass />} />
            <Route path="/OTPVerify" element={<OTPVerify />} />
            <Route path="/UpdatePass" element={<UpdatePass />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/my-generated-recipes" element={<MyGeneratedRecipes />} />
            <Route path="/generated-recipes/:id" element={<GeneratedRecipeDetail />} />

            </Routes>
          <Footer />
          <ToastContainer position="top-center" autoClose={3000} />
         
        </Router> 
    </>
  );
}

export default App;
