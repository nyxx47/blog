import React, { useState } from 'react'
import {Container, Text, View, Image, Icon} from '../../atoms'
import {Navigation} from '../../molecules'

import './styles.scss'

const Hero = ({title, subtitle, img}) => {
    const [items, setItems] = useState([
        {
            "id":'1',
            "title": "IN",
            "url": "https://www.linkedin.com/in/ahroidlife/"
        },
        {
            "id":"2",
            "title": "IG",
            "url": "https://www.instagram.com/user.ahroidlife/"
        },
        {
            "id":"3",
            "title": "FB",
            "url": "/"
        }
    ])

    return (
        <>
            <Container 
            isEqualHeight="100vh" 
            justifyContent="center"
            alignItems="center"
            padding="0px 100px 0px 100px"
            className="hero"
            >
                <View height="100%" flexValue="1" direction="column" className="hero-header">
                    <View flexValue="1" direction="column" align="flex-start" padding="150px 0px 0px 0px" isPadding="0" className="hero-header-content">
                        <Text family="daily" size="32" width="100px">
                            {title}
                        </Text>
                        <Text margin="50px 0px 0px 0px" isEqualMargin="20px 0px 0px 0px" width="45%" className="hero-subtitle">
                            {subtitle}
                        </Text>
                        <Navigation items={items} padding="50px 0px 0px 0px" isEqualPadding="20px 0 0 0"/>
                    </View>
                    <View flexValue="1" align="flex-end" style={{paddingBottom:'80px'}}>
                        <Icon name="arrowStraight" width="10em"/>
                    </View>
                </View>
                <View flexValue="1">
                    <Image draggable="false" src={img} width="100%" />
                </View>
            </Container>
        </>
    )
}

export default Hero