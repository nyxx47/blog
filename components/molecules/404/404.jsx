import React from 'react'
import {Lottie, Text, View} from '../../atoms'
import * as Notfound from '../../../assets/lottiefiles/404-lottiefile.json'

const NotFound  = ({title}) => {

    return (
        <View direction="column" width="100%" height="100vh">
            <View flexValue="1" align="center">
                <Lottie path={Notfound.default} width={700}/>
            </View>
            <View justify="center">
                <Text align="center" family="daily" size="24" margin="0  0 80px 0">{title}</Text>
            </View>
        </View>
    )
}

export default NotFound