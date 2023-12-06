import React from 'react';
import {
  View,
  Text,
  SafeAreaView
} from 'react-native';
import Users from './src/components/Users';
import ExampleReducer from './src/components/ExampleReducer';

const App = () => {
  return (
    <SafeAreaView>
      <Users/>
      {/* Component to review an example of Reducers */}
      {/* <ExampleReducer/> */}

      
    </SafeAreaView>
  )
}

export default App