import React from 'react'
import {View, Text, BackgroundImage, Badge} from '../../../atoms'
import './styles.scss'

const CardStories = ({title, subtitle, label, image, className}) => {

  return (
    <View className={`card-stories ${className}`}>
      <BackgroundImage
        src={`https:${image}`}
        size="cover"
        className="card-stories-image"/>

      <View direction="column" className="card-stories-content">
        <View justify="flex-end">
          <Badge title={label} backgroundColor="#FCEEDE" color="#D9A971"/>
        </View>
        <View flexValue="1" direction="column" justify="flex-end">
          <View margin="0  0 30px 0" width="50%" direction="column">
            <Text size="20">{subtitle}</Text>
          </View>
          <View>
            <Text family="daily" size="32" variant="heavy">{title}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default CardStories