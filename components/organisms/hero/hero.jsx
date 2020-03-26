import React from 'react'
import {Container, Text, View, Image} from '../../atoms'

const Hero = ({title, subtitle, img}) => {

    return (
        <>
            <Container 
            isEqualWidth="100%" 
            isEqualHeight="100vh" 
            justifyContent="center"
            alignItems="center"
            padding="0px 100px 0px 100px">
                <View height="100%" flexValue="1" direction="column" >
                    <View flexValue="1" direction="column" align="flex-start" padding="150px 0px 0px 0px">
                        <Image draggable="false" src={title} />
                        <Text margin="20px 0px 0px 0px" width="50%">{subtitle}</Text>
                    </View>
                    <View flexValue="1">
                        <Text>Continue</Text>
                    </View>
                </View>
                <View flexValue="1">
                    <Image draggable="false" src={img} />
                </View>
            </Container>
        </>
    )
}

export default Hero