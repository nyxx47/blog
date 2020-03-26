import Layout from "../../components/templates/defaults";
import styled from 'styled-components'


const Title = styled.p`
color: red;
font-family: 'Pangram';
`

const About = () => {

    return (
        <>
            <Layout title="About Us">
                <Title>About Us</Title> 
            </Layout>
        </>
    )
}

export default About;