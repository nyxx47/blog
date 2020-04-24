import React from 'react'
import { View, BackgroundImage, Text } from '../../../atoms'

const CardImage = ({item}) => {

    return (
        <View className="half" direction="column">
            <View height="300px" width="100%">
                <BackgroundImage src={item.hero.image} width="100%" height="100%" radius="20px"/>
            </View>
            <View direction="column" margin="30px 0 0 0">
                <Text size="24" weight="bold" margin=" 0 0 10px 0">{item.content.title}</Text>
                <Text size="20">{item.content.subtitle}</Text>
            </View>
        </View>
    )
}

export default CardImage