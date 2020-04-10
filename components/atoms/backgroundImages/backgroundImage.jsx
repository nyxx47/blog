import React from 'react'
import StyledBackgroundImage from './backgroundImage.styles.jsx'

const BackgroundImage = ({ children, className, width, height, size, radius, src }) => {

    return (
        <StyledBackgroundImage width={width} height={height} src={src} size={size} radius={radius} className={className}>
            {children}
        </StyledBackgroundImage>
    )
}

export default BackgroundImage