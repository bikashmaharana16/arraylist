import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Every from './components/every';
import Filter from './components/Filter';
import Find from './components/Find';
import List from './components/List';
import Reducer from './components/Reducer';
import Some from './components/Some';
import ForEach from './components/ForEach';
import Includes from './components/Includes';
import Map from './components/Map';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <List  />
        <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Filter" component={Filter} />
        <Drawer.Screen name="Find" component={Find} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="List" component={List} />
        <Drawer.Screen name="Map" component={Map} />
        <Drawer.Screen name="Reducer" component={Reducer} />
        <Drawer.Screen name="Some" component={Some} />
        <Drawer.Screen name="ForEach" component={ForEach} />
        <Drawer.Screen name="Includes" component={Includes} />
        <Drawer.Screen name="Every" component={Every} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
