import React from 'react';
import IconButton from '@app/components/general/IconButton/IconButton';
import {useNavigation} from '@react-navigation/native';
import {TicketStackNavigationProps} from '@app/navigation/types';

export default function TicketsOptions(): JSX.Element {
  const navigation = useNavigation<TicketStackNavigationProps<'Wallet'>>();

  const navigateToWallet = () => navigation.navigate('Wallet');
  const navigateToPurchaseTicket = () => navigation.navigate('PurchaseTicket');

  return (
    <>
      <IconButton name="calendar" onPress={navigateToPurchaseTicket} mr="s" />
      <IconButton name="briefcase" onPress={navigateToWallet} />
    </>
  );
}
