import React from 'react';
import { Platform, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function AccordionArrow (props) {
    return (
        <View>
            {
                !props.open &&
                <Icon
                    name={Platform.OS === 'ios'
                    ? `ios-arrow-dropdown`
                    : 'md-arrow-dropdown'}
                    size={18}
                />
            }
            {
                props.open &&
                <Icon
                    name={Platform.OS === 'ios'
                    ? `ios-arrow-dropup`
                    : 'md-arrow-dropup'}
                    size={18}
                />
            }
        </View>
    )
}