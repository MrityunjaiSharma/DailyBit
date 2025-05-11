import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Navbar from "../components/tracker/Navbar";

function calculateStreak(tracking, currentDate) {
  let streak = 0;
  for (let d = currentDate; d >= 1; d--) {
    if (tracking[d]) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

export default function Dashboard({ habits = [], days = [] }) {
  const currentDay = new Date().getDate();

  const chartData = habits.map((habit) => {
    const doneCount = days.filter((d) => habit.tracking[d.date]).length;
    const streak = calculateStreak(habit.tracking, currentDay);
    return {
      name: habit.name,
      Done: doneCount,
      Goal: habit.goal,
      Streak: streak,
    };
  });

  return (
    <>
    <Navbar username="harryjain" />
    <div className="w-screen h-screen p-10 bg-back overflow-auto">
      <h1 className="text-3xl font-bold text-center text-dark mb-8">📊 Dashboard Analytics</h1>

      {chartData.length === 0 ? (
        <p className="text-center text-gray-500">No habits to analyze yet.</p>
      ) : (
        <>
          <div className="w-full max-w-5xl mx-auto mb-10">
            <h2 className="text-xl font-semibold text-dark mb-4">Progress Overview</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="Done" fill="#A5D6A7" />
                <Bar dataKey="Goal" fill="#4CAF50" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="w-full max-w-5xl mx-auto">
            <h2 className="text-xl font-semibold text-dark mb-4">🔥 Daily Streaks</h2>
            <table className="w-full border border-gray-300 text-sm">
              <thead>
                <tr className="bg-tri">
                  <th className="py-2 px-4 text-left">Habit</th>
                  <th className="py-2 px-4 text-center">Current Streak</th>
                </tr>
              </thead>
              <tbody>
                {chartData.map((item, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="py-2 px-4">{item.name}</td>
                    <td className="py-2 px-4 text-center font-semibold">{item.Streak} 🔁</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
    </>
  );
}