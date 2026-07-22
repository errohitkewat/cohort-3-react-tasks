import { createContext, useState } from "react";

export const MyAuth = createContext();



export const AuthContextProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    
    return <MyAuth.Provider value={{ isLoggedIn, setIsLoggedIn, users, setUsers, user, setUser }}>
        {children}
    </MyAuth.Provider>
}




