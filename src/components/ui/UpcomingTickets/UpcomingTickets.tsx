// UpcomingTickets.tsx
import React, {useEffect, useState} from 'react';
import {ScrollView, Text} from 'react-native';
import {Box, Button, TicketPreview} from '@app/components';
import {getPatronTickets} from '@app/api';
import {TDC} from '@app/api/model/tdc';
import {useDispatch} from 'react-redux';
import {partition} from '@app/helpers';
import {setActive, setInactive} from '@app/context/features';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from '@app/navigation/types';

const UpcomingTickets = () => {
  const [activeItem, setActiveItem] = useState<Array<TDC.LineItem>>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigation = useNavigation<RootStackNavigationProps<'Main'>>();

  const navigateToTicket = () => navigation.navigate('ViewTicket');

  useEffect(() => {
    async function fetchPatronInfo() {
      try {
        const userId = 613373703; // Replace with dynamic user ID if necessary
        const response = await getPatronTickets(userId);
        const [active, _] = partition(
          response,
          (lineItem: TDC.LineItem) =>
            lineItem.tickets.length > 0 && lineItem.tickets[0].active,
        );

        dispatch(setActive(active));
        setActiveItem(active);
      } catch (err) {
        console.error('Handle this better!!!!', err);
      } finally {
        setLoading(false);
      }
    }

    fetchPatronInfo();
  }, [dispatch]);

  if (loading) {
    return <Text>Loading tickets...</Text>;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Box>
        {activeItem.length > 0 ? (
          activeItem.map(item => (
            <TicketPreview
              active={true}
              key={item.id}
              lineItem={item}
              onPress={navigateToTicket}
            />
          ))
        ) : (
          <Button
            title="Purchase tickets"
            variant="default"
            onPress={navigateToTicket} // Update this onPress function as needed
          />
        )}
      </Box>
    </ScrollView>
  );
};

export default UpcomingTickets;
