import * as React from "react";
import Svg, { Path } from "react-native-svg";

const History = (props) => (
  <Svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 24 24" 
  {...props}
  fill="#fff"
  width={50}
  height={50}>
    <Path d="M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3" />
  </Svg>
);
export default History;

