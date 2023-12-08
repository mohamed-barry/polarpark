
import { useState } from 'react';
import { View } from 'react-native';
import { Circle, SvgProps } from 'react-native-svg';
import SvgPanZoom, { SvgPanZoomElement } from 'react-native-svg-pan-zoom';
import MapLegend from './MapLegend';
import MapPoint from './Point';
import MapViewer from './MapViewer';
// import MainFloor from './MainFloor';

export default function InteractiveMap(): JSX.Element {
    let [floor, setFloor] = useState(2);

    return (
        <View style={{height: "100%", width: "100%"}}>
            {/* its saying that theres an error here but there isn't idk why */}
            {/* ok i do know why its a type script thing bc that library was obvi not made with ts in mind */}
            {/* <SvgPanZoom 
                initialZoom = {1.67}
                onZoom = {(zoom) => { console.log('onZoom:' + zoom) }}
                canvasHeight = {500}
                canvasWidth={500}
                >
                <MapViewer />
                <MapPoint pointX={100} pointY={900} onPress={()=>console.log("hi")}/>
            </SvgPanZoom> */}

            <MapViewer mapHeight="70%" mapWidth="100%" floor={floor}/>

            <View style={{backgroundColor: "white"}}>
                <MapLegend floor={floor} setFloor={setFloor}/>
            </View>
        </View>
    )
}

