import * as React from "react"
import Svg, { Path, Mask, G } from "react-native-svg"
import { SvgIconProps } from "./svg-icon-props"

function SearchActive(props:SvgIconProps) {
  return (
    <Svg
      width={props.size || 30}
      height={props.size || 30}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.424 14.922a4.567 4.567 0 01-1.347-3.25c0-1.229.478-2.383 1.347-3.252a4.586 4.586 0 013.25-1.344c1.178 0 2.355.448 3.252 1.344a4.605 4.605 0 010 6.502 4.57 4.57 0 01-3.251 1.347 4.57 4.57 0 01-3.251-1.346zm12.234 4.066l-2.795-2.794c2.195-3 1.947-7.242-.761-9.95-2.995-2.993-7.864-2.991-10.854 0A7.624 7.624 0 003 11.671c0 2.05.798 3.977 2.248 5.427a7.645 7.645 0 005.426 2.245c1.593 0 3.181-.5 4.524-1.482l2.792 2.794a1.18 1.18 0 001.668-1.667z"
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
          d="M7.424 14.922a4.567 4.567 0 01-1.347-3.25c0-1.229.478-2.383 1.347-3.252a4.586 4.586 0 013.25-1.344c1.178 0 2.355.448 3.252 1.344a4.605 4.605 0 010 6.502 4.57 4.57 0 01-3.251 1.347 4.57 4.57 0 01-3.251-1.346zm12.234 4.066l-2.795-2.794c2.195-3 1.947-7.242-.761-9.95-2.995-2.993-7.864-2.991-10.854 0A7.624 7.624 0 003 11.671c0 2.05.798 3.977 2.248 5.427a7.645 7.645 0 005.426 2.245c1.593 0 3.181-.5 4.524-1.482l2.792 2.794a1.18 1.18 0 001.668-1.667z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#a)">
        <Path fill="#FC1055" d="M-39.8027 -37.7213H56.1973V58.2787H-39.8027z" />
      </G>
    </Svg>
  )
}

export default SearchActive;