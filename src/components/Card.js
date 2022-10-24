import * as React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function CardTarif({ tarif }) {
    return (
        <React.Fragment>
            <div className='col mt-3 mb-3'>
                <Card>
                    <Card.Header>{tarif.name}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>руб<span>{tarif.price}/мес </span></ListGroup.Item>
                        <ListGroup.Item>до<span>{tarif.speed}</span> Мбит/сек  </ListGroup.Item>
                        <ListGroup.Item>Объем включенного трафика не ограничен</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        </React.Fragment>
    );
}
