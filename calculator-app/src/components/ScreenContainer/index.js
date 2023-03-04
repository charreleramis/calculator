import React, { useEffect } from 'react';
import { KeyboardAvoidingView, SafeAreaView, StatusBar, Platform, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { selectModeStatus } from '../../redux/slices/modes.slice';
import colors from '../../utils/colors';
import style from '../Inputs/style';

const ScreenContainer = ({ children, scrollable }) => {
  const mode = useSelector(selectModeStatus);
  
  return (
    <SafeAreaView style={{ backgroundColor: mode ? colors.backgroundColor : colors.lightBackground, flex: 1 }} >
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : ""} style={{ flex: 1 }}>
        {scrollable ? (
          <ScrollView style={{ flex: 1 }}>
            {children}
          </ScrollView>
        ) : (
          children
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default ScreenContainer;