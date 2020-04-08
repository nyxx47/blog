import React from 'react'
import {View, Badge, Text, Icon} from '../../../atoms'

const CardText = ({title, subtitle, variant, color, badgeTitle, icon, tagname, props}) => {

    if(!icon){
        return (
            <View {...props} direction="column" className="grid-item-3">
                <View direction="column" flexValue="1">
                    <View>
                        <Text size="16" weight="semi-bold" margin="0">
                            {title}
                        </Text>
                    </View>
                    <View margin="10px 0 0 0">
                        <Text size="12">
                            {subtitle}
                        </Text>
                    </View>
                </View>
                <Badge 
                title={badgeTitle} 
                backgroundColor={variant}
                color={color}
                marginTop="30px"/>
            </View>
        )
    }

    return (
        <View {...props} direction="column" height="200px !important" className="grid-item-3" >
            <View direction="column"  Width="50%" flexValue="1" justify="space-between" padding="22px" border="1px solid #1E2127" radius="12px">
                <View>
                    <Text size="15" weight="semi-bold" margin="0">
                        {title}
                    </Text>
                </View>
                <View margin="25px 0 0 0">
                    <Icon name={icon}/>
                    <Text weight="medium" margin="0 0 0 10px">{tagname}</Text>
                </View>
            </View>
        </View>
    )

    
}

export default CardText