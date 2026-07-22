
import { Route, Routes } from 'react-router';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import AboutPage from '../pages/AboutPage';
import ProductDetailsPage from '../pages/ProductsDetailsPage';
import Register from '../pages/Register';
import Login from '../pages/Login';
import ProtectedRoute from './ProtectedRoute';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import ProtectedAuthRoute from './ProtectedAuthRoute';

const AppRoutes = () => {
    return (
        <div>
            <Routes>

                {/* Main Routes */}
                <Route path={"/"} element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
                    <Route path={""} element={
                        <ProtectedRoute>
                            <HomePage />
                        </ProtectedRoute>
                    } />
                    <Route path={"shop-page"} element={
                        <ProtectedRoute>
                            <ShopPage />
                        </ProtectedRoute>
                    } />
    
                    <Route path={"about-page"} element={
                        <ProtectedRoute>
                            <AboutPage />
                        </ProtectedRoute>
                    } />
    
                    <Route path={'product-detail/:id'} element={
                        <ProtectedRoute>
                            <ProductDetailsPage />
                        </ProtectedRoute>
                    } />
                </Route>

                {/* Auth Routes */}
                <Route path={ "/auth"} element={<ProtectedAuthRoute><AuthLayout /></ProtectedAuthRoute>}>
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/auth/register" element={<Register />} />
                </Route>

            </Routes>
        </div>
    )
}

export default AppRoutes





