import React from 'react'
import {Container, View, Input, Icon, Text} from '../../../atoms'

const people = [
    "Siri",
    "Alexa",
    "Google",
    "Facebook",
    "Twitter",
    "Linkedin",
    "Sinkedin"
  ];

const TextIcon = ({placeholder, left}) => {

        const [searchTerm, setSearchTerm] = React.useState("");
        const [searchResults, setSearchResults] = React.useState([]);

        const handleChange = event => {
            setSearchTerm(event.target.value);
        };

        React.useEffect(() => {
            const results = people.filter(person =>
                person.toLowerCase().includes(searchTerm)
            );
            setSearchResults(results);
        }, [searchTerm]);

    return (
        <Container position="relative" style={{
            left: left
        }}>
            <Icon name="search" position="absolute" left="15px" top="9px" width="1.3em"/>
            <Input 
            className="inputTextIcon"
            placeholder={placeholder} 
            width="300px" 
            padding="5px 30px 5px 45px"
            value={searchTerm}
            onChange={handleChange}/>

            <View className="search-results"  direction="column" isEqualFlex="none">
                <View height="30px" justify="space-between" align="center">
                    <View>
                        <Text weight="medium">Results of <strong>Trigonometry</strong></Text>
                    </View>
                    <View>
                        <View className="rounded-counter" justify="center" align="center">
                            <Text variant="secondary">4</Text>
                        </View>
                    </View>
                </View>
                <View flexValue="1" className="content">
                    <ul>
                        {searchResults.map(item => (
                        <li key={item}>{item}</li>
                        ))}
                    </ul>
                </View>
            </View>
        </Container>
    )
}

export default TextIcon