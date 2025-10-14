import { StyleSheet } from "react-native";

export const COLORS = {
  primary: "#007BFF",
  secondary: "#6C757D",
  background: "#FFFFFF",
  text: "#333333",
  error: "#DC3545",
};

export const FONT_SIZES = {
  small: 12,
  medium: 16,
  large: 18,
  title: 24,
};

export const SPACING = {
  sm: 8,
  md: 16,
  lg: 24,
};

export const CONTAINER_STYLES = StyleSheet.create({
  fullScreenCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
    padding: SPACING.md,
  },
});
