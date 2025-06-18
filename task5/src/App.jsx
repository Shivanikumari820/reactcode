import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [formData, setFormData] = useState({
    rollno: "",
    name: "",
    city: "",
    fees: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/students", formData)
      .then(() => {
        alert("Student record inserted successfully!");
        setFormData({ rollno: "", name: "", city: "", fees: "" });
      })
      .catch(() => {
        alert("Failed to insert student record.");
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Insert Student Record</h2>
      <form onSubmit={handleSubmit}>
       Enter Rollno.:  <input type="text" name="rollno" placeholder="Roll No" value={formData.rollno} onChange={handleChange} required /><br /><br />

        Enter Name: <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange}  required/><br /><br />

        Enter City: <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required /><br /><br />

       Enter fees: <input type="number" name="fees" placeholder="Fees" value={formData.fees} onChange={handleChange} required/><br /><br />

        <button type="submit">Insert</button>
      </form>
    </div>
  );
};

export default App;
