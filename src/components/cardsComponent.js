import React, { useState } from 'react';
import tarifsData from "./cardsData";
import CardElement from "./Card";

function CardsBlock() {
    const [tarifs, setSelected] = useState(tarifsData);
    
    const selectTarif = (tarifID) => {           //функция выбора тарифа, запускаемая по клику 
        const selectedTarif = tarifs.map(tarif => {
            if (tarif.id === tarifID) {
            return {...tarif, selected: !tarif.selected}
        }
        return {...tarif, selected: false}
        })
        setSelected(selectedTarif)
    }
    console.log(tarifs);
    return (
        tarifs.map(tarif =>
            <CardElement 
                key={tarif.id}
                tarif={tarif}
                selectTarif={selectTarif}
            />)

    )
}

export default CardsBlock

