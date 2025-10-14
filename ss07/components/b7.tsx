import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

const data = Array.from({ length: 10 }, (_, i) => ({
  id: i.toString(),
  name: `Item ${i + 1}`,
}));

export default function B7() {
  const { width, height } = useWindowDimensions();

  const isPortrait = height >= width;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isPortrait ? "Portrait mode" : "Landscape mode"}
      </Text>
      <FlatList
        data={data}
        key={isPortrait ? "v" : "h"} 
        numColumns={isPortrait ? 1 : 2}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ alignItems: "center" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  item: {
    backgroundColor: "#4caf50",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    minWidth: 120,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});
