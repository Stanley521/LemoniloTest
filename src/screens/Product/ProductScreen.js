import React, { useEffect, useRef, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
} from 'react-native';
import style_vars from '../_styles/vars';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function ProductScreen(props) {
    const { route } = props;
    const product = route.params?.product ?? {};
    console.log(product)
    return (
        <ScrollView style={{ flex: 1 }}>
            <Image style={{ width: null, height: 300 }} source={{ uri: product.imageUrl }} />
            <View style={styles.content}>
                <View style={styles.containerWhite}>
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.price}>{product.currency} {product.price}</Text>
                            <View style={styles.discountContainer}>
                                <View style={styles.discountPercentage}>
                                    <Text style={styles.discountPercentageText}>{100 - Math.floor(product.price / product.priceFrom * 100)}%</Text>
                                </View>
                                <Text style={styles.discount}>{product.currency} {product.priceFrom}</Text>
                            </View>
                        </View>
                        <Ionicons name={'md-heart'} size={30} color={'black'} />
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.desc}>{product.desc}</Text>
                        <Text>{`Stock <24, buy now!`}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: 'grey', backgroundColor: 'white' }}>
                        <Text style={{ fontSize: 12 }}>Sold 341</Text>
                        <View style={styles.review}>
                            <Ionicons name={'md-star'} size={10} color={'gold'} />
                            <Text style={styles.bold}>{4.9}</Text>
                            <Text style={styles.semicolon}>({162})</Text>
                        </View>
                        <View style={styles.discussion}>
                            <Text style={styles.bold}>Discussion</Text>
                            <Text style={styles.semicolon}>({47})</Text>
                        </View>
                    </View>
                    <View>
                        <Text>Sell by <Text style={{ fontWeight: 'bold' }}>{'Lemonilo Official Store'}</Text></Text>
                        <Text>Original - Ready</Text>
                    </View>
                </View>
                <View style={styles.containerWhite}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, paddingVertical: 10 }}>Courier</Text>
                            <Text>Shipping Charges starts from Rp 50000</Text>
                            <Text>To Kota Administrasi Jakarta Barat</Text>
                        </View>
                        <Ionicons name={'md-arrow-forward'} size={30} color={'black'} />
                    </View>
                </View>
                <View style={styles.containerWhite}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Product Information</Text>
                    <View style={styles.informationRow}>
                        <Text>Weight</Text>
                        <Text>70g</Text>
                    </View>
                    <View style={styles.informationRow}>
                        <Text>Conditoin</Text>
                        <Text>New</Text>
                    </View>
                    <View style={styles.informationRow}>
                        <Text>Minimal Order</Text>
                        <Text>1</Text>
                    </View>
                    <View style={styles.informationRow}>
                        <Text>Category</Text>
                        <Text>Food</Text>
                    </View>
                </View>
                <View style={styles.containerWhite}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Product Description</Text>
                    <View style={styles.informationRow}>
                        <Text>Mie instan Lemonilo dibuat dengan saripati sayuran dan dari tepung tapioka hasil olahan petani Indonesia. Berbeda dari yang lain, mie instan Lemonilo dibuat dengan proses dipanggang, bukan digoreng sehingga air rebusannya jernih dan pastinya tanpa penguat rasa, pengawet, dan pewarna buatan.
                            Dengan Mie instan Lemonilo, makan mie instan jadi praktis, enak, dan nyaman setiap hari.</Text>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    content: {
        flex: 1
    },
    containerWhite: {
        backgroundColor: 'white',
        padding: 20,
        marginBottom: 10
    },
    descriptionContainer: {
    },
    desc: {
        // paddingHorizontal: 10
        fontSize: 16
    },
    discountContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    discountPercentage: {
        padding: 3,
        backgroundColor: style_vars.pink,
    },
    discountPercentageText: {
        color: style_vars.red
    },
    discount: {
        textDecorationLine: 'line-through',
        color: 'grey',
        paddingHorizontal: 10
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    review: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
        marginLeft: 10,
        paddingVertical: 2,
        paddingHorizontal: 3,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey'
    },
    discussion: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
        marginLeft: 10,
        paddingVertical: 2,
        paddingHorizontal: 3,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey'
    },
    bold: {
        fontWeight: 'bold'
    },
    semicolon: {
        color: 'grey'
    },
    informationRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10
    }
});