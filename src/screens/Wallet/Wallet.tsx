import React from 'react';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {Button, Footer, Section, TicketPreview} from '@app/components';
import {TicketFlowScreenProps} from '@app/navigation/types';
import type {RootState} from '@app/context/store';

export default function WalletScreen({
  navigation,
}: TicketFlowScreenProps<'Wallet'>): JSX.Element {
  const activeItems = useSelector((state: RootState) => state.patron.active);
  const inactiveItems = useSelector(
    (state: RootState) => state.patron.inactive,
  );

  const navigateToTicket = () => navigation.navigate('ViewTicket');
  const navigateToPurchaseTicket = () => navigation.navigate('PurchaseTicket');

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Section title="Upcoming tickets">
        {activeItems.length > 0 ? (
          activeItems.map(item => (
            <TicketPreview
              active={true}
              key={item.id}
              lineItem={item}
              onPress={navigateToTicket}
            />
          ))
        ) : (
          <Button
            onPress={navigateToPurchaseTicket}
            title="Purchase tickets"
            variant="default"
          />
        )}
      </Section>
      <Section title="Previous tickets">
        {inactiveItems.map(item => (
          <TicketPreview key={item.id} lineItem={item} mb="l" />
        ))}
      </Section>
      <Footer text="Having troubles with ticketing?" />
    </ScrollView>
  );
}
