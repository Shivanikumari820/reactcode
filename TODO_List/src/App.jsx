// App.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToTask, deleteTask, taskComplete } from './todoSlice';
import './App.css'; 

const App = () => {
  const [txt, setTxt] = useState("");
  const Data = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <>
      <h1>My Todo List</h1>
      <div>
        Enter Task:{" "} <input type="text" value={txt} placeholder="Enter a task" onChange={(e) => setTxt(e.target.value)}   />
        <button onClick={() => {dispatch(addToTask({ id: Date.now(), work: txt , status : "incomplete"}))}}>Add Task</button>   
      </div>

      <hr />

      <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse', width: '60%' }}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((item, index) => (       /*This loops through each element in the Data array (which comes from Redux: state.todo.todos). */
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.work}</td>
              <td>
                <button onClick={() => dispatch(deleteTask(index))}>Delete</button> 
              </td>
                <td>
                <button onClick={() => dispatch(taskComplete(key.id))}>Complete</button> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
