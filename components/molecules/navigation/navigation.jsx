import React from 'react'
import Link from 'next/link'
import Text from '../../atoms/texts'

import { StyledNavigation } from "./navigation.styles";
import { string, arrayOf, shape } from 'prop-types';

const Navigation =  ({direction, items, padding, isEqualPadding}) => (
    <StyledNavigation direction={direction} padding={padding} isEqualPadding={isEqualPadding}>
        {
            items.map(item => (
                <Text href={item.url} key={item.id}>{item.title}</Text>
            ))
        }
    </StyledNavigation>
)

Navigation.propTypes = {
    direction: string,
    items: arrayOf(
        shape({
            title: string.isRequired,
            url: string.isRequired
        })
    )
}

Navigation.defaultProps = {
    direction: "horizontal",
    items: []
}

export default Navigation