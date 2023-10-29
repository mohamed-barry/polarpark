import React from 'react';
import {Pressable} from 'react-native';
import {Theme} from '@app/config/theme';
import {
  createRestyleComponent,
  SpacingShorthandProps,
  spacingShorthand,
  LayoutProps,
} from '@shopify/restyle';
import Icon, {IconProps} from '../Icon/Icon';

const PressableWrapper = createRestyleComponent<
  LayoutProps<Theme> &
    SpacingShorthandProps<Theme> &
    React.ComponentProps<typeof Pressable>,
  Theme
>([spacingShorthand], Pressable);

type PressableIconProps = IconProps & {
  onPress: () => void;
};

export default function PressableIcon({
  color,
  name,
  onPress,
  size,
  ...props
}: PressableIconProps): JSX.Element {
  return (
    <PressableWrapper
      alignItems="center"
      justifyContent="center"
      height={32}
      width={32}
      onPress={onPress}
      {...props}>
      <Icon
        name={name}
        size={size}
        color={color ? color : 'iconDefaultColor'}
      />
    </PressableWrapper>
  );
}
