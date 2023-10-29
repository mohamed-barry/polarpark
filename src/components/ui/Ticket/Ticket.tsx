import React from 'react';
import {Dimensions} from 'react-native';
import Box from '../../general/Box/Box';
import Text from '../../general/Text/Text';
import Logo from '@app/assets/logos/woosox-letter-heart.svg';
import {Image} from 'react-native';
import {TDC} from '@app/api/model/tdc';
import {getEventDateAndTime} from '@app/helpers';
import IconButton from '@app/components/general/IconButton/IconButton';

interface TicketProps {
  event: TDC.Event;
  ticket: TDC.Ticket;
}
interface InfoCellProps {
  data: string | number;
  label: string;
}

function InfoCell({data, label}: InfoCellProps) {
  return (
    <Box flex={1}>
      <Text color="ticketSubtext" fontWeight="bold" variant="body">
        {label}
      </Text>
      <Text color="ticketTextColor" fontWeight="bold" variant="body">
        {data}
      </Text>
    </Box>
  );
}

const height = Dimensions.get('window').height * 0.7;
const width = Dimensions.get('window').width - 40;

export default function Ticket({event, ticket}: TicketProps) {
  const [date, time] = getEventDateAndTime(event.date);

  return (
    <Box
      bg="ticketBackground"
      borderRadius={12}
      flexDirection="column"
      p="xl"
      height={height}
      width={width}>
      <Box flex={1}>
        <Box flexDirection="row" justifyContent="space-between" mb="l">
          <Logo height={32} width={32} />
          <IconButton
            name="export"
            color="iconContrastColor"
            onPress={() => {}}
          />
        </Box>
        <Text color="ticketTextColor" variant="heading2">
          {event.shortPublicDescription}
        </Text>
        <Text color="ticketSubtext" variant="subtitle1">
          {event.publicDescription}
        </Text>
        <Box borderColor="white" borderBottomWidth={0.4} my="l" />
        <Box flexDirection="row" mb="l">
          <InfoCell data={41234234} label="PATRON ID" />
          <InfoCell data={ticket.id} label="TICKET ID" />
        </Box>
        <Box flexDirection="row" mb="l">
          <InfoCell data={date!} label="DATE" />
          <InfoCell data={time!} label="TIME" />
        </Box>
        <Box flexDirection="row" mb="l">
          <InfoCell data={ticket.seat.section} label="SECTION" />
          <InfoCell data={ticket.seat.row} label="ROW" />
        </Box>
        <Box flexDirection="row" mb="l">
          <InfoCell data={ticket.seat.seat} label="SEAT" />
          <InfoCell data="D" label="GATE" />
        </Box>
      </Box>
      <Image
        style={{width: '100%', height: 90, marginTop: 16}}
        resizeMode="stretch"
        source={require('@app/assets/images/barcode.png')}
      />
    </Box>
  );
}

// todo look to abstract out the row thing
