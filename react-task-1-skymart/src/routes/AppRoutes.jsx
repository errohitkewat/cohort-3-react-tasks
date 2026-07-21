
import { Route, Routes } from 'react-router';
import AuthenticationPage from '../pages/AuthenticationPage';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import AboutPage from '../pages/AboutPage';
import ProductDetailsPage from '../pages/ProductsDetailsPage';
import Register from '../pages/Register';
import Login from '../pages/Login';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
    return (
        <div>
            <Routes>

                <Route path="/auth" element={<AuthenticationPage />} />

                <Route path={"/"} element={
                    <ProtectedRoute>
                        <HomePage />
                    </ProtectedRoute>
                } />

                <Route path={"/shop-page"} element={
                    <ProtectedRoute>
                        <ShopPage />
                    </ProtectedRoute>
                } />

                <Route path={"/about-page"} element={
                    <ProtectedRoute>
                        <AboutPage />
                    </ProtectedRoute>
                } />

                <Route path={'/product-detail/:id'} element={
                    <ProtectedRoute>
                        <ProductDetailsPage />
                    </ProtectedRoute>
                } />

            </Routes>
        </div>
    )
}

export default AppRoutes



