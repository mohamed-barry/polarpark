import React from 'react';
import Box from '../../general/Box/Box';
import Text from '../../general/Text/Text';

function HorizontalRule() {
  return (
    <Box
      alignSelf="center"
      bg="horizontalRule"
      flexGrow={1}
      height={1}
      mx="m"
    />
  );
}

export interface TextDividerProps {
  /* The label that will be placed between the line */
  label?: string;
}

/**
 * [TextDivider]: A horizontal rule with optional text in the middle
 */
export default function TextDivider({
  label = '',
}: TextDividerProps): JSX.Element {
  return (
    <Box flexDirection="row" my="l">
      <HorizontalRule />
      <Text testID="label" variant="subtitle1">
        {label}
      </Text>
      <HorizontalRule />
    </Box>
  );
}
