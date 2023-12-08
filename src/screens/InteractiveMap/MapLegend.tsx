import { ColorValue } from 'react-native';
import { Rect, Svg, Text, SvgProps, G, GProps, Circle, Path, Polygon } from 'react-native-svg';
import MapPoint from './Point';

type LegendProps = SvgProps & {
    floor: number,
    setFloor: React.Dispatch<React.SetStateAction<number>>
}

export default function MapLegend(props: LegendProps): JSX.Element {

    const floorDown = () => {
        console.log("floor down");
        if (props.floor > 1) {
            props.setFloor(props.floor - 1);
        } else {
            props.setFloor(1);
        }
    }

    const floorUp = () => {
        console.log("floor up");
        if (props.floor < 3) {
            props.setFloor(props.floor + 1);
        } else {
            props.setFloor(3);
        }
    }

    const floorDisp = () => {
        return "F" + props.floor
    }

    return (
        <Svg {...props}>
            <Rect stroke={"white"} fill={"white"} width="100%" height="30%"/>
            <LegendElement X={10} Y={45} color={"#CF2030"} text='Concessions' />
            <LegendElement X={10} Y={80} color={"#5080C9"} text='Restrooms' />
            <LegendElement X={10} Y={115} color={"#FFFF00"} text='Merchandise' />
            <LegendElement X={10} Y={150} color={"#84CE0A"} text='Fan Services' />
            <LegendElement X={150} Y={10} color={"#092440"} text='Seating' />
            <LegendElement X={150} Y={45} color={"#006837"} text='Terraces' />
            <LegendElement X={150} Y={80} color={"#39B54A"} text='The Berm' />
            <LegendElement X={150} Y={115} color={"#F7931E"} text='Stairs & Elevators' />
            <LegendElement X={150} Y={150} color={"#0000FF"} text="Batter's Box" />
            <Text fill={"black"} x={40} y={27} fontSize={16}>POI</Text>

            <Circle cx={350} cy={35} r={20} stroke={"black"} strokeWidth={3} fill={"white"} onPress={floorUp}/>
            <Polygon points="340,42 360,42 350,27" fill={"black"} onPress={floorUp}/>
            <Text fill={"black"} x={337} y={105} fontSize={24} fontWeight={"bold"}>{floorDisp()}</Text>
            <Circle cx={350} cy={155} r={20} stroke={"black"} strokeWidth={3} fill={"white"} onPress={floorDown}/>
            <Polygon points="340,148 360,148 350,163" fill={"black"} onPress={floorDown}/>

            <MapPoint pointX={12} pointY={-140} width={450} height={450} />
            
        </Svg>
    )
}

type ElementProps = {
    X: number,
    Y: number,
    color: ColorValue,
    text: string
}

function LegendElement(props: ElementProps): JSX.Element {
    return (
        <G x={props.X} y={props.Y}>
            <Rect fill={props.color} width={20} height={20} />
            <Text fill={"black"} x={25} y={17} fontSize={16}>{props.text}</Text>
        </G>
    )
}