import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MenuProvider } from 'react-native-popup-menu';
import store from '../redux/store';
import Routes from '../routes';
import { View } from 'react-native';


const App = () => {
    return(
    <SafeAreaProvider>
      <Provider store={store}>
        <MenuProvider>
          <Routes />
        </MenuProvider>
      </Provider>
    </SafeAreaProvider>
    );
}

export default App;