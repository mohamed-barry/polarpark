import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import Box from '@app/components/general/Box/Box';

import {StyleSheet, Text, View} from 'react-native';

interface HeaderProps {
  route: RouteProp<ParamListBase, string>;
}

export default function HeaderContainer({route}: HeaderProps): JSX.Element {
  // todo [dev note]: please change how we did this

  const styles = StyleSheet.create({
    header: {
      backgroundColor: 'rgb(16,41,89)',
      paddingLeft: 20,
    },
    text: {
      color: 'white',
      fontFamily: 'Nunito Sans',
      fontWeight: '700',
      fontSize: 30,
    },
  });
  return (
    <View style={styles.header}>
      <SafeAreaView edges={['top']}>
        <Box flexDirection="row" justifyContent="space-between">
          <Text style={styles.text}>{route.name}</Text>
          <Box alignItems="center" flexDirection="row">
            {/* {options} */}
          </Box>
        </Box>
      </SafeAreaView>
    </View>
  );
}
