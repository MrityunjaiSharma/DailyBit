import React from "react";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <>
    <div className="relative w-screen h-screen">
    <div className="absolute inset-0 bg-back z-0">
      
    </div>

    <div className="relative z-10 flex items-center justify-center h-full w-full">
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-txt">Welcome to <span className="text-dark">DailyBit</span><span className="bg-white rounded-2xl text-[30px] p-[4px] ml-2 shadow-md">🌱</span></h1>
      <p className="mt-2 text-gray-400">Track your daily habits and build a better you.</p>
      <div className="mt-6 space-x-4">
        <Link to="/login" className="px-4 py-2 bg-sec text-white rounded hover:bg-back border border-main">
          Login
        </Link>
        <Link to="/register" className="px-4 py-2 border border-txt text-txt rounded hover:bg-sec hover:text-txt hover:border-dark">
          Register
        </Link>
      </div>
    </div>
    </div>
    </div>
    </>
  );
}

