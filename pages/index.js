import React, {useState, useEffect, useRef} from 'react'
import Link from 'next/link'
import Flicking from "@egjs/react-flicking";
import useOnScreen from '../components/particles/useOnScreen'
import {MainLayout} from '../components/templates/layouts'

import {Navigation} from '../components/molecules'
import {View, Text, Image, Button} from '../components/atoms'
import knobData from "./index.knobs.json";
const {menus} = knobData.data;

const App = () => {

  const [open,setOpen] = useState(false)
  const [overlay, setOverlay] = useState(false)
  const [greeting, setGreeting] = useState('Good Morning')
  const [date, setDate] = useState('01 Jan 2020')

  const ref = useRef()

  const isVisible = useOnScreen(ref);

  useEffect(() => {
    console.log(`The component is ${isVisible ? "visible" : "not visible"}.`)

    let date = new Date();
    let time = date.getHours();
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    setDate(`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`)

    if (time < 12 && time > 5) {
        setGreeting('Good Morning')
    }else if (time > 12 && time < 17) {
        setGreeting('Good Afternoon')
    }else{
        setGreeting('Good Evening')
    }

  },[isVisible])


  const openMenu = () => {
      setOpen(true)
      setOverlay(true)
      document.body.style.overflow = 'hidden';
  }

  const closeMenu = () => {
    setOpen(false)
    setOverlay(false)
    document.body.style.overflow = 'unset';
  }

  return (
    <MainLayout>
    <div ref={ref}></div>
      <View className="main-header" >
        <View className="main-header-content" direction="column">
          <View className="main-header-nav">
            <View className="navigation-bar">
              <Navigation
                items={menus}
                family="quicksand"
                size="16"
                weight="400"
                variant="grey"
                padding="0"/>
            </View>
            <View className="nav-menu-mobile" onClick={openMenu} >
              <Image src="/static/illustrations/menu.svg"/>
            </View>
            <View
              className={`nav-menu-wrapper-mobile ${isVisible ? 'isActiveEl' : ''} ${open
              ? 'nav-menu-isActive'
              : ''}`}>
              <View className="nav-menu-header-mobile" direction="column">
                <Text variant="white" family="quicksand" size="18" margin="0 0 2px 0">{greeting}</Text>
                <Text variant="white" family="quicksand" weight="light" size="14">{date}</Text>
                <View className="nav-menu-button-close" onClick={closeMenu}>
                  <Image src="/static/illustrations/close.svg"/>
                </View>
                <View className="nav-menu-dots">
                  <Image src="/static/illustrations/dot-header-mobile.svg"/>
                </View>
              </View>
              <View className="nav-menu-content-mobile" direction="column">
                <View className="nav-menu-items" direction="column" flexValue="1">
                  <Link href="/products">
                    <a>
                      <View className="nav-menu-item" >

                        <Image src="/static/illustrations/products.svg"/>
                        <Text size="18" margin="0 0 0 20px">My Products</Text>

                      </View>
                    </a>
                  </Link>
                  <Link href="projects">
                    <a>
                      <View className="nav-menu-item">
                        <Image src="/static/illustrations/projects.svg"/>
                        <Text size="18" margin="0 0 0 20px">My Related Projects</Text>
                      </View>
                    </a>
                  </Link>
                  <Link href="issues">
                    <a>
                      <View className="nav-menu-item">
                        <Image src="/static/illustrations/issues.svg"/>
                        <Text size="18" margin="0 0 0 20px">Issues</Text>
                      </View>
                    </a>
                  </Link>
                  <Link href="stories">
                    <a>
                      <View className="nav-menu-item">
                        <Image src="/static/illustrations/stories.svg"/>
                        <Text size="18" margin="0 0 0 20px">Stories</Text>
                      </View>
                    </a>
                  </Link>
                </View>
                <View className="nav-menu-item-footer">
                  <View
                    className="nav-menu-item"
                    onClick={() => navigator.clipboard.writeText(window.location.href)}>
                    <Image src="/static/illustrations/copy.svg"/>
                    <Text size="18" margin="0 0 0 20px">“Copy Link to Clipboard”</Text>
                  </View>
                </View>
              </View>

            </View>

            <View className={`overlay-background  ${overlay ? 'is-overlay-background' : ''}`}></View>
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
                <Text family="quicksand" variant="grey" weight="medium" className="subtitle">UI/UX Designer & Frontend Developer</Text>
              </View>
              <View width="80%" className="main-header-text-content">
                <Text
                  family="quicksand"
                  variant="grey"
                  weight="regular"
                  className="text-overview">
                  I design & code that turn the idea to 
                  <span style={{
                    color: '#2525F0'
                  }}> product digital and website that people love it.</span>
                </Text>
              </View>
              <View align="center">
                <Button className="btn-hire">
                  HIRE ME
                </Button>
                <a href="https://calendly.com/ahroidlife/15min" target="_blank">
                  <Text family="quicksand" variant="blue" weight="regular" className="consult">
                    Free - 15min consult
                  </Text>
                </a>
              </View>
            </View>
            <View className="main-header-right">
              <Image
                src="/static/illustrations/hero-image.png"
                className="main-header-hero"
                draggable="false"/>
              <Image src="/static/illustrations/bubbble.svg" className="main-header-bubble"/>
            </View>
          </View>
        </View>
        <View className="overlay"></View>
      </View>
      <View className="tools-wrapper" direction="column">
        <Text className="tools-title">Work with</Text>
        <View className="tools-items">
          <Flicking gap={50} infinite={true} infiniteThreshold={100}  bound={true} moveType="freeScroll" style={{width:100+'%', height: 50+'vh'}}>
                  <View>
                    <Image src="/static/tools/l_xd.svg"/>
                  </View>
                  <View>
                    <Image src="/static/tools/figma-1.svg"/>
                  </View>
                  <View>
                    <Image src="/static/tools/protopie.svg"/>
                  </View>
                  <View>
                    <Image src="/static/tools/l_ps.svg"/>
                  </View>
                  <View>
                    <Image src="/static/tools/ae.svg"/>
                  </View>
                  <View>
                    <Image src="/static/tools/l_Zeplin.svg"/>
                  </View>
                  <View>
                    <Image src="/static/tools/react.svg"/>
                  </View>
                  <View>
                    <Image src="/static/tools/l_redux.svg"/>
                  </View>
                  <View>
                    <Image src="/static/tools/next-js.svg"/>
                  </View>
                  <View>
                    <Image src="/static/tools/vue-js.svg"/>
                  </View>
                  <View>
                    <Image src="/static/tools/nuxt-square.svg"/>
                  </View>
                  <View>
                    <Image src="/static/tools/wix.svg"/>
                  </View>
                  <View>
                    <Image src="/static/tools/webflow.svg"/>
                  </View>
                  <View>
                    <Image src="/static/tools/github-1.svg"/>
                  </View>
                  <View>
                    <Image src="/static/tools/nginx.svg"/>
                  </View>
                  <View>
                    <Image src="/static/tools/lottiefiles.svg"/>
                  </View>
          </Flicking>
        </View>
      </View>
    </MainLayout>
  )
}

export default App