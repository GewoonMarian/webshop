import React, { useState } from "react";

import LoginForm from "../components/LoginForm";

export default function Login() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };
  //Set up a form with at least 2 input fields:
  // email and password. Set up component state for these 2 fields and the onChange handlers.
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      // console.log("Welcome, you're logged in!");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      // console.log("Details do not match");
      setError("Details do not match");
    }
  };

  const Logout = () => {
    // console.log("Logout");
    setUser({ name: "", email: "" });
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   Login(details);
  // };

  return (
    <div className="login">
      {user.email !== "" ? (
        <div className="Welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}
