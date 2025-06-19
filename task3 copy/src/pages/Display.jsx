import React, { useState, useEffect } from "react";
import axios from "axios";

const Display = () => {
  const [products, setProducts] = useState([]);

  const loadData = async () => {
    const res = await axios.get("http://localhost:3000/Products");
    setProducts(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  
  let totalQty = 0;
  let totalNetPrice = 0;

  products.forEach((item) => {
    totalQty += parseInt(item.qty);         
    totalNetPrice += parseFloat(item.netQty); 
  });

  return (
    <div>
      <h2>Product Records</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Product No</th>
            <th>Name</th>
            <th>Qty</th>
            <th>Net Price</th>
            <th>Customer Name</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td>{item.Prodno}</td>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>{item.netQty}</td>
              <td>{item.Customername}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Total Quantity: {totalQty}</h3>
      <h3>Total Selling Price: ₹{totalNetPrice}</h3>
    </div>
  );
};

export default Display;
