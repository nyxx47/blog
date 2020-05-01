import React, { useEffect, useState } from 'react'
import { BlogLayout } from "../../components/templates/layouts";
import { Container, View, Text, Image, Badge} from '../../components/atoms'

import './stories.scss'
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { useSelector } from 'react-redux';
import * as Markdown from 'react-markdown'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

const Bold = ({ children }) => <p className="bold">{children}</p>;


const Story = (props) => {
    const router = useRouter()
    const [slug, setSlug] = useState('')
    const story = useSelector(state => state.stories.story.fields)

    const options = {
        renderMark: {
          [MARKS.BOLD]: text => <Text>{text}</Text>,
        },
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => <Text variant="grey">{children}</Text>,
          [BLOCKS.EMBEDDED_ASSET]: node => {
            // console.log(node)
            let { description, title, file } = node.data.target.fields
            console.log(file)
            return <img src={file.url} />
          },
        },
        renderText: text => {
            return text.split('\n').reduce((children, textSegment, index) => {
              return [...children, index > 0 && <br key={index} />, textSegment];
            }, []);
          },
      };
    const content = documentToReactComponents(story.body, options)

    useEffect(() => {
        let param = router.query.slug
        setSlug(param)
        console.log("STATE :: ",story)
    })
    return (
        <BlogLayout>
            <Container className="story-container">
                <View className="story-content" direction="column">
                    <Link href="/stories">
                        <a>
                            <View className="story-close-btn">
                                <Image src="/static/illustrations/close-dark.svg"/>
                            </View>
                        </a>
                    </Link>
                    <View className="story-content-header">
                        <h1 className="title">{story.title}</h1>
                        <Text className="subtitle" family="quicksand">{story.subtitle}</Text>
                        <Image src={`https:${story.heroImage.fields.file.url}`} className="hero-image"/>
                    </View>
                    <View className="story-content-body" direction="column">
                        {/* <Markdown source={content} /> */}
                        {content}
                    </View>
                    <View className="story-content-footer">
                        <View className="tags-wrapper">
                            <Text className="title">Tags</Text>
                            <View className="tags">
                                <Badge 
                                title="Storybook"
                                backgroundColor="#FFEDED"
                                color="#FF5252"/>
                                 <Badge 
                                title="React"
                                backgroundColor="#FFEDED"
                                color="#FF5252"/>
                            </View>
                        </View>
                        <View className="publish-date">
                            <Text className="title">Publish date</Text>
                            <Text className="subtitle">2020-04-28 14:50:00</Text>
                        </View>
                    </View>
                </View>
            </Container>
        </BlogLayout>
    )
}

export default Story