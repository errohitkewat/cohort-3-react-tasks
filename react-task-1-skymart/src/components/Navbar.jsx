import { NavLink } from "react-router";
import {
  ShoppingCart,
  LogOut,
  Zap,
} from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full bg-[#0E0E0E] z-100 sticky top-0 left-0 lg:px-20 py-4 border-b border-zinc-800">
      <div className="max-w-[1700px] mx-auto px-5 lg:px-10 flex items-center justify-between ">

        {/* Logo */}

        <div className="flex items-center gap-3 cursor-pointer">
          <div className="p-2  rounded-lg bg-lime-400 flex items-center justify-center ">
            <Zap
              size={15}
              strokeWidth={3}
              className="text-black"
              fill="black"
            />
          </div>

          <h1 className="text-xl font-clash font-bold  text-white">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="lg:flex hidden text-sm text-zinc-400 gap-7">
            <NavLink to={'/'} className={({ isActive }) =>
          isActive ? "text-lime-400 font-semibold" : "text-zinc-400 hover:text-white"
        } >Home</NavLink>

            <NavLink to={'/shop-page'} className={({ isActive }) =>
          isActive ? "text-lime-400 font-semibold" : "text-zinc-400 hover:text-white"
        } >Shop</NavLink>

            <NavLink to={'/about-page'} className={({ isActive }) =>
          isActive ? "text-lime-400 font-semibold" : "text-zinc-400 hover:text-white"
        } >About</NavLink>
        </nav>
        

        {/* Right Side */}

        <div className="flex items-center gap-3">

          {/* Profile */}

          <button
            className="hidden text-sm sm:flex items-center gap-3
            rounded-xl border border-zinc-800
            bg-[#171717]
            px-2 py-1"
          >
            <div className="leading-none rounded-lg px-2 py-1.5 bg-lime-400 text-black flex items-center justify-center font-bold">
              R
            </div>

            <span className="text-zinc-300">
              Rohit Kewat
            </span>
          </button>

          {/* Cart */}

          <button
            className="p-2 rounded-xl border border-zinc-800
            bg-[#171717]
            flex justify-center items-center
            hover:border-lime-400
            hover:text-lime-400
            duration-300"
          >
            <ShoppingCart
              size={17}
            />
          </button>

          {/* Logout */}

          <button
            className="p-2 rounded-xl border border-zinc-800
            bg-[#171717]
            flex justify-center items-center
            hover:border-red-400
            text-white hover:text-red-400
            duration-300"
          >
            <LogOut
              size={17}
              className=""
            />
          </button>

        </div>

      </div>
    </header>
  );
};

export default Navbar;