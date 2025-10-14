import React, { createContext, useState, useContext, ReactNode } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedBox = () => {
  const context = useContext(ThemeContext);
  if (!context) return null; 
  const { theme } = context;

  const isLight = theme === "light";

  return (
    <View
      style={[
        styles.box,
        { backgroundColor: isLight ? "#fff" : "#333" },
      ]}
    >
      <Text style={{ color: isLight ? "#000" : "#fff" }}>
        Box in {theme} mode
      </Text>
    </View>
  );
};

const AppContent = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { theme, toggleTheme } = context;

  const isLight = theme === "light";

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isLight ? "#eee" : "#111" },
      ]}
    >
      <Button
        title={`Chuyển sang ${isLight ? "Dark" : "Light"} Mode`}
        onPress={toggleTheme}
      />
      <ThemedBox />
      <ThemedBox />
    </View>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
});
