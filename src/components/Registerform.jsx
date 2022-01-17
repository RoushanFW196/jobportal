import React, { useState } from "react";
import './Navbar.css';
const inituser = {
  Name: "",
  Email: "",
  Password: "",
  Address: "",
  Mobile: "",
};
export const Registeration = () => {
  const [form, setForm] = useState(inituser);

  const inputevent = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    fetch("http://localhost:3001/users", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        alert("registrattion successfull");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
      <div className="container">
    <form className="form" onSubmit={handleSubmit}  >
    <h1>Register Here</h1>
      <label> Name </label>{" "}<br/>
      <input
        type="text"
        name="Name"
        placeholder=" Enter Name"
        onChange={inputevent}
      />{" "}<br/>

      <label> Email </label>{" "}<br/>
      <input
        type="email"
        name="Email"
        placeholder=" Enter email"
        onChange={inputevent}
      />{" "}<br/>
      <label> password </label>{" "}<br/>
      <input
        type="password"
        name="Password"
        placeholder=" Enter password"
        onChange={inputevent}
      />{" "}<br/>

      <label> Mobile </label>{" "}<br/>
      <input
        type="number"
        name="Mobile"
        placeholder=" Enter mobile"
        onChange={inputevent}
      />{" "}<br/>
      <label> Address </label>{" "}<br/>
      <input
        type="text"
        name="Address"
        placeholder=" Enter Address"
        onChange={inputevent}
      />{" "}<br/>
      <input type="submit" value="SUBMIT" />
    </form>
    </div>
  );
};
