import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import Navbar from "../../component/admin/Navbar";
import Sidebar from "../../component/admin/Sidebar";
import StarterKit from "@tiptap/starter-kit";
import { useEditor, EditorContent } from "@tiptap/react";
import axios from "axios";

/* ================= TipTap Editor ================= */
function MyEditor({ description, setDescription }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: description || "",
    onUpdate: ({ editor }) => {
      setDescription(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && description) {
      editor.commands.setContent(description);
    }
  }, [description, editor]);

  if (!editor) return <p>Loading editor...</p>;

  return (
    <div
      style={{
        padding: "10px",
        minHeight: "200px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        background: "#fff",
      }}
    >
      <EditorContent editor={editor} />
    </div>
  );
}

/* ================= Main Component ================= */
const BlogsEdit = () => {
  const base_url =
    process.env.REACT_APP_BASE_URL || "https://digitalanindia.com";

  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [existingImage, setExistingImage] = useState("");
  const navigation = useNavigate();

  /* ===== Fetch Blog ===== */
  const editBlog = async () => {
    try {
      const res = await axios.get(`${base_url}/api/blogs/${id}/edit`);
      setTitle(res.data.title);
      setDescription(res.data.content);
      setExistingImage(res.data.image);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    editBlog();
  }, []);

  /* ===== Submit ===== */
  const handleSubmit = async (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) formData.append("image", image);

    try {
      await axios.put(
        `${base_url}/api/blogs/${id}/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`, 
          },
        }
      );

      alert("Blog updated successfully!");
      navigation("/admin/blogs-get");
    } catch (err) {
      console.error(err);
      alert("Error updating blog");
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div
          style={{
            flex: 1,
            padding: "30px",
            background: "#f4f6f9",
            minHeight: "100vh",
          }}
        >
          <div
            style={{
              maxWidth: "800px",
              margin: "auto",
              background: "#fff",
              padding: "30px",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <h2
              style={{
                fontSize: "26px",
                fontWeight: "bold",
                marginBottom: "25px",
                textAlign: "center",
              }}
            >
              ✍️ Edit Blog
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Title */}
              <div style={{ marginBottom: "18px" }}>
                <label className="labelStyle">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="inputStyle"
                />
              </div>

              {/* Image */}
              <div style={{ marginBottom: "18px" }}>
                <label className="labelStyle">Upload Image</label>
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="inputStyle"
                />
              </div>

              {existingImage && (
                <img
                  src={existingImage}
                  alt="preview"
                  style={{ width: "100px", marginBottom: "10px",height: "100px", }}
                />
              )}

              {/* Editor */}
              <div style={{ marginBottom: "18px" }}>
                <label className="labelStyle">Description</label>
                <MyEditor
                  description={description}
                  setDescription={setDescription}
                />
              </div>

              <button type="submit" className="buttonStyle">
                🚀 Update Blog
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsEdit;