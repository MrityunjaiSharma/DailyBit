import React, { useState, useEffect } from "react";
import DateHeader from "./DateHeader";
import CheckboxCell from "./CheckboxCell";
import Navbar from "./Navbar";

export default function HabitTracker({ habits, setHabits, days }) {
  const [goal, setGoal] = useState();
  const [newHabit, setNewHabit] = useState("");
  const [quote, setQuote] = useState(null);

  const toggleCheck = (habitId, day) => {
    const selectedDay = days.find((d) => d.date === day);
    if (selectedDay?.isPast) return; // disable past-day toggle

    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === habitId
          ? {
            ...habit,
            tracking: {
              ...habit.tracking,
              [day]: !habit.tracking[day],
            },
          }
          : habit
      )
    );
  };

  const addHabit = () => {
    if (!newHabit.trim() || goal < 1 || goal > 31) return;
    setHabits([
      ...habits,
      { id: Date.now(), name: newHabit, goal, tracking: {} },
    ]);
    setNewHabit("");
    setGoal(31);
  };

  const deleteHabit = (id) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  };

  useEffect(() => {
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((data) => setQuote(data));
  }, []);

  return (
    <>
      <Navbar username="harryjain" />
      <div className="w-screen py-13 flex flex-col items-center bg-back ">
        {quote && (
          <div className="p-3 rounded-xl border-tri mb-4">
            <h2></h2>
            <p className="text-xl text-center text-gray-500">"{quote.quote}"</p>
            <p className="mt-1 text-sm italic text-right text-gray-500">— {quote.author}</p>
          </div>
        )}

        <div className="flex mt-6 justify-end items-center space-x-2 sticky bottom-0 px-6 py-4 rounded-xl z-20 self-start w-full">

          <input
            type="text"
            className="border border-tri p-2 rounded focus:outline-none"
            placeholder="New Habit"
            value={newHabit}
            onChange={(e) => setNewHabit(e.target.value)}
          />
          <input
            type="number"
            className="border border-tri p-2 w-24 rounded focus:outline-none"
            placeholder="Goal"
            min={1}
            max={31}
            value={goal}
            onChange={(e) => setGoal(parseInt(e.target.value))}
          />
          <button
            className="bg-sec text-white px-4 py-2 rounded border border-tri hover:bg-tri cursor-pointer"
            onClick={addHabit}
          >
            Add
          </button>
        </div>

        <div className="flex rounded-md border-tri bg-sec border max-w-full max-h-[70vh] overflow-auto shadow-md mt-3">
          <div className="w-52 shrink-0 bg-sec border-r border-tri sticky left-0 z-10">
            <div className="h-20 flex justify-center items-center font-bold text-dark border-b border-tri">Habits</div>
            {habits.map((habit) => (
              <div key={habit.id} className="h-10 flex items-center justify-between border-b border-tri text-sm pr-2">
                <span className="pl-5 truncate max-w-[100px]">{habit.name}</span>
                <button
                  onClick={() => deleteHabit(habit.id)}
                  className="text-red-500 text-xs hover:bg-red-500 w-[30px] h-[20px] rounded-md border hover:text-white"
                  title="Delete Habit"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto max-w-[70vw]">
            <div className="min-w-fit">
              <DateHeader days={days} />
              {habits.map((habit) => (
                <div key={habit.id} className="flex h-10">
                  {days.map((d) => (
                    <CheckboxCell
                      key={d.date}
                      day={d}
                      isChecked={habit.tracking[d.date]}
                      onClick={() => toggleCheck(habit.id, d.date)}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="shrink-0 bg-sec border-l border-tri sticky right-0 z-10">
            <div className="h-20 flex border-b border-tri items-center justify-center">
              <div className="w-16 text-center text-dark font-bold">Done</div>
              <div className="w-16 text-center text-dark font-bold">Goal</div>
            </div>
            {habits.map((habit) => {
              const achieved = days.filter((d) => habit.tracking[d.date]).length;
              return (
                <div key={habit.id} className="flex h-10 border-b border-tri">
                  <div className="w-16 text-center">{achieved}</div>
                  <div className="w-16 text-center">{habit.goal}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
