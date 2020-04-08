import Layout from "../../components/templates/layouts";
import { Hero } from '../../components/organisms'
import { Text, View} from '../../components/atoms'
import { ArticleText} from '../../components/organisms'
import ImageHero from '../../assets/illustrations/daily-problem.svg'
import IssueFlow from '../../static/illustrations/issue-flow.svg'

import Knobs from './issues.knobs.json'
const {items, populars, others} = Knobs.data

const styles = {
    margin: "0 0 50px 0"
}

const Issues = () => {

    return (
        <>
            <Layout title="Issues" line="illustration-outline">
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
            </Layout>
        </>
    )
}

export default Issues;