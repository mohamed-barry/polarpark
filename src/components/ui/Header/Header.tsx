import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import Box from '@app/components/general/Box/Box';
import Text from '@app/components/general/Text/Text';
import HomeOptions from './HomeOptions/HomeOptions';
import OrderingOptions from './OrderingOptions/OrderingOptions';
import TicketsOptions from './TicketOptions/TicketsOptions';

interface HeaderProps {
  route: RouteProp<ParamListBase, string>;
}

export default function HeaderContainer({route}: HeaderProps): JSX.Element {
  const options =
    route.name === 'Tickets' ? (
      <TicketsOptions />
    ) : route.name === 'Home' ? (
      <HomeOptions />
    ) : route.name === 'Ordering' ? (
      <OrderingOptions />
    ) : null;

  // todo [dev note]: please change how we did this

  return (
    <Box
      bg="mainBackground"
      borderBottomWidth={1}
      borderColor="headerBorder"
      px="l"
      pt="xl">
      <SafeAreaView edges={['top']}>
        <Box flexDirection="row" justifyContent="space-between">
          <Text variant="heading1">{route.name}</Text>
          <Box alignItems="center" flexDirection="row">
            {options}
          </Box>
        </Box>
      </SafeAreaView>
    </Box>
  );
}
