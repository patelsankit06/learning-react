// import type { Config } from "tailwindcss";
const rem = (px) => {
  return px * 0.0625 + "rem";
};
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        custom: "1440px",
      },
      fontFamily: {
        inter: ["var(--font-Inter)"],
        sans: ["var(--font-dmsans)"],
        faustina: ["var(--font-faustina)"],
      },
      fontWeight: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
      fontSize: {
        10: rem(10),
        12: rem(12),
        14: rem(14),
        16: rem(16),
        18: rem(18),
        20: rem(20),
        22: rem(22),
        24: rem(24),
        28: rem(28),
        32: rem(32),
        48: rem(48),
        40: rem(40),
        52: rem(52),
        62: rem(62),
        64: rem(64),
        72: rem(72),
        104: rem(104),
      },
      colors: {
        primary: {
          100: "#D3E8E3",
          200: "#90C6B7",
          300: "#509B87",
          400: "#13624D",
          500: "#0D4536",
          600: "#062F24",
        },
        accent: {
          100: "#FAF4F0",
          200: "#FFEEE3",
          300: "#DFA884",
          400: "#DF742D",
          500: "#DF5E09",
          600: "#B74C05",
        },
        gray: {
          100: "#F9F7F7",
          200: "#D1D1D1",
          300: "#868D8B",
          400: "#3A4642",
          500: "#01130D",
        },
      },
      letterSpacing: {
        0.15: "0.15px",
        0.2: "0.2px",
        0.25: "0.25px",
        0.3: "0.3px",
        0.5: "0.5px",
        0.8: "0.8px",
        1: "1px",
        1.2: "1.2px",
      },
      lineHeight: {
        42: "42px",
        52: "52px",
        60: "60px",
      },
      boxShadow: {
        "btn-shadow": "0px 0px 0px 5px #37373740",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
