import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Burger = (props) => (
    <Svg
    width={35}
    height={35}
    fill="#fff"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path d="M5 7h14M5 12h14M5 17h14" stroke="#fff" strokeLinecap="round" />
  </Svg>
)

export default Burger;
