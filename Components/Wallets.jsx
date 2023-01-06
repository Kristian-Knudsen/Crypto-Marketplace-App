import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Wallet from './Wallet';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 30,
        paddingTop: 5,
        marginTop: 20
    },
    hr: {
        borderBottomColor: "grey",
        width: "100%",
        marginTop: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    scrollmenu: {
        width: "100%",
        display: 'flex',
        flexDirection: "row",
    },
})

const coins = [{ "name": "Bitcoin", "ticker": "BTC", "value": "4.56" }, { "name": "Ethereum", "ticker": "ETH", "value": "-2.3" }, { "name": "Monero", "ticker": "MON", "value": "0" }];

const Wallets = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>My wallets</Text>
            <View style={styles.hr} />
            <ScrollView horizontal style={styles.scrollmenu}>
                {coins.map((coin, i) => (
                    <Wallet
                        key={coin.ticker}
                        coin={coin}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default Wallets