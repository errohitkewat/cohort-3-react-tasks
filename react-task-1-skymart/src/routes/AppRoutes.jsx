
import { Route, Routes } from 'react-router';
import AuthenticationPage from '../pages/AuthenticationPage';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import AboutPage from '../pages/AboutPage';
import ProductDetailsPage from '../pages/ProductsDetailsPage';

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path={"/auth"} element={<AuthenticationPage />} />
                <Route path={"/"} element={<HomePage />}  />
                <Route path={"/shop-page"} element={<ShopPage />} />
                <Route path={"/about-page"} element={<AboutPage />} />
                <Route path={'/product-detail/:id'} element={ <ProductDetailsPage />} />
            </Routes>
        </div>
    )
}

export default AppRoutes



