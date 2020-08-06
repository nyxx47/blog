import { Container, View, Image, Button, Text} from '../../components/atoms'
import Backpress from '../../static/illustrations/backpress.svg'
import Link from 'next/link'
import Lottiefiles from 'react-lottie'
import useOnScreen from '../../components/particles/useOnScreen'
import ReactPlayer from 'react-player'
import { NextSeo } from 'next-seo';

import * as Lunafreya from '../../assets/lottiefiles/lunafreya.json'
import * as Summary from '../../assets/lottiefiles/summary.json'

import "./product.scss"
import { useState, useRef, useEffect } from 'react'

const Products = () => {
    const [luna, setLuna] = useState(false)
    const [summary, setSummary] = useState(false)
    const [visible, setVisible] = useState(false)

    const lunaRef = useRef()
    const summaryRef = useRef()

    const isLuna = useOnScreen(lunaRef)
    const isSummary = useOnScreen(summaryRef)

    useEffect(() => {
        isLuna ? setLuna(true) : setLuna(false)
        isSummary ? setSummary(true) : setSummary(false)

        document.body.style.overflow = 'unset';

    },[isLuna, isSummary])

    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: Lunafreya.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    const defaultOptions2 = {
        loop: false,
        autoplay: true,
        animationData: Summary.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    const purchase = () => {
        setVisible(true)
    }

    return (
        <>
        <NextSeo
            title= 'Krisna Ahroid | Products'
            description= 'Krisna Ahroid. Here we go, This is my products.'
            openGraph={{
                type: 'website',
                locale: 'en_IE',
                url: 'https://www.ahroidlife.co/products',
                site_name: 'ahroidlife',
                title: 'Krisna Ahroid | Products',
                description: 'Krisna Ahroid. Here we go, This is my products.',
                image: 'https://res.cloudinary.com/ahroidlife/image/upload/v1588948107/daily-stories_xssful.svg',
                
            }}
        />
            <Container className="product-container illustration-outline">
                <View position="absolute" top="3%" left="2%">
                    <Link href="/">
                        <a >
                            <Image src={Backpress}/>
                        </a>
                    </Link>
                </View>
                <View className="header">
                    <View className="content">
                        <h1>Lunafreya</h1>
                        <p>Lunafreya is a UI Kit created to help you introduce your shoppping app, boost your creativity and save you time.</p>
                    </View>
                    <View className="line"></View>
                </View>
                <View className="hero-lottie">
                    <div ref={lunaRef}></div>
                    <Lottiefiles options={defaultOptions}  height={`unset`} width={`80%`} isPaused={!luna} isStopped={!luna}/>
                </View>
                <View className="highlights">
                <Image src="/static/illustrations/box-dark.svg" className="box-dark" draggable="false" alt="box-dark"/>
                <Image src="/static/illustrations/box-grey.svg" className="box-grey" draggable="false" alt="box-grey"/>
                    <View className="pricing">
                        <strong>$48</strong>
                        <p>$75</p>
                    </View>
                    <View className="content">
                        <View className="title">
                            <p>HIGHLIGHTS</p>
                            <h1>Full Customizable</h1>
                        </View>
                        <View className="features">
                            <View className="feature">
                                <Image src="/static/illustrations/screens.svg" alt="screens" draggable="false"/>
                                <h1>27+ Screens</h1>
                                <p>On screen iPhone X</p>
                            </View>
                            <View className="feature">
                                <Image src="/static/illustrations/typo.svg" alt="typography" draggable="false"/>
                                <h1>Typography</h1>
                                <p>Montserrat & Nunito Fonts family </p>
                            </View>
                            <View className="feature">
                                <Image src="/static/illustrations/vector.svg" alt="vector" draggable="false"/>
                                <h1>Vector Base</h1>
                                <p>Can modify your style</p>
                            </View>
                        </View>
                    </View>
                </View>
                <View className="summary">
                        <View className="column">
                            <div ref={summaryRef}></div>
                            <Lottiefiles options={defaultOptions2}  height={`unset`} width={`unset`} isPaused={!summary} isStopped={!summary}/>
                        </View>
                        <View className="column">
                            <View className="content">
                                <Image src="/static/illustrations/lunafreya.svg" alt="lunafreya"/>
                                <h2>Clean, minimal & modern design</h2>
                                <p>You can easily make this kit your own by simply modifying the global text and color styles and adding your own content.
Available for the latest versions of Adobe XD.</p>

                                <Button className="button" onClick={purchase}>Buy Now</Button>
                                <p className={`coming-soon ${visible ? 'isVisible' : ''}`} >Coming soon, Stay tuned for something Awesome.</p>
                            </View>
                        </View>
                </View>
                <View className="preview">
                    <View className="header">
                        <p>PREVIEW</p>
                        <h1>Full Interaction Design</h1>
                    </View>
                    <View className="content">
                        <View className="items">
                            <View className="item">
                                <ReactPlayer url='/static/videos/MainScreen.mp4' width="100%" playing loop/>
                            </View>
                            <View className="item">
                                <ReactPlayer url='/static/videos/SplashOverview.mp4' width="100%" playing loop/>
                            </View>
                        </View>
                        <View className="items">
                            <View className="item">
                                <ReactPlayer url='/static/videos/AddToCartOverview.mp4' width="100%" playing loop/>
                            </View>
                            <View className="item">
                                <ReactPlayer url='/static/videos/ForgotPasswordOverview.mp4' width="100%" playing loop/>
                            </View>
                        </View>
                        
                    </View>
                </View>
                <View className="footer-wrapper">
                    <View className="footer-social-media">
                        <ul>
                            <li>
                            <a href="https://www.linkedin.com/in/ahroidlife/" rel="noreferrer" target="_blank">
                                <Image src="/static/illustrations/linkedin.svg" alt="linkedin"/>
                            </a>
                            </li>
                            <li>
                            <a href="https://www.instagram.com/user.ahroidlife/" rel="noreferrer" target="_blank">
                                <Image src="/static/illustrations/instagram.svg" alt="instagram"/>
                            </a>
                            </li>
                            <li>
                            <a href="https://www.facebook.com/krisnaahroid" rel="noreferrer" target="_blank">
                                <Image src="/static/illustrations/facebook.svg" alt="facebook"/>
                            </a>
                            </li>
                        </ul>
                    </View>
                    <View className="footer-content">
                    <Text family="quicksand" variant="dark">Copyright 2020. Designed and build by Krisna Ahroid with XD, ReactJs, and Golang.</Text>
                    </View>
                    <View className="footer-languages">
                    <View className="languages-select" direction="column">
                        <View className="select-item">
                        <Text>ENGLISH</Text>
                        <Image src="/static/illustrations/ios-arrow-down.svg" alt="arrow-down" className="icon-arrow-dropdown"/>
                        </View>
                        <View className="select-item hidden">
                        <Text>INDONESIA</Text>
                        </View>
                    </View>
                    </View>
            </View>
            </Container>
        </>
    )
}

export default Products;