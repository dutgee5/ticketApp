import * as React from "react"
import Svg, { Path, Mask, G } from "react-native-svg"
import { SvgIconProps } from "./svg-icon-props"

function SearchPassive(props:SvgIconProps) {
  return (
    <Svg
      width={props.size ||30}
      height={props.size || 30}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.915 15.431a5.283 5.283 0 01-1.557-3.76c0-1.42.552-2.756 1.557-3.76a5.304 5.304 0 013.759-1.555c1.362 0 2.724.519 3.761 1.555a5.326 5.326 0 010 7.52 5.285 5.285 0 01-3.76 1.558 5.285 5.285 0 01-3.76-1.558zm12.743 3.557l-2.795-2.794c2.195-3 1.947-7.242-.761-9.95-2.995-2.993-7.864-2.991-10.854 0A7.624 7.624 0 003 11.671c0 2.05.798 3.977 2.248 5.427a7.645 7.645 0 005.426 2.245c1.593 0 3.181-.5 4.524-1.482l2.792 2.794a1.18 1.18 0 001.668-1.667z"
        fill="#C2C6CE"
      />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={3}
        y={4}
        width={18}
        height={17}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.915 15.431a5.283 5.283 0 01-1.557-3.76c0-1.42.552-2.756 1.557-3.76a5.304 5.304 0 013.759-1.555c1.362 0 2.724.519 3.761 1.555a5.326 5.326 0 010 7.52 5.285 5.285 0 01-3.76 1.558 5.285 5.285 0 01-3.76-1.558zm12.743 3.557l-2.795-2.794c2.195-3 1.947-7.242-.761-9.95-2.995-2.993-7.864-2.991-10.854 0A7.624 7.624 0 003 11.671c0 2.05.798 3.977 2.248 5.427a7.645 7.645 0 005.426 2.245c1.593 0 3.181-.5 4.524-1.482l2.792 2.794a1.18 1.18 0 001.668-1.667z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#a)">
        <Path fill="#373A42" d="M-39.8027 -37.7213H56.1973V58.2787H-39.8027z" />
      </G>
    </Svg>
  )
}

export default SearchPassive;