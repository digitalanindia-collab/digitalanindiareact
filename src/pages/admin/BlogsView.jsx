import React, { useState, useEffect }from "react";

import { useParams } from "react-router-dom";
import Navbar from "../../component/admin/Navbar";
import Sidebar from "../../component/admin/Sidebar";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";

const BlogsView = () => {
  const token = localStorage.getItem("token");
const [data, setData] = useState({});
  const base_url = process.env.REACT_APP_BASE_URL || "http://127.0.0.1:8000";
const { id } = useParams();
const viewBlog = async () => {
  try {
    const res = await axios.get(`${base_url}/api/blogs/${id}`,{
      headers: {
        Authorization:`Bearer ${token}`,
      }
    });
  setData(res.data.data);
    console.log(res.data.data);
  } catch (err) {
    console.log(err);
  }
};

useEffect(() => {
  viewBlog();
}, []);
  return (
    <>
      <Navbar />
    <div style={{ display: "flex", background: "#f4f6f9" }}>
  <Sidebar />

  <div style={{ flex: 1, padding: "30px" }}>
    
    {/* Top Header */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>
        📄 View Blog
      </h2>

      <button
        onClick={() => window.history.back()}
        style={{
          padding: "8px 14px",
          border: "none",
          background: "#6366f1",
          color: "#fff",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>
    </div>

    {/* Blog Card */}
    <div
      style={{
        maxWidth: "850px",
        margin: "auto",
        background: "#fff",
        padding: "30px",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#111",
          lineHeight: "1.3",
        }}
      >
        {data.title}
      </h1>

      {/* Image */}
      {data.image && (
        <img
          src={data.image}
          alt={data.title}
          style={{
            width: "100px",
            Height: "100px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "25px",
          }}
        />
      )}

      {/* Content */}
      <div
        style={{
          lineHeight: "1.9",
          fontSize: "16px",
          color: "#444",
        }}
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </div>
  </div>
</div>
    </>
  );
};

export default BlogsView;