export function formatDate(date: Date): string {
  if (!date) {
    return "-";
  }
  const d = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const m =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const y = date.getFullYear();
  const h = date.getHours() % 12 === 0 ? 12 : date.getHours() % 12;
  const hours = h < 10 ? `0${h}` : h;
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const am = date.getHours() < 12 ? "am" : "pm";
  return `${d}-${m}-${y} ${hours}:${minutes}${am}`;
}

export function formatTemperature(temperature: number): string {
  return (temperature - 273.15).toFixed(0);
}
