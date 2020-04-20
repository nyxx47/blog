import React from 'react'
import {MainLayout} from '../components/templates/layouts'

import {Navigation} from '../components/molecules'
import {View, Text, Image, Button} from '../components/atoms'
import knobData from "./index.knobs.json";
const {menus} = knobData.data;

const App = () => {

  return (
    <MainLayout>
        <View className="main-header">
            <View className="main-header-content" direction="column">
                <View className="main-header-nav">
                    <View>
                        <Navigation items={menus} family="quicksand" size="16" weight="400" variant="grey" padding="0"/>
                    </View>
                    <View className="social-media">
                        <ul>
                            <li>
                                <a href="/" target="_blank">IN</a>
                            </li>
                            <li>
                                <a href="/" target="_blank">FB</a>
                            </li>
                            <li>
                                <a href="/" target="_blank" className="active-media">IG</a>
                            </li>
                        </ul>
                    </View>
                </View>
                <View flexValue="1" className="main-header-body">
                    <View direction="column" className="main-header-left">
                        <Text variant="blue" family="quicksand" margin="0  0 50px 0 ">Hi, there</Text>
                        <View direction="column" margin="0  0 30px 0 ">
                            <Text variant="blue" family="quicksand" size="32" weight="medium">I’m Krisna Ahroid</Text>
                            <Text family="quicksand" size="18" variant="grey">UI/UX Designer & Frontend Developer</Text>
                        </View>
                        <View width="80%" margin="0  0 150px 0 ">
                            <Text family="quicksand" variant="grey" size="18" weight="regular">
                                I design & code that turn the idea to product digital and website that people love it.
                            </Text>
                        </View>
                        <View align="center">
                            <Button width="150px" height="40px">
                                HIRE ME
                            </Button>
                            <Text family="quicksand" margin="0  0 0 50px" variant="blue" weight="regular" size="16">
                                Free - 15min consult
                            </Text>
                        </View>
                    </View>
                    <View className="main-header-right">
                        <Image src="/static/illustrations/hero-image.png" className="main-header-hero" draggable="false"/>
                    </View>
                </View>
            </View>
            <View className="overlay"></View>
        </View>
    </MainLayout>
  )
}

export default App