import React from 'react';
import Box from '../../general/Box/Box';
import Text from '../../general/Text/Text';
import {TDC} from '@app/api/model/tdc';
import {getEventDateAndTime} from '@app/helpers';

interface EventProps {
  event: TDC.Event;
}

export default function Event({event}: EventProps): JSX.Element {
  const [day, time] = getEventDateAndTime(event.date);
  const date = day!.split(' ');

  return (
    <Box flex={1} flexDirection="row">
      <Box
        alignItems="center"
        flexDirection="column"
        height={48}
        width={48}
        mr="m">
        <Text color="scheduleItemDate" fontWeight="bold" variant="body">
          {date[0]}
        </Text>
        <Text variant="body">{date[2]}</Text>
      </Box>
      <Box flex={1} flexDirection="column">
        <Text fontWeight="500" variant="body">
          {event.shortPublicDescription}
        </Text>
        <Text fontWeight="500" variant="subtitle1">
          {event.publicDescription}
        </Text>
      </Box>
    </Box>
  );
}
