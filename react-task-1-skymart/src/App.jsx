
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage'
import AboutPage from './pages/AboutPage'

import { Route, Routes } from 'react-router';


const App = () => {
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white">

      <Navbar />

      <Routes>
        <Route path={"/"} element={<HomePage />}  />
        <Route path={"/shop-page"} element={<ShopPage />}  />
        <Route path={"/about-page"} element={<AboutPage />}  />
      </Routes>

      <Footer />

    </div>
  )
}

export default App


