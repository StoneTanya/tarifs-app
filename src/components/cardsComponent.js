import React, {useState} from 'react';
import tarifsData from "./cardsData";
import CardElement from "./Card";

function CardsBlock() {
    const [tarif, setTarif] = useState(tarifsData);
    const toggleSelectTarif = (tarifID) => {
        const changedTarifs = tarifsData.map(tarif => {
            if (tarif.id === tarifID) {
                return {...tarif, selected: !tarif.selected}
            }
            return tarif
        })
        setTarif(changedTarifs)
    }


    return (
    tarifsData.map(tarif => 
    <CardElement
    key={tarif.id} 
    tarif={tarif}
    toggleSelectTarif={toggleSelectTarif}
/>)
        
    )
}

export default CardsBlock

