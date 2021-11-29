import React from "react";

export const ThemeContext = React.createContext<string>("dark");
export const NameContext = React.createContext({});

export const Practice = () => {
    const theme = "dark";
    const name = "Rishabh";

    return (
        <>
            <ThemeContext.Provider value={theme}></ThemeContext.Provider>
            <NameContext.Provider
                value={{ name: "Rishabh", city: "Indore" }}
            ></NameContext.Provider>
        </>
    );
};
