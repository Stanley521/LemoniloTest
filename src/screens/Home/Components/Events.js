import React, { useEffect, useRef, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
export default function Events(props) {
    return (
        <View style={styles.container_float}>
            <Image style={{width: null, height: 220, flex: 1}} source={{uri: `https://static.lemonilo.com/article/8aec0b88c33dba507447a6ea01c08ee1.png`}}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container_float: {
        flex: 1,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'transparent',
        margin: 10,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#7cc342',
        flexDirection: 'row',
    },
});