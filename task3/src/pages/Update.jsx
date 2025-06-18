import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [mydata, setMydata] = useState([]);
  const navigate = useNavigate();

  const loadData = () => {
    axios
      .get("http://localhost:3000/attendance")
      .then(res => setMydata(res.data))
      .catch(err => console.error(err));
  };

  useEffect(loadData, []);

  const recDelete = id => {
    axios
      .delete(`http://localhost:3000/attendance/${id}`)
      .then(() => {
        alert("Deleted");
        loadData();
      })
      .catch(() => alert("Delete failed"));
  };

  return (
    <>
      <h3>Employee List</h3>
      <table border="1" width="600">
        <thead>
          <tr>
            <th>#</th><th>Name</th><th>Empno</th><th>Designation</th><th>Dept</th><th>Salary</th><th>Edit</th><th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {mydata.map((item, i) => (
            <tr key={item.id}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.empno}</td>
              <td>{item.designation}</td>
              <td>{item.department}</td>
              <td>{item.salary}</td>
              <td><button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button></td>
              <td><button onClick={() => recDelete(item.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Update;
