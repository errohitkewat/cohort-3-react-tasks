import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => { 

    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null)


    return <AuthContext.Provider value={{ users, setUsers, user, setUser }} >
        {children}
    </AuthContext.Provider>
}


