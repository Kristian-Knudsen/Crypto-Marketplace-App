import React from 'react';
import { View, Text } from 'react-native';
import BottomBar from '../Components/BottomBar';

const Profile = ({ navigation }) => {
  return (
    <View>
      <Text>Profile</Text>
      <BottomBar active="Profile" navigation={navigation} />
    </View>
  )
}

export default Profile