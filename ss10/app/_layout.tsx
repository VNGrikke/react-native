import React from "react";
import Home from "./Home";
import Detail from "./Detail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function _layout() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
