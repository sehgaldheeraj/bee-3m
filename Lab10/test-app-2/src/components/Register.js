import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  async function handleRegistration(event) {
    event.preventDefault();
    if (!username || !password || !email || !role || !phone) {
      setError("Enter all details");
    }
    //perform frontend validations
    try {
      await fetch("http://localhost/v1/users/register", {
        method: "post",
        body: {
          username,
          email,
          phone,
          password,
          role,
        },
      });
      console.log("Registered Successfully");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <h2>Register</h2>
      <form
        onSubmit={(e) => {
          handleRegistration(e);
        }}
      >
        <div>
          <label for="username">Name</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your full name"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          ></input>
        </div>
        <div>
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          ></input>
        </div>
        <div>
          <label for="phone">Phone</label>
          <input
            type="phone"
            name="phone"
            value={phone}
            placeholder="Enter your Phone"
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          ></input>
        </div>
        <div>
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your Password(Min 6 characters)"
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
        <div>
          <label for="role">Name</label>
          <input
            type="text"
            name="role"
            value={role}
            placeholder="Enter your role"
            onChange={(event) => setRole(event.target.value)}
          ></input>
        </div>
        <button type="submit">Register</button>
      </form>
      <h5>
        Already Registered? <a href="/v1/users/login">Login here</a>
      </h5>
      <p>{error ? error : ""}</p>
    </div>
  );
};

export default Register;
