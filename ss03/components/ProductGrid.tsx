import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";

const products = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Sản phẩm ${i + 1}`,
}));

export default function ProductGrid() {
  const [numColumns, setNumColumns] = useState(2);
  const [itemSize, setItemSize] = useState(0);

  const updateLayout = () => {
    const { width, height } = Dimensions.get("window");
    const isTablet = width >= 768;

    let columns = 2; // mặc định điện thoại dọc
    if (isTablet) {
      columns = 4; // tablet
    } else if (width > height) {
      columns = 3; // điện thoại ngang
    }

    setNumColumns(columns);

    const spacing = 16;
    const totalSpacing = spacing * (columns + 1);
    const itemWidth = (width - totalSpacing) / columns;

    setItemSize(itemWidth);
  };

  useEffect(() => {
    updateLayout(); // lần đầu
    const subscription = Dimensions.addEventListener("change", updateLayout);
    return () => subscription?.remove();
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <View style={[styles.card, { width: itemSize, height: itemSize * 1.2 }]}>
      <Text style={[styles.text, { fontSize: itemSize / 10 }]}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        columnWrapperStyle={{ justifyContent: "space-around" }}
        key={numColumns} // để FlatList re-render khi thay đổi số cột
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
    paddingVertical: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    fontWeight: "600",
    color: "#333",
  },
});
