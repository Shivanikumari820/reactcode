import React from "react";

const App = () => {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
     
    }}>
      <div style={{
        backgroundColor: 'blue',
        padding: '20px',
        borderRadius: '15px',
        display: 'inline-block'
      }}>
        <div style={{
          backgroundColor: 'yellow',
          padding: '20px',
          borderRadius: '10px',
          border: "2px solid orange"
        }}>
          <div style={{
            backgroundColor: 'orange',
            color: 'black',
            padding: '20px 40px',
            fontWeight: 'bold',
            borderRadius: '5px',
            textAlign: 'center'
          }}>
            CYBROM
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
