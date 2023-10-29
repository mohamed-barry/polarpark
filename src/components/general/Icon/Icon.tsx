import React from 'react';
import {
  createRestyleComponent,
  SpacingShorthandProps,
  spacingShorthand,
  ColorProps,
  LayoutProps,
  color,
  layout,
} from '@shopify/restyle';
import {Theme} from '@app/config/theme';
import AppIcon from '@app/assets/icons';

const IconWrapper = createRestyleComponent<IconProps, Theme>(
  [spacingShorthand, color, layout],
  AppIcon,
);

export type IconProps = SpacingShorthandProps<Theme> &
  ColorProps<Theme> &
  LayoutProps<Theme> & {
    name: string;
    size?: number;
    focused?: boolean;
  };

export default function Icon({
  name,
  focused = false,
  size = 24,
  color,
  ...props
}: IconProps) {
  return (
    <IconWrapper
      {...props}
      name={name}
      size={size}
      width={size}
      height={size}
      flexGrow={0}
      justifyContent="center"
      color={color ? color : focused ? 'inputFocus' : 'inputBlur'}
    />
  );
}
