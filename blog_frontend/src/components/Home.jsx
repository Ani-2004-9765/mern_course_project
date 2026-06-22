import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/")
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      className="container-fluid py-5"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <div className="container">
        <h1
          className="text-center text-white fw-bold mb-5"
          style={{
            letterSpacing: "1px",
          }}
        >
          📚 Available Courses
        </h1>

        <div className="row g-4">
          {blogs.map((blog) => (
            <div className="col-lg-4 col-md-6" key={blog._id}>
              <div
                className="card border-0 shadow-lg h-100"
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  transition: "0.3s",
                }}
              >
                <img
                  src={blog.thumb}
                  className="card-img-top"
                  alt={blog.courseName}
                  style={{
                    height: "230px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body d-flex flex-column">
                  <h3 className="card-title text-primary fw-bold">
                    {blog.courseName}
                  </h3>

                  <p className="card-text">
                    <strong>👨‍🏫 Instructor:</strong> {blog.instructor}
                  </p>

                  <p className="card-text">
                    <strong>📂 Category:</strong> {blog.category}
                  </p>

                  <p className="card-text">
                    <strong>⏳ Duration:</strong> {blog.duration}
                  </p>

                  <div className="mb-3">
                    <span className="badge bg-success fs-6">
                      {blog.level}
                    </span>
                  </div>

                  <NavLink
                    to={`/show/${blog._id}`}
                    className="btn btn-primary mt-auto"
                  >
                    Read More →
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>

        {blogs.length === 0 && (
          <div className="text-center mt-5 text-white">
            <h3>No Courses Found</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;