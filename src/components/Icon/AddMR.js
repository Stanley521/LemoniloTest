import React from 'react';
import { Platform, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import style_vars from '../../screens/_styles/vars';


export default function AddMR ( props) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingHorizontal: 10}}>
            <TouchableOpacity onPress={()=>{
                props.adding(!props.add);
            }} style={ {
                borderColor: style_vars.red,
                borderWidth: 1,
                borderRadius: 3,
                paddingVertical: 1,
                paddingHorizontal: 3, 
                margin: 3,
                alignSelf: 'flex-start',
            }}>
                <Icon
                    style={{color: style_vars.red}}
                    name={
                        props.add ? 
                        Platform.OS === 'ios' ? `ios-remove`  : 'md-remove': 
                        Platform.OS === 'ios' ? `ios-add`  : 'md-add'
                    }
                    size={16}
                />
            </TouchableOpacity>
        </View>
    );
}