import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import WalletIcon from './WalletIcon';

const styles = StyleSheet.create({
    container: {
        borderColor: "grey",
        borderWidth: 2,
        borderRadius: 25,
        display: "flex",
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginRight: 20,
        marginVertical: 10,
        flexDirection: "column",
    },
    information: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
    },
    ticker: {
        fontSize: 12,
        textAlign: "center",
        color: "grey"
    },
    nameContainer: {
        display: "flex",
        marginRight: 20,
        marginLeft: 5,
    },
    valueChange: {
        padding: 8,
        borderRadius: 15,
    },
    valueChangePostive: { backgroundColor: "#4fe84d" },
    valueChangeNegative: { backgroundColor: "#ff5757" },
    valueChangeNeutral: { backgroundColor: "#ffaa00" },
    value: {
        fontSize: 20,
        fontWeight: "bold"
    },
    amount: {
        color: "grey"
    },
});


const Wallet = props => {
    const valueChangeColor = (props.coin.value > 0 ? styles.valueChangePostive : (props.coin.value < 0 ? styles.valueChangeNegative : styles.valueChangeNeutral));
    return (
        <View style={styles.container}>

            <View style={styles.information}>
                <WalletIcon coin={props.coin.name} />

                <View style={styles.nameContainer}>
                    <Text style={styles.title}>{props.coin.name}</Text>
                    <Text style={styles.ticker}>{props.coin.ticker}</Text>
                </View>
                <View style={[styles.valueChange, valueChangeColor]}>
                    <Text>{props.coin.value}%</Text>
                </View>
            </View>

            <Text style={styles.value}>$12.857,98</Text>
            <Text style={styles.amount}>0,76309</Text>
        </View>
    )
}

export default Wallet