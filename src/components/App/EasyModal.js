import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';
import styles_main from "../../screens/_styles/main";
import style_vars from "../../screens/_styles/vars";
import MHBModal from './MHBModal';

export function EasyModal(
    {
        visible=false,
        dismiss=()=>{},
        title='Alert',
        description='Please throw description as props to EasyModal component',
        notes,
        center=false,
        buttonLeft,
        button={
            text: 'Ok',
            onPress: () => {
                // on press button ok
                dismiss();
            }
        }
    }
    ) {
    return (
        <MHBModal
            visible={visible}
            dismiss={dismiss}
            children={(
                <View style={s.container}>
                    <View style={{marginBottom:10}}>
                        <Text style={s.title}>
                            {title}
                        </Text>
                        <Text style={[s.description, center ? { textAlign: 'center' } : {}]}>
                            {description}
                        </Text>
                        {
                            notes &&
                            <Text style={[s.notes, center ? { textAlign: 'center' } : {}]}>
                                {notes}
                            </Text>
                        }
                    </View>
                    <View style={s.buttonContainer}>
                        {
                            buttonLeft &&
                            <TouchableOpacity
                                style={s.button}                    
                                onPress={buttonLeft.onPress}>
                                <Text style={[styles_main.default_btn_add_text,{ justifyContent:'center', color:style_vars.blue_1 }]}>{buttonLeft.text}</Text>
                            </TouchableOpacity>
                        }
                        <TouchableOpacity
                            style={s.button}                    
                            onPress={button.onPress}>
                            <Text style={[styles_main.default_btn_add_text,{ justifyContent:'center', color:style_vars.blue_1 }]}>{button.text}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        />
    )
}

const font1 = style_vars.font_1/10;
const s = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        // padding: 20 * font1,
        borderRadius: 10 * font1,
        minWidth: 300,
        width: Dimensions.get('window').width / 2,
        maxWidth: 600
    },
    title: {
        flexDirection:'row',
        justifyContent:'center',
        textAlign: 'center',
        fontWeight:'bold',
        paddingVertical:10,
        fontSize:style_vars.font_3
    },
    description: {
        flexDirection:'row',
        justifyContent:'center',
        paddingBottom:5,
        paddingHorizontal: 20, 
        textAlign:'justify'
    },
    notes: {
        flexDirection:'row',
        justifyContent:'center',
        paddingBottom:5,
        paddingHorizontal: 20, 
        fontSize: style_vars.font_1,
        textAlign:'justify'
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        paddingVertical:10,
        paddingHorizontal:10,
        // backgroundColor:'white',
        borderRightWidth:0.3,
        borderTopWidth:0.3
    }
})