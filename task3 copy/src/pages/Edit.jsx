import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3000/Products/${id}`).then((res) => setInput(res.data));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    await axios.put(`http://localhost:3000/Products/${id}`, input);
    alert("Product updated!");
    navigate("/update");
  };

  return (
    <>
      <h2>Edit Product</h2>
      Product No: <input name="Prodno" value={input.Prodno} onChange={handleChange} /><br />
      Name: <input name="name" value={input.name} onChange={handleChange} /><br />
      Qty: <input name="qty" value={input.qty} onChange={handleChange} /><br />
      Net Price: <input name="netQty" value={input.netQty} onChange={handleChange} /><br />
      Customer: <input name="Customername" value={input.Customername} onChange={handleChange} /><br />
      <button onClick={handleSubmit}>Update</button>
    </>
  );
};

export default Edit;
