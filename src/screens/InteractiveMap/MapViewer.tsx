import {default as MainFloor} from '@app/assets/maps/PolarPark Beta.svg';
import { useRef, useState } from 'react';
import { NativeSyntheticEvent } from 'react-native';
import { Animated, DimensionValue, Image, PanResponder, Pressable, GestureResponderEvent } from 'react-native';
import { SvgProps, Svg, G } from 'react-native-svg';
import MapPoint from './Point';

type ViewerProps = SvgProps & {
    startX?: number;
    startY?: number;
    startZoom?: number;
    mapWidth: DimensionValue;
    mapHeight: DimensionValue;
    floor: number;
}

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const AnimatedPressable1 = Animated.createAnimatedComponent(Pressable);
const AnimatedPressable2 = Animated.createAnimatedComponent(Pressable);
const AnimatedDisplayFloor = Animated.createAnimatedComponent(DisplayFloor);
const AnimatedG = Animated.createAnimatedComponent(G);

export default function MapViewer(props: ViewerProps): JSX.Element {
    // const pan = useRef(new Animated.ValueXY()).current;
    const pan = useRef(new Animated.ValueXY()).current;
    const zoom = useRef(new Animated.Value(1)).current;
    const [vb, setVB] = useState("0 0 1392 1080");
    const [scale, setScale] = useState(3);
    let mapx = 0;
    let mapy = 0;
    let zoomx = 1392;
    let zoomy = 1080;

    const zoomOutAnimation = Animated.timing(
        zoom,
        {
            toValue: Animated.subtract(zoom, 1),
            duration: 300,
            useNativeDriver: false
        }
    );

    const zoomInAnimation = Animated.timing(
        zoom,
        {
            toValue: Animated.add(zoom, 1),
            duration: 300,
            useNativeDriver: false
        }
    );

    pan.addListener(({x, y}) => {
        console.log("change in pos")
        mapx = (x*-1);
        mapy = (y*-1);
        setVB(`${mapx} ${mapy} ${zoomx} ${zoomy}`);
        console.log(`${mapx} ${mapy} ${zoomx} ${zoomy}`)
    });

    // zoom.addListener(({value}) => {
    //     console.log("change in zoom")
    //     zoomx = 692/value;
    //     zoomy = 540/value;
    //     setVB(`${mapx} ${mapy} ${zoomx} ${zoomy}`);
    // })

    const panResponder = useRef(
        PanResponder.create({
          onMoveShouldSetPanResponder: () => true,
          onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {useNativeDriver: false}),
          onPanResponderRelease: () => {
            pan.extractOffset();
          },
          onShouldBlockNativeResponder: () => false,
        }),
      ).current;
    
    const test = Animated.event<GestureResponderEvent>([], {useNativeDriver: false, listener(a)  {
        zoom.setOffset(1);
        zoom.extractOffset();
    }});

    const zoomOut = () => {
        setScale(scale-1);
    }

    const zoomIn = () => {
        setScale(scale+1);
    }
    

    return (
        <>
            <Animated.View
                style={{
                    // transform: [{translateX: pan.x}, {translateY: pan.y}, {scale: scale}],
                    transform: [{scale: scale}],
                    width: props.mapWidth,
                    height: props.mapHeight
                }}>
                <AnimatedSvg viewBox={vb} style={{width: props.mapWidth, height: props.mapHeight}}  {...props} >
                    <AnimatedG {...panResponder.panHandlers}>
                        <AnimatedDisplayFloor floor_num={props.floor} />
                    </AnimatedG>
                    <MapPoint pointX={10} pointY={10} onPress={() => console.log("sjahdk")}/>
                </AnimatedSvg>
                
            </Animated.View>
            <AnimatedPressable1 onPress={zoomIn} style={{position:"absolute", top: 10, right: "5%", zIndex: 2}}>
                <Image source={require('@app/assets/images/plus_icon.png')} style={{width: 50, height: 50}}/>
            </AnimatedPressable1>
            <AnimatedPressable2 onPress={zoomOut} style={{position:"absolute", top: 70, right: "5%", zIndex: 2}}>
                <Image source={require('@app/assets/images/minus_icon.png')} style={{width: 50, height: 50}} />
            </AnimatedPressable2>
        </>
    );
}

type DisplayFloorProp = {
    floor_num: number
};

function DisplayFloor(props: DisplayFloorProp): JSX.Element {
    if (props.floor_num == 1) {
        return (<></>)
    } else if (props.floor_num == 2) {
        return (<MainFloor></MainFloor>)
    } else {
        return (<></>)
    }
}