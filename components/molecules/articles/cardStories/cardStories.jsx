import React from 'react'
import {View, Text, BackgroundImage, Badge} from '../../../atoms'


const CardStories = ({props}) => {

  return (
    <BackgroundImage
      src="/static/unsplash/aron-visuals-unsplash.jpg"
      width="370px"
      height="500px"
      size="cover"
      radius="20px"
      className="stories-popular">
      <View direction="column" width="100%" padding="30px">
        <View justify="flex-end">
          <Badge title="SOLO TRAVEL" backgroundColor="#FCEEDE" color="#D9A971"/>
        </View>
        <View flexValue="1" direction="column" justify="flex-end">
          <View margin="0  0 30px 0" width="50%" direction="column">
            <Text size="20">STORY</Text>
            <Text size="20">OF MY LIFE</Text>
          </View>
          <View>
            <Text family="daily" size="32">Bali</Text>
          </View>
        </View>
      </View>
    </BackgroundImage>
  )
}

export default CardStories