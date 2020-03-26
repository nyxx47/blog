import React from 'react'
import Head from 'next/head'
import {Header} from '../../organisms'
import { Container } from '../../atoms'

import Static from '../static.json'
const {direction, items} = Static.menus

const Layout = ({children, title}) => (
    <>
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
       
        <Header direction={direction.horizontal} items={items.default}/>
        <Container backgroundColor="#EDEDED">
            {children}
        </Container>
        
    </>
)

export default Layout