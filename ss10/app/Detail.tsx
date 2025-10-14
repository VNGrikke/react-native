import React from "react";
import { Button, Text, View } from "react-native";

export default function Detail({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { name } = route.params;
  return (
    <View>
      <Text>Detail</Text>
      <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
      <Text> {name}</Text>
    </View>
  );
}
