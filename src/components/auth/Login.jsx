// src/components/auth/Login.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import AuthForm from "./Authform";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = ({ email, password }) => {
    const success = login(email, password);
    if (success) {
      navigate("/habittracker");
    } else {
      alert("Invalid credentials. Try test@example.com / password123");
    }
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
}
