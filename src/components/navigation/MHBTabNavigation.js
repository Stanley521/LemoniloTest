import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import styles_tabs from '../../screens/_styles/tabs';
import style_vars from "../../screens/_styles/vars";
import { uuidv4 } from "../../services/REST";


export default function MHBTabNavigation(props) {
    const {
        tabActiveIndex = 0,
        setTabActiveIndex = () => {},
        tabTitle = [],
        tabNotificationCount = [],
        loading = false
    } = props;
    const length = tabTitle.length;
    return (
        <View style={ styles.tabContainer }>
            {
                tabTitle.map( (item, index) => {
                    return (
                        <View
                        key={uuidv4()}
                        style={[
                            styles_tabs.tab,
                            {justifyContent:'center', alignItems:'center',},
                            index == 0 ? {borderTopLeftRadius:15, borderBottomLeftRadius:15, borderWidth:0,}:{},
                            index == length - 1 ? {borderTopRightRadius:15, borderBottomRightRadius:15, borderWidth:0,}:{},
                            tabActiveIndex == index ? { backgroundColor: style_vars.blue_1 } : {}
                        ]}>
                            <TouchableHighlight
                                underlayColor = {style_vars.blue_1}
                                onPress={() => {
                                    if ( !loading ) {
                                        props.setMhbUserInboxs([])
                                        setTabActiveIndex(index)}
                                    }
                                }
                            >
                                <Text style={[
                                    styles_tabs.tab_text, { fontSize:style_vars.font_2 },
                                    tabActiveIndex == index ? { color: 'white' } : {}
                                ]}>
                                    {item}
                                </Text>
                            </TouchableHighlight>
                            {
                                tabNotificationCount[index] != 0 &&
                                <View style={styles.tabNotification} update={tabNotificationCount}>
                                    <Text
                                    style={styles.tabNotificationCount}
                                >
                                    { tabNotificationCount[index] ? tabNotificationCount[index] : null }
                                </Text>
                            </View>
                            }
                        </View>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: style_vars.blue_3,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: style_vars.blue_1,
    },
    tab: {
        backgroundColor: style_vars.blue_3,
    },
    tabTitle: {
        color: style_vars.grey,
        textAlign: 'center',
        paddingVertical: 5
    },
    tabNotification: {
        borderRadius: 20,
        paddingHorizontal: 5,
        backgroundColor: style_vars.red,
        position: 'absolute',
        right: 0,
        top: -10,
        zIndex: 10,
        elevation: 10
    },
    tabNotificationCount: {
        color: 'white'
    }
})


{/* <View style={styles_tabs.tabs}>
    <View style={[styles_tabs.tab, activeTab(0)]}>
        <TouchableHighlight
        underlayColor = {style_vars.blue_1}
        onPress={() => setTabActive(0)}
        >
            <Text style={[styles_tabs.tab_text,{fontSize:style_vars.font_2}, activeTabText(0)]}>
                {tabTitle[0]}
            </Text>
        </TouchableHighlight>
    </View>
    <View style={[styles_tabs.tab, activeTab(1)]}>
        <TouchableHighlight
        underlayColor = {style_vars.blue_1}
        onPress={() => setTabActive(1)}
        >
            <Text style={[styles_tabs.tab_text,{fontSize:style_vars.font_2}, activeTabText(1)]}>
                {tabTitle[1]}
            </Text>
        </TouchableHighlight>
    </View>
    <View style={[styles_tabs.tab, activeTab(2)]}>
        <TouchableHighlight
        underlayColor = {style_vars.blue_1}
        onPress={() => setTabActive(2)}
        >
            <Text style={[styles_tabs.tab_text,{fontSize:style_vars.font_2}, activeTabText(2)]}>
                {tabTitle[2]}
            </Text>
        </TouchableHighlight>
    </View>
    <View style={[styles_tabs.tab, activeTab(3)]}>
        <TouchableHighlight
        underlayColor = {style_vars.blue_1}
        onPress={() => setTabActive(3)}
        >
            <Text style={[styles_tabs.tab_text,{fontSize:style_vars.font_2}, activeTabText(3)]}>
                {tabTitle[3]}
            </Text>
        </TouchableHighlight>
    </View>
</View> */}
