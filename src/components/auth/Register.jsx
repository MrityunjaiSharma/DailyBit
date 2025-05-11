import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthForm from './Authform';

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    const { email, password } = data;
    try {
      await axios.post('/api/register', { email, password });
      navigate('/login');
    } catch (err) {
      console.error("Registration failed", err);
    }
  };

  return <AuthForm type="register" onSubmit={handleRegister} />;
}
