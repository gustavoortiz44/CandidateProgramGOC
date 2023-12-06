import React from 'react';
import {
  View,
  Text,
  SafeAreaView
} from 'react-native';
import Users from './src/components/Users';
import ExampleReducer from './src/components/ExampleReducer';
import NativeModuleExa from './src/components/NativeModuleExa';

const App = () => {
  return (
    <SafeAreaView>
      {/* Component to review an example of API, TypeScript */}
      {/* <Users/> */}

      {/* Component to review an example of Reducers */}
      {/* <ExampleReducer/> */}

      {/* Component to review an example of Native Modules */}
      <NativeModuleExa/>


    </SafeAreaView>
  )
}

export default App