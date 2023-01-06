import React from 'react';
import { View, StyleSheet, Text, Image, Alert } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        paddingTop: 5,
        marginTop: 20
    },
    button: {
        // padding: 50,
        borderRadius: 25,
        width: "48%",
        height: 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    withdraw: {
        backgroundColor: "#ff5757",
    },
    send: {
        backgroundColor: "#ffaa00", 
    },
    icon: {
        fontSize: 25,
        color: "white",
        marginBottom: 5
    }
})

const handleSend = () => {
    Alert.alert("Clicked send");
};

const handleWithdraw = () => {
    Alert.alert("Clicked Withdraw");
}

const ActionButtons = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.withdraw, styles.button]} onTouchStart={() => handleWithdraw()}>
                <FontAwesome5 style={styles.icon} name={'download'} />
                <Text style={{color: "white"}}>Withdraw</Text>
            </View>
            <View style={[styles.send, styles.button]} onTouchStart={() => handleSend()}>
                <FontAwesome5 style={styles.icon} name={'upload'} />
                <Text style={{color: "white"}}>Send</Text>
            </View>
        </View>
    )
}

export default ActionButtons