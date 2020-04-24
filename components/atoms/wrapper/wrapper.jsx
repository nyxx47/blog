import React from 'react'
import StyledWrapper from './wrapper.styles.jsx'

const Wrapper = ({children}) => {

    return(
        <StyledWrapper>
            {children}
        </StyledWrapper>
    )
}

export default Wrapper