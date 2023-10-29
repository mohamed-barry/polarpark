import React from 'react';
import {Pressable} from 'react-native';
import {getEventDateAndTime} from '@app/helpers';
import {TDC} from '@app/api/model/tdc';
import {SpacingShorthandProps} from '@shopify/restyle';
import {Theme} from '@app/config/theme';
import Box from '../../general/Box/Box';
import Text from '../../general/Text/Text';
import WooSoxLogo from '@app/assets/logos/woosox-letter-heart.svg';

type TicketProps = SpacingShorthandProps<Theme> & {
  active?: boolean;
  lineItem: TDC.LineItem;
  onPress?: () => void;
};

export default function TicketPreview({
  active = false,
  lineItem,
  onPress = () => {},
  ...props
}: TicketProps): JSX.Element {
  const {event, tickets} = lineItem;
  const [date, time] = getEventDateAndTime(event.date);

  return (
    <Pressable onPress={onPress}>
      <Box
        {...props}
        borderRadius={12}
        elevation={5}
        shadowColor="black"
        shadowOffset={{width: 0, height: 1}}
        shadowOpacity={0.3}
        shadowRadius={5}>
        <Box
          bg="ticketBackground"
          borderRadius={12}
          borderBottomLeftRadius={active ? 0 : 12}
          borderBottomRightRadius={active ? 0 : 12}
          p="l">
          <WooSoxLogo height={32} width={32} />
          <Text color="ticketTextColor" fontWeight="bold" mt="m" variant="body">
            <Text color="ticketDateHighlight" variant="default">
              {date}
            </Text>{' '}
            @ {time}
          </Text>
          <Text color="ticketTextColor" fontWeight="bold" variant="body">
            {event.shortPublicDescription}
          </Text>
          <Text color="ticketTextColor" fontWeight="500" variant="subtitle1">
            {event.publicDescription}
          </Text>
        </Box>
        {active ? (
          <Box
            bg="ticketBottomBackground"
            borderBottomLeftRadius={12}
            borderBottomRightRadius={12}
            p="l">
            <Text
              color="ticketBackground"
              textAlign="center"
              fontWeight="bold"
              variant="body">
              View {tickets.length} tickets
            </Text>
          </Box>
        ) : null}
      </Box>
    </Pressable>
  );
}
