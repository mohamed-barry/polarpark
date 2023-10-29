import React from 'react';
import {useSelector} from 'react-redux';
import {Dimensions, ScrollView, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, Ticket} from '@app/components';
import type {RootState} from '@app/context/store';

const width = Dimensions.get('window').width - 20;

export default function ViewTicket(): JSX.Element {
  const lineItem = useSelector((state: RootState) => state.patron.active);
  const event = lineItem[0]!.event;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Box bg="viewTicketBackground" py="l">
        <SafeAreaView edges={['bottom']}>
          <Box height="100%" flexDirection="row">
            <ScrollView
              decelerationRate={0}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              snapToInterval={width} //your element width
              snapToAlignment="center">
              {lineItem[0]!.tickets.map((ticket, i) => (
                <Box key={ticket.id} pr="l" pl={i === 0 ? 'l' : 'none'}>
                  <Ticket event={event} ticket={ticket} />
                </Box>
              ))}
            </ScrollView>
          </Box>
        </SafeAreaView>
      </Box>
    </>
  );
}
