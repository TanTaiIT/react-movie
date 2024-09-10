import React, { createContext, useState } from "react";
import { AppContextType } from "../types/MenuType";

const INITIAL_APP_CONTEXT: AppContextType = {
  darkMode: true,
  toggleDarkMode: () => { }
};

export const ThemContext = createContext<AppContextType>(INITIAL_APP_CONTEXT);

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <ThemContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemContext.Provider>
  )
}
