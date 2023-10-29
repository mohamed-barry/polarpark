import React from 'react';
import Box from '../../general/Box/Box';
import Apple from '@app/assets/icons/logos/apple.svg';
import Facebook from '@app/assets/icons/logos/facebook.svg';
import Google from '@app/assets/icons/logos/google.svg';

/**
 * [SignOnOptions]: A layout of the alternative sign on methods.
 */
export default function SignOnOptions(): JSX.Element {
  return (
    <Box alignItems="flex-end" flexDirection="row" justifyContent="center">
      <Apple width={38} height={47} />
      <Facebook width={38} height={38} style={{marginHorizontal: 32}} />
      <Google width={38} height={38} />
    </Box>
  );
}
