import styled from 'styled-components'

const StyledBadge = styled.div`
    display:inline-block;
    width: fit-content;
    height: auto;
    padding: 10px 20px 10px 20px;
    border-radius: 7px;
    margin-top: ${props => !props.marginTop ? undefined : props.marginTop};
    background-color: ${props => !props.backgroundColor ? '#ffd7d7' : props.backgroundColor};

    p{
        margin:0;
    }
`

export default StyledBadge