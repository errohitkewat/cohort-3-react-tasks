import { createContext }  from "react";

export const AuthenticationContext = createContext();

export const AuthenticationContextPRovider = ({ children }) => { 
    return <AuthenticationContext.Provider>{children}</AuthenticationContext.Provider>
} 


