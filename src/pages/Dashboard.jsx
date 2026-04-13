import React from "react";
import Navbar from "../component/admin/Navbar";
import Sidebar from "../component/admin/Sidebar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
              <div style={{ display: "flex" }}>
                <Sidebar />
               <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome Admin 🎉</p>
    </div>
              </div>
    </>
     
  );
};

export default Dashboard;