import React from "react";
import { Container, View, Text } from '../../atoms'
import {Navigation, Social} from '../../molecules'

import knobs from './footer.knobs.json'
const {menu, submenu} = knobs.data

const Footer = ({props}) => {

    return (
        <Container 
        isEqualHeight="80vh"
        justifyContent="center"
        
        backgroundColor="#EDEDED"
        >
            <View direction="column" height="100%" position="relative" justify="center">
                <View >
                    <Navigation items={menu.items.default}/>
                </View>
                <View justify="center">
                    <Social direction="horizontal" justify="center" align="center" items={submenu.items.default}/>
                </View>
                {/* <View justify="center" margin="50px 0 0 0">
                    <Text>&copy; Ahroidlife.com</Text>
                </View> */}
            </View>
        </Container>
    )
}

export default Footer