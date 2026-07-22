import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { MyAuth } from "../context/AuthContext";

const Navbar = () => {


  const { setUser } = useContext(MyAuth)

  return (
    <nav className="border-b border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        <Link
          to="/"
          className="text-2xl font-bold text-lime-400"
        >
          AuthApp
        </Link>

        <div className="flex items-center gap-6">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-lime-400"
                : "text-zinc-300 hover:text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            onClick={() => { 
              localStorage.removeItem("user", )
              setUser(null)
            }}
            className="text-red-500 border rounded-xl px-4 py-0.5 hover:bg-red-500/10"
          >
            Logout
          </NavLink>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;