import styled from 'styled-components'

const backgroundColor = props => {
    
    switch(props.variant){
        case 'primary':
            return "#1E2127"
        break;
        case 'secondary':
            return "#EDEDED"
        default:
            return "none"
        break;
    }
}

const StyledButtonIcon = styled.div`
    display: inline-flex;
    background: ${props => backgroundColor(props)};
    width: auto;
    padding: 10px 30px 10px 30px;
    border-radius: 8px;
    border: ${props => !props.outline ? undefined : "1px solid #1E2127"};
`

export default StyledButtonIcon