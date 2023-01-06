import React from 'react'
import { View, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const WalletIcon = props => {

    const coinUris = {
        "bitcoin": { "uri": "bitcoin", "color": "orange" },
        "ethereum": { "uri": "ethereum", "color": "purple" },
        "monero": { "uri": "monero", "color": "green" },
    }

    const styles = StyleSheet.create({
        wrapper: {
            // backgroundColor: coinUris[props.coin.toLowerCase()].color,
            paddingVertical: 10,
            borderRadius: 25,
            marginRight: 5,
        },
        icon: {
            height: 40,
            width: 40,
            color: coinUris[props.coin.toLowerCase()].color,
            fontSize: 40,
        }
    });


    return (
        <View style={styles.wrapper}>
            <FontAwesome5 style={styles.icon} name={coinUris[props.coin.toLowerCase()].uri} />
        </View>
    )
}

export default WalletIcon