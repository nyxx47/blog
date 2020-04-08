import styled from 'styled-components'

const StyledBackgroundImage = styled.div`
    width: ${props => !props.width ? '400px' : props.width};
    height: ${props => !props.height ? '250px' : props.height};
    background-image: url(${props => props.src});
    background-size: ${props => props.size};
    background-repeat: no-repeat;
    border-radius: ${props => !props.radius ? undefined : props.radius};
    
`

export default StyledBackgroundImage