/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", //or 'media' or 'class'

  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colorTheme: {
        lightTheme: "#fafcff",
        darkTheme: "#000a1f",
      },

      primaryColors: {
        darkPrimaryLight: "#ffdfb3",
        lightPrimaryDefault: "#ff9500",
        lightPrimaryDark: "#ff6700,",
      },

      secondaryColors: {
        darkSecondaryLight: "#b3d7ff",
        lightSecondaryDefault: "#007aff",
        lightSecondaryDark: "#004aff",
      },

      errorsColors: {
        darkErrorLight: "#ffc4c1",
        lightErrorDefault: "#ff3b30",
        lightErrorDark: "#ff1913",
      },

      warningColors: {
        darkWarningLight: "#fff0b3",
        lightWarningDefault: "#ffcc00",
        lightWarningDark: "#ffad00",
      },

      successColors: {
        darkSuccessLight: "#c2eecd",
        lightSuccessDefault: "#34c759",
        lightSuccessDark: "#21b33e",
      },

      grayLightTheme: {
        lightGray1: "#fcfcfd",
        lightGray2: "#f9fafb",
        lightGray3: "#f2f4f7",
        lightGray4: "#eaecf0",
        lightGray5: "#d0d5dd",
        lightGray6: "#98a2b3",
      },
      backgroundLightTheme: {
        primaryDarkPrimary: "#000000",
        primaryDarkSecondary: "#8a8a8e",
        primaryDarkTertiary: "#c5c5c7",
      },

      separatorLightTheme: {
        lightSeparatorTheme: "#e5e5ea",
      },

      grayDarkTheme: {
        darkGray1: "#fcfcfd",
        darkGray2: "#f9fafb",
        darkGray3: "#f2f4f7",
        darkGray4: "#eaecf0",
        darkGray5: "#d0d5dd",
        darkGray6: "#98a2b3",
      },

      labelDarkTheme: {
        labelDarkPrimary: "#fafcff",
        labelDarkSecondary: "#98989f",
        labelDarkTertiary: "#5a5a5e",
      },

      backgroundDarkTheme: {
        backgroundLightPrimary: "#fafcff",
        backgroundLightSecondary: "#98989f",
        backgroundLightTertiary: "#5a5a5e",
      },

      separatorDarkTheme: {
        darkSeparatorTheme: "#38383a",
      },

      fontFamily: {
        Heebo: ["Heebo", "serif"],
        Lexend: ["Lexend", "serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1366px",
    },
  },
  plugins: [],
};
