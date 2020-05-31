import { Container, View, Image} from '../../components/atoms'
import Backpress from '../../static/illustrations/backpress.svg'
import Link from 'next/link'
import Lottiefiles from 'react-lottie'
import useOnScreen from '../../components/particles/useOnScreen'

import * as Lunafreya from '../../assets/lottiefiles/lunafreya.json'
import "./product.scss"
import { useState, useRef, useEffect } from 'react'

const Products = () => {
    const [luna, setLuna] = useState(false)

    const lunaRef = useRef()

    const isLuna = useOnScreen(lunaRef)

    useEffect(() => {
        isLuna ? setLuna(true) : setLuna(false)

        document.body.style.overflow = 'unset';

    },[isLuna])

    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: Lunafreya.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <>
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
                        <strong>$45</strong>
                        <p>$82</p>
                    </View>
                    <View className="content">
                        <View className="title">
                            <p>HIGHLIGHTS</p>
                            <h1>Full Customizable</h1>
                        </View>
                        <View className="features">
                            <View className="feature">
                                <Image src="/static/illustrations/screens.svg" alt="screens"/>
                                <h1>27+ Screens</h1>
                                <p>On screen iPhone X</p>
                            </View>
                            <View className="feature">
                                <Image src="/static/illustrations/typo.svg" alt="typography"/>
                                <h1>Typography</h1>
                                <p>Montserrat & Nunito Fonts family </p>
                            </View>
                            <View className="feature">
                                <Image src="/static/illustrations/vector.svg" alt="vector"/>
                                <h1>Vector Base</h1>
                                <p>Can modify your style</p>
                            </View>
                        </View>
                    </View>
                </View>
                
            </Container>
        </>
    )
}

export default Products;