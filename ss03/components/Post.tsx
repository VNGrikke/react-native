import React from 'react'
import { Image, Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { Feather, FontAwesome } from "@expo/vector-icons";

const { width } = Dimensions.get("window")

export default function Post() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{uri: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'}} 
          style={styles.avatar} 
        />
        <Text style={styles.username}>Vuong Nguyen</Text>
      </View>

      <View style={styles.content}>
        <Image 
          source={{uri: 'https://i.pinimg.com/736x/b8/86/b2/b886b20ce517adae1f8b2fb5bad00fe6.jpg'}} 
          style={styles.postImage} 
        />
      </View>

      <View style={styles.actionBar}>
        <Feather name="thumbs-up" size={28} color="#2563EB" />   
        <FontAwesome name="comment-o" size={28} color="#4B5563" />
        <Feather name="share" size={28} color="#10B981" /> 
      </View>

      <View style={styles.description}>
        <Text style={styles.username}>Vuong Nguyen</Text>
        <Text style={styles.caption}>Nice photo! 🌟</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    paddingHorizontal: 10, 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  avatar: {
    width: 48, 
    height: 48, 
    borderRadius: 24,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  content: {
    marginBottom: 12,
  },
  postImage: {
    width: width - 20, 
    height: width * 1.2,
    borderRadius: 12,
  },
  actionBar: {
    flexDirection: 'row',
    marginBottom: 5,
    gap: 10,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  description: {
    padding: 12,
  },
  caption: {
    fontSize: 14,
    color: '#333',
  }
})
