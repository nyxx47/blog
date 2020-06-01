import { BlogLayout } from "../../components/templates/layouts";
import { Hero } from '../../components/organisms'
import { Text, View} from '../../components/atoms'
import { ArticleText} from '../../components/organisms'
import ImageHero from '../../assets/illustrations/daily-problem.svg'
import IssueFlow from '../../static/illustrations/issue-flow.svg'

import { NextSeo } from 'next-seo';

import Knobs from './issues.knobs.json'
import { useEffect } from "react";
const {items, populars, others} = Knobs.data

const styles = {
    margin: "0 0 50px 0"
}

const Issues = () => {

    useEffect(() => {
        document.body.style.overflow = 'unset';
    })

    return (
        <>
        <NextSeo
            title= 'Krisna Ahroid | Issues'
            description= 'Krisna Ahroid. Issues is my problem which i found in everyday.'
            openGraph={{
                type: 'website',
                locale: 'en_IE',
                url: 'https://www.ahroidlife.com/issues',
                site_name: 'ahroidlife',
                title: 'Krisna Ahroid | Issues',
                description: 'Krisna Ahroid. Issues is my problem which i found in everyday.',
                image: 'https://res.cloudinary.com/ahroidlife/image/upload/v1588948217/daily-problem_wlqgnx.svg',
                
            }}
        />
            <BlogLayout title="Issues" line="illustration-outline">
                <Hero 
                    title="Daily Problems" 
                    subtitle="The more that you read the more things you will know." 
                    img={ImageHero}/> 
                <View direction="column" className="section">
                        <Text size="32" family="daily" margin={styles.margin}>Latest Issues</Text>
                        <ArticleText items={items} image={IssueFlow}/>
                </View>
                <View direction="column" className="section">
                        <Text size="32" family="daily" margin={styles.margin}>Top Issues</Text>
                        <ArticleText items={populars} outline/>
                </View>
                <View direction="column" className="section">
                        <Text size="32" family="daily" margin={styles.margin}>Other Issues</Text>
                        <ArticleText items={others}/>
                </View>
            </BlogLayout>
        </>
    )
}

export default Issues;