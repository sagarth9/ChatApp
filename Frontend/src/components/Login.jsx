import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
  const [authUser, setAuthUser] = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    axios
      .post("/api/user/login", userInfo)
      .then((response) => {
        if (response.data) {
          toast.success("Login successful");
        }
        localStorage.setItem("ChatApp", JSON.stringify(response.data));
        setAuthUser(response.data);
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Error: " + error.response.data.error);
        } else {
          toast.error("Network error");
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white border border-gray-200 px-6 py-6 rounded-md shadow-md space-y-4"
        aria-label="Login form"
      >
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-600">Messenger</h1>
          <p className="mt-1 text-sm sm:text-base text-gray-600">
            Login with your{" "}
            <span className="text-blue-600 font-semibold">Account</span>
          </p>
        </div>

        {/* Email */}
        <div>
          <label className="flex items-center text-black gap-3 bg-gray-200 border border-gray-200 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-5 h-5 text-gray-700"
              aria-hidden="true"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>

            <input
              type="email"
              inputMode="email"
              autoComplete="email"
              className="flex-1 bg-transparent outline-none text-sm sm:text-base"
              placeholder="Email"
              {...register("email", { required: true })}
              aria-invalid={errors.email ? "true" : "false"}
            />
          </label>
          {errors.email && (
            <p className="mt-1 text-sm text-red-500" role="alert">
              This field is required
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="flex items-center text-black gap-3 bg-gray-200 border border-gray-200 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-5 h-5 text-gray-700"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>

            <input
              type="password"
              autoComplete="current-password"
              className="flex-1 bg-transparent outline-none text-sm sm:text-base"
              placeholder="Password"
              {...register("password", { required: true })}
              aria-invalid={errors.password ? "true" : "false"}
            />
          </label>
          {errors.password && (
            <p className="mt-1 text-sm text-red-500" role="alert">
              This field is required
            </p>
          )}
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg text-sm sm:text-base hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Login
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to={"/signup"} className="text-blue-600 underline font-medium">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
