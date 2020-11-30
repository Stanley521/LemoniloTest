import React, { useState, useEffect } from 'react';
import {
    Platform,
    StyleSheet,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import style_vars from '../../screens/_styles/vars';
import t from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper'

function Search (props) {
    const {
        onChangeFunction,
        resetSearch,
        placeholder,
        search,
        setSearch,
        onSubmitEditing,
        onFocus,
        onEndEditing,
        iconLeft,
        propStyle,
        editable,
        enableClear,
        onClearButtonPressed = () => setSearch(''),
        ExtraData = null,
        returnKeyType="go"
    } = props;
    const [ searchTimeout, setSearchTimeout] = useState();

    let {theRef = null} = props;

    useEffect( () => {
    }, [search])

    return (
        <View
            style={[styles.search, propStyle]}
        >
            {
                iconLeft &&
                <Icon
                    style={styles.icon}
                    name={Platform.OS === 'ios'
                    ? `ios-search`
                    : 'md-search'}
                    size={24}
                />
            }
            <TextInput
                ref={ (ref) => { theRef = ref}}
                style={styles.text}
                placeholder={placeholder}
                value={search}
                editable={editable}
                returnKeyType={returnKeyType}
                onChangeText={ (text) => {
                    setSearch(text);
                    clearTimeout(searchTimeout);
                    // if(text !== '') {
                    setSearchTimeout(setTimeout(()=> {
                        // JALANKAN FUNGSINYA BOSQUE

                        onChangeFunction(text)
                    }, 100));
                    
                }}
                onFocus={onFocus}
                onEndEditing={onEndEditing}
                onSubmitEditing={onSubmitEditing}
                underlineColor="transparent"
                dense
            >
            </TextInput>
            {
                ExtraData
            }
            {
                !iconLeft &&
                <Icon
                    style={styles.icon}
                    name={Platform.OS === 'ios'
                    ? `ios-search`
                    : 'md-search'}
                    size={24}
                />
            }
            {
                iconLeft && enableClear &&
                <TouchableOpacity
                    onPress={ () => {
                        setSearch('');
                        onChangeFunction('');
                   }}
                >
                    <Icon
                        style={styles.delete}
                        name={Platform.OS === 'ios'
                        ? `ios-close`
                        : 'md-close'}
                        size={24}
                    />
                </TouchableOpacity>
            }

        </View>
    )
}
Search.propTypes = {
    search: t.any,
    setSearch: t.any,
    onChangeFunction: t.func.isRequired,
    placeholder: t.string,
    onSubmitEditing: t.func,
    onFocus: t.func,
    onEndEditing: t.func,
    iconLeft: t.bool,
    propStyle: t.any,
    editable: t.bool,
    enableClear: t.bool,
    onClearButtonPressed: t.func,
    ExtraData: t.node,
    returnKeyType: t.string
}
Search.defaultProps = {
    iconLeft: true,
    propStyle: {},
    editable: true,
    enableClear: true,
}

const font1 = style_vars.font_1/10;
const styles = StyleSheet.create({
    search: {
        flex: 1,
        backgroundColor: 'white',
        borderColor: style_vars.grey,
        paddingHorizontal: 5 * font1,
        // paddingVertical: 5 * font1,
        borderRadius: 5 * font1,
        borderWidth: 0.5 * font1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        flex: 1,
        backgroundColor: "#FFFFFF00",
    },
    icon: {
        color: '#7cc342'
    },
    delete: {
        color: style_vars.grey50,
        paddingHorizontal: 10 * font1
    }
});

export default Search;
