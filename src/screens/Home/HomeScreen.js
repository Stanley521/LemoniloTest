import React, { useEffect, useRef, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Animated,
    RefreshControl,
    FlatList,
    TouchableOpacity
} from 'react-native';
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import style_vars from '../_styles/vars';
import Events from './Components/Events';
import HomeHeader from './Components/HomeHeader';
import Motto from './Components/Motto';
import Promotions from './Components/Promotions';
import Wallet from './Components/Wallet';
export default function HomeScreen(props) {
    const [openHeader, setOpenHeader] = useState(false);
    const [showSympSuggest, setShowSympSuggest] = useState(false);
    const [loadingSuggestion, setLoadingSuggestion] = useState(false);
    const [sympSuggest, setSympSuggest] = useState([]);
    const mainScrollViewRef = useRef(null);
    const [refreshing, setRefreshing] = React.useState(false);

    async function getDataProfile() {
        // let data = await getProfile();
        // updateProfile(data, dispatch);
        return 'getProfile';
    }
    async function getGetData(get = {
        profile: true,
        appointment: true,
        bytabs: true,
        notif: true,
        score: true,
    }) {
        await Promise.all([
            get.profile && getDataProfile(),
            //   get.score && getScore(),
            //   get.notif && getNotification(),
            //   get.bytabs && getByTabs(),
            // get.appointment && getAppointmentList(),
        ]).then(function (values) {
            return values;
        }).catch((error) => {
            Alert.alert(null, error);
            return values;
        });
    }


    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        getGetData().then((data) => {
            setRefreshing(false);
        });
    }, [refreshing]);

    const getSympSuggestion = async (text = '') => {
        if (text.length > 1) {
            setLoadingSuggestion(true);
            // let n = 0;
            // let url = '/api/Symptom/SearchSymptom?searchParam=' + text + '&page=' + n + '&row=10';
            // let { payload } = await getData(url);
            const payload = [
                {
                    id: '1203u89',
                    imageUrl: `https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2019/4/11/3302286/3302286_c5c9e7c3-dc07-46f1-aca5-d4ad5507e8fd_560_480.jpg`,
                    currency: 'Rp',
                    price: 6250,
                    priceFrom: 6750,
                    desc: 'Lemonilo Mie Instant Sehat 70gr - Mie Organik / Lemonilo Mie Instan - kari ayam'
                }, {
                    id: '53h346h',
                    imageUrl: `https://ecs7.tokopedia.net/img/cache/900/VqbcmM/2020/8/18/9c6af57f-6cec-4658-93e5-d6ca2d02dd67.jpg`,
                    currency: 'Rp',
                    price: 4750,
                    priceFrom: 5250,
                    desc: 'Lemonilo Mie Instant Sehat 70gr - Mie Organik / Lemonilo Mie Instan - ramen naruto'
                }, {
                    id: 't26h2h2yh',
                    imageUrl: `https://ecs7.tokopedia.net/img/cache/900/product-1/2020/7/17/9141121/9141121_52cfe3dc-040c-4222-8dbd-1fbb0b9033b4_1728_1728.jpg`,
                    currency: 'Rp',
                    price: 5750,
                    priceFrom: 5750,
                    desc: 'Lemonilo Mie Instant Sehat 70gr - Mie Organik / Lemonilo Mie Instan - ayam goreng'
                }
            ]
            setSympSuggest(prevState => {
                return payload
            });
            setLoadingSuggestion(false);
        }
        if (text.length < 1) {
            setSympSuggest([]);
        }
    }
    const topAnim = new Animated.Value(openHeader ? 0 : -40);
    const selectTopAnim = new Animated.Value(openHeader ? 85 : 45);
    
    useEffect(() => {
        Animated.timing(topAnim, {
            toValue: (openHeader ? -40 : 0),
            duration: 300,
            useNativeDriver: false
        }).start();
        Animated.timing(selectTopAnim, {
            toValue: (openHeader ? 45 : 85),
            duration: 300,
            useNativeDriver: false
        }).start();
    }, [openHeader]);
    return <>
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', elevation: 5, borderTopWidth: 0.01 }}>
                <HomeHeader
                    openHeader={openHeader}
                    setShowSympSuggest={setShowSympSuggest}
                    topAnim={topAnim}
                    getSympSuggestion={getSympSuggestion}
                    mainScrollViewRef={mainScrollViewRef}
                />
            </View>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                ref={mainScrollViewRef}
                style={[styles.scrollView]}
                contentContainerStyle={{
                    paddingTop: 10,
                    paddingBottom: 70,
                    backgroundColor: 'white'
                }}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                onScroll={(event) => {
                    if (event.nativeEvent.contentOffset.y > 50) {
                        console.log('Openheader')
                        setOpenHeader(true);
                    }
                }}
                onMomentumScrollEnd={(event) => {
                    console.log(event.nativeEvent.contentOffset.y)
                    if (event.nativeEvent.contentOffset.y <= 50) {
                        console.log('CloseHeader')
                        setOpenHeader(false);
                    }
                }}
            >
                <Wallet />
                <Promotions {...props}/>
                <Motto />
                <Events />
            </ScrollView>

            {
                showSympSuggest &&
                <Animated.View style={{
                    top: selectTopAnim,
                    left: 10,
                    right: 10,
                    position: 'absolute',
                    zIndex: showSympSuggest ? 5 : -1,
                    elevation: (sympSuggest.length != 0 || loadingSuggestion) && showSympSuggest ? 5 : -1,
                    backgroundColor: 'white',
                    borderWidth: 0.5,
                    borderColor: style_vars.grey,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                }}
                >
                    {sympSuggest.length > 0 && (
                        <FlatList
                            style={{
                                borderTopWidth: 0,
                            }}
                            keyboardShouldPersistTaps={'handled'}
                            data={sympSuggest}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    style={{ borderBottomWidth: 0.5, borderColor: style_vars.grey, paddingHorizontal: 15 }}
                                    onPress={() => {
                                        props.navigation.navigate('Product', {
                                            product: item
                                        })
                                        setSympSuggest([])
                                    }}>
                                    <Text
                                        style={{ paddingHorizontal: 5, paddingVertical: 2, fontSize: 14 }}>
                                        {item.desc}
                                    </Text>
                                </TouchableOpacity>
                            )}
                        />
                    )}

                </Animated.View>
            }
        </SafeAreaView>
    </>
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
        flex: 1
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});