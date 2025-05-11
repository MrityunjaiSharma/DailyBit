export default function DateHeader({ days }) {
  return (
    <div>
      {/* Row 1: Day initials */}
      <div className="flex text-gray-500 text-sm font-medium h-10">
        {days.map((d, i) => (
          <div
            key={`day-${i}`}
            className={`w-8 h-10 border-b flex items-center justify-center ${
              d.isToday ? "bg-dark text-white font-bold" : ""
            }`}
          >
            {d.day}
          </div>
        ))}
      </div>

      {/* Row 2: Dates */}
      <div className="flex text-sm text-gray-500 font-medium h-10">
        {days.map((d, i) => (
          <div
            key={`date-${i}`}
            className={`w-8 h-10 border-b flex items-center justify-center ${
              d.isToday ? "bg-dark text-white font-bold" : ""
            }`}
          >
            {d.date}
          </div>
        ))}
      </div>
    </div>
  );
}
