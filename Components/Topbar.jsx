import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 30,
        paddingTop: 5,
    },
    userbox: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    username: {
        fontSize: 20,
        marginLeft: 10,
    },
    userImg: {
        width: 48,
        height: 48,
        borderRadius: "25%"
    },
    chevron: {
        fontSize: 16,
        marginLeft: 5,
    },
    bell: {
        fontSize: 24,
    }
})

const Topbar = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.userImg}
                source={{ uri: 'https://place-hold.it/48x48/#000/#fff&text=Avatar' }}
            />
            <View style={styles.userbox}>
                <Text style={styles.username}>Kristian Knudsen</Text>                
                <FontAwesome5 style={styles.chevron} name={'chevron-down'} />
                
            </View>
            <FontAwesome5 style={styles.bell} name={'bell'} />

        </View>
    )
}

export default Topbar