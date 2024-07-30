"use client";
import { useState, useContext, createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  return (
    <ThemeContext.Provider value={{ visible, show, hide }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeContext, ThemeProvider, useTheme };
