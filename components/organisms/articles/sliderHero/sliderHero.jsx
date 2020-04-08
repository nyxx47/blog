import React from 'react'
import {Container, View, Text, BackgroundImage} from '../../../atoms'

const SliderHero = ({props}) => {

    return(
        <Container padding="100px 0 0 100px" isEqualHeight="80vh">
            <View width="25%" direction="column">
                <Text family="daily" size="32" width="50px">Most Popular</Text>
                <Text margin="30px 30px 0  0">
                We write various stories here for the present and the future. You can find various stories about us sharing knowledge, adventure and whatever it is here.
                </Text>
            </View>
            <View flexValue="1" backgroundColor="pink">
                <Text>Content</Text>
            </View>
        </Container>
    )
}

export default SliderHero