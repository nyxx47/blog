import React from 'react'
import Flicking from "@egjs/react-flicking";
import './styles.scss'

import {Container, View, Text, BackgroundImage} from '../../../atoms'

const SliderCategories = () => {

    return (
        <Container padding="100px 0 0 100px" isEqualHeight="50vh" flexDirection="column">
            <View margin=" 0 0 50px 0">
                <Text family="daily" size="32">Categories</Text>
            </View>
            <View>
            <Flicking id="stories-categories" gap={50} infinite={true} infiniteThreshold={100}  bound={true} moveType="freeScroll" style={{width:100+'%', height: 50+'vh'}}>
                <View>
                    <View className="card-categories">
                        <BackgroundImage src="/static/unsplash/nourdine-diouane-HITtu6zs9Sg-unsplash.jpg" size="cover" className="card-categories-image"/>
                        <View className="card-categories-content" align="flex-end">
                            <Text size="24" variant="secondary">Adventures</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View className="card-categories">
                        <BackgroundImage src="/static/unsplash/sincerely-media-nGrfKmtwv24-unsplash.jpg" size="cover" className="card-categories-image"/>
                        <View className="card-categories-content" align="flex-end">
                            <Text size="24" variant="secondary">Level Up</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View className="card-categories">
                        <BackgroundImage src="/static/unsplash/freddy-castro-u3ajSXhZM_U-unsplash.jpg" size="cover" className="card-categories-image"/>
                        <View className="card-categories-content" align="flex-end">
                            <Text size="24" variant="secondary">Buckets</Text>
                        </View>
                    </View>
                </View>

            </Flicking>
            </View>
        </Container>
    )
}

export default SliderCategories