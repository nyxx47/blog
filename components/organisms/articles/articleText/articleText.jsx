import React from 'react'
import {Rows, Image, View} from '../../../atoms'
import {CardText} from '../../../molecules'


const ArticleText = ({items, image, outline,  props}) => {

    if(image){
        return (
            <Rows {...props}>
                <View align="center" className="grid-item-3">
                    <Image src={image} width="80%"/>
                </View>
                {
                    items.map(item => (
                        <CardText
                            key={item.id}
                            title={item.title}
                            subtitle={item.subtitle}
                            variant={item.badge.background}
                            color={item.badge.color}
                            badgeTitle={item.badge.title}
                        />
                    ))
                }
            </Rows>
        )
    }

    if (outline) {
        return (
            <Rows {...props}>
                {
                    items.map(item => (
                        <CardText
                            key={item.id}
                            title={item.title}
                            icon={item.badge.icon}
                            tagname={item.badge.title}
                        />
                    ))
                }
            </Rows>
        )
    }

    return (
        <Rows {...props}>
            {
                items.map(item => (
                    <CardText
                        key={item.id}
                        title={item.title}
                        subtitle={item.subtitle}
                        variant={item.badge.background}
                        color={item.badge.color}
                        badgeTitle={item.badge.title}
                    />
                ))
            }
        </Rows>
    )
}

export default ArticleText