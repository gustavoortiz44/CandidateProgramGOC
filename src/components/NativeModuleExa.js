import React from 'react';
import {
    View,
    Text,
    NativeModules,
    Button
} from 'react-native';

const {CustomModule} = NativeModules;

const handleNativeFuntion = async() => {
    const name = "Gustavo Ortiz Contreras";
    const result = CustomModule.customEvent(name);
    console.log(result);
}

const NativeModuleExa = () => {
  return (
    <View>
        <Text>Native Module</Text>
        <Button
            title='Modulo Nativo'
            onPress={handleNativeFuntion}
            color='pink'
        />
    </View>
  )
}

export default NativeModuleExa