import * as React from "react"
import Svg, { Path } from "react-native-svg"

const LeftArrow = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M19 12H5M12 19l-7-7 7-7"
      stroke="#667080"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default LeftArrow;
