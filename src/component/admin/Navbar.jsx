import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={{ background: "#333", color: "#fff", padding: "10px" }}>
      <span>Admin Panel</span>
      <button onClick={logout} style={{ float: "right" }}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;