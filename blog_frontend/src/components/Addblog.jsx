
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Addblog = () => {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState({
    aid: "",
    courseName: "",
    instructor: "",
    category: "",
    duration: "",
    level: "",
    thumb: "",
  });

  const handleChange = (e) => {
    setBlogs({
      ...blogs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/add", blogs)
      .then((res) => {
        console.log(res.data);
        alert("Course added successfully!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to add course");
      });
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <div className="col-lg-7 col-md-9 col-sm-11">
        <div className="card shadow-lg border-0 rounded-4">
          <div className="card-header bg-primary text-white">
            <h2 className="text-center mb-0 py-2">
              Add New Course
            </h2>
          </div>

          <div className="card-body p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-bold">
                  Author ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="aid"
                  value={blogs.aid}
                  onChange={handleChange}
                  placeholder="Enter Author ID"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">
                  Course Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="courseName"
                  value={blogs.courseName}
                  onChange={handleChange}
                  placeholder="Enter Course Name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">
                  Instructor Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="instructor"
                  value={blogs.instructor}
                  onChange={handleChange}
                  placeholder="Enter Instructor Name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">
                  Category
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="category"
                  value={blogs.category}
                  onChange={handleChange}
                  placeholder="Enter Category"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">
                  Duration
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="duration"
                  value={blogs.duration}
                  onChange={handleChange}
                  placeholder="Example: 8 Weeks"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">
                  Level
                </label>

                <select
                  className="form-select"
                  name="level"
                  value={blogs.level}
                  onChange={handleChange}
                >
                  <option value="">Select Level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="form-label fw-bold">
                  Thumbnail URL
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="thumb"
                  value={blogs.thumb}
                  onChange={handleChange}
                  placeholder="Paste image URL"
                />
              </div>

              {blogs.thumb && (
                <div className="text-center mb-4">
                  <img
                    src={blogs.thumb}
                    alt="Preview"
                    className="img-fluid rounded shadow"
                    style={{
                      maxHeight: "250px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-success px-5 py-2"
                >
                  Add Course
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addblog;

