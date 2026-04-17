import React from "react";
import Navbar from "../../component/admin/Navbar";
import Sidebar from "../../component/admin/Sidebar";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function MyEditor({ description, setDescription }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: description || "",
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      setDescription(editor.getHTML());
    },
  });

  // ✅ Sync editor when description changes
  React.useEffect(() => {
    if (editor && description !== editor.getHTML()) {
      editor.commands.setContent(description || "");
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
        cursor: "text",
        background: "#fff",
      }}
    >
      <EditorContent editor={editor} />
    </div>
  );
}

// ✅ Main Component
const Blogs = () => {
      
  const navigation = useNavigate();

  const base_url = process.env.REACT_APP_BASE_URL || "http://127.0.0.1:8000";
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState(null);

const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", description);
    formData.append("image", image);
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        `${base_url}/api/blogs`, // Your backend endpoint
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
             Authorization: `Bearer ${token}`, 
          },
        }
      );
      alert("Blog created successfully!");
      navigation("/admin/blogs-get");
      setTitle("");
      setDescription("");
      setImage(null);
    } catch (err) {
      console.error(err);
      alert("Error updating blog.44");
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
            {/* Header */}
            <h2
              style={{
                fontSize: "26px",
                fontWeight: "bold",
                marginBottom: "25px",
                color: "#222",
                textAlign: "center",
              }}
            >
              ✍️ Create New Blog
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Title */}
              <div style={{ marginBottom: "18px" }}>
                <label className="labelStyle">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter blog title..."
                  required
                  className="inputStyle"
                />
              </div>

              {/* Image */}
              <div style={{ marginBottom: "18px" }}>
                <label className="labelStyle">Upload Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                  required
                  className="inputStyle"
                  style={{
                    background: "#fafafa",
                    cursor: "pointer",
                  }}
                />
              </div>

              {/* Description */}
              <div style={{ marginBottom: "18px" }}>
                <label className="labelStyle">Description</label>
                 
                <MyEditor
// onChange={(content) => setDescription(content)}
                  description={description}
                  setDescription={setDescription}
                />
              </div>

              {/* Button */}
              <button type="submit" className="buttonStyle">
                🚀 Publish Blog
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;