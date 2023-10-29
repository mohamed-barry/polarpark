import React from 'react';
import {Pressable} from 'react-native';
import {getEventDateAndTime} from '@app/helpers';
import Box from '../../general/Box/Box';
import Text from '../../general/Text/Text';

export type ScheduleItemProps = {
  description: string;
  isoString: string;
  title: string;
  onPress?: () => void;
};

export default function ScheduleItem({
  description,
  isoString,
  title,
}: ScheduleItemProps) {
  const [date, time] = getEventDateAndTime(isoString);

  return (
    <Pressable>
      <Box
        alignItems="center"
        flex={1}
        flexDirection="row"
        justifyContent="space-between">
        <Box flex={1}>
          <Text fontWeight="bold" variant="body">
            <Text color="scheduleItemDate" variant="default">
              {date}
            </Text>{' '}
            @ {time}
          </Text>
          <Text fontWeight="bold" variant="body">
            {title}
          </Text>
          <Text fontWeight="500" variant="subtitle1">
            {description}
          </Text>
        </Box>
        <Box ml="l">
          <Box height={48} width={48} />
        </Box>
      </Box>
    </Pressable>
  );
}
