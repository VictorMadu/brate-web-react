export const timestampToDateAndTime = (timestamp: number) => {
  const date = new Date(timestamp);
  const year = padNum(date.getFullYear(), 4);
  const month = padNum(date.getMonth() + 1, 2);
  const day = padNum(date.getDate(), 2);
  const hour = padNum(date.getHours(), 2);
  const min = padNum(date.getMinutes(), 2);

  return `${day}/${month}/${year} ${hour}:${min}`;
};

function padNum(num: number, neededLength: number) {
  const strNum = num.toString();
  return strNum.padStart(neededLength, "0");
}
