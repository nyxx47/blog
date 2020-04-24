import React, { Component } from 'react'
import { useDispatch } from 'react-redux'
import { Container, View, Text, Input, Button, Image} from '../../components/atoms'
import Backpress from '../../static/illustrations/backpress.svg'
import "./styles.scss"

const Dashboard = () => {
    return(
        <Container className="login">
            <View position="absolute" top="3%" left="2%">
                    <a href="/">
                        <Image src={Backpress}/>
                    </a>
            </View>
            <View className="login-content" direction="column">
                <View  >
                    <Text size="16" weight="semi-bold">LOGIN</Text>
                </View>
                <View direction="column" margin="30px 0 0 0">
                    <Input placeholder="Email" bottom="20px" width="100%" height="45px"/>
                    <Input type="password" placeholder="Password" width="100%" height="45px"/>
                </View>
                <View flexValue="1" align="flex-end">
                    <Button  variant="primary" height="45px" width="100%">LOGIN</Button>
                </View>
            </View>
        </Container>
    )
}


export default Dashboard