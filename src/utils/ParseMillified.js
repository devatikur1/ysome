export function ParseMillified(str) {
  const units = {
    K: 1_000,
    M: 1_000_000,
    B: 1_000_000_000,
  };

  const lastChar = str.slice(-1).toUpperCase();

  if (units[lastChar]) {
    const number = parseFloat(str.slice(0, -1));
    return number * units[lastChar];
  }

  return parseFloat(str.replace(/,/g, ""));
}
