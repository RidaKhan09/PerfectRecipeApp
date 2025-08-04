import React, { useState } from "react";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51RpkTsCLoAsL2v78saSZGNaFCiK8U6JYJTCHbV8WAvfAKIqaIjDuBorszzOxk2eI3U9tgkLErDcSziaPj9macY18001DFwfWIu");

const BuyCoinsModal = ({ setOpen }) => {
  const [amount, setAmount] = useState("");

  const handleStripeCheckout = async () => {
    const coinCount = parseInt(amount);

    if (!coinCount || coinCount <= 0) {
      toast.error("Enter a valid coin amount");
      return;
    }

    try {
      const res = await fetch("http://localhost:5050/api/stripe/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ coinsToBuy: coinCount }),
      });

      const data = await res.json();
      if (data.id) {
        const stripe = await stripePromise;
        await stripe.redirectToCheckout({ sessionId: data.id });
      } else {
        toast.error("Stripe checkout session creation failed.");
      }
    } catch (err) {
      console.error("Stripe Error:", err);
      toast.error("Error connecting to Stripe.");
    }
  };

  const calculatePayment = (coins) => {
    return (parseInt(coins) * 0.10).toFixed(2); // $0.10 per coin
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-md">
        <h2 className="text-xl font-semibold mb-4">Buy Golden Coins 🪙</h2>
        <label className="text-gray-600 font-medium">How many coins do you want to add?</label>
        <input
          type="number"
          min="1"
          className="w-full p-2 border rounded mb-2 mt-1"
          placeholder="e.g. 100"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        {amount && !isNaN(amount) && parseInt(amount) > 0 && (
          <p className="text-sm text-gray-700 mb-4">
            You have to pay <span className="font-semibold">${calculatePayment(amount)}</span> for {amount} coins.
          </p>
        )}

        <div className="flex justify-end gap-3">
          <button onClick={() => setOpen(false)} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
          <button onClick={handleStripeCheckout} className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">Buy Coins</button>
        </div>
      </div>
    </div>
  );
};

export default BuyCoinsModal;
