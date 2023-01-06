import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        paddingTop: 5,
    },
    iconContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    icon: {
        fontSize: 20,
        color: "grey",
    }, 
    iconText: {
        color: "grey",
        marginTop: 5
    },
    active: {
        color: "orange",
    }
})

const BottomBar = ({ navigation, active }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer} onTouchStart={() => navigation.navigate('Home')}>
                <FontAwesome5 style={[styles.icon, active === "Home" ? styles.active : null]} name={'home'} />
                <Text style={[styles.iconText, active === "Home" ? styles.active : null]}>Home</Text>
            </View>
            <View style={styles.iconContainer} onTouchStart={() => navigation.navigate('Transaction')}>
                <FontAwesome5 style={[styles.icon, active === "Transaction" ? styles.active : null]} name={'exchange-alt'} />
                <Text style={[styles.iconText, active === "Transaction" ? styles.active : null]}>Transaction</Text>
            </View>
            <View style={styles.iconContainer} onTouchStart={() => navigation.navigate('Profile')}>
                <FontAwesome5 style={[styles.icon, active === "Profile" ? styles.active : null]} name={'user'} />
                <Text style={[styles.iconText, active === "Profile" ? styles.active : null]}>Profile</Text>
            </View>
        </View>
    )
}

export default BottomBar