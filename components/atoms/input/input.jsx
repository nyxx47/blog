import React from "react";
import StyledInput from './input.styles.jsx'
import { func, string } from "prop-types";

const Input = ({type, value, placeholder, onChange, width, height,padding, bottom,left, ...props}) => {

    return (
            <StyledInput 
            type={type} 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder} 
            width={width}
            height={height}
            padding={padding}
            bottom={bottom}
            left={left}
            {...props}/>
    )
}

Input.propTypes = {
    type: string,
    value: string,
    placeholder: string,
    onChange: func,
    width: string,
    height: string,
    bottom: string
}

export default Input