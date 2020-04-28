import React, { useEffect } from 'react'
import Flicking from "@egjs/react-flicking";
import './styles.scss'

import {Container, View, Text, BackgroundImage} from '../../../atoms'

const SliderCategories = ({items}) => {

    return (
        <Container padding="100px 0 0 100px" isEqualHeight="50vh" flexDirection="column">
            <View margin=" 0 0 50px 0">
                <Text family="daily" size="32">Categories</Text>
            </View>
            <View>
            <Flicking id="stories-categories" gap={50} infinite={true} infiniteThreshold={100}  bound={true} moveType="freeScroll" style={{width:100+'%', height: 50+'vh'}}>
                { items.length > 0
                    ? items.map((item, index) => (
                        <View key={index}>
                            <View className="card-categories">
                                <BackgroundImage src={`https:${item.fields.image.fields.file.url}`} size="cover" className="card-categories-image"/>
                                <View className="card-categories-content" align="flex-end">
                                    <Text size="24" variant="secondary">{item.fields.title}</Text>
                                </View>
                            </View>
                        </View>
                    ))
                    : null
                }
            </Flicking>
            </View>
        </Container>
    )
}

export default SliderCategories