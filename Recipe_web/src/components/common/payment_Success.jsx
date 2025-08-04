/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/slices/userSlice";
import BASE_URL from "../../../src/api/BaseURL";

const PaymentSuccess = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const coins = parseInt(params.get("coins"));

  useEffect(() => {
    const updateCoins = async () => {
      try {
        const response = await fetch(`${BASE_URL}/user/buy-coins`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ coinsToAdd: coins }),
        });

        const result = await response.json();

        if (result?.success && result?.user) {
          toast.success(`🪙 ${coins} coins added!`);
          dispatch(updateUser(result.user));
          localStorage.setItem("user", JSON.stringify(result.user));
        }
      } catch (err) {
        console.error("Update error:", err);
        toast.error("Something went wrong 💥");
      } finally {
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 2000); // 2 seconds wait
      }
    };

    if (coins > 0) {
      updateCoins();
    } else {
      navigate("/", { replace: true });
    }
  }, [coins, dispatch, navigate]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white text-gray-800">
      <div className="text-2xl font-semibold mb-4 animate-pulse">🎉 Payment Successful!</div>
      <p className="mb-6 text-lg">Please wait while your coins are being added...</p>
      <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default PaymentSuccess;
