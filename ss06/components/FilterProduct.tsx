import React, { useState } from "react";
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  TextInput,
} from "react-native";

interface Item {
  name: string;
}

interface Section {
  title: string;
  data: Item[];
}

const sectionsData: Section[] = [
  {
    title: "Thực phẩm",
    data: [
      { name: "Táo" },
      { name: "Chuối" },
      { name: "Gạo" },
      { name: "Thịt bò" },
    ],
  },
  {
    title: "Điện tử",
    data: [
      { name: "iPhone 15" },
      { name: "Laptop Dell" },
      { name: "Tai nghe Sony" },
      { name: "TV Samsung" },
    ],
  },
  {
    title: "Đồ gia dụng",
    data: [
      { name: "Bàn" },
      { name: "Ghế" },
      { name: "Máy hút bụi" },
      { name: "Quạt" },
    ],
  },
];

export default function App() {
  const [search, setSearch] = useState("");

  // Lọc dữ liệu theo từ khóa
  const filteredSections = sectionsData
    .map((section) => ({
      ...section,
      data: section.data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((section) => section.data.length > 0); // chỉ giữ section có item match

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
    <View style={styles.container}>
      {/* Ô tìm kiếm */}
      <TextInput
        style={styles.searchInput}
        placeholder="Tìm kiếm..."
        value={search}
        onChangeText={setSearch}
      />

      {/* SectionList */}
      <SectionList
        sections={filteredSections}
        keyExtractor={(item, index) => item.name + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Không tìm thấy kết quả</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  searchInput: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
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
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "gray",
  },
});
