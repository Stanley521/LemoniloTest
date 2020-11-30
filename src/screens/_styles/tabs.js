import { StyleSheet } from 'react-native';
import style_vars from './vars';

const styles_tabs = StyleSheet.create({
    tabs: {
        flexDirection: 'row',
        backgroundColor: 'grey',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: style_vars.blue_1,
    },
    tab: {
        flex: 1,
        backgroundColor: style_vars.blue_3,
    },
    tab_text: {
        color: 'grey',
        textAlign: 'center',
        paddingVertical: 5,
        fontSize: style_vars.font_3,
    },
});
export default styles_tabs;
