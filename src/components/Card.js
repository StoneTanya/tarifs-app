import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './cards.module.scss';


const style = {
    tarifSelected: {
        backgroundColor: "rgba(238, 130, 238, 0.5)",
        boxShadow: "0 0 10px #EE82EE",
        color: "#111",
    }
}

export default function CardTarif(props) {
    const {tarif, selectTarif} = props

    return (
        <>
            <div className='col-3 mt-3 mb-3'>
                <Card style={tarif.selected ? style.tarifSelected : {}}>
                    <Card.Header className={styles.card__name}>{tarif.name}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item className={styles.card__price} onClick={() => selectTarif(tarif.id)}>руб <span className={styles.price} >{tarif.price} </span> /мес </ListGroup.Item>
                        <ListGroup.Item className={styles.card__speed}> до <span>{tarif.speed}</span> Мбит/сек  </ListGroup.Item>
                        <ListGroup.Item className={styles.card__footer}>Объем включенного трафика не ограничен</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        </>
    );
}
