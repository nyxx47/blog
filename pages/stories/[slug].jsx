import React, { useEffect, useState } from 'react'
import { BlogLayout } from "../../components/templates/layouts";
import { Container, View, Text, Image} from '../../components/atoms'

import './stories.scss'
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

const Story = (props) => {
    const router = useRouter()
    const [slug, setSlug] = useState('')

    useEffect(() => {
        let param = router.query.slug
        setSlug(param)
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
                        <Text className="title" family="quicksand">Atomic Design with Storybook and React 1.0 {slug}</Text>
                        <Text className="subtitle" family="quicksand">Di bagian ini, Kita akan membangun komponen Frontend dan Menggunakan Storybook untuk membuat Component yang siap di gunakan.</Text>
                        <Image src="https://images.ctfassets.net/fz8qdsqhkxef/52RBHaafeXHGdVhPb30G5V/8441ba2d45caefc417585bf44c685b4b/Atomic_design.png"/>
                    </View>
                    <View className="story-content-body">
                        <Text>
                            {JSON.stringify(props)}
                        </Text>
                    </View>
                </View>
            </Container>
        </BlogLayout>
    )
}

export default Story