import React from 'react'
import StyledRows from './row.styles.jsx'
import {node} from 'prop-types'

const Rows = ({children, props}) => {

    return (
        <StyledRows {...props} className="rowss">
            {children}
        </StyledRows>
    )
}

// Rows.propTypes = {
//     children: node.isRequired
// }

export default Rows