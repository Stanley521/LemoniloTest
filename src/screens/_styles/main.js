import { Dimensions, StyleSheet, Platform } from 'react-native';
import style_vars from './vars';
const w = Dimensions.get('screen');

const styles_main = StyleSheet.create({
    header_mhb: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopWidth: 0,
        elevation: 1,
        marginTop: Platform.OS === 'ios' ? Dimensions.get('window').height * 0.03 : 0,
        //Without background view have extra horizontal space
        backgroundColor: 'white',
    },
    header_mhb_0: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopWidth: 0,
        elevation: 1,
        marginTop: Platform.OS === 'ios' ? Dimensions.get('window').height * 0.03 : 0,
        //Without background view have extra horizontal space
        backgroundColor: 'white',
    },
    header_text_mhb: {
        paddingVertical: 5,
        fontSize: style_vars.font_header,
        color: 'black',
        fontFamily: style_vars.font_bold
    },
    header_save_mhb: {
        fontSize: style_vars.font_3,
        color: style_vars.red
    },
    container: {
        flex: 1,
        paddingTop: 10,
        marginHorizontal: 10,
    },
    flex_row: {
        flexDirection: 'row',
    },
    flex_row_align_center: {
        flexDirection: 'row',
        marginVertical: 3,
        alignItems: 'center'
    },
    flex_row_justify_center: {
        flexDirection: 'row',
        marginVertical: 3,
        justifyContent: 'center'
    },
    flex_end: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    flex_row_between: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    flex_row_space: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    flex_row_end: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    shrink: {
        flexShrink: 1
    },
    item_center: {
        alignItems: 'center'
    },
    main_bottom_border: {
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 0.8,
    },
    modal_bg: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#00000080',
        alignItems: 'center',
        justifyContent: 'center',
    },
    disabledBtn: {
        // paddingTop: style_vars.font_2,
        backgroundColor: style_vars.grey,
        borderRadius: 10,
        color: 'white',
        fontSize: style_vars.font_1,
        alignItems: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingVertical: style_vars.font_1,
    },
    default_btn_add: {
        marginTop: style_vars.font_2,
        backgroundColor: style_vars.blue_1,
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: style_vars.font_1,
    },
    default_btn_add_2: {
        marginTop: style_vars.font_2,
        backgroundColor: style_vars.red,
        // borderColor:style_vars.grey,
        // borderWidth: 2,
        // borderRadius: 2,
        alignItems: 'stretch',
        paddingVertical: style_vars.font_1,
        paddingHorizontal: 40,
    },
    default_btn_add_3: {
        marginTop: style_vars.font_2,
        backgroundColor: 'white',
        // borderColor:style_vars.grey,
        // borderWidth: 2,
        // borderRadius: 2,
        alignItems: 'center',
        paddingVertical: style_vars.font_1,
        paddingHorizontal: 5
    },
    default_btn_add_4: {
        marginTop: style_vars.font_2,
        backgroundColor: style_vars.blue_2,
        borderRadius: 5,
        alignItems: 'center',
        paddingVertical: 5,
        color: 'white'
    },
    default_btn_add_text: {
        fontFamily: style_vars.font_bold,
        color: 'white',
        fontSize: style_vars.font_2
    },
    default_btn_add_text_2: {
        fontFamily: style_vars.font_bold,
        color: style_vars.red,
        fontSize: style_vars.font_3
    },
    default_btn_add_text_3: {
        fontFamily: style_vars.font_bold,
        color: 'white',
        fontSize: style_vars.font_3
    },
    btn_add: {
        backgroundColor: style_vars.blue_1,
        borderRadius: 10,
        alignItems: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: style_vars.font_bold,
        color: 'white',
        fontSize: style_vars.font_2
    },
    btn_padding: {
        paddingVertical: style_vars.font_1,
        paddingHorizontal: style_vars.font_1,
    },
    notfound: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20
    },
    border_mhb: {
        borderRadius: 5,
        borderWidth: 0.7,
        borderColor: style_vars.grey,
    },
    showSuggestContainer: {
        borderWidth: 0.5,
        borderColor: style_vars.grey,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        paddingBottom: 2,
    },
    pic_more_bg: {
        position: 'absolute',
        zIndex: 2,
        elevation: 999999999999999999,
        top: 0,
        width: w.width,
        height: w.height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    loadingAbsoluteTop: {
        position: 'absolute',
        left: 0, right: 0,
        top: 0,
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bold: {
        fontWeight: 'bold'
    }
});
export default styles_main;