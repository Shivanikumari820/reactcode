import { useState, useEffect } from "react";
import axios from "axios";

const Display = () => {
  const [mydata, setMydata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/attendance")
      .then(res => setMydata(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <h2>Employee Records</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Emp No</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {mydata.map((item, i) => (
            <tr key={i}>
              <td>{item.empno}</td>
              <td>{item.name}</td>
              <td>{item.designation}</td>
              <td>{item.department}</td>
              <td>{item.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Display;
