import React from 'react'

import StyledText, {StyledLink} from './text.styles.jsx'
import { string } from 'prop-types'

const Text = ({children, href, target, variant, size, weight, align, isEqualSize, isEqualAlign, margin, width, ...props}) => {

    if(!href)
        return(
            <StyledText 
            variant={variant} 
            size={size} 
            weight={weight} 
            align={align}
            isEqualSize={isEqualSize}
            isEqualAlign={isEqualAlign}
            margin={margin}
            width={width}
            {...props}
            >
                {children}
            </StyledText>
        )

    return (
        <StyledLink href={href} variant={variant} target={target}>
            {children}
        </StyledLink>
    )
}

Text.propTypes = {
    variant: string,
    size: string,
    weight: string,
    align: string,
    isEqualSize: string,
    isEqualAlign: string
}

export default Text