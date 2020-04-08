import styled from 'styled-components'
import breakpoints from '../../particles/breakpoints'

const isDisplayProps = props => {

    if(!props.display) return "flex"

    switch(props.display){
        case "flex":
            return "flex";
            break;
        case "inline-flex":
            return "inline-flex";
            break;
        default:
            return "flex";
            break
    }
}

const flexDirection = props => {

    switch (props.flexDirection) {
        case "column":
            return "column";
            break;
        case "column-reverse":
            return "column-reverse";
            break;
        case "row":
            return "row";
            break;
        case "row-reverse":
            return "row-reverse";
            break;
        case "inherit":
            return "initial";
            break;
        
        default:
            return "row";
            break;
    }
}

export const StyledContainer = styled.div`
    display: ${props => isDisplayProps(props)};
    width: ${props => props.isEqualWidth};
    height: ${props => props.isEqualHeight};
    background: ${props => !props.backgroundColor ? 'none' : props.backgroundColor};
    flex-direction: ${props => flexDirection(props)};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    box-sizing: ${props => props.boxSizing};
    padding: ${props => props.padding};
    box-shadow: ${props => props.boxShadow};
    position: ${props => props.position};
    z-index: ${props => !props.zIndex ? undefined : props.zIndex};


      &.hero{

        @media ${breakpoints.laptopL} {
            
        }
    
        @media ${breakpoints.laptop} {
            padding: 0 50px 0 50px;
        }
    
        @media ${breakpoints.tablet} {
            flex-direction: column-reverse;
            padding: 50px 25px 0 25px;
        }
      }

      &.section{

        @media ${breakpoints.laptopL} {
            
        }
    
        @media ${breakpoints.laptop} {
            padding: 25px;
        }
    
        @media ${breakpoints.tablet} {
            padding: 25px;
        }
      }
`

export default StyledContainer