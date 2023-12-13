
import {useState} from 'react';
import {View} from 'react-native';
import SvgPanZoom, {SvgPanZoomElement} from 'react-native-svg-pan-zoom';
import MapLegend from './MapLegend';
import MapPoint from './Point';
import MapViewer, { DisplayFloor } from './MapViewer';
import { Circle } from 'react-native-svg';
// import MainFloor from './MainFloor';

export default function InteractiveMap(): JSX.Element {
  let [floor, setFloor] = useState(2);

    return (
        <View style={{height: "100%", width: "100%"}}>
            {/* its saying that theres an error here but there isn't idk why */}
            {/* ok i do know why its a type script thing bc that library was obvi not made with ts in mind */}
            <View style={{height: "70%", width: "100%"}}>
                {/**@ts-ignore */}
                <SvgPanZoom 
                    initialZoom = {0.5}
                    // onZoom = {(zoom) => { console.log('onZoom:' + zoom) }}
                    canvasHeight = {1080}
                    canvasWidth={1392}
                    
                    >

                    {/* <Circle cx={10} cy={10} r={20} fill={"red"} /> */}
                    <DisplayFloor floor_num={floor} />
                    {/**@ts-ignore */}
                    <SvgPanZoomElement
                        onClick={(evt)=>{console.log(evt)}}>
                       {/* <MapPoint pointX={10} pointY={10}></MapPoint> */} 

                        {/* i figured out this too late, but go nuts */}
                    </SvgPanZoomElement>

                    {/* <MapPoint pointX={100} pointY={900} onPress={()=>console.log("hi")}/> */}
                </SvgPanZoom>
            </View>
            

            {/* <MapViewer mapHeight="70%" mapWidth="100%" floor={floor}/> */}

            <View style={{backgroundColor: "white", height: "30%", width: "100%"}}>
                <MapLegend floor={floor} setFloor={setFloor}/>
            </View>
        </View>
    )
}

