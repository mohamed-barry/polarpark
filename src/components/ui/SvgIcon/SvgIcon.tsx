import { SvgProps } from 'react-native-svg'

type SvgIconProps = {
    SVG: React.FC<SvgProps>
    focused: boolean
    size: number
    onPress?: () => void
}

export default function SvgIcon({SVG, focused, size, onPress} :SvgIconProps): JSX.Element {
    return (
    <SVG 
        color={focused ? "gray" : "lightgray"}
        width={size}
        height={size}
        translateX={-1}
        translateY={3}
        onPress={onPress}
    />);
}