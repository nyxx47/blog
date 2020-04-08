import styled from 'styled-components'
import breakpoints from '../../particles/breakpoints'

export const StyledNavigation = styled.nav`
    display: flex;
    flex-direction: ${props => props.direction !== "horizontal" ? "column" : undefined };
    padding: ${props => !props.padding ? '16px' : props.padding};

    a + a {
        margin-left: ${props => props.direction === "horizontal" ? "50px" : undefined};
        margin-top: ${props => props.direction !== "horizontal" ? "24px" : undefined};
    }

    @media ${breakpoints.mobileL} {
        padding: ${props => props.isEqualPadding};

        a{
            font-size:12px;
        }

        a + a{
            margin-left: 30px;
        }
    }
`

export default StyledNavigation;