export default function() {
  const hours = new Date().getHours();

  function isMorning(): boolean {
    return hours >= 7 && hours <= 12;
  }

  function isAfternoon(): boolean {
    return hours >= 13 && hours <= 17;
  }

  function isEvening(): boolean {
    return hours >= 18 && hours <= 21;
  }

  function isBedTime(): boolean {
    return (hours >= 22 && hours <= 23) || (hours >= 0 && hours <= 6);
  }

  return {
    hours,
    isMorning,
    isAfternoon,
    isEvening,
    isBedTime,
  };
}
