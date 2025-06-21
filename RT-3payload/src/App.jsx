import { useDispatch, useSelector } from 'react-redux';
import { bgcolorChange } from './features/counterSlice';
import { useState } from 'react';

function App() {
  const myclr = useSelector((state) => state.mycolor.color);
  const dispatch = useDispatch();
  const [txtval, setTxtval] = useState("");

  const handleChange = (e) => {
    const newColor = e.target.value;
    setTxtval(newColor);
    dispatch(bgcolorChange(newColor)); // Live update
  };

  return (
    <>
      <h1>Welcome to my app</h1>
      Enter color: <input  type="text"  value={txtval} onChange={handleChange} placeholder="e.g. red, #00ff00, rgb(0,0,255)"/>
      <div style={{ width: '200px', height: '200px', backgroundColor: myclr, marginTop: '20px', border: '2px solid black',}}></div>
    </>
  );
}

export default App;
