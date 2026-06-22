import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Show = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:4000/show/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      axios
        .delete(`http://localhost:4000/${id}`)
        .then(() => {
          alert("Course deleted successfully!");
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <div className="col-lg-6">
        <div className="card shadow-lg border-0 rounded-4">

          <img
            src={blog.thumb}
            className="card-img-top"
            alt={blog.courseName}
            style={{
              height: "300px",
              objectFit: "cover",
            }}
          />

          <div className="card-body">

            <h2 className="card-title text-primary">
              {blog.courseName}
            </h2>

            <h5 className="text-muted mb-3">
              Instructor: {blog.instructor}
            </h5>

            <p>
              <strong>Category:</strong> {blog.category}
            </p>

            <p>
              <strong>Duration:</strong> {blog.duration}
            </p>

            <p>
              <strong>Level:</strong> {blog.level}
            </p>

            <div className="d-flex gap-3 mt-4">

              <NavLink
                to="/"
                className="btn btn-secondary"
              >
                Back
              </NavLink>

              <NavLink
                to={`/edit/${blog._id}`}
                className="btn btn-warning"
              >
                Edit
              </NavLink>

              <button
                className="btn btn-danger"
                onClick={handleDelete}
              >
                Delete
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;

