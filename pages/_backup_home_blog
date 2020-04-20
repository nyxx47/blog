
import Layout from '../components/templates/layouts'
import { Hero } from '../components/organisms'
import { ArticleImage } from '../components/organisms'
import ImageHero from '../assets/illustrations/daily-resources.svg'

import Knobs from './index.knobs.json'
const { sections } = Knobs.data

const App = () => {
    
    return (
        <>
            <Layout title="Daily Resources" line="illustration-outline" >
                <Hero 
                title="Daily Resources" 
                subtitle="The more that you read the more things you will know." 
                img={ImageHero}/>

                {
                    sections.map( section => (
                        <ArticleImage key={section.id} items={section.items}/>
                    ))
                }

            </Layout>
        </>
    )
}

export default App;