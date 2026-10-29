import React, { useRef } from "react";
import axios from "axios";

function SignUpPage() {
  const username = useRef();
  const password = useRef();

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/signup/", {
        username: username.current.value,
        password: password.current.value,
      });
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
      alert("Sign-up successful!");
    } catch (error) {
      alert("Sign-up failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center text-gray-800">Sign Up</h1>
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
          onClick={handleSignUp}
          className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignUpPage;
