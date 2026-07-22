import React from 'react'
import { Route, Routes } from 'react-router';
import MainLayout from '../layout/MainLayout';
import AuthLayout from '../layout/AuthLayout';
import Login from '../pages/LoginPage';
import Register from '../pages/ResisterPAge';
import Home from '../pages/HomePage';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  return (
        <Routes>
        
            <Route path="/" element={ <ProtectedRoute> <MainLayout /> </ProtectedRoute>}>
                <Route index element={<Home />} />
            </Route>
        
            <Route path="/auth" element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
        
        </Routes>
  )
}

export default AppRoutes




