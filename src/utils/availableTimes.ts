export const AvailableTimes = (): string[] => {
  const times: string[] = [];

  for (let hour = 8; hour <= 17; hour += 2) {
    times.push(`${hour.toString().padStart(2, "0")}:00`);
    if (hour < 17) {
      times.push(`${hour.toString().padStart(2, "0")}:30`);
    }
  }

  return times;
};
