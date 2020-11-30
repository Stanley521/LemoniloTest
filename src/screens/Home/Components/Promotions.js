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
    Image,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styles_main from "../../_styles/main";

export default function Promotions(props) {
    const [loading, setLoading] = useState(false);
    const [promotionList, setPromotionList] = useState([
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
    ])
    const flatlistRef = useRef();

    return (
        <FlatList
            ref={flatlistRef}
            onEndReached={() => { }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            onEndReachedThreshold={0.1}
            data={promotionList}
            keyExtractor={item => item.id}
            ListEmptyComponent={
                <Text>Kosong</Text>
            }
            ListFooterComponent={
                <View
                    style={{
                        minWidth: 100,
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    {
                        loading && (
                            <ActivityIndicator size={'large'} color={style_vars.blue_2} />
                        )}
                </View>
            }
            renderItem={({ item, index }) => {
                return (
                    <View style={styles.container_float}>
                        <View style={styles.content}>
                            <Image
                                style={{ width: 140, height: 140 }}
                                source={{ uri: item.imageUrl }} />
                            <Text numberOfLines={2} style={styles.desc}>{item.desc}</Text>
                            <Text style={styles.price}>{item.currency} {item.price} {item.priceFrom !== item.price ? <Text style={styles.discount}>({item.priceFrom})</Text> : null}</Text>
                        </View>
                        <TouchableOpacity style={styles.action} onPress={()=>{
                             props.navigation.navigate('Product', {
                                product: item
                            })
                        }}>
                            <Text style={styles.actionText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                )
            }}
        />
    )
}
const styles = StyleSheet.create({
    container_float: {
        elevation: 5,
        borderRadius: 10,
        width: 200,
        height: 280,
        backgroundColor: 'white',
        justifyContent: 'center',
        margin: 10
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        flex: 1
    },
    desc: {
        // paddingHorizontal: 10
        fontWeight: "bold"
    },
    discount: {
        textDecorationLine: 'line-through',
        color: 'grey',
        paddingHorizontal: 10
    },
    price: {
        fontWeight: 'bold',
        color: 'black'
    },
    action: {
        paddingVertical: 10,
        backgroundColor: '#7cc342',
        alignItems: 'center',
    },
    actionText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    }
});