import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import style_vars from '../screens/_styles/vars';

export default function GreyBubble(props) {
    const {list} = props;
    const {onPressDelete} = props;
    return (
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}} >
            {
                list.map( (value, index) => {
                    return (
                        <View key={value.id} style={styles.complaint}>
                            <Text style={styles.complaint_text}>{value.value}</Text>
                            <TouchableOpacity onPress={()=>
                                onPressDelete( value, index )
                            }>
                                <Icon
                                    style={styles.trash_icon}
                                    name={Platform.OS === 'ios'
                                    ? `ios-close`
                                    : 'md-close'}
                                    size={14}
                                />
                            </TouchableOpacity>
                        </View>
                    );
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    complaint: {
        paddingVertical: 2,
        paddingHorizontal: 10,
        marginBottom: 5,
        backgroundColor: style_vars.lightgrey,
        borderRadius: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    complaint_text: {
        marginRight: 10,
        fontSize: style_vars.font_1
    },
    trash_icon: {
        color: style_vars.grey,
    },
})