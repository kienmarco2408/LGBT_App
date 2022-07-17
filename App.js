import React from 'react';
import { StatusBar as ExpoStatusbar } from 'expo-status-bar';
import { HomeScreen } from './src/features/screens/home.screen';

export default function App() {
  return (
    <>
      <HomeScreen />
      <ExpoStatusbar style="auto" />
    </>
  );
};