import React from 'react'
import Head from 'next/head'
import {Header, Footer} from '../../organisms'
import { Container } from '../../atoms'
import '../../../static/css/main.scss'

import Static from '../static.json'
const {direction, items} = Static.menus

const MainLayout = ({children, title, height, line}) => (
    <>
        {/* <Head>
            <title>{title}</title>
        </Head> */}
       
        <Container backgroundColor="#FFFFFF" flexDirection="column" isEqualHeight={height}>
            {children}
        </Container>
        
    </>
)

export default MainLayout