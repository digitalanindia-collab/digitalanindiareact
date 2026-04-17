import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";

const BlogTable = ({ blogs, handleDelete }) => {
  const columns = [
    // { field: "id", headerName: "ID", width: 50 },
      { field: "srNo", headerName: "Sr.No", width: 60 },
    { field: "title", headerName: "Title", flex: 1 },
      { field: "content", headerName: "Description", flex: 1 },
    {
      field: "image",
      headerName: "Image",
      width: 120,
      renderCell: (params) => (
        <img
          src={params.row.image}
          alt="blog"
          style={{ width: 50, height: 50, objectFit: "cover", borderRadius: 6 }}
        />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 300,
      renderCell: (params) => (
        <>
          <Link to={`/admin/blogs/${params.row.id}/edit`}>
             <FontAwesomeIcon icon={faEdit} />
          </Link>
          <Button
            size="small"
            color="error"
            onClick={() => handleDelete(params.row.id)}
          >
                  <FontAwesomeIcon icon={faTrash} />
          </Button>
          <Link to={`/admin/blogs/${params.row.id}/view`}>
            <Button size="small" color="primary">
              <FontAwesomeIcon icon={faEye} />
            </Button>
          </Link>
        </>
      ),
    },
  ];
  const getPreviewText = (html, wordLimit = 15) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const text = doc.body.textContent || "";
  const words = text.split(/\s+/);
  return words.slice(0, wordLimit).join(" ") + (words.length > wordLimit ? "..." : "");
};
const rows = blogs.map((blog, index) => ({
  id: blog.id || blog._id || index,
  srNo: index + 1,
  title: blog.title,
  content: getPreviewText(blog.content),
  image: blog.image_url,
}));


  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default BlogTable;