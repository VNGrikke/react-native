import React from "react";
import { Button, Text, View } from "react-native";

export default function Home({ navigation }: { navigation: any }) {
  const name = "Vuong";

  return (
    <View>
      <Text>Home</Text>
      <Button
        title="go to detail"
        onPress={() => navigation.navigate("Detail", { name })}
      />
    </View>
  );
}
