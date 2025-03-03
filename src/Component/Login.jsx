import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      const response = await axios.get("https://67ad86693f5a4e1477ddf074.mockapi.io/User");
      const user = response.data.find((u) => u.email === userEmail);
      if (user) {
        navigate("/dashboard", { state: { userName: user.name } });
      } else {
        setErrorMessage("Invalid Email or Password");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Error occurred. Please try again.");
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4 border p-4 rounded shadow">
          <h2 className="text-center">Login</h2>
          {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
          <form onSubmit={submit}>
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
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
          <p className="text-center mt-3">
            Don't have an account? 
            <button className="text-primary cursor-pointer" onClick={() => navigate("/signup")}>
              Sign up here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;