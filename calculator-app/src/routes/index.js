import React, { useEffect, useState, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CalculatorNavigator from './calculatorNavigator';


const Routes = () => {
    return(
    <NavigationContainer>
        <CalculatorNavigator />
    </NavigationContainer>);
}

export default Routes;