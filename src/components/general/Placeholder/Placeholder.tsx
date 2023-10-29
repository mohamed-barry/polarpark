import {Theme} from '@app/config/theme';
import {LayoutProps, SpacingShorthandProps} from '@shopify/restyle';
import React from 'react';
import Box from '../Box/Box';

type PlaceholderProps = LayoutProps<Theme> & SpacingShorthandProps<Theme>;

export default function Placeholder({...props}: PlaceholderProps) {
  return (
    <Box
      bg="placeholder"
      borderRadius={12}
      flex={1}
      height={128}
      width="100%"
      {...props}
    />
  );
}
