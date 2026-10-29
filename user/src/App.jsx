import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import ProtectedRoute from "./components/ProtectedRoute";
import ProfileUser from "./components/ProfileUser";

function App() {
  return (
    <Router>
      <div>
        <nav className="flex justify-around p-4 bg-black">
          <Link to="/" className="text-blue-500 hover:underline">Home</Link>
          <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
          <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute> 
            } />
            <Route path="/profile" element={
            <ProtectedRoute>
              <ProfileUser />
            </ProtectedRoute> 
            } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


function Logout(){
  localStorage.clear()
  return <Navigate to="/login" />
}