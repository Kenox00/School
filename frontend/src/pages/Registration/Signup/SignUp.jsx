import React, { useState } from "react";
import { useSignup } from "../../../hooks/useSignUp";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [fullnames, setFullnames] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [studentName, setStudentName] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userObject = {
      fullnames,
      email,
      phone,
      password,
      role,
      studentName: role === "parent" ? studentName : null,
    };
    await signup(userObject);
  };

  return (
    <div className="container mx-auto p-6 flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Sign Up
        </h2>

        <label className="block mb-2 font-medium text-gray-700">
          Full Names
        </label>
        <input
          type="text"
          className="block w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={fullnames}
          onChange={(e) => setFullnames(e.target.value)}
          placeholder="Enter your full names"
        />

        <label className="block mb-2 font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="block w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <label className="block mb-2 font-medium text-gray-700">Phone</label>
        <input
          type="text"
          className="block w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
        />

        <label className="block mb-2 font-medium text-gray-700">Password</label>
        <input
          type="password"
          className="block w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        <label className="block mb-2 font-medium text-gray-700">Role</label>
        <select
          value={role}
          onChange={handleRoleChange}
          className="block w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="" disabled>
            Select a role
          </option>
          <option value="HeadTeacher">Head Teacher</option>
          <option value="teacher">Teacher</option>
          <option value="parent">Parent</option>
        </select>

        {role === "parent" && (
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Student Name
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Enter your student's name"
            />
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="block w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Sign Up
        </button>
        <div className="flex  justify-center text-center mt-4">
          <Link to="/login">
            <a href="SignUp.jsx" className="text-blue-500 hover:underline">
              Already have an account?
            </a>
          </Link>
        </div>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default SignUp;
