import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index.routes';
import { EstoqueProvider } from './src/context/EstoqueContext';

export default function App() {
  return (
    <EstoqueProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </EstoqueProvider>
  );
}