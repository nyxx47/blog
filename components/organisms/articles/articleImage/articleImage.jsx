import React from "react"
import {Container, Wrapper, View, BackgroundImage, Text, Icon} from '../../../atoms'
import { CardImage, CardHero} from '../../../molecules'

const ArticleImage = ({items}) => {

    return (
        <Container isEqualWidth="100%" boxSizing="border-box" padding="100px" className="section" style={{borderBottom: '1px solid #959595'}}>
            <Wrapper>
            <CardHero item={items[0]}/>
                
                {
                    items[1].childs.map( item => (
                        <CardImage key={item.id} item={item}/>
                    ))
                }
            </Wrapper>
        </Container>
    )
}

export default ArticleImage