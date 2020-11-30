import React from 'react';
import { StyleSheet, Text, View, Dimensions, Platform, TouchableOpacity } from 'react-native';
import style_vars from '../screens/_styles/vars';
import { TouchableWithoutFeedback, BaseButton } from 'react-native-gesture-handler';
import { Button } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationService from '../navigation/NavigationService';
import DeviceInfo from 'react-native-device-info';

let hasNotch = DeviceInfo.hasNotch();
const headerHeight = hasNotch ? 75 : 55;

export default function Header({
    leftComponent = defaultLeft,
    rightComponent = null,
    title = 'Header'
}) {
    return (
        <View style={[
            styles.header_container
        ]}>
            {leftComponent}
            <View style={styles.centerContainer}>
                <Text style={styles.centerText}>{title}</Text>
            </View>
            <View style={{ paddingRight: 20 }}>
                {rightComponent}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 5,
        // marginTop: Platform.OS === 'ios' ? Dimensions.get('window').height * 0.03 : 0,
        //Without background view have extra horizontal space
        paddingVertical: 15,
        backgroundColor: 'white',
    },
    defaultLeft: {
        // height: headerHeight,
        width: 52,
        justifyContent: 'center',
        alignItems: "center"
    },
    buttonBack: {
        borderRadius: 20000,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerContainer: {
        flex: 1,
        paddingLeft: 20
    },
    centerText: {
        fontSize: 20,
        color: 'black',
    }
})

const defaultLeft = (
    <View style={styles.defaultLeft}>
        <TouchableOpacity
            style={styles.buttonBack}
            onPress={() => NavigationService.goBack()}
        >
            <Icon
                name={Platform.OS === 'ios'
                    ? `ios-arrow-back`
                    : 'md-arrow-back'}
                size={25}
            />
        </TouchableOpacity>
    </View>
)
