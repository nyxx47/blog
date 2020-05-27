import styled from 'styled-components'
import breakpoints from '../../particles/breakpoints'

const color = props => {
  if (!props.variant) 
    return "#403e3e"
  switch (props.variant) {
    case "primary":
      return "#1E2127"
      break;
    case "secondary":
      return "#F7FBFF"
    case "grey":
      return "#7b7a8c"
    case "blue":
      return "#2525F0"
    case "white":
        return "#ffffff"
    case "dark":
      return "#64637B"
    case "heavy":
      return "#0b0b0e"
    default:
      return props.variant
      break;
  }
}

const size = props => {
  if (!props.size) 
    return "14"
  return props.size
}

const weight = props => {
  if (!props.weight) 
    return "400"
  switch (props.weight) {
    case "light":
      return "300"
      break;
    case "regular":
      return "400"
      break;
    case "medium":
      return "500"
      break;
    case "semi-bold":
      return "600"
      break;
    case "bold":
      return "700"

    default:
      break;
  }
}

const isFamily = props => {
  if (!props.family) 
    return "'Montserrat', sans-serif"
  switch (props.family) {
    case "quicksand":
      return "'Quicksand', sans-serif"
      break;
    case "montserrat":
      return "'Montserrat', sans-serif"
      break;
    case "daily":
      return "Daily"
      break;
    default:
      return "'Montserrat', sans-serif"
      break;
  }
}

const StyledText = styled.p `
    font-family: ${props => isFamily(props)};
    font-weight: ${props => weight(props)};
    font-size: ${props => size(props)}px;
    text-align: ${props => !props.align
  ? 'left'
  : props.align};
    color: ${props => color(props)};
    margin: ${props => props.margin};
    width: ${props => props.width};

    @media ${breakpoints.mobileL} {
        font-size: ${props => props.isEqualSize}px !important;
        text-align: ${props => props.isEqualAlign}px !important;
        margin: ${props => props.isEqualMargin};
    }
`

export const StyledLink = styled.a `
    font-family: ${props => isFamily(props)};
    font-weight: ${props => !props.weight
  ? 500
  : weight(props)};
    font-size: ${props => !props.size
    ? '14px'
    : size(props)}px;
    text-align: left;
    color: ${props => !props.variant ? "#1E2127" : color(props)};
    text-decoration: none;
    cursor: pointer;
`

export default StyledText