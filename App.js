import React from 'react';
import { StatusBar as ExpoStatusbar } from 'expo-status-bar';
import MainContainer from './src/components/navigation/main';
import StackNavigation from './src/components/navigation/stack.navigation';

export default function App() {
  return (
    <>
      <MainContainer />
      <ExpoStatusbar style="auto" />
    </>
  );
}
