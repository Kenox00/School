import React, { useState } from "react";
import { useLogin } from "../../../hooks/useLogIn";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginDetails = {
      email,
      password,
    };
    await login(loginDetails);
  };

  return (
    <div className="container mx-auto p-6 flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Log In
        </h2>

        <label className="block mb-2 font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="block w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <label className="block mb-2 font-medium text-gray-700">Password</label>
        <input
          type="password"
          className="block w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="rememberMe"
            className="mr-2"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="rememberMe" className="text-gray-700">
            Remember Me
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="block w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Log In
        </button>

        <div className="flex  justify-between text-center mt-4">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
          <Link to="/signup">
            <a href="" className="text-black hover:underline">
              Create an Account
            </a>
          </Link>
        </div>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
    </div>
  );
};

export default LogIn;
