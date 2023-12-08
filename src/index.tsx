import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '@shopify/restyle';
import {store} from '@app/context/store';
import {Provider} from 'react-redux';
import theme from '@app/config/theme';
import AppRouter from '@app/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
            <NavigationContainer>
              <AppRouter />
            </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
}
