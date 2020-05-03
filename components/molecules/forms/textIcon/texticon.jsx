import React, { useEffect, useRef } from 'react'
import {Container, View, Input, Icon, Text} from '../../../atoms'
import './styles.scss'
import Link from 'next/link';

const client = require('contentful').createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
})

const TextIcon = ({placeholder, left, props}) => {

        const [searchTerm, setSearchTerm] = React.useState("");
        const [searchResults, setSearchResults] = React.useState([]);
        const [active, setActive] = React.useState(false)
        const refInput = useRef()
        const refResults = useRef()

        const handleChange = event => {
            setSearchTerm(event.target.value);
        };

        async function searching(title){
            const entries = await client.getEntries({
                content_type: 'story',
                'fields.title[match]': title
              })
            if (entries.items) return entries.items
        }

        useEffect(() => {
            async function getResults(){
                const results = await searching(searchTerm)
                setSearchResults([...results])
            }

            const handleFocus = () => {
                setActive(true)
            }
            const { current } = refInput;

            current.addEventListener('focus', handleFocus)

            function handleClickOutside(event) {
                if (refResults.current && !refResults.current.contains(event.target)) {
                    setActive(false)
                }
              }
          
            document.addEventListener("mousedown", handleClickOutside);
            
            if(searchTerm.length > 1){
                getResults()
            }else{
                setSearchResults([])
            }

        }, [searchTerm]);

    return (
        <Container className="header-input-search" position="relative" style={{
            left: left
        }}>
            <Icon name="search" position="absolute" left="15px" top="9px" width="1.3em"/>
            <Input 
            className="inputTextIcon"
            placeholder={placeholder} 
            width="300px" 
            padding="5px 30px 5px 45px"
            value={searchTerm}
            innerRef={refInput}
            onChange={handleChange}/>

            <View className={`search-results ${active ? 'isActiveInput' : ''}`}  direction="column" isEqualFlex="none">
                <View height="30px" justify="space-between" align="center">
                    <View>
                        <Text weight="medium">Results of <strong>{searchTerm}</strong></Text>
                    </View>
                    <View>
                        <View className="rounded-counter" justify="center" align="center">
                            <Text variant="secondary">{searchResults.length}</Text>
                        </View>
                    </View>
                </View>
                <View flexValue="1" className="content" innerRef={refResults}>
                    <ul>
                        {searchResults.map((item, index) => (
                            <Link key={index} href="/stories/[slug]" as={`/stories/${item.fields.slug}`}>
                                <a  style={{textDecoration: 'none'}}>
                                    <li >{item.fields.title}</li>
                                </a>
                            </Link>
                        ))}
                    </ul>
                </View>
            </View>
        </Container>
    )
}

export default TextIcon