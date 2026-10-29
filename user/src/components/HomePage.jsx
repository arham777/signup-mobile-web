import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const accessToken = localStorage.getItem("access");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access"); // Clear the token from local storage
    navigate("/logout"); // Programmatically navigate to the logout route
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to the Home Page</h1>
        {accessToken ? (
          <p className="mt-4 text-green-600">
            You are logged in with token: {accessToken}
          </p>
        ) : (
          <p className="mt-4 text-red-600">You are not logged in.</p>
        )}
      </div>
      <div>
        <button onClick={handleLogout} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
          Logout
        </button>
      </div>
    </>
  );
}

export default HomePage;
