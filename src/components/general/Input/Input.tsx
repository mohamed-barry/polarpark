import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {
  ColorProps,
  createRestyleComponent,
  createVariant,
  layout,
  LayoutProps,
  SpacingShorthandProps,
  TypographyProps,
  VariantProps,
} from '@shopify/restyle';
import {Pressable} from 'react-native';
import theme, {Theme} from '@app/config/theme';
import Box from '../Box/Box';
import Icon from '../Icon/Icon';

const PressableWrapper = createRestyleComponent<
  LayoutProps<Theme> & React.ComponentProps<typeof Pressable>,
  Theme
>([layout], Pressable);

const InputWrapper = createRestyleComponent<
  VariantProps<Theme, 'inputVariants'> &
    ColorProps<Theme> &
    TypographyProps<Theme> &
    React.ComponentProps<typeof TextInput>,
  Theme
>([createVariant({themeKey: 'inputVariants'})], TextInput);

type InputProps = SpacingShorthandProps<Theme> &
  VariantProps<Theme, 'inputVariants'> & {
    iconName?: string;
    onChangeText: (value: string) => void;
    placeholder?: string;
    type?: 'text' | 'password';
    value: string;
  };

export default function Input({
  iconName,
  variant,
  onChangeText,
  placeholder,
  type = 'text',
  value,
  ...props
}: InputProps): JSX.Element {
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(true);

  const focus = () => setFocused(true);
  const blur = () => setFocused(false);
  const removeInput = () => onChangeText('');
  const changeVisibility = () => setVisible(!visible);

  return (
    <Box
      {...props}
      alignItems="center"
      flexDirection="row"
      borderRadius={12}
      bg="inputBackground"
      borderWidth={2}
      borderColor={focused ? 'inputFocus' : 'inputBackground'}
      overflow="hidden"
      px={iconName ? 'none' : 'm'}
      testID="input">
      {iconName && <Icon name={iconName} size={24} mx="m" focused={focused} />}
      <InputWrapper
        autoCapitalize="none"
        onFocus={focus}
        onBlur={blur}
        fontSize={16}
        fontFamily="NunitoSans-Regular"
        onChangeText={onChangeText}
        secureTextEntry={type !== 'text' && visible}
        placeholderTextColor={theme.colors.inputPlaceholder}
        placeholder={placeholder}
        variant={variant}
        value={value}
      />
      {focused ? (
        type === 'text' ? (
          <PressableWrapper
            height="100%"
            justifyContent="center"
            maxHeight={54}
            onPress={removeInput}>
            <Icon name="x-circle" mx="m" />
          </PressableWrapper>
        ) : (
          <PressableWrapper
            height="100%"
            justifyContent="center"
            maxHeight={54}
            onPress={changeVisibility}>
            <Icon
              name={visible ? 'eye-off' : 'eye'}
              color={visible ? 'inputBlur' : 'inputFocus'}
              mx="m"
            />
          </PressableWrapper>
        )
      ) : null}
    </Box>
  );
}
