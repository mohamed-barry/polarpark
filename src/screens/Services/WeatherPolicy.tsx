import React from 'react';
import {WebView} from 'react-native-webview';

const WeatherPolicy = () => {
  return (
    <WebView
      source={{uri: 'https://www.milb.com/worcester/tickets/weather-policy'}}
      style={{flex: 1}}
    />
  );
};

export default WeatherPolicy;
