import * as React from 'react'
import { Container, View, Image, Rows } from '../../components/atoms'
import { NextSeo } from 'next-seo';
import {Lottie} from '../../components/atoms'
import Lottiefiles from 'react-lottie'
import useOnScreen from '../../components/particles/useOnScreen'
import ReactPlayer from 'react-player'
import Backpress from '../../static/illustrations/backpress.svg'

import './shots.scss'

import * as Creativity from '../../assets/lottiefiles/creativity.json'



const Shots = () => {
    const [animated, setAnimated] = React.useState(false)

    const refLottie = React.useRef()

    const isAnimated = useOnScreen(refLottie)

    React.useEffect(() => {
        isAnimated ? setAnimated(true) : setAnimated(false)

        document.body.style.overflow = 'unset';
    }, [isAnimated])

    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: Creativity.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return(
        <>
<NextSeo
        title= 'Krisna Ahroid | Collections'
        description= 'Krisna Ahroid. An UX Engineer & Frontend Developer based in Jakarta, Indonesia'
        openGraph={{
            type: 'website',
            locale: 'en_IE',
            url: 'https://www.ahroidlife.co/',
            site_name: 'ahroidlife',
            title: 'Krisna Ahroid | Collections',
            description: 'Krisna Ahroid. An UX Engineer & Frontend Developer based in Jakarta, Indonesia',
            image: 'https://ahroidlife.com/static/illustrations/hero-image.png',
            
        }}
      />
        <Container className="shot-container">
            <View className="header">
                <View className="column-h">
                    <View position="absolute" top="3%" left="2%">
                        <a href="/">
                            <Image src={Backpress}/>
                        </a>
                    </View>
                    <Image src='/static/unsplash/shots-hero.jpg'/>
                </View>
                <View className="column-h column-h-content">
                    <h5>Creativity</h5>
                    <h1><span>Inspiration</span> more <br/>than <span>abstracts.</span></h1>
                    <p>Working on a stylish collage or preparing the inspiring moodboard? You might need some abstract figures to fill the space and arrange your ideas in one harmonious composition.</p>

                    <button className="btn-shot header-btn">Explore</button>
                </View>
            </View>
            <View className="get-in-touch">
                <View className="column column-l">
                    <h1><span>Creativity</span> is intelligence <br/>
                    having <span>fun</span>.</h1>
                    <p>I love communication with design & code, creativity is nothing but a mindset my life to free to build something great!</p>
                    <button className="btn-shot btn-outline">Get in Touch</button>
                </View>
                <View className="column column-r">
                    <div className="shots-lottiefile" ref={refLottie}>
                        <Lottiefiles width={`100%`} height={`100%`} options={defaultOptions} isPaused={!animated} isStopped={!animated} />
                    </div>
                </View>
            </View>
            <View className="shots-container">
                <View className="tabs-wrapper">
                    <ul>
                        <li className="tab-active">All</li>
                        <li>Dashboard</li>
                        <li>Website</li>
                        <li>Illustration</li>
                        <li>Interactions</li>
                    </ul>
                </View>
                <View className="shots">
                    <Rows>
                        <View className="shot grid-item-4">
                            <a href="https://www.instagram.com/p/B2Y83flA6mX/" target="_blank">
                                <Image src="/static/unsplash/shot-1.png"/>
                                <h2>Lunafreya Ui Kit</h2>
                            </a>
                        </View>
                        <View className="shot grid-item-4">
                            <a href="https://www.instagram.com/p/CEculbGgl-m/" target="_blank">
                            <Image src="/static/unsplash/shot-2.png"/>
                            <h2>Notaimo</h2>
                            </a>
                        </View>
                        <View className="shot grid-item-4">
                            <a href="https://www.instagram.com/p/B_b_K_-Arnk/" target="_blank">
                            <Image src="/static/unsplash/shot-3.png"/>
                            <h2>Landing page</h2>
                            </a>
                        </View>
                        <View className="shot grid-item-4">
                            <a href="https://www.instagram.com/p/CFPdbekAsXS/" target="_blank">
                                <Image src="/static/unsplash/ps5.jpg"/>
                                <h2>Play Station 5</h2>
                            </a>
                        </View>
                        <View className="shot grid-item-4">
                            <a href="https://www.instagram.com/p/CFlfCuCAv1J/" target="_blank">
                                <Image src="/static/unsplash/namaaz.jpg"/>
                                <h2>Namaazdining</h2>
                            </a>
                        </View>
                    </Rows>
                </View>
            </View>
        </Container>
        </>
    )
}

export default Shots