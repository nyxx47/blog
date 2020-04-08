import React from 'react'
import {Text} from '../../atoms'
import StyledBadge from './badge.styles.jsx'
import {string} from 'prop-types'

const Badge = ({title, backgroundColor, color, marginTop, props}) => {

    return (
        <StyledBadge marginTop={marginTop} backgroundColor={backgroundColor} {...props}>
            <Text variant={color} size="12" weight="semi-bold">{title}</Text>
        </StyledBadge>
    )
}

Badge.propTypes = {
    title: string,
    backgroundColor: string,
    color: string
}

export default Badge