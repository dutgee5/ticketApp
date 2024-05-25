import * as React from "react"
import Svg, { Path, Mask, G } from "react-native-svg"
import { SvgIconProps } from "./svg-icon-props"

function SvgComponent(props:SvgIconProps) {
  return (
    <Svg
      width={props.size || 30}
      height={props.size ||30}
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.569 12.221c0-4.006-3.26-7.266-7.266-7.266-4.008 0-7.267 3.26-7.267 7.266 0 1.492.453 2.88 1.228 4.035 1.435-1.542 3.672-2.492 6.107-2.492 2.389 0 4.588.912 6.026 2.4a7.216 7.216 0 001.172-3.943zm-16.766 0c0-5.238 4.26-9.5 9.5-9.5 5.238 0 9.5 4.262 9.5 9.5s-4.262 9.5-9.5 9.5c-5.24 0-9.5-4.262-9.5-9.5zm11.5-2.224a2 2 0 11-4 .001 2 2 0 014 0z"
        fill="#C2C6CE"
      />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={2}
        y={2}
        width={20}
        height={20}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.569 12.221c0-4.006-3.26-7.266-7.266-7.266-4.008 0-7.267 3.26-7.267 7.266 0 1.492.453 2.88 1.228 4.035 1.435-1.542 3.672-2.492 6.107-2.492 2.389 0 4.588.912 6.026 2.4a7.216 7.216 0 001.172-3.943zm-16.766 0c0-5.238 4.26-9.5 9.5-9.5 5.238 0 9.5 4.262 9.5 9.5s-4.262 9.5-9.5 9.5c-5.24 0-9.5-4.262-9.5-9.5zm11.5-2.224a2 2 0 11-4 .001 2 2 0 014 0z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#a)">
        <Path fill="#FC1055" d="M-40 -38H56V58H-40z" />
      </G>
    </Svg>
  )
}

export default SvgComponent