import React, { useState } from "react";
import { TbLogout2 } from "react-icons/tb";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

function Logout() {
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("Logged out successfully");
      window.location.reload();
    } catch (error) {
      console.log("Error in Logout", error);
      toast.error("Error in logging out");
    }
  };
  return (
    <>
      <button
        type="button"
        onClick={handleLogout}
        className="p-2 rounded-lg hover:bg-gray-600 duration-300"
        aria-label="Log out"
      >
        <TbLogout2 className="text-2xl sm:text-3xl" />
      </button>
    </>
  );
}
export default Logout;
