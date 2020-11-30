import { Dimensions, StyleSheet } from 'react-native';
import style_vars from './vars';
const w = Dimensions.get('window');

const styles_addmr = StyleSheet.create({
    add_btn_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 10
    },
    add_btn: {
        borderColor: style_vars.red,
        borderWidth: 1,
        borderRadius: 3,
        paddingVertical: 1,
        paddingHorizontal: 3, 
        margin: 3,
        alignSelf: 'flex-start',
    }
});
export default styles_addmr;