function GenerateUsername(name) {
  const base = name.trim().toLowerCase().replace(/\s+/g, "_");

  const random = Math.floor(Math.random() * 10000);

  return `${base}_${random}`;
}
