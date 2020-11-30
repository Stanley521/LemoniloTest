import React, { useEffect, useRef, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Wallet(props) {
    const icon = {
        color: 'white',
        backgroundColor: '#7cc342'
    }
    return (
        <View style={styles.container_float}>
            <TouchableOpacity style={styles.wallet}>
                <Text style={styles.walletTitle}>Lemopay</Text>
                <Text style={styles.walletTotal}>Rp 528.593</Text>
                <Text style={styles.walletHistory}>Transaction history</Text>
            </TouchableOpacity>
            <View style={styles.actions}>
                <TouchableOpacity style={styles.action}>
                    <Ionicons name={'md-arrow-up'} size={15} color={icon.color} style={styles.action_icon}/>
                    <Text>Pay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.action}>
                    <Ionicons name={'md-add'} size={15} color={icon.color} style={styles.action_icon}/>
                    <Text>Top Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.action}>
                    <Ionicons name={'md-speedometer'} size={15} color={icon.color} style={styles.action_icon}/>
                    <Text>Explore</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container_float: {
        flex: 1,
        elevation: 5,
        borderRadius: 10,
        height: 90,
        backgroundColor: 'transparent',
        margin: 10,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#7cc342',
        flexDirection: 'row',
    },
    wallet: {
        flex: 4,
        borderRadius: 10,
        // backgroundColor: '#7cc342',
        margin: 10,
        padding: 5,
    },
    walletTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#7cc342'
    },
    walletTotal: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#7cc342'
    },
    walletHistory: {
        fontSize: 12,
        color: 'black',
        textDecorationLine: "underline",
    },
    actions: {
        flex: 6,
        flexDirection: 'row',
    },
    action: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    action_icon: {
        backgroundColor: '#7cc342',
        padding: 5,
        borderRadius: 10,
    }
});