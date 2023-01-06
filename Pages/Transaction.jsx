import React from 'react';
import { View, Text } from 'react-native';
import BottomBar from '../Components/BottomBar';

const Transaction = ({ navigation }) => {
  return (
    <View>
      <Text>Transaction</Text>
      <BottomBar active="Transaction" navigation={navigation} />
    </View>
  )
}

export default Transaction