import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userGender, setUserGender] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axios.post("https://67ad86693f5a4e1477ddf074.mockapi.io/User", {
        name: userName,
        email: userEmail,
        password: userPassword,
        gender: userGender,
      });
      alert("User created successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
      setErrorMessage("Error occurred. Please try again.");
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4 border p-4 rounded shadow">
          <h2 className="text-center">Sign Up</h2>
          {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
          <form onSubmit={submit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter full name"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Enter email"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <select
                className="form-control"
                value={userGender}
                onChange={(e) => setUserGender(e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-100">Signup</button>
          </form>
          <p className="text-center mt-3">
            Already have an account? 
            <button className="text-primary cursor-pointer" onClick={() => navigate("/")}>
              Login here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
