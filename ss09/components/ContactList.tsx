import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

interface Contact {
  id: string;
  name: string;
  phone: string;
  email?: string;
}

const CONTACT_KEY = "CONTACTS";

const initialContact: Contact = { id: "", name: "", phone: "", email: "" };

export default function ContactList() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [newContact, setNewContact] = useState<Contact>(initialContact);

  useEffect(() => {
    (async () => {
      try {
        const storedContacts = await AsyncStorage.getItem(CONTACT_KEY);
        if (storedContacts) setContacts(JSON.parse(storedContacts));
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    })();
  }, []);

  const saveContacts = async (updatedContacts: Contact[]) => {
    try {
      await AsyncStorage.setItem(CONTACT_KEY, JSON.stringify(updatedContacts));
      setContacts(updatedContacts);
      resetForm();
    } catch (error) {
      console.error("Error saving contacts:", error);
    }
  };

  const resetForm = () => {
    setNewContact(initialContact);
    setIsEditMode(false);
    setIsFormVisible(false);
  };

  const handleSave = () => {
    if (!newContact.name || !newContact.phone) return;
    const contactToSave = { ...newContact, id: uuid.v4() as string };
    saveContacts([...contacts, contactToSave]);
  };

  const handleEdit = () => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === newContact.id ? { ...contact, ...newContact } : contact
    );
    saveContacts(updatedContacts);
  };

  const handleDelete = () => {
    const filteredContacts = contacts.filter(
      (contact) => contact.id !== newContact.id
    );
    Alert.alert("Xác nhận", "Bạn có chắc muốn xóa liên hệ này?", [
      { text: "Hủy", style: "cancel" },
      {
        text: "Xóa",
        style: "destructive",
        onPress: () => saveContacts(filteredContacts),
      },
    ]);
  };

  const openEditForm = (contact: Contact) => {
    setIsEditMode(true);
    setNewContact(contact);
    setIsFormVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Danh bạ</Text>
        <Button title="Thêm mới" onPress={() => setIsFormVisible(true)} />
      </View>
      <Modal visible={isFormVisible} animationType="slide">
        <View style={styles.headerModel}>
          <Text>{isEditMode ? "Sửa liên hệ" : "Thêm liên hệ mới"}</Text>
          <Button title="Đóng" onPress={resetForm} />
        </View>
        <View style={{ padding: 10, width: "100%" }}>
          <TextInput
            style={styles.input}
            placeholder="Tên"
            value={newContact.name}
            onChangeText={(name) => setNewContact({ ...newContact, name })}
          />
          <TextInput
            style={styles.input}
            placeholder="Số điện thoại"
            keyboardType="phone-pad"
            value={newContact.phone}
            onChangeText={(phone) => setNewContact({ ...newContact, phone })}
          />
          <TextInput
            style={styles.input}
            placeholder="Email (Không bắt buộc)"
            keyboardType="email-address"
            value={newContact.email}
            onChangeText={(email) => setNewContact({ ...newContact, email })}
          />
          {isEditMode ? (
            <>
              <Button title="Lưu thay đổi" onPress={handleEdit} />
              <Button title="Xóa" onPress={handleDelete} />
            </>
          ) : (
            <Button title="Lưu" onPress={handleSave} />
          )}
        </View>
      </Modal>
      {contacts.length === 0 ? (
        <Text>Chưa có liên hệ nào</Text>
      ) : (
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.contactItem}>
              <Text>{item.name}</Text>
              <Text>{item.phone}</Text>
              <Button title="Sửa" onPress={() => openEditForm(item)} />
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
    width: "95%",
  },
  headerModel: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginVertical: 8,
    padding: 8,
  },
  contactItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
