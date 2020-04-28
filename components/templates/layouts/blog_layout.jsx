import React from 'react'
import Head from 'next/head'
import {Header, Footer} from '../../organisms'
import { Container } from '../../atoms'
import '../../../static/css/main.scss'

import Static from '../static.json'
const {direction, items} = Static.menus

const BlogLayout = ({children, title, height, line}) => (
    <>
        {/* <Head>
            <title>{title}</title>
        </Head> */}
       
        <Header direction={direction.horizontal} items={items.default}/>
        <Container backgroundColor="#EDEDED" className={line} flexDirection="column" isEqualHeight={height}>
            {children}
        </Container>
        <Footer/>
        
    </>
)

export default BlogLayout