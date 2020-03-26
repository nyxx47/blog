import Layout from '../components/templates/defaults'
import { Hero } from '../components/organisms'
import ImageHero from '../assets/images/hero.svg'

const App = () => {
    
    return (
        <>
            <Layout title="Daily Resources">
                <Hero title="Daily Resource" subtitle="The more that you read the more things you will know." img={ImageHero}/>
            </Layout>
        </>
    )
}

export default App;