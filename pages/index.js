import Layout from '../components/templates/defaults'
import { Hero } from '../components/organisms'
import ImageHero from '../assets/images/hero.svg'
import Title from '../assets/images/DailyResources.svg'
import '../static/css/main.scss'

const App = () => {
    
    return (
        <>
            <Layout title="Daily Resources">
                <Hero 
                title={Title} 
                subtitle="The more that you read the more things you will know." 
                img={ImageHero}/>
            </Layout>
        </>
    )
}

export default App;