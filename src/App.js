import React from 'react';
import {Image} from 'react-native';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PersistGate} from 'redux-persist/integration/react';
import Account from './screens/account';
import {Provider} from 'react-redux';
import {store, persistor} from './store';
import {HomeStackNavigator, SearchStackNavigator} from './navigators';
import {IC_ACCOUNT, IC_HOME, IC_SEARCH} from './assets';
import Colors from './constants/Colors';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({route}) => ({
                // eslint-disable-next-line react/no-unstable-nested-components
                tabBarIcon: ({focused, color, size}) => {
                  let icon;
                  if (route.name === 'Home') {
                    icon = IC_HOME;
                  } else if (route.name === 'Search') {
                    icon = IC_SEARCH;
                  } else {
                    icon = IC_ACCOUNT;
                  }
                  return (
                    <Image
                      source={icon}
                      style={{
                        height: size,
                        width: size,
                        tintColor: color,
                      }}
                    />
                  );
                },
                tabBarActiveTintColor: Colors.BLUE.default,
                tabBarInactiveTintColor: Colors.GRAY.default,
                headerShown: false,
              })}>
              <Tab.Screen name="Home" component={HomeStackNavigator} />
              <Tab.Screen name="Search" component={SearchStackNavigator} />
              <Tab.Screen name="Account" component={Account} />
            </Tab.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
