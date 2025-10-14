import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";

const { width } = Dimensions.get("window");

export default function ArticleScreen() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Merriweather-Regular": require("./assets/fonts/Merriweather-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  // Responsive: scale font theo kích thước màn hình
  const titleFontSize = width > 400 ? 28 : 22;
  const contentFontSize = width > 400 ? 18 : 15;

  return (
    <ScrollView style={styles.container}>
      {/* Ảnh bìa */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&q=80",
        }}
        style={styles.banner}
      />

      {/* Tiêu đề */}
      <Text style={[styles.title, { fontSize: titleFontSize }]}>
        Tương lai của công nghệ và cách nó thay đổi cuộc sống
      </Text>

      {/* Thông tin tác giả */}
      <View style={styles.authorContainer}>
        <Image
          source={{
            uri: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
          }}
          style={styles.avatar}
        />
        <Text style={styles.authorName}>Vuong Nguyen</Text>
      </View>

      {/* Nội dung bài báo */}
      <Text style={[styles.content, { fontSize: contentFontSize }]}>
        Công nghệ đang thay đổi thế giới với tốc độ chưa từng có. Từ trí tuệ nhân
        tạo, Internet vạn vật, cho đến blockchain và thực tế ảo, tất cả đều đang
        góp phần định hình lại cách chúng ta làm việc, học tập và giải trí.{"\n\n"}
        Trong tương lai gần, sự kết hợp giữa công nghệ và đời sống sẽ càng trở nên
        gắn bó mật thiết hơn, mang lại nhiều cơ hội nhưng cũng đặt ra không ít thách
        thức cho nhân loại.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  banner: {
    width: "100%",
    height: 220,
  },
  title: {
    margin: 16,
    fontFamily: "Roboto-Bold",
    fontWeight: "bold",
    color: "#111",
  },
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  authorName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#444",
  },
  content: {
    marginHorizontal: 16,
    marginBottom: 30,
    lineHeight: 24,
    fontFamily: "Merriweather-Regular",
    color: "#333",
  },
});
