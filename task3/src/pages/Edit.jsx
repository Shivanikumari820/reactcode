import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mydata, setMydata] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/attendance/${id}`)
      .then(res => setMydata(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleUpdate = () => {
    axios
      .put(`http://localhost:3000/attendance/${id}`, mydata)
      .then(() => {
        alert("Updated");
        navigate("/update");
      })
      .catch(() => alert("Update failed"));
  };

  const handleInput = e => {
    setMydata({ ...mydata, [e.target.name]: e.target.value });
  };

  if (!mydata.name) return <p>Loading...</p>;

  return (
    <div>
      <h3>Edit Employee</h3>
      {["name","empno","designation","department","salary"].map(key => (
        <div key={key}>
          <label>
            {key.charAt(0).toUpperCase()+key.slice(1)}:
            <input name={key} value={mydata[key] || ""} onChange={handleInput} />
          </label><br/><br/>
        </div>
      ))}
      <button onClick={handleUpdate}>Save</button>
      <button onClick={() => navigate("/update")}>Cancel</button>
    </div>
  );
};

export default Edit;
