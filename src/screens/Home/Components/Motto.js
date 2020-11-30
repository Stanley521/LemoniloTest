import React, { useEffect, useRef, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

export default function Motto(props) {
    return (
        <View style={styles.container_float}>
            <Image style={styles.imageBG} source={{ uri: `https://i.pinimg.com/originals/9a/2b/a5/9a2ba5b2d6e4a11d28da49ddc9a1054e.gif` }} />
            <Image style={{ width: 120, height: 40 }}
                // source={require(`../../../assets/pictures/lemonilo.png`)}
                source={{ uri: `https://upload.wikimedia.org/wikipedia/id/thumb/b/be/Lemonilologo.webp/300px-Lemonilologo.webp.png` }}
            />
            <Text style={styles.description}>Makanan Sehat tanpa 3P(Pengawet, Pewarna dan Perasa Buatan)</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container_float: {
        flex: 1,
        elevation: 5,
        borderRadius: 10,
        height: 180,
        backgroundColor: 'transparent',
        margin: 10,
        justifyContent: 'space-between'
    },
    imageBG: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    },
    description: {
        
        color: '#7cc342', backgroundColor: 'white',
        padding: 10, fontWeight: "bold",
        fontSize: 16
    }
});