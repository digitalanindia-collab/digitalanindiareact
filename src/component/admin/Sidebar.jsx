import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaBlog } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  const menuItem = (path, label, icon) => {
    const isActive = location.pathname === path;

    return (
      <Link to={path} style={{ textDecoration: "none" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 12px",
            borderRadius: "8px",
            marginBottom: "10px",
            background: isActive ? "#4f46e5" : "transparent",
            color: isActive ? "#fff" : "#ddd",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          {icon}
          <span>{label}</span>
        </div>
      </Link>
    );
  };

  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        background: "#1f2937",
        padding: "20px",
        color: "#fff",
      }}
    >
      {/* Logo / Title */}
      <h2 style={{ marginBottom: "30px", fontSize: "20px" }}>
        🚀 Admin Panel
      </h2>

      {/* Menu */}
      {menuItem("/admin/dashboard", "Dashboard", <FaTachometerAlt />)}
      {menuItem("/admin/blogs-get", "Blogs", <FaBlog />)}
    </div>
  );
};

export default Sidebar;