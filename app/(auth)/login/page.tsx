"use client";
import { motion } from "framer-motion";

function LoginPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <h1 className="text-3xl font-bold flex justify-center my-8">Login</h1>
      <p className="text-center mb-6">
        Please enter your credentials to log in to your account.
      </p>
      <form className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
          />
        </div>
        <div>
          <input
            type="checkbox"
            className="bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          ></input>
          <label htmlFor="remember" className="ml-2 text-gray-700">
            Remember me
          </label>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Log In
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default LoginPage;
