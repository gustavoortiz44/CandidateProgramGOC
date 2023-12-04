import React from 'react';
import {
  View,
  Text,
  SafeAreaView
} from 'react-native';
import Users from './src/components/Users';

const App = () => {
  return (
    <SafeAreaView>
      <Users/>
    </SafeAreaView>
  )
}

export default App