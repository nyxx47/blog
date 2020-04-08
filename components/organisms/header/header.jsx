import React from 'react'

import { Container, View, Logo, Input} from '../../atoms'
import { Navigation, TextIcon } from '../../molecules'
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
        zIndex="99"
        isEqualWidth="100%"
        boxShadow="0px 3px 6px rgba(137, 137, 137, 0.16)">
            <View>
                <Link href="/">
                    <a>
                        <Logo width="2em"/>
                    </a>
                </Link>
                <TextIcon placeholder="What are you looking for?" left="30px"/>
            </View>
            <View>
                <Navigation direction={direction} items={items}/>
            </View>
        </Container>
    )
}

export default Header