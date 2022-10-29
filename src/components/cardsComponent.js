import React, { useState } from 'react';
import tarifsData from "./cardsData";
import CardElement from "./Card";

function CardsBlock() {
    const [tarifs, setSelected] = useState(tarifsData);
    
    const selectTarif = (id) => {           //функция выбора тарифа, запускаемая по клику 
        const selectedTarif = tarifs.map(tarif => {
            if (tarif.id === id) {
            return {...tarif, selected: true}
        }
        return tarif
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

