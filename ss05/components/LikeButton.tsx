import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function LikeButton() {
    const [liked, setLiked] = React.useState(false);
  return (
    <View>
        <TouchableOpacity style={styles.button} onPress={() => setLiked(!liked)}>
            <Text style={ liked? styles.liked : styles.like}>{liked ? 'Liked' : 'Like'}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        margin: 10,
        borderWidth: 3,
        borderColor: '#0095ffff',
    },
    like: {
        color: '#7f7f7fff',
        fontSize: 16,
    },
    liked: {
        color: '#0095ffff',
        fontSize: 16,
    },

})
