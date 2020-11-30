import React from 'react';
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import style_vars from '../../screens/_styles/vars';
import { isEmpty } from "../../services/consts";
import I18n from "../../local/I18n";
import { sendbird_cs_id } from '../../services/api';
function ChatInput(props) {
    const {
        isFrozen,
        withWhom,
        suggestionChat
    } = props;
    let chatInput;
    function onSuggestionTap(text) {
        props.setTextMessage(text);
    }

    function runFuction(item) {
        if (!item.func) {
            onSuggestionTap(item.content);
        }

        if (item.func) {
            item.func()
        }
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
            {/* {
                withWhom.userId != sendbird_cs_id &&
                <FlatList
                    keyboardShouldPersistTaps={'always'}
                    contentContainerStyle={{ paddingVertical: 10, paddingLeft: 10, paddingRight: 40 }}
                    data={suggestionChat}
                    horizontal={true}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.suggestionBtn}
                            onPress={() => {
                                runFuction(item);
                            }}
                        >
                            <Text style={{ color: style_vars.red }}>{item.content}</Text>
                        </TouchableOpacity>
                    )}
                />
            } */}
            <View style={[styles.chatInputContainer]}>
                <TextInput
                    editable={!isFrozen}
                    returnKeyType="send"
                    onSubmitEditing={()=> {
                        props.sendChat()
                        setTimeout(()=>{
                            props.setTextMessage('')
                        }, 20)
                    }}
                    ref={(input) => { chatInput = input; }}
                    style={[styles.chatInput, isFrozen ? {} : {}]}
                    placeholder={
                        isFrozen ?
                            I18n.t("chat.txt_please_pay_first") :
                            !isEmpty(withWhom.nickName) ? I18n.t("chat.txt_message") + withWhom.nickName : !isEmpty(withWhom.nickname) ? I18n.t("chat.txt_message") + withWhom.nickname : I18n.t("chat.txt_message")
                    }
                    value={props.textMessage}
                    onChangeText={text => props.setTextMessage(text)}
                    multiline={true}
                />
                <View style={styles.chatOption}>
                    <TouchableOpacity
                        style={styles.chatBtn}
                        disabled={isFrozen}
                        // onPress={ () => {
                        //     props.camera();
                        // }}>
                        onPress={() => {
                            props.uploadFile();
                        }}>
                        <Icon
                            style={{ color: isFrozen ? style_vars.grey50 : style_vars.blue_2 }}
                            name={Platform.OS === 'ios'
                                ? `ios-camera`
                                : 'md-camera'}
                            size={26}
                        />
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                        style={ styles.chatBtn }
                        disabled={ isFrozen }
                        onPress={ () => {
                            props.uploadFile();
                        }}>
                        <Icon
                            style={{ color: isFrozen ? style_vars.grey50 : style_vars.blue_2 }}
                            name={Platform.OS === 'ios'
                                ? `ios-document`
                                : 'md-document'}
                            size={26}
                        />
                    </TouchableOpacity> */}
                    <TouchableOpacity
                        style={styles.chatBtn}
                        disabled={isFrozen}
                        onPress={() => {
                            props._onSendButtonPress();
                        }}>
                        <Icon
                            style={{ color: isFrozen ? style_vars.grey50 : style_vars.blue_2 }}
                            name={Platform.OS === 'ios'
                                ? `ios-arrow-dropright-circle`
                                : 'md-arrow-dropright-circle'}
                            size={35}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    suggestionBtn: {
        paddingVertical: 5, paddingHorizontal: 20,
        borderRadius: 10, marginRight: 10,
        backgroundColor: style_vars.pink,
    },
    chatInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        borderTopColor: style_vars.grey,
        borderTopWidth: 0.5,
    },
    chatInput: {
        flex: 1,
        justifyContent: 'center',
        minHeight: 56,
        maxHeight: 100,
        paddingHorizontal: 20,
    },
    chatOption: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    chatBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        width: 56
    }
});

export default ChatInput;
