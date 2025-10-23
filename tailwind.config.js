/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Base Theme Colors
        bg: "#0f0f0f", // Deep black base background
        "bg-Primary": "#121212", // Deep black base background
        "bg-pecondary": "#181818", // Slightly lighter layer for contrast
        surface: "#1f1f1f", // Surface for cards or sections
        accent: "#00adb5", // Highlight or accent color
        text: "#eeeeee", // Main text color
        subtext: "#b8b8b8", // Muted text color
        border: "#2a2a2a", // Divider color
        hover: "#222222", // Hover state

        // Optional subtle variants
        success: "#4caf50",
        warning: "#ffb300",
        error: "#e53935",
      },
    },
  },
  plugins: [],
};
