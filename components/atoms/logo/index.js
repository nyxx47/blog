import * as React from "react"

const Logo = ({width, heigh, props}) => (
    <svg width={width} height={heigh} viewBox="0 0 31.278 31.278" {...props}>
      <g data-name="Group 167" transform="translate(-37.861 -19.861)">
        <rect
          data-name="Rectangle 128"
          width={27}
          height={27}
          rx={8}
          transform="translate(40 22)"
          fill="#1e2127"
          opacity={0.505}
        />
        <rect
          data-name="Rectangle 127"
          width={27}
          height={27}
          rx={8}
          transform="rotate(10.02 -92.004 252.598)"
          fill="#1e2127"
        />
        <text
          transform="translate(49 41)"
          fill="#fff"
          fontSize={24}
          fontFamily="GoodDogPlain, GoodDog Plain"
        >
          <tspan x={0} y={0}>
            {"a"}
          </tspan>
        </text>
      </g>
    </svg>
  )

  export default Logo