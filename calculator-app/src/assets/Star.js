import * as React from "react";
import Svg, { Path } from "react-native-svg";


const Star = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill={props.color}
    {...props}
  >
    <Path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.62L12 2L9.19 8.62L2 9.24L7.45 13.97L5.82 21L12 17.27Z" />
  </Svg>
);
export default Star;
