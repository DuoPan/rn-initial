// For inner process
function formatDatetimeToDateString(datetime: Date): string {
  function pad(n: number) {
    return n < 10 ? "0" + n : n;
  }
  return (
    pad(datetime.getFullYear()) +
    "-" +
    pad(datetime.getMonth() + 1) +
    "-" +
    pad(datetime.getDate())
  );
}

export default formatDatetimeToDateString;
