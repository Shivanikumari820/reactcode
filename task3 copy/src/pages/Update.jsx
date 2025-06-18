import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const loadData = async () => {
    const res = await axios.get("http://localhost:3000/Products");
    setProducts(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:3000/Products/${id}`);
    loadData();
  };

  return (
    <>
      <h2>Update Products</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Prod No</th>
            <th>Name</th>
            <th>Qty</th>
            <th>Net Price</th>
            <th>Customer</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.Prodno}</td>
              <td>{p.name}</td>
              <td>{p.qty}</td>
              <td>{p.netQty}</td>
              <td>{p.Customername}</td>
              <td><button onClick={() => navigate(`/edit/${p.id}`)}>Edit</button></td>
              <td><button onClick={() => deleteItem(p.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Update;
