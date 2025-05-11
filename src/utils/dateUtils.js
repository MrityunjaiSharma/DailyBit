export const generateDaysOfMonth = (year = new Date().getFullYear(), month = new Date().getMonth()) => {
  const days = [];
  const today = new Date();
  const now = new Date(today.getFullYear(), today.getMonth(), today.getDate()); // remove time

  const date = new Date(year, month, 1);

  while (date.getMonth() === month) {
    const current = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    
    days.push({
      date: current.getDate(),
      day: current.toLocaleDateString("en-US", { weekday: "short" }).charAt(0),
      isToday: current.getTime() === now.getTime(),
      isPast: current.getTime() < now.getTime(),
    });

    date.setDate(date.getDate() + 1);
  }

  return days;
};
