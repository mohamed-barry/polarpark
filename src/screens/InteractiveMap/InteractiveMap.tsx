import {default as MainFloor} from '@app/assets/maps/PolarPark Beta.svg';
import {useState} from 'react';
import {View} from 'react-native';
import {Circle, SvgProps} from 'react-native-svg';
import SvgPanZoom, {SvgPanZoomElement} from 'react-native-svg-pan-zoom';
import MapLegend from './MapLegend';
import MapPoint from './Point';
// import MainFloor from './MainFloor';

export default function InteractiveMap(): JSX.Element {
  let [floor, setFloor] = useState(2);

  return (
    <View style={{height: '100%', width: '100%'}}>
      <View style={{height: '70%', width: '100%'}}>
        {/* its saying that theres an error here but there isn't idk why */}
        {/* ok i do know why its a type script thing bc that library was obvi not made with ts in mind */}
        <SvgPanZoom
          initialZoom={1.67}
          onZoom={zoom => {
            console.log('onZoom:' + zoom);
          }}
          canvasHeight={500}
          canvasWidth={500}>
          <DisplayFloor
            floor_num={floor}
            onPress={() => console.log('stinky')}
          />
          <MapPoint
            pointX={100}
            pointY={900}
            onPress={() => console.log('hi')}
          />
        </SvgPanZoom>
      </View>
      <View style={{backgroundColor: 'white'}}>
        <MapLegend floor={floor} setFloor={setFloor} />
      </View>
    </View>
  );
}

type DisplayFloorProp = SvgProps & {
  floor_num: number;
};

function DisplayFloor(props: DisplayFloorProp): JSX.Element {
  if (props.floor_num == 1) {
    return <></>;
  } else if (props.floor_num == 2) {
    return <MainFloor {...props}></MainFloor>;
  } else {
    return <></>;
  }
}
