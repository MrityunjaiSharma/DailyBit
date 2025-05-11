import { useState } from 'react';

export default function AddHabitForm({ onAdd }) {
  const [name, setName] = useState('');
  return (
    <div className="flex items-center mt-4">
      <input
        className="border p-2 mr-2"
        placeholder="New Habit"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2"
        onClick={() => {
          if (name) {
            onAdd(name);
            setName('');
          }
        }}
      >
        + New Habit
      </button>
    </div>
  );
}