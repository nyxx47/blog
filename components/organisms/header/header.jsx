import React from 'react'


import { Container, View, Logo} from '../../atoms'
import { Navigation } from '../../molecules'
import Link from 'next/link'


const Header = ({direction, items}) => {

    return (
        <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        boxSizing="border-box"
        padding="5px 50px 5px 30px" 
        backgroundColor="#ffffff"
        position="fixed"
        isEqualWidth="100%"
        boxShadow="0px 3px 6px rgba(137, 137, 137, 0.16)">
            <View>
                <a href="/">
                    <Logo width="2em"/>
                </a>
            </View>
            <View>
                <Navigation direction={direction} items={items}/>
            </View>
        </Container>
    )
}

export default Header