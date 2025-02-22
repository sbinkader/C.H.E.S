import { createContext, useState, useContext } from "react";

const NameContext = createContext();

export function NameProvider ({ children }) {
    const [userName, setUserName] = useState("");
    return (
        <NameContext.Provider value={{ userName, setUserName }}>{children}</NameContext.Provider>
    );
}

export function useName() {
    return useContext(NameContext);
}