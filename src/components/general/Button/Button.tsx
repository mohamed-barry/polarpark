import React from 'react';
import {Theme} from '@app/config/theme';
import {
  createRestyleComponent,
  createVariant,
  spacingShorthand,
  SpacingShorthandProps,
  TypographyProps,
  VariantProps,
} from '@shopify/restyle';
import {Pressable} from 'react-native';
import Text from '../Text/Text';

const PressableWrapper = createRestyleComponent<
  VariantProps<Theme, 'buttonVariants'> &
    SpacingShorthandProps<Theme> &
    React.ComponentProps<typeof Pressable>,
  Theme
>([createVariant({themeKey: 'buttonVariants'}), spacingShorthand], Pressable);

type ButtonProps = SpacingShorthandProps<Theme> &
  VariantProps<Theme, 'buttonVariants'> &
  TypographyProps<Theme> & {
    title: string;
    onPress: () => void;
  };

export default function Button({
  title,
  onPress,
  variant,
  ...props
}: ButtonProps) {
  return (
    <PressableWrapper onPress={onPress} variant={variant} {...props}>
      <Text color="white" fontWeight="bold" variant="body">
        {title}
      </Text>
    </PressableWrapper>
  );
}
