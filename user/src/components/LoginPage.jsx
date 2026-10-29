import React, { useRef } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function LoginPage() {
  const username = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/token/", {
        username: username.current.value,
        password: password.current.value,
      });
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
      alert("Login successful!");
      navigate('/'); // Use `navigate`('/')`
      
    } catch (error) {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center text-gray-800">Login</h1>
        <input
          type="text"
          placeholder="Username"
          ref={username}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          ref={password}
          className="w-full mb-6 px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <button
          onClick={handleLogin}
          className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
