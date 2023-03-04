import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import History from '../../screens/History';

const Stack = createNativeStackNavigator();

const CalculatorNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Main"}>
            <Stack.Screen name={"Home"} component={Home} />
            <Stack.Screen name={"History"} component={History} />
        </Stack.Navigator>
        );
}

export default CalculatorNavigator;