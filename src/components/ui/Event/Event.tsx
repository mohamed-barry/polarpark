import React from 'react';
import Box from '../../general/Box/Box';
import Text from '../../general/Text/Text';
import { FMEvent } from '@app/api/features/getFanmakerEvents';

interface EventProps {
  event: FMEvent;
}

export function Event({event}: EventProps): JSX.Element {
  const [day, date] = [event.date.getDay(), event.date.getDate()];

  const dayNames = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  return (
    <Box flex={1} flexDirection="row">
      <Box
        alignItems="center"
        flexDirection="column"
        height={48}
        width={48}
        mr="m">
        <Text color="scheduleItemDate" fontWeight="bold" variant="body">
          {date}
        </Text>
        <Text variant="body">{dayNames[day]}</Text>
      </Box>
      <Box flex={1} flexDirection="column">
        <Text fontWeight="500" variant="body">
          {event.name}
        </Text>
        <Text fontWeight="500" variant="subtitle1">
          {event.descrpition}
        </Text>
      </Box>
    </Box>
  );
}

export function DefaultEvent() {
  return (
    <Box flex={1} flexDirection="row">
      <Box
        alignItems="center"
        flexDirection="column"
        height={48}
        width={48}
        mr="m">
      </Box>
      <Box flex={1} flexDirection="column">
        <Text fontWeight="500" variant="body">
          There are no upcoming events
        </Text>
      </Box>
    </Box>
  );
}