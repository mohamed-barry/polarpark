import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const MapPoint = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1383.5 1080" translateX={50} {...props}>
    <Path 
      d="M21.72 21.72C6.1 37.34 6.1 62.67 21.72 78.29c15.62 15.62 40.95 15.62 56.57 0 15.62-15.62 15.62-40.95 0-56.57-15.63-15.63-40.95-15.63-56.57 0z" 
      translateX={props.pointX}
      translateY={props.pointY}
      style={{
        fill: "black",
      }}
    />
    <Path
      d="M23.19 23.19C8.39 38 8.39 62 23.19 76.81c14.8 14.8 38.81 14.8 53.61 0 14.8-14.8 14.8-38.81 0-53.61C62 8.39 38 8.39 23.19 23.19z"
      translateX={props.pointX}
      translateY={props.pointY}
      style={{
        fill: "red",
      }}
    />
    <Path 
      d="m39.14 28.75.22-.24c6.16-6.54 16.68-6.11 22.29.92a14.769 14.769 0 0 1 1.8 15.53L51.04 76.13 37.01 46.08a14.754 14.754 0 0 1 2.13-17.33z" 
      translateX={props.pointX}
      translateY={props.pointY}
      style={{
        fill: "black",
      }}
    />
  </Svg>
)
export default MapPoint
