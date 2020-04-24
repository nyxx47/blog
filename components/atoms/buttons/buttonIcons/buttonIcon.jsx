import React from 'react'
import { Icon } from '../../../atoms'

import StyledButtonIcon from './buttonIcon.style.jsx'

const ButtonIcon = ({name, variant, fill, outline, margin}) => {

    return(
        <StyledButtonIcon variant={variant} outline={outline} margin={margin}>
            <Icon name={name} width="0.5em" fill={fill}/> 
        </StyledButtonIcon>
    )
}

export default ButtonIcon