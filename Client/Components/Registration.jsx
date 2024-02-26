import React, { useState } from 'react';
import axios from 'axios'; 
import "./Register.css";
import { Link } from 'react-router-dom';
const Registration = () => {
  const [fields, setFields] = useState({
    name: "",
    phoneNumber: "",
    password: ""
  });

  const API_URL = "http://localhost:3001/api/signup";

  console.log(fields)

  const handleSubmit = async (e) => { 
   
    try {
      e.preventDefault();
      const data = await axios.post(API_URL, fields); 
      console.log(data);
      alert("submitted")
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="registermain--container">
      <div className="registername--container">
        Signup form
      </div>
      <div className="registerinput--container">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label className="register--label">Name</label>
            <br />
            <input className="registerinput" placeholder="Enter your name" name="name" onChange={handleChange} />
          </div>
          <div className="input-container">
            <label className="register--label">Phone Number</label>
            <br />
            <input className="registerinput" placeholder="Enter your phone number" name="phoneNumber" onChange={handleChange} />
          </div>
          <div className="input-container">
            <label className="register--label">Password</label>
            <br />
            <input className="registerinput" placeholder="Enter a password" name="password" onChange={handleChange} />
          </div>
          <button type="submit" className="register" >
            Register
          </button>
          <Link to = "/">

          <p>already a user,login</p>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Registration;
