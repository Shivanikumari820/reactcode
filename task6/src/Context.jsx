// context.jsx
import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const useTheme = () => useContext(Context);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  const bgColor = {
    backgroundColor: isDark ? "black" : "white",
    color: isDark ? "white" : "black",
    height: "100vh",
    textAlign: "center",
    paddingTop: "50px"
  };

  return (
    <Context.Provider value={{ toggleTheme, bgColor }}>
      {children}
    </Context.Provider>
  );
};
