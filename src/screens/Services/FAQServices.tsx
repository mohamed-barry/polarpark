import React from 'react';
import {WebView} from 'react-native-webview';

const FAQServices = () => {
  return (
    <WebView
      source={{uri: 'https://www.milb.com/worcester/ballpark/fan-guide'}}
      style={{flex: 1}}
    />
  );
};

export default FAQServices;
