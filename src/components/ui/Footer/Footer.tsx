import React from 'react';
import Box from '@app/components/general/Box/Box';
import Text from '@app/components/general/Text/Text';
import Link from '@app/components/general/Link/Link';

interface FooterProps {
  text: string;
}

export default function Footer({text}: FooterProps) {
  return (
    <Box bg="mainBackground" alignItems="center" p="l">
      <Text color="mainText" variant="subtitle2">
        {text}
      </Text>
      <Link
        color="linkDefault"
        fontWeight="bold"
        onPress={() => {}}
        variant="subtitle2">
        Report an issue
      </Link>
    </Box>
  );
}
