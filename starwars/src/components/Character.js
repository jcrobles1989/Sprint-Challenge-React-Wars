import React from 'react';
import CharacterCard from './CharacterCard';
import { Container, Row} from 'reactstrap';


export default function Character(props) {
    
    const character = props.character;

    if (!character) return <h1>Loading</h1>

    return (
        <Container>
            <Row>
                {character.map((item, index) => {
                    return <CharacterCard character = {item} key = {index} />
                })}
            </Row>
        </Container>
    )
}