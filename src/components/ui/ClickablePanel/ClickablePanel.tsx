import React from 'react';
import {Pressable, Image} from 'react-native';
import {SpacingShorthandProps} from '@shopify/restyle';
import {Theme} from '@app/config/theme';
import Box from '../../general/Box/Box';
import Text from '../../general/Text/Text';

type PanelProps = SpacingShorthandProps<Theme> & {
    active?: boolean;
    imageSrc: any;
    onPress?: () => void;
    text: string;
};

export default function ClickablePanel({
    active = false,
    onPress = () => {},
    imageSrc = null,
    text = "",
    ...props
}:PanelProps): JSX.Element {
    return (
        <Box
            borderRadius={12}
            flex={1}
            height={128}
            width="100%"
            bg="placeholder"
            {...props}
        >
            <Pressable onPress={onPress}>
                <Image
                    style={{width: '100%', height: 90, borderRadius: 12}}
                    resizeMode="cover"
                    source={imageSrc}
                />
                <Text color="black" fontWeight="bold" variant="heading2" textAlign="center">
                    {text}
                </Text>
            </Pressable>
        </Box>
    )
};