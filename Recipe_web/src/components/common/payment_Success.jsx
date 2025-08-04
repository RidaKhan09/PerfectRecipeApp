import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UseAuth } from "./AuthContext";

const PaymentSuccess = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { setUser } = UseAuth();

  const coins = parseInt(params.get("coins"));

  useEffect(() => {
    const updateCoins = async () => {
      try {
        const response = await fetch("http://localhost:5050/user/buy-coins", {
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
          setUser(result.user);
          localStorage.setItem("user", JSON.stringify(result.user));
        } 
      } catch (err) {
        console.error("Update error:", err);
        toast.error("Something went wrong 💥");
      } finally {
        // Instantly go to homepage after the whole process
        navigate("/", { replace: true });
      }
    };

    if (coins > 0) {
      updateCoins();
    } else {
      navigate("/", { replace: true });
    }
  }, [coins, setUser, navigate]);

  return null; // no need to show anything, instantly navigating
};

export default PaymentSuccess;
