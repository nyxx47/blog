import React, { useEffect } from 'react';

import Flicking from "@egjs/react-flicking";
import {Container, View, Text, ButtonIcon} from '../../../atoms'
import {CardStories} from '../../../molecules'

import './styles.scss'

const SliderHero = ({props}) => {
  
  useEffect(() => {
    console.log("FLICKING :: ",Flicking)
  })
  return (
    <Container padding="100px 0 0 100px" isEqualHeight="70vh">
      <View width="25%" direction="column">
        <View direction="column" flexValue="1">
          <Text family="daily" size="32" width="50px">Most Popular</Text>
          <Text margin="30px 30px 0  0">
            We write various stories here for the present and the future. You can find
            various stories about us sharing knowledge, adventure and whatever it is here.
          </Text>
        </View>
        <View margin="0  0 50px 0">
          {/* <ButtonIcon name="arrowBack" variant="secondary" outline margin="0 20px 0 0 " />
          <ButtonIcon name="arrowForward" variant="primary" fill="#fff" outline onClick={() => Flicking.DIRECTION.NEXT}/> */}
        </View>
      </View>
      <View flexValue="1">
        <Flicking id="stories-hero" gap={50} infinite={true} infiniteThreshold={100}  bound={true} moveType="freeScroll" style={{width:100+'%', height: 100+'%'}}>
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