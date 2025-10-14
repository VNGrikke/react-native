import React from "react";
import { View, StyleSheet } from "react-native";

export default function BoxLayout() {
  return (
    <View style={styles.container}>

      <View style={styles.layout1}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
        <View style={[styles.box, styles.box4]} />
        <View style={[styles.box, styles.box5]} />
      </View>

      <View style={styles.layout2}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
        <View style={[styles.box, styles.box4]} />
        <View style={[styles.box, styles.box5]} />
      </View>

      <View style={styles.layout3}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
        <View style={[styles.box, styles.box4]} />
        <View style={[styles.box, styles.box5]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  box: {
    margin: 4,
    borderRadius: 8,
  },
  box1: { backgroundColor: "#EF4444", width: 100, height: 40 },
  box2: { backgroundColor: "#F97316", width: 80, height: 50 },
  box3: { backgroundColor: "#22C55E", width: 120, height: 60 },
  box4: { backgroundColor: "#3B82F6", width: 90, height: 30 },
  box5: { backgroundColor: "#8B5CF6", width: 110, height: 55 },

  layout1: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center", 
  },

  layout2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  layout3: {
    gap: 40,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "center", 
  },
});
