module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dance: ["Dancing Script", "cursive"],
        pacifico: ["Pacifico", "cursive"],
        rowdy: ["Rowdies", "cursive"],
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
          },
          "50%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        bouncepic: "bounce 1s infinite",
      },
      animationTimingFunction: {
        "in-anim": "cubic-bezier(0.8, 0, 1, 1)",
        "out-anim": "cubic-bezier(0, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
