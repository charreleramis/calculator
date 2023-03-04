import React, { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import method from './method';

const LightDarkSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { updateMode } = method();

  const toggleSwitch = () => {
    setIsDarkMode(previousState => !previousState);
    updateMode(isDarkMode);
  }
  
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isDarkMode ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isDarkMode}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default LightDarkSwitch;
