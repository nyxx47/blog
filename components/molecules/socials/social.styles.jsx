import styled from 'styled-components'

const StyledSocial = styled.nav`
    display: flex;
    flex-direction: ${props => props.direction !== "horizontal" ? "column" : undefined };
    padding: ${props => !props.padding ? '16px' : props.padding};

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        width:40px;
        height:40px;
        transition: .5s ease;
        border-radius: 10px;
    }

    a:hover{
        background: #1e2127;
        color: #ffffff;
    }

    a + a {
        margin-left: ${props => props.direction === "horizontal" ? "50px" : undefined};
        margin-top: ${props => props.direction !== "horizontal" ? "24px" : undefined};
    }
`

export default StyledSocial