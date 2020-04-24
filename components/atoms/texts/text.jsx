import React from 'react'

import StyledText, {StyledLink} from './text.styles.jsx'
import { string } from 'prop-types'
import Link from 'next/link'

const Text = ({children, href, family, target, variant, size, weight, align, isEqualSize, isEqualAlign, margin, width, isEqualMargin, ...props}) => {

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
            family={family}
            isEqualMargin={isEqualMargin}
            {...props}
            >
                {children}
            </StyledText>
        )

    return (
        <Link href={href} prefetch={false}>
            <StyledLink  variant={variant} target={target} family={family} size={size} weight={weight} >
                {children}
            </StyledLink>
        </Link>
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