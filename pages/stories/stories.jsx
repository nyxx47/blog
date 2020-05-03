import React, {Component, useEffect, useState} from 'react'
import { BlogLayout } from "../../components/templates/layouts";
import {Hero} from '../../components/organisms'
import ImageHero from '../../assets/illustrations/daily-stories.svg'
import {SliderHero, SliderCategories} from '../../components/organisms'
import Router from 'next/router'
import { Container, View, Text, Rows} from '../../components/atoms'
import { CardStories } from '../../components/molecules'
import './stories.scss'
import Head from 'next/head'
import Knobs from './stories.knobs.json'
import { useDispatch } from 'react-redux';
const {item, populars} = Knobs

import actions from '../../store/modules/stories/actions'
import Link from 'next/link';

const client = require('contentful').createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
})

const Stories = () => {
    const [popular, setPopular] = useState([])
    const [stories, setStories] = useState([])
    const [story, setStory] = useState([])

    const dispatch = useDispatch()



    async function fetchPopulars(){
        const entries = await client.getEntries({
            content_type: 'popularStories'
        })
        if (entries.items) return entries.items
        console.log(`Error getting Entries for ${contentType.name}.`)
    }

    async function fetchStoryCategories(){
        const entries = await client.getEntries({
            content_type: 'stories'
        })
        if (entries.items) return entries.items
        console.log(`Error getting Entries for ${contentType.name}.`)
    }
    
    async function fetchStories(){
        const entries = await client.getEntries({
            content_type: 'story'
        })
        if (entries.items) return entries.items
        console.log(`Error getting Entries for ${contentType.name}.`)
    }
    
    
    useEffect(() => {
        document.body.style.overflow = 'unset';


        async function getPopulars() {
            const allPosts = await fetchPopulars()
            setPopular([...allPosts])
          }

        async function getStoriesCategories(){
            const allCategories = await fetchStoryCategories()
            setStories([...allCategories])
        }

        async function getStories(){
            const allStories = await fetchStories()
            setStory([...allStories])
        }
        
        getStories()
        getStoriesCategories()
        getPopulars()
    },[])


    return (
        <>
        <Head>
            <title>Krisna Ahroid | Stories</title>
        </Head>
        <BlogLayout title="Stories">
            <Hero
                title="Stories Resources"
                subtitle="The more that you read the more things you will know. "
                img={ImageHero}/>

            <SliderHero items={popular}/>

            <SliderCategories items={stories}/>

            <View padding="100px" direction="column" className="stories-post-container">
                <View margin="0 0 50px 0">
                    <Text family="daily" size="32" >Our Stories</Text>
                </View>
                <Rows>
                    {
                        story.map((item, index) => (
                                    <View key={index} className="grid-item-3">
                                        <Link href="/stories/[slug]" as={`/stories/${item.fields.slug}`}>
                                            <a  style={{textDecoration: 'none'}}>
                                                <CardStories title={item.fields.title} label={item.fields.label}  image={item.fields.image.fields.file.url} className="card-our-stories"/>
                                            </a>
                                        </Link>
                                    </View>
                        ))
                    }
                </Rows>
            </View>
        </BlogLayout> 
        </>
        )
        
}

export default Stories;