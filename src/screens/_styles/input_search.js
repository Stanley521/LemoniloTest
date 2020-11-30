import { StyleSheet } from 'react-native';
import style_vars from './vars';

const styles_search = StyleSheet.create({
    search: {
        width: '100%',
        backgroundColor: 'white',
        borderColor: style_vars.grey,
        padding: 5,
        borderRadius: 5,
        borderWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        flex: 1,
        paddingLeft: 10,
    },
    icon: {
        color: '#fc4e6f'
    },
});

export default styles_search;