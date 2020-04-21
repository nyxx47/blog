import React from 'react'
import Link from 'next/link'
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
                    <View className="navigation-bar">
                        <Navigation items={menus} family="quicksand" size="16" weight="400" variant="grey" padding="0" />
                    </View>
                    <View className="nav-menu-mobile">
                        <Image src="/static/illustrations/menu.svg"/>
                    </View>
                    <View className="nav-menu-wrapper-mobile">
                        <View className="nav-menu-header-mobile" direction="column">
                            <Text variant="white" family="quicksand" size="18" margin="0 0 2px 0">Good Morning</Text>
                            <Text variant="white" family="quicksand" weight="light" size="14">21 April 2020</Text>
                            <View className="nav-menu-button-close">
                                <Image src="/static/illustrations/close.svg"/>
                            </View>
                            <View className="nav-menu-dots">
                                <Image src="/static/illustrations/dot-header-mobile.svg"/>
                            </View>
                        </View>
                        
                    </View>
                    <View className="overlay-background"></View>
                    <View className="social-media">
                        <ul>
                            <li>
                                <a href="/" target="_blank">IN</a>
                            </li>
                            <li>
                                <a href="/" target="_blank">FB</a>
                            </li>
                            <li>
                                <a href="/" target="_blank">IG</a>
                            </li>
                        </ul>
                    </View>
                </View>
                <View flexValue="1" className="main-header-body">
                    <View direction="column" className="main-header-left">
                        <Text variant="blue" family="quicksand" margin="0  0 50px 0 " className="sayHi">Hi, there</Text>
                        <View direction="column" margin="0  0 30px 0 ">
                            <Text variant="blue" family="quicksand" weight="medium" className="fullname">I’m Krisna Ahroid</Text>
                            <Text family="quicksand"  variant="grey" weight="medium" className="subtitle">UI/UX Designer & Frontend Developer</Text>
                        </View>
                        <View width="80%" className="main-header-text-content">
                            <Text family="quicksand" variant="grey" weight="regular" className="text-overview">
                                I design & code that turn the idea to <span style={{color: '#2525F0'}}>product digital and website that people love it.</span>
                            </Text>
                        </View>
                        <View align="center">
                            <Button  className="btn-hire">
                                HIRE ME
                            </Button>
                            <Link href="https://calendly.com/ahroidlife/15min">
                                <a target="_blank">
                                    <Text family="quicksand" variant="blue" weight="regular" className="consult">
                                        Free - 15min consult
                                    </Text>
                                </a>
                            </Link>
                        </View>
                    </View>
                    <View className="main-header-right">
                        <Image src="/static/illustrations/hero-image.png" className="main-header-hero" draggable="false"/>
                        <Image src="/static/illustrations/bubbble.svg" className="main-header-bubble"/>
                    </View>
                </View>
            </View>
            <View className="overlay"></View>
        </View>
    </MainLayout>
  )
}

export default App