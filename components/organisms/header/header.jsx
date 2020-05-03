import React, { useState } from 'react'

import { Container, View, Logo, Icon} from '../../atoms'
import { Navigation, TextIcon } from '../../molecules'
import Link from 'next/link'
import './styles.scss'



const Header = ({direction, items}) => {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
        console.log("IS OPEN :: ",open)
    }




    return (
        <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        boxSizing="border-box"
        padding="5px 50px 5px 30px" 
        backgroundColor="#ffffff"
        position="fixed"
        zIndex="9999"
        isEqualWidth="100%"
        boxShadow="0px 3px 6px rgba(137, 137, 137, 0.16)"
        className="header-container"
        >
            <View className="header-brand">
                <Link href="/">
                    <a>
                        <Logo width="2em"/>
                    </a>
                </Link>
                <TextIcon  placeholder="What are you looking for?" left="30px"/>
            </View>
            <View className="search-on-mobile">
                <Icon name="search" left="15px" top="9px" width="1.3em"/>
            </View>
            <View className="menu-container">
                <Navigation className="menu" direction={direction} items={items}/>
                <View className="menu-mobile" >
                    <input type="checkbox" onClick={toggle}/>
                    <span></span>
                    <span></span>
                </View>

                <View className={`menu-content-on-mobile  ${open ? 'isActive-menu-on-mobile' : ''}`}>
                    <Navigation className="menu" direction={direction} items={items}/>
                </View>
            </View>
           
        </Container>
    )
}

export default Header