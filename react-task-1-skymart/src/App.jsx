
import Navbar from './components/Navbar';
import Footer from './components/Footer';


import Cart from './components/Cart';
import AppRoutes from './routes/AppRoutes';


const App = () => {

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white hide-scrollbar">

      <Navbar />
      <Cart />
      <AppRoutes />
      <Footer />

    </div>
  )
}

export default App




