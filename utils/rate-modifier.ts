const getPercentDiff = (curr: number, prev: number) => {
  return ((curr - prev) * 100) / prev;
};

export function normalizeRate(rate: number) {
  return rate.toPrecision(6);
}

export function normalizePercentDiff(
  rate: number,
  prevRate: number,
  precision = 3
) {
  const diff = getPercentDiff(rate, prevRate);
  const sign = rate < prevRate ? "-" : "+";
  return sign + " " + rate.toPrecision(precision) + "%";
}
