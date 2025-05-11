import CheckboxCell from './CheckboxCell';

export default function HabitRow({ habit, days, toggleCheck }) {
  const achieved = days.filter((d) => habit.tracking[d]).length;

  return (
    <div className="flex border-b items-center py-3">
      <div className="w-32">{habit.name}</div>
      {days.map((d) => (
        <CheckboxCell key={d} isChecked={habit.tracking[d]} onClick={() => toggleCheck(habit.id, d)} />
      ))}
      <div className="w-16 text-center">{achieved}</div>
      <div className="w-16 text-center">{habit.goal}</div>
    </div>
  );
}
