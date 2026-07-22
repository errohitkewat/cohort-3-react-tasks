import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { MyAuth } from "../context/AuthContext";

const Register = () => {

  const navigate = useNavigate();
  const { handleSubmit, reset, register, } = useForm();

  const { users, setUsers, setUser } = useContext(MyAuth)

  const submitForm = (data) => { 
    console.log(data)

    const arr = [...users, data];
    localStorage.setItem("users", JSON.stringify(arr));
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
    setUsers(arr);

    navigate('/');
    reset();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-5">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">

        <h1 className="mb-2 text-3xl font-bold text-white">
          Create Account
        </h1>

        <p className="mb-8 text-zinc-400">
          Register a new account
        </p>

        <form onSubmit={handleSubmit(submitForm)} className="space-y-5">

          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              Full Name
            </label>

            <input
              {...register("name", {
                required: "Name is Required"
              })}
              type="text"
              placeholder="John Doe"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-lime-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              Email
            </label>

            <input
              {...register("email", {
                required: "Email is Required"
              })}
              type="email"
              placeholder="example@gmail.com"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-lime-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              Password
            </label>

            <input
              {...register("password", {
                required: "PAssword is Required"
              })}
              type="password"
              placeholder="********"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-lime-500"
            />
          </div>

          <button className="w-full rounded-lg bg-lime-500 py-3 font-semibold text-black transition hover:bg-lime-400">
            Register
          </button>

        </form>

        <p className="mt-6 text-center text-zinc-400">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="font-medium text-lime-400 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;