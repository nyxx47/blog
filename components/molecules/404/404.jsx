import React from 'react'
import {Lottie, Text} from '../../atoms'
import * as Notfound from '../../../assets/lottiefiles/404.json'

const NotFound  = ({title}) => {

    return (
        <>
            <Lottie path={Notfound.default} width={600}/>
            <Text align="center" size="16">{title}</Text>
        </>
    )
}

export default NotFound