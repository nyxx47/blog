import styled from 'styled-components'

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
    boxSizing: ${props => props.boxSizing};
    padding: ${props => props.padding};
    box-shadow: ${props => props.boxShadow}

`

export default StyledContainer