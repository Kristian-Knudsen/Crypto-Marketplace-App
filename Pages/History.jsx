import React from 'react';
import { View, Text } from 'react-native';
import BottomBar from '../Components/BottomBar';

const History = ({ navigation }) => {
  return (
    <View>
      <Text>History</Text>
      <BottomBar active="History" navigation={navigation} />
    </View>
  )
}

export default History