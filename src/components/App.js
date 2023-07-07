import React, { useState, createContext } from "react";
import Home from './Home/Home';

export const ThemeContext = createContext(null);

const App = () => {

    const [enableDarkTheme, setEnableDarkTheme] = useState("light");

    const switchMode =() => {
        setEnableDarkTheme(currentMode => (currentMode === "light" ? "dark" : "light")); 
    }

    return (
        <ThemeContext.Provider value={{ enableDarkTheme, setEnableDarkTheme, switchMode }}>
            <div className="app" id={enableDarkTheme} >
                <Home />
            </div>
        </ThemeContext.Provider>
    )
}

export default App;