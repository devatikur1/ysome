export function ParseMillified(str) {
  if (!str || typeof str !== "string") {
    return 0;
  }

  const units = {
    K: 1_000,
    M: 1_000_000,
    B: 1_000_000_000,
  };

  const lastChar = str.slice(-1).toUpperCase();

  if (units[lastChar]) {
    const number = parseFloat(str.slice(0, -1));
    return (isNaN(number) ? 0 : number) * units[lastChar];
  }

  const num = parseFloat(String(str).replace(/,/g, ""));
  return isNaN(num) ? 0 : num;
}
