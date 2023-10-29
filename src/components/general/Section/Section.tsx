import {Theme} from '@app/config/theme';
import {SpacingShorthandProps} from '@shopify/restyle';
import React from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';

type SectionProps = SpacingShorthandProps<Theme> & {
  children: React.ReactNode;
  subtitle?: string;
  title?: string;
};

export default function Section({
  children,
  subtitle,
  title,
  ...props
}: SectionProps): JSX.Element {
  return (
    <Box bg="mainBackground" p="l" mb="m" pb="m" {...props}>
      <Text variant="heading2">{title}</Text>
      <Text variant="subtitle1">{subtitle}</Text>
      {children}
    </Box>
  );
}
