export default function CheckboxCell({ isChecked, onClick, day }) {
  const { isPast, isToday } = day;

  const handleClick = () => {
    if (!isPast) {
     onClick(); // Only allow toggle if not past
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`w-8 h-8 flex items-center justify-center border border-tri rounded-md text-sm
        ${isChecked ? "bg-sec border-txt border font-bold" : ""}
        ${isToday ? "border border-txt" : ""}
        ${isPast ? "bg-gray-800 text-gray-400 border-sec cursor-not-allowed" : "cursor-pointer"}
      `}
      title={isPast ? "You can't tick past days" : "Click to mark complete"}
    >
      {isChecked ? "✓" : ""}
    </div>
  );
}
