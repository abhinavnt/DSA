function getTimeDifferenceInMinutes(start, end) {
  const [startHour, startMinute] = start.split(":").map(Number);
  const [endHour, endMinute] = end.split(":").map(Number);

  const startTotalMinutes = startHour * 60 + startMinute;
  const endTotalMinutes = endHour * 60 + endMinute;

  return endTotalMinutes - startTotalMinutes;
}

const time1 = "10:30";
const time2 = "16:30";

console.log(getTimeDifferenceInMinutes(time1, time2));
