import React from "react";
import { ThemeProvider, useTheme } from "./Context.jsx"; // Correct names

const Main = () => {
  const { toggleTheme, bgColor } = useTheme(); // Correct hook usage

  return (
    <div style={bgColor}>
      <h2>{bgColor.backgroundColor === "black" ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
};

export default App;
