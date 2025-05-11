import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./components/auth/AuthContext";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import HabitTracker from "./components/tracker/HabitTracker";
import Dashboard from "./pages/Dashboard";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import { generateDaysOfMonth } from "./utils/dateUtils"; // ✅ assuming you use dynamic days

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

function App() {
  const days = generateDaysOfMonth();

  // ✅ Load habits from localStorage
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Save to localStorage whenever habits change
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/habittracker"
            element={
              <PrivateRoute>
                <HabitTracker habits={habits} setHabits={setHabits} days={days} />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard habits={habits} days={days} />
              </PrivateRoute>
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
