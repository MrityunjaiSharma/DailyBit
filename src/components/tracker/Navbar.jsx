import React from "react";
import { useNavigate } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Navbar({ username = "Username" }) {
  const navigate = useNavigate();

  return (
    <nav className="w-full flex items-center px-20 py-5 justify-between border-gray-300 bg-back">
      {/* Left Logo */}
      <div className="text-xl font-bold text-dark cursor-pointer" onClick={() => navigate("/habittracker")}>
        DailyHabits
      </div>

      {/* Center + Right Section */}
      <div className="flex gap-5 items-center">
        <button
          onClick={() => navigate("/dashboard")}
          className="px-4 py-1 border border-tri text-txt bg-sec rounded hover:bg-back hover:text-txt transition"
        >
          Dashboard
        </button>

        {/* User Info + Theme Toggle */}
        <div className="flex items-center space-x-4">
          <FaMoon className="text-txt text-sm cursor-pointer" />
          <div className="flex items-center text-txt font-medium">
            {username}
            <MdKeyboardArrowDown className="ml-1 text-lg" />
          </div>
        </div>
      </div>
    </nav>
  );
}
