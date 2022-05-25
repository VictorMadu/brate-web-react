export function addTrailingZeroesForMoney(num: number) {
  const dec = num.toString().split(".")[1];
  const len = dec && dec.length > 2 ? dec.length : 2;
  return num.toFixed(len);
}
