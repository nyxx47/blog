import React from 'react'
import {Container, Text, View, Image} from '../../atoms'


const Hero = ({title, subtitle, img}) => {

    return (
        <>
            <Container>
                <View>
                    <Text>{title}}</Text>
                    <Text>{subtitle}</Text>
                </View>
                <View>
                    <Image src={img} />
                </View>
            </Container>
        </>
    )
}

export default Hero