import React from "react";
import {
  View,
  Text,
  SectionList,
  StyleSheet,
} from "react-native";

interface Item {
  name: string;
}

interface Section {
  title: string;
  data: Item[];
}

const sections: Section[] = [
  {
    title: "Điện thoại",
    data: [
      { name: "iPhone 15" },
      { name: "Samsung Galaxy S24" },
      { name: "Xiaomi 14" },
    ],
  },
  {
    title: "Laptop",
    data: [
      { name: "MacBook Pro M3" },
      { name: "Dell XPS 13" },
      { name: "HP Spectre x360" },
    ],
  },
  {
    title: "Máy tính bảng",
    data: [
      { name: "iPad Pro" },
      { name: "Samsung Galaxy Tab S9" },
      { name: "Xiaomi Pad 6" },
    ],
  },
];

export default function SectionListComponent() {
  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  const renderSectionHeader = ({ section }: { section: Section }) => (
    <View style={styles.header}>
      <Text style={styles.headerText}>{section.title}</Text>
    </View>
  );

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => item.name + index}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f2f2f2",
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemText: {
    fontSize: 16,
  },
});
