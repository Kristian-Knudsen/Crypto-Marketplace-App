import { StyleSheet, View } from 'react-native';

import Balance from '../Components/Balance';
import Topbar from '../Components/Topbar';
import ActionButtons from '../Components/ActionButtons';
import Wallets from '../Components/Wallets';
import BottomBar from '../Components/BottomBar';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Topbar />
            <Balance />
            <View style={styles.card}>
                <ActionButtons />
                <Wallets />
            </View>
            <View style={styles.bottomBox}>
                <BottomBar active="Home" navigation={navigation} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        paddingTop: 50,
        backgroundColor: '#f7eba1',
    },
    card: {
        backgroundColor: "white",
        height: "100%",
        marginTop: 50,
        borderRadius: 30,
    },
    bottomBox: {
        position: 'absolute',
        bottom: 30,
        width: "100%",
    }
});


export default Home