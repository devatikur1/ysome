export const generateUsername = (email = "") => {
  const emailPart = email
    ? email
        .split("@")[0]
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "")
    : "user";
  const uniquePart = Math.random().toString(36).substring(2, 7);
  return `@${emailPart}_${uniquePart}`;
};
