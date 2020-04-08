import React from 'react'
import { string } from 'prop-types'

import {Backpress, SearchIcon, ArrowStraight, ReactIcon, VueIcon, NextJsIcon} from '../../../assets/icons'

const Icons = {
    backpress: Backpress,
    search: SearchIcon,
    arrowStraight: ArrowStraight,
    react: ReactIcon,
    vuejs: VueIcon,
    nextjs: NextJsIcon
}

const BasedIcon = ({name, width, height, position, left, top, right, bottom, ...props}) => {
    if (Icons[name] === undefined) return null;
	const Icon = Icons[name];
    return(
        <Icon 
        width={width}
        style={{
            position: position, 
            left: left, 
            top: top, 
            right: right, 
            bottom: bottom}} {...props} />
    )
}

BasedIcon.propTypes = {
    name: string
}

BasedIcon.defaultProps = {
    name: 'backpress'
}

export default BasedIcon