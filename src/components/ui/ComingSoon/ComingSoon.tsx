import React from 'react';
import Box from '../../general/Box/Box';
import Text from '../../general/Text/Text';
import Logo from '@app/assets/logos/woosox-letter-heart.svg';

export default function ComingSoon() {
  return (
    <Box
      alignItems="center"
      bg="mainBackground"
      height="100%"
      justifyContent="center">
      <Logo height={48} width={48} />
      <Text
        color="comingSoonPlaceholderText"
        fontWeight="800"
        mt="l"
        variant="heading2">
        COMING SOON
      </Text>
    </Box>
  );
}
