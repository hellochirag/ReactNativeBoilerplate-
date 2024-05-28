export function getDaysOfMonth(month: number) {
  const date = new Date();
  const monthVal = new Date(date.getFullYear(), month, 0).getDate();
  return monthVal + 1;
}
