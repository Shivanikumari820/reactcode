// App.jsx
import { useDispatch, useSelector } from 'react-redux'
import { bgcolorChange } from './features/counterSlice'

function App() {
  const myclr = useSelector((state) => state.mycolor.color);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Welcome to my app</h1>
      <button onClick={() => dispatch(bgcolorChange())}>Click here</button>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: myclr,
        }}
      ></div>
    </>
  );
}

export default App;
