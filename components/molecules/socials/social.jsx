import React from 'react'
import {Text} from '../../atoms'
import StyledSocial from './social.styles.jsx'

const Social = ({direction, items, props}) => {

    return (
        <StyledSocial direction={direction} {...props}>
            {
                items.map(item => (
                    <Text href={item.url} key={item.id}>{item.title}</Text>
                ))
            }
        </StyledSocial>
    )
}

export default Social