const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";
const primary = "#f49b33";
const secondary = "#3A3A3A"; // Adjusted for better contrast

export const Colors = {
  light: {
    text: "#11181C",
    background: "#FFFFFF",
    tint: tintColorLight,
    icon: "#5A636D", // Slightly darker for better visibility
    tabIconDefault: "#888", // More neutral
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#D1D5DB", // Softer contrast
    background: "#151718",
    tint: tintColorDark,
    icon: "#BDC3C7", // Brighter gray for better visibility
    tabIconDefault: "#A0A4A8",
    tabIconSelected: tintColorDark,
  },
  PRIMARY: primary,
  SECONDARY: secondary,
};
