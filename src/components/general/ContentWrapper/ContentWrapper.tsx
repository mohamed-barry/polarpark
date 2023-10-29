import React from 'react';
import {BoxProps} from '@shopify/restyle';
import {Theme} from '@app/config/theme';
import Box from '@app/components/general/Box/Box';

type ContentWrapperProps = BoxProps<Theme> & {
  children: React.ReactNode;
};

export default function ContentWrapper({
  children,
  ...props
}: ContentWrapperProps): JSX.Element {
  return (
    <Box bg="mainBackground" px="l" {...props}>
      {children}
    </Box>
  );
}
