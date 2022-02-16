import React from 'react';
import SplashScreen from './screens/SplashScreen';
import {Image, StatusBar, StyleSheet, Text} from 'react-native';
import RootStack from './RootStack';
import {useState, useEffect} from 'react';
import {LogBox} from 'react-native';
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
  'AsyncStorage has been extracted from react-native core and will be removed in a future release',
]);
export default App = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      StatusBar.setHidden(false);

      setVisible(false);
    }, 1500);
  }, []);
  return visible ? <SplashScreen /> : <RootStack />;
};
