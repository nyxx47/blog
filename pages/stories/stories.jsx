import React, {Component} from 'react'
import Layout from "../../components/templates/layouts";
import {Hero} from '../../components/organisms'
import ImageHero from '../../assets/illustrations/daily-stories.svg'
import {SliderHero, SliderCategories} from '../../components/organisms'

import { Container, View, Text, Rows} from '../../components/atoms'
import { CardStories } from '../../components/molecules'

import Knobs from './stories.knobs.json'
const {item} = Knobs

class Stories extends Component {


  render() {

    return ( 
        <Layout title="Stories">
            <Hero
                title="Stories Resources"
                subtitle="The more that you read the more things you will know."
                img={ImageHero}/>

            <SliderHero/>
            <SliderCategories/>

            <Container padding="100px" flexDirection="column">
                <View margin="0 0 50px 0">
                    <Text family="daily" size="32">Our Stories</Text>
                </View>
                <Rows>
                    <View className="grid-item-3">
                        <CardStories className="card-our-stories"/>
                    </View>
                    <View className="grid-item-3">
                        <CardStories className="card-our-stories"/>
                    </View>
                    <View className="grid-item-3">
                        <CardStories className="card-our-stories"/>
                    </View>
                    <View className="grid-item-3">
                        <CardStories className="card-our-stories"/>
                    </View>
                    <View className="grid-item-3">
                        <CardStories className="card-our-stories"/>
                    </View>
                    <View className="grid-item-3">
                        <CardStories className="card-our-stories"/>
                    </View>
                    <View className="grid-item-3">
                        <CardStories className="card-our-stories"/>
                    </View>
                    <View className="grid-item-3">
                        <CardStories className="card-our-stories"/>
                    </View>
                </Rows>
            </Container>
        </Layout> 
        )
    }
}

export default Stories;