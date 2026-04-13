
import React, { useState, useEffect } from "react";
import Navbar from "../../component/admin/Navbar";
import BlogTable from "./BlogTable";
import Sidebar from "../../component/admin/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
const BlogsGet = () => {
  const token = localStorage.getItem("token");
  const BASE_URL = process.env.REACT_APP_BASE_URL || "https://digitalanindia.com";
  //console.log("BASE_URL:", BASE_URL);
  const [blogs, setBlogs] = useState([]);
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/blogs`);
        console.log(res.data);
        setBlogs(res.data);
      } catch (err) {
        console.error(err);
        alert("Error fetching blogs.");
      }
    };
    const handleDelete = async (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
  if (!confirmDelete) return;
  try {
    await axios.delete(`${BASE_URL}/api/blogs/delete/${id}`);
    alert("Blog deleted successfully!");
  // setBlogs((prev) => prev.filter((blogs) => blogs._id !== id));
  setBlogs((prev) => prev.filter((blog) => blog._id !== id));
  fetchBlogs();
  } catch (err) {
    console.error(err);
    alert("Failed to delete blog");
  }
};
useEffect(() => {
  fetchBlogs();
}, []);
 
  return (
 <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <div
            style={{
              margin: "8px auto",
              padding: "8px",
              background: "#fff",
              borderRadius: "10px",
            }}
          >
              <Link to="/admin/blogs" style={{ textDecoration: "none" }}>
    <button
      style={{
        padding: "10px 18px",
        background: "linear-gradient(135deg, #4f46e5, #6366f1)",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: "600",
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "0.3s",
        marginBottom: "16px",
      }}
      onMouseOver={(e) =>
        (e.target.style.transform = "scale(1.05)")
      }
      onMouseOut={(e) =>
        (e.target.style.transform = "scale(1)")
      }
    >
      ➕ Create Blog
    </button>
  </Link>
            <BlogTable blogs={blogs} handleDelete={handleDelete} />
        {/* <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Image</th>
              <th>Edit</th>
              <th>Delte</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id}>
                <td>{blog.title}</td>
                <td>
                  <img src={blog.image} alt={blog.title} style={{ width: "100px", height: "100px" }} />
                </td>
                <td>
                  <Link to={`/admin/blogs/${blog.id}/edit`}>Edit</Link>
                </td>
                <td>
                  <button
  onClick={() => handleDelete(blog._id)}
  style={{
    padding: "6px 10px",
    background: "#ef4444",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "13px",
  }}
>
  Delete
</button>
                </td>
                <td>
                  <Link to={`/admin/blogs/${blog._id}`}>View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsGet;