import React from 'react'
import StyledBackgroundImage from './backgroundImage.styles.jsx'

const BackgroundImage = ({ width, height, size, radius, src }) => {

    return (
        <StyledBackgroundImage width={width} height={height} src={src} size={size} radius={radius}/>
    )
}

export default BackgroundImage