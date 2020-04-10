import React from 'react'

import Flicking from "@egjs/react-flicking";
import {Container, View, Text} from '../../../atoms'
import {CardStories} from '../../../molecules'


const SliderHero = ({props}) => {
  
  return (
    <Container padding="100px 0 0 100px" isEqualHeight="80vh">
      <View width="25%" direction="column">
        <Text family="daily" size="32" width="50px">Most Popular</Text>
        <Text margin="30px 30px 0  0">
          We write various stories here for the present and the future. You can find
          various stories about us sharing knowledge, adventure and whatever it is here.
        </Text>
      </View>
      <View flexValue="1">
        <Flicking gap={50} infinite={true} infiniteThreshold={100}  bound={true} moveType="freeScroll" style={{width:100+'%'}}>
            <CardStories/>
            <CardStories/>
            <CardStories/>
            <CardStories/>
            <CardStories/>
            <CardStories/>
        </Flicking>
      </View>
    </Container>
  )
}

export default SliderHero