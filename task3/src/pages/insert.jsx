import { useState } from "react";
import axios from "axios";

const Insert = () => {
  const [input, setInput] = useState({});

  const handleInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:3000/attendance", input)
      .then(() => alert("Data inserted"))
      .catch(() => alert("Insert failed"));
  };

  return (
    <>
      <h1>Insert Employee</h1>
      <input name="empno" placeholder="Emp No" onChange={handleInput} /><br />
      <input name="name" placeholder="Name" onChange={handleInput} /><br />
      <input name="designation" placeholder="Designation" onChange={handleInput} /><br />
      <input name="department" placeholder="Department" onChange={handleInput} /><br />
      <input name="salary" type="number" placeholder="Salary" onChange={handleInput} /><br />
      <button onClick={handleSubmit}>Save</button>
    </>
  );
};

export default Insert;
