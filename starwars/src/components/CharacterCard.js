import React from 'react';
import { Col, Card, CardImg, CardBody, CardHeader, CardText } from 'reactstrap';

const CharacterCard = function(props) {

    return (
        <Col xs='12' sm='6' md='4' xl='3'>
            <Card className = 'card-container'>
                <CardImg src={props.character.image}/>
                <CardBody>
                    <CardHeader className = 'card-title'>{props.character.name}</CardHeader>
                    <CardText>URL: <a className = 'link' href={props.character.url}>{props.character.url}</a></CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default CharacterCard;