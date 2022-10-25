import React, {useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './cards.module.scss';


export default function CardTarif(props) {
    const {tarif, toggleSelectTarif} = props
    useEffect(() => {}, [tarif]) 
    return (
        <>
            <div className='col-3 mt-3 mb-3'>
                <Card style={tarif.selected ? {backgroundColor: "red"} : {}}>
                    <Card.Header className={styles.card__name}>{tarif.name}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item className={styles.card__price} onClick={() => toggleSelectTarif(tarif.id)}>руб <span className={styles.price} >{tarif.price} </span> /мес </ListGroup.Item>
                        <ListGroup.Item className={styles.card__speed}> до <span>{tarif.speed}</span> Мбит/сек  </ListGroup.Item>
                        <ListGroup.Item className={styles.card__footer}>Объем включенного трафика не ограничен</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        </>
    );
}
