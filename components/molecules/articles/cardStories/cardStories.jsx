import React from 'react'
import {View, Text, BackgroundImage, Badge} from '../../../atoms'
import './styles.scss'

const CardStories = ({className}) => {

  return (
    <View className={`card-stories ${className}`}>
      <BackgroundImage
        src="/static/unsplash/aron-visuals-unsplash.jpg"
        size="cover"
        className="card-stories-image"/>

      <View direction="column" className="card-stories-content">
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
    </View>
  )
}

export default CardStories