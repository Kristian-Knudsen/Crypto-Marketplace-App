import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        paddingTop: 5,
        marginTop: 20
    },
    money: {
        fontWeight: 'bold',
        fontSize: 40,
    },
    followText: {
        color: "grey"
    },
    iconWrapper: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 18
    },
    historyIcon: {
        fontSize: 40,
    }

})

const Balance = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.money}>$4.985,99</Text>
                <Text style={styles.followText}>Available balance</Text>
            </View>
            <View style={styles.iconWrapper} onTouchStart={() => Alert.alert("Clicked History")}>
                <FontAwesome5 style={styles.historyIcon} name={'chart-line'} />

            </View>
        </View>
    )
}

export default Balance