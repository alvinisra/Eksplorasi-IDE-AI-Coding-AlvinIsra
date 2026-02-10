import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from './components/LoginScreen'; // Sesuaikan path jika ditaruh di folder lain

export default function App() {
  return (
    <SafeAreaProvider>
      <LoginScreen />
    </SafeAreaProvider>
  );
}