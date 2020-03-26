import styled from 'styled-components'
import breakpoints from '../../particles/breakpoints'

const color = props => {
    if(!props.variant) return "#403e3e"
    switch (props.variant) {
        case "primary":
            return "#1E2127"
            break;
        case "secondary":
            return "#F7FBFF"
        default:
            return "#403e3e"
            break;
    }
}

const size = props => {
    if(!props.size) return "14"
    return props.size
}

const weight = props => {
    if(!props.weight) return "400"
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

const StyledText = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: ${props => weight(props)};
    font-size: ${props => size(props)}px;
    text-align: ${props => !props.align ? 'left' : props.align};
    color: ${props => color(props)};
    margin: ${props => props.margin};
    width: ${props => props.width};

    @media ${breakpoints.mobileL} {
        font-size: ${props => props.isEqualSize}px !important;
        text-align: ${props => props.isEqualAlign}px !important;
    }
`

export const StyledLink = styled.a`
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 14px;
    text-align: left;
    color: #1e2127;
    text-decoration: none;
`

export default StyledText