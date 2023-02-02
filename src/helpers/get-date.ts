export const getDate = (time: string) => {
  const date = new Date(time);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

  const fullDay = `${day}.${month}.${year}`;
  const fullTime = `${hours}:${minutes}`;
  return { fullDay, fullTime };
};
