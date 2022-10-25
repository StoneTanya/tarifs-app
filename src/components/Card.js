import * as React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './cards.module.scss';


export default function CardTarif({tarif}) {
    return (
        <React.Fragment>
            <div className='col-3 mt-3 mb-3'>
                <Card>
                    <Card.Header className={(tarif.id.is300 ? 'card__name_blue' : '')}>{tarif.name}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item className={styles.card__price}>руб <span className={styles.price}>{tarif.price} </span> /мес </ListGroup.Item>
                        <ListGroup.Item className={styles.card__speed}> до <span>{tarif.speed}</span> Мбит/сек  </ListGroup.Item>
                        <ListGroup.Item className={styles.card__footer}>Объем включенного трафика не ограничен</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        </React.Fragment>
    );
}
