import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import icon from '../../assets/assets';
import style_vars from '../../screens/_styles/vars';

export default function NoList(props) {
    const {title} = props;
    const {description} = props;
    return (
        <View style={styles.container}>
            <Image
                style={{width: 70, height: 70}}
                source={icon.main}
            />
            <Text style={styles.title}
              >{props.title}</Text>
            <Text style={styles.description}>
              {props.description}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title : {
        fontSize: style_vars.font_header,
        color: style_vars.goldbrown
    },
    description: {
        color: style_vars.grey,
        fontSize: style_vars.font_1,
        flexWrap: 'wrap'
    }
});
