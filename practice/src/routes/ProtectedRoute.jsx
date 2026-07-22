import React, { useContext } from 'react'
import { MyAuth } from '../context/AuthContext';
import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }) => {

    const {  user } = useContext(MyAuth);

    if (!user) {
        return <Navigate to="/auth/login" replace />;
    }
 
    return children
}

export default ProtectedRoute


