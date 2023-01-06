import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Pages/Home';
import Transaction from './Pages/Transaction';
import Profile from './Pages/Profile';
import { RecoilRoot } from 'recoil';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Transaction"
            component={Transaction}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}

