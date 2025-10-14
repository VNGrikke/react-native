import ContactList from "@/components/ContactList";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f0f0f0ff" }}>
      <ContactList />
    </SafeAreaView>
  );
}
