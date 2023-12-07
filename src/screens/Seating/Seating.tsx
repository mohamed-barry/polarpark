import React, {useState} from 'react';
import {Image, View, Pressable} from 'react-native';
import Text from '@app/components/general/Text/Text';
import ImageView from "react-native-image-viewing";

const seatingMapImage = require('@app/assets/images/woosox-seating-chart.jpg');

export default function Seating(): JSX.Element {
    const [imageVis, setImageVis] = useState(false);

    return (
        <>
        <View
            style={{height: "60%", padding: 10, marginLeft: 2}}>
            <Text  variant="heading1" textAlign="left">
                Seating Map
            </Text>
            <Text variant="subtitle1" textAlign="left">
                Here are the locations of the seating at Polar Park!{"\n"}
                Click on the image to enlargen it!
            </Text>
            <Pressable onPress={() => setImageVis(true)} style={{flex: 1}}>
                <Image
                    style={{width: undefined, height: undefined, flex: 1}}
                    resizeMode="contain"
                    source={seatingMapImage}
                />
            </Pressable>
        </View>
        <ImageView
            images={[seatingMapImage]}
            imageIndex={0}
            visible={imageVis}
            onRequestClose={() => setImageVis(false)}/>
        </>
    );
}