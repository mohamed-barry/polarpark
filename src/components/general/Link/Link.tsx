import React from 'react';
import {Pressable} from 'react-native';
import {Theme} from '@app/config/theme';
import Text from '@app/components/general/Text/Text';
import {
  ColorProps,
  SpacingShorthandProps,
  TypographyProps,
  VariantProps,
} from '@shopify/restyle';

type LinkProps = SpacingShorthandProps<Theme> &
  ColorProps<Theme> &
  VariantProps<Theme, 'textVariants'> &
  TypographyProps<Theme> & {
    children: React.ReactNode;
    onPress: () => void;
  };

export default function Link({children, onPress, ...props}: LinkProps) {
  return (
    <Pressable onPress={onPress}>
      <Text {...props}>{children}</Text>
    </Pressable>
  );
}
