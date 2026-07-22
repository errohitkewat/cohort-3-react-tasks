import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { MyAuth } from "../context/AuthContext";

const Login = () => {

  const { register, handleSubmit, reset } = useForm();
  const { users, setUser }= useContext(MyAuth)
  const navigate = useNavigate();

  const submitForm = (data) => { 
    
    let user =  users.find(elem => elem.email === data.email && elem.password === data.password);

    localStorage.setItem("user", JSON.stringify(user))
    setUser(user);

    navigate('/')
    reset()
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-5">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">
        <h1 className="mb-2 text-3xl font-bold text-white">
          Welcome Back
        </h1>

        <p className="mb-8 text-zinc-400">
          Login to your account
        </p>

        <form onSubmit={handleSubmit(submitForm)} className="space-y-5">

          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              Email
            </label>

            <input
              { 
              ...register("email", {
                required: "Email is required!",
              })
              }
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-lime-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              Password
            </label>

            <input
              { 
              ...register("password", {
                required: "Password is required!",
              })
              }
              type="password"
              placeholder="Enter password"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-lime-500"
            />
          </div>

          <button className="w-full rounded-lg bg-lime-500 py-3 font-semibold text-black transition hover:bg-lime-400">
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-zinc-400">
          Don't have an account?{" "}
          <Link
            to="/auth/register"
            className="font-medium text-lime-400 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;