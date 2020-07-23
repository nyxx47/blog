import * as React from 'react'
import { Container, View, Image, Rows } from '../../components/atoms'

import {Lottie} from '../../components/atoms'
import Lottiefiles from 'react-lottie'
import useOnScreen from '../../components/particles/useOnScreen'

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
                            <Image src="/static/unsplash/shot-1.png"/>
                            <h2>Lunafreya Ui Kit</h2>
                        </View>
                        <View className="shot grid-item-4">
                            <Image src="/static/unsplash/shot-2.png"/>
                            <h2>Notaimo</h2>
                        </View>
                        <View className="shot grid-item-4">
                            <Image src="/static/unsplash/shot-3.png"/>
                            <h2>My own Landing page</h2>
                        </View>
                    </Rows>
                </View>
            </View>
        </Container>
    )
}

export default Shots