import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    aid: "",
    courseName: "",
    instructor: "",
    category: "",
    duration: "",
    level: "",
    thumb: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/show/${id}`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleChange = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:4000/edit/${id}`, blog)
      .then(() => {
        alert("Course updated successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
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
      <div className="row w-100 justify-content-center">
        <div className="col-lg-7 col-md-9 col-sm-11">

          <div className="card shadow-lg border-0 rounded-4">

            <div className="card-header bg-primary text-white rounded-top-4">
              <h2 className="text-center py-2 mb-0">
                Edit Course
              </h2>
            </div>

            <div className="card-body p-4">

              <div className="mb-3">
                <label className="form-label fw-bold">
                  Author ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="aid"
                  value={blog.aid}
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
                  value={blog.courseName}
                  onChange={handleChange}
                  placeholder="Enter Course Name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">
                  Instructor
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="instructor"
                  value={blog.instructor}
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
                  value={blog.category}
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
                  value={blog.duration}
                  onChange={handleChange}
                  placeholder="Enter Duration"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">
                  Level
                </label>
                <select
                  className="form-select"
                  name="level"
                  value={blog.level}
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
                  value={blog.thumb}
                  onChange={handleChange}
                  placeholder="Paste Image URL"
                />
              </div>

              {blog.thumb && (
                <div className="text-center mb-4">
                  <img
                    src={blog.thumb}
                    alt={blog.courseName}
                    className="img-fluid rounded shadow"
                    style={{
                      maxHeight: "250px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}

              <div className="d-flex justify-content-center gap-3">
                <button
                  className="btn btn-success px-4"
                  onClick={handleUpdate}
                >
                  Update Course
                </button>

                <button
                  className="btn btn-secondary px-4"
                  onClick={() => navigate("/")}
                >
                  Cancel
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Edit;

