// Register.jsx

import React, { useContext } from "react";
import {
  ArrowRight,
  Mail,
  Lock,
  User,
  Eye,
  Zap,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";


const Register = () => {

  const { users, setUsers } = useContext(AuthContext);

  const navigate = useNavigate();

  const { register, reset, handleSubmit, watch, formState: { errors } } = useForm({mode: "onChange"})

  const password = watch("password");

  const submitForm = (data) => { 
    console.log(data)

    const arr = [...users, data];
    localStorage.setItem("users", JSON.stringify(arr));
    setUsers(arr);

    navigate('/auth')

    reset()
  }

  return (
    <section className="min-h-screen bg-[#0b0b0b] flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-9 w-9 rounded-xl bg-lime-400 flex items-center justify-center">
            <Zap className="h-4 w-4 text-black fill-black" />
          </div>

          <h1 className="text-2xl font-clash font-semibold tracking-tight text-white">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-zinc-800 bg-[#111111] shadow-2xl p-8">
          <h2 className="text-2xl font-clash font-bold text-white">
            Create account
          </h2>

          <p className="text-sm text-zinc-500">
            Join SkyMart and start shopping
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit(submitForm)} className="mt-5 space-y-5">
            {/* Name */}
            <div className="relative">
              <User
                size={15}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <input
                {...register("fullName", {
                  required: "Name is required",
                  pattern: {
                    value: /^(?!\s*$).+/,
                    message: "Blank Spaces are not allowed!"
                  }
                })}
                type="text"
                placeholder="Full name"
                className="w-full rounded-2xl text-sm border border-zinc-700 bg-[#1c1c1c] py-3 pl-14 pr-5 text-white placeholder:text-zinc-500 outline-none transition focus:border-lime-400"
              />
            </div>
            { errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p> }

            {/* Email */}
            <div className="relative">
              <Mail
                size={15}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <input
                { 
                  ...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please Enter a valid email!"
                    }
                  })
                }
                type="email"
                placeholder="Email address"
                className="w-full rounded-2xl border border-zinc-700 bg-[#1c1c1c] py-3 text-sm pl-14 pr-5 text-white placeholder:text-zinc-500 outline-none transition focus:border-lime-400"
              />
            </div>
            { errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p> }

            {/* Password */}
            <div className="relative">
              <Lock
                size={15}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <input
                { 
                  ...register("password", {
                    required: "Password is required!", 
                    minLength: {
                      value: 6,
                      message: "Password must have at least 6 characters!"
                    },
                    maxLength: {
                      value: 6,
                      message: "Password can't have greater than 10 characters!"
                    }
                  })
                }
                type="password"
                placeholder="Password (min 6 chars)"
                className="w-full rounded-2xl border border-zinc-700 bg-[#1c1c1c] py-3 text-sm pl-14 pr-14 text-white placeholder:text-zinc-500 outline-none transition focus:border-lime-400"
              />

              <Eye
                size={15}
                className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-zinc-500"
              />
            </div>
            { errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p> }

            {/* Confirm Password */}
            <div className="relative">
              <Lock
                size={15}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <input
                { 
                  ...register("confirmPassword", {
                    required: "Password is required!", 
                    validate: (value) => value === password || "Passwords do not match!",
                  })
                }
                type="password"
                placeholder="Confirm password"
                className="w-full rounded-2xl border border-zinc-700  bg-[#1c1c1c] py-3 text-sm pl-14 pr-5 text-white placeholder:text-zinc-500 outline-none focus:border-lime-400"
              />
            </div>
            { errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p> }

            {/* Button */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-lime-400 py-3 text-md font-semibold text-black transition hover:bg-lime-300 active:scale-[0.98]"
            >
              Create Account
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>
          </form>

          {/* Footer */}
          <p className="mt-8 text-md text-center text-zinc-500">
            Already have an account?{" "}
            <button className="font-semibold cursor-pointer text-lime-400 ">
              Sign in
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;