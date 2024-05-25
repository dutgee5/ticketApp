import * as React from "react"
import Svg, { Path, Mask, G } from "react-native-svg"
import {    SvgIconProps } from "./svg-icon-props"

export const  HomeActiveIcon = (props:SvgIconProps) => {
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
        d="M16.102 21.01h2.023c1.108 0 2.01-.901 2.01-2.01l.075-6.646a1.998 1.998 0 001.823-1.324 2 2 0 00-.556-2.186l-7.64-6.016a3.277 3.277 0 00-4.35-.002l-6.81 6.018a1.999 1.999 0 00-.556 2.186c.282.778.998 1.298 1.898 1.33V19c0 1.109.902 2.01 2.01 2.01h3.71a2.146 2.146 0 002.144-2.143v-3.271c0-.38.31-.69.69-.69h.695c.38 0 .69.31.69.69v3.27c0 1.183.962 2.144 2.144 2.144z"
        fill={props.color ?? "#FC1055"}
      />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={2}
        y={2}
        width={21}
        height={20}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.102 21.01h2.023c1.108 0 2.01-.901 2.01-2.01l.075-6.646a1.998 1.998 0 001.823-1.324 2 2 0 00-.556-2.186l-7.64-6.016a3.277 3.277 0 00-4.35-.002l-6.81 6.018a1.999 1.999 0 00-.556 2.186c.282.778.998 1.298 1.898 1.33V19c0 1.109.902 2.01 2.01 2.01h3.71a2.146 2.146 0 002.144-2.143v-3.271c0-.38.31-.69.69-.69h.695c.38 0 .69.31.69.69v3.27c0 1.183.962 2.144 2.144 2.144z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#a)">
        <Path fill="#FC1055" d="M-39.8027 -37.7204H56.1973V58.2796H-39.8027z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.547 13.297a1.454 1.454 0 110-2.908 1.454 1.454 0 010 2.908z"
          fill="#fff"
        />
      </G>
    </Svg>
  )
}

export default HomeActiveIcon