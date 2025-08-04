import { createContext, useContext, useEffect, useState } from "react";
import {httpAction} from "../../utils/httpAction"; // your axios wrapper
import {apis} from "../../utils/apis"; // api endpoints

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const res = await httpAction({ url: apis().userProfile, method: "GET" });
      if (res?.user) {
        setUser(res.user);
      }
    } catch (err) {
      console.error("Failed to fetch user:", err);
      setUser(null);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("accessToken");
    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      fetchUser();
    }
  }, []);
  
  return (
    <AuthContext.Provider value={{ user, setUser, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => useContext(AuthContext);
