import React from 'react'
import Head from 'next/head'
import {Header} from '../../organisms'

import Static from '../static.json'
const {direction, items} = Static.menus

const Layout = ({children, title}) => (
    <>
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <style jsx>{`
            *{
                margin: 0;
                padding:0;
            }

            body{
                margin:0;
            }
        `}</style>
        <Header direction={direction.horizontal} items={items.default}/>
        {children}
    </>
)

export default Layout