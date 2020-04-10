import React, {Component} from 'react'
import Layout from "../../components/templates/layouts";
import {Hero} from '../../components/organisms'
import ImageHero from '../../assets/illustrations/daily-stories.svg'
import {SliderHero} from '../../components/organisms'

class Stories extends Component {

  render() {

    return ( 
        <Layout title="Stories">
        <Hero
            title="Stories Resources"
            subtitle="The more that you read the more things you will know."
            img={ImageHero}/> {/* <SliderHero/>     */}
            <SliderHero/>
        </Layout> 
        )
    }
}

export default Stories;