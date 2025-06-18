import { useState } from "react";
import axios from "axios";

const Insert = () => {
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    await axios.post("http://localhost:3000/Products", input);
    alert("Product inserted!");
  };

  return (
    <>
      <h2>Insert Product</h2>
      Product No: <input name="Prodno" onChange={handleChange} /><br />
      Product Name: <input name="name" onChange={handleChange} /><br />
      Quantity: <input name="qty" onChange={handleChange} /><br />
      Net Price: <input name="netQty" onChange={handleChange} /><br />
      Customer Name: <input name="Customername" onChange={handleChange} /><br />
      <button onClick={handleSubmit}>Save</button>
    </>
  );
};

export default Insert;
