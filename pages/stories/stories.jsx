import React, {Component, useEffect, useState} from 'react'
import ContentLoader from 'react-content-loader'
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

import { NextSeo } from 'next-seo';

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
    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(false)

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
            setLoading2(true)
        }

        async function getStories(){
            const allStories = await fetchStories()
            setStory([...allStories])
            setLoading(true)
        }
        
        getStories()
        getStoriesCategories()
        getPopulars()
    },[])


    return (
        <>
        <NextSeo
            title= 'Krisna Ahroid | Stories'
            description= 'Krisna Ahroid. Stories is my story at day by day. I Write and Talk!'
            openGraph={{
                type: 'website',
                locale: 'en_IE',
                url: 'https://www.ahroidlife.co/stories',
                site_name: 'ahroidlife',
                title: 'Krisna Ahroid | Stories',
                description: 'Krisna Ahroid. An Interaction Designer & Frontend Developer based in Jakarta, Indonesia',
                image: 'https://res.cloudinary.com/ahroidlife/image/upload/v1588948107/daily-stories_xssful.svg',
                
            }}
        />
        <BlogLayout title="Stories">
            <Hero
                title="Stories Resources"
                subtitle="The more that you read the more things you will know. "
                img={ImageHero}/>

            <SliderHero items={popular}/>

            { 
                loading2 ? 
                <SliderCategories items={stories}/>
                :
                <View className="stories-loader">
                    <ContentLoader
                        width={730}
                        height={304}
                        speed={1}
                        primaryColor="#e4e4e4"
                        secondaryColor="#d3d3d3"
                        >
                        <rect x="0" y="49" rx="0" ry="0" width="100" height="20" />
                        <rect x="0" y="97" rx="0" ry="0" width="100%" height="100" />
                    </ContentLoader>
                </View>
            }
            

            <View padding="100px" direction="column" className="stories-post-container">
                <View margin="0 0 50px 0">
                    <Text family="daily" size="32" >Our Stories</Text>
                </View>
                <Rows>
                    {
                        loading ? 
                        story.map((item, index) => (
                                    <View key={index} className="grid-item-3">
                                        <Link href="/stories/[slug]" as={`/stories/${item.fields.slug}`}>
                                            <a  style={{textDecoration: 'none'}}>
                                                <CardStories title={item.fields.title} label={item.fields.label}  image={item.fields.image.fields.file.url} className="card-our-stories"/>
                                            </a>
                                        </Link>
                                    </View>
                        )) :
                        <ContentLoader
                            viewBox="0 0 500 280"
                            height={280}
                            speed={3}
                        >
                            <rect x="3" y="3" rx="10" ry="10" width="100%" height="180" />
                            <rect x="6" y="190" rx="0" ry="0" width="292" height="20" />
                            <rect x="4" y="215" rx="0" ry="0" width="239" height="20" />
                            <rect x="4" y="242" rx="0" ry="0" width="274" height="20" />
                        </ContentLoader>
                    }
                </Rows>
                
            </View>
        </BlogLayout> 
        </>
        )
        
}

export default Stories;