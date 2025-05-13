function FormatTime(time: string) {
  const date = new Date(time);

  let hours = date.getHours();
  const minutes = date.getMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours}:${minutesFormatted} ${ampm}`;
}

export default FormatTime;
