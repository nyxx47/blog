import React from 'react'
import {View, BackgroundImage, Text, Icon} from '../../../atoms'

const CardHero = ({item}) => {

    return (
        <View className="large" direction="row" isEqualDirection="column">
            <View height="400px" className="semi-half">
                <BackgroundImage src={item.hero.image} width="100%" height="100%" size="cover" radius="20px"/>
            </View>
            <View className="semi-half" direction="column" justify="space-around">
                <Text size="32" weight="bold" style={{letterSpacing:'0.1em'}}>
                    {item.content.title}
                </Text>
                <Text size="22">
                    {item.content.subtitle}
                </Text>
                <Icon name="arrowStraight" width="10em"/>
            </View>
        </View>
    )
}

export default CardHero