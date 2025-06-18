import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [prodno, setProdno] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = async () => {
    const res = await axios.get(`http://localhost:3000/Products?Prodno=${prodno}`);
    if (res.data.length > 0) setResult(res.data[0]);
    else {
      alert("Not found");
      setResult(null);
    }
  };

  return (
    <>
      <h2>Search by Product No</h2>
      <input value={prodno} onChange={(e) => setProdno(e.target.value)} placeholder="Enter Product No" />
      <button onClick={handleSearch}>Search</button>
      {result && (
        <div>
          <h4>Result:</h4>
          <p>Product Name: {result.name}</p>
          <p>Qty: {result.qty}</p>
          <p>Net Price: {result.netQty}</p>
          <p>Customer: {result.Customername}</p>
        </div>
      )}
    </>
  );
};

export default Search;
